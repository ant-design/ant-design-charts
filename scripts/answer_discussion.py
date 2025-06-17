# scripts/answer_discussion.py
import os
import sys
import openai
from github import Github


def answer_question(question):
    openai.api_key = os.environ["GH_TOKEN"]

    # 构建提示词，包含组件库上下文信息
    prompt = f"""
    你是一个精通 Ant Design Charts 组件库的专家。请回答以下问题：
    {question}

    回答要求：
    - 提供代码示例（如果适用）
    - 引用官方文档（如果有相关内容）
    - 保持简洁明了
    - 对复杂概念提供类比或解释
    """

    try:
        response = openai.chat.completions.create(
            model="gpt-4.1",
            messages=[{"role": "user", "content": prompt}],
            temperature=0.1,
            max_tokens=5000
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        print(f"Error generating answer: {e}")
        return "抱歉，回答生成失败。请尝试重新提问或联系维护者。"


def get_discussion(gh, repo_name, discussion_id):
    repo = gh.get_repo(repo_name)
    return repo.get_discussion(int(discussion_id))


def post_answer(discussion, answer):
    footer = "\n\n---\n此回答由AI自动生成，仅供参考。如有疑问，请等待维护者回复。"
    discussion.create_reply(answer + footer)


def main():
    if len(sys.argv) != 2:
        print("Usage: python answer_discussion.py <discussion_id>")
        sys.exit(1)

    discussion_id = sys.argv[1]
    repo_name = os.environ["GITHUB_REPOSITORY"]  # GitHub自动设置的环境变量
    gh_token = os.environ["GH_TOKEN"]
    if not gh_token:
        print("Please set the GH_TOKEN environment variable")
        sys.exit(1)
    gh = Github(gh_token)

    try:
        discussion = get_discussion(gh, repo_name, discussion_id)
        question = discussion.body

        answer = answer_question(question)

        post_answer(discussion, answer)
        print(f"成功回复讨论 #{discussion_id}")
    except Exception as e:
        print(f"处理讨论时出错: {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
