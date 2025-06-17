# scripts/answer_discussion.py
import os
import sys
import requests
from azure.ai.inference import ChatCompletionsClient
from azure.ai.inference.models import SystemMessage, UserMessage
from azure.core.credentials import AzureKeyCredential


def answer_question(question):
    endpoint = "https://models.github.ai/inference"
    model = "openai/gpt-4.1"
    token = os.environ["GH_TOKEN"]

    prompt = """
    你是 Ant Design Charts 的官方智能答疑助手，已全面掌握组件库 v2.4.0 文档（包括API、使用示例、常见问题等）。你的职责是：
    1. 基于文档内容，为用户提供准确的组件使用答疑。
    2. 回答需结构清晰（使用标题、列表、代码块），关键信息加粗，复杂步骤分点说明。
    3. 针对组件用法问题，必须提供文档中的标准代码示例，并标注参数含义。
    4. 若问题超出文档范围（如定制化需求），需说明“文档暂未涉及此内容”，并引导查阅相关章节。
    5. 若用户问题模糊，主动追问具体场景（如“请问你需要使用哪个组件？”）。
    6. 对于常见问题（如“如何使用折线图？”），提供简洁明了的回答，并附上相关文档链接。
    7. 对于复杂概念，提供类比或解释，确保用户易于理解。
    8. 回答需符合以下格式：
      - **标题**：简洁明了，概括问题核心；
      - **列表**：使用有序或无序列表，清晰展示步骤或要点；
      - **代码块**：使用 Markdown 代码块格式，标注语言（如 `javascript`、`typescript`）；
      - **链接**：提供相关文档链接，方便用户深入了解；
    """

    try:
        client = ChatCompletionsClient(
            endpoint=endpoint,
            credential=AzureKeyCredential(token),
        )

        response = client.complete(
            messages=[
                SystemMessage(prompt),
                UserMessage(question),
            ],
            temperature=1.0,
            top_p=1.0,
            model=model
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        print(f"Error generating answer: {e}")
        return "抱歉，回答生成失败。请尝试重新提问或联系维护者。"


def get_discussion(repo_name, discussion_number, gh_token):
    owner, repo = repo_name.split("/")
    query = """
    query($owner: String!, $repo: String!, $number: Int!) {
      repository(owner: $owner, name: $repo) {
        discussion(number: $number) {
          id
          title
          body
        }
      }
    }
    """
    variables = {
        "owner": owner,
        "repo": repo,
        "number": int(discussion_number)
    }
    headers = {
        "Authorization": f"Bearer {gh_token}",
        "Accept": "application/vnd.github+json"
    }
    response = requests.post(
        "https://api.github.com/graphql",
        json={"query": query, "variables": variables},
        headers=headers
    )
    data = response.json()
    if "errors" in data:
        raise Exception(data["errors"])
    return data["data"]["repository"]["discussion"]


def post_answer(discussion_id, answer, gh_token):
    footer = "\n\n---\n此回答由AI自动生成，仅供参考。如有疑问，请等待维护者回复。"
    mutation = """
    mutation($discussionId: ID!, $body: String!) {
      addDiscussionComment(input: {discussionId: $discussionId, body: $body}) {
        comment {
          id
        }
      }
    }
    """
    variables = {
        "discussionId": discussion_id,
        "body": answer + footer
    }
    headers = {
        "Authorization": f"Bearer {gh_token}",
        "Accept": "application/vnd.github+json"
    }
    response = requests.post(
        "https://api.github.com/graphql",
        json={"query": mutation, "variables": variables},
        headers=headers
    )
    data = response.json()
    if "errors" in data:
        raise Exception(data["errors"])


def main():
    # 从环境变量获取参数（用于本地调试）
    if os.getenv("DISCUSSION_ID"):
        discussion_id = os.getenv("DISCUSSION_ID")
    # 从命令行参数获取（用于GitHub Actions）
    elif len(sys.argv) != 2:
        print("Usage: python answer_discussion.py <discussion_id>")
        sys.exit(1)
    else:
        discussion_id = sys.argv[1]
    repo_name = os.environ["GITHUB_REPOSITORY"]  # GitHub自动设置的环境变量
    gh_token = os.environ["GH_TOKEN"]
    if not gh_token:
        print("Please set the GH_TOKEN environment variable")
        sys.exit(1)

    try:
        discussion = get_discussion(repo_name, discussion_id, gh_token)
        question = discussion["body"]

        answer = answer_question(question)

        post_answer(discussion["id"], answer, gh_token)
        print(f"成功回复讨论 #{discussion_id}")
    except Exception as e:
        print(f"处理讨论时出错: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
