/**
 * @fileoverview
 * 提取 chart.options 的参数对象，提取 encode 字段并转换为新的字段格式。
 * @usage
 * 通过 `node scripts/ast3.0/core/options.js <path-to-md-file>` 命令运行。
 */
const recast = require('recast');
const parser = require('@babel/parser');
const b = recast.types.builders;
const chalk = require('chalk');
const { template } = require('./template.js');

const babelParser = {
  parse(source) {
    return parser.parse(source, {
      sourceType: 'module',
      plugins: ['jsx', 'typescript'],
      allowReturnOutsideFunction: true,
      errorRecovery: true,
    });
  },
};

// 判断是否以表达式开头（如 `({ ... })`）
function needsWrapping(code) {
  const trimmed = code.trim();
  return (
    trimmed.startsWith('({') || // object expression
    trimmed.startsWith('{') || // maybe block?
    /^[([]/.test(trimmed) // starts with ( or [
  );
}

// 提取并转换 chart.options 的参数对象
function extractAndTransformOptions(code) {
  try {
    const wrapped = needsWrapping(code) ? `(${code})` : code;
    const ast = recast.parse(wrapped, { parser: babelParser });
    let found = false;
    const staticDecls = [];
    const objects = [];

    recast.types.visit(ast, {
      visitImportDeclaration() {
        // 忽略 import
        return false;
      },
      visitNewExpression(path) {
        // 忽略 new Chart(...) 等表达式
        if (path.node.callee?.name === 'Chart') {
          return false;
        }
        this.traverse(path);
      },
      visitVariableDeclaration(path) {
        const declNode = path.node;

        const isStatic = declNode.declarations.every((decl) => {
          const init = decl.init;
          if (!init) return false;

          return (
            init.type === 'ObjectExpression' ||
            init.type === 'ArrayExpression' ||
            init.type === 'ArrowFunctionExpression' ||
            (init.type === 'CallExpression' && init.callee.type === 'Identifier') // 非链式、非复杂表达式
          );
        });

        if (isStatic) {
          staticDecls.push(declNode);
        }

        this.traverse(path);
      },

      visitCallExpression(path) {
        const { node } = path;
        if (
          node.callee?.type === 'MemberExpression' &&
          node.callee.object?.name === 'chart' &&
          node.callee.property?.name === 'options' &&
          node.arguments.length === 1 &&
          node.arguments[0].type === 'ObjectExpression'
        ) {
          found = true;

          const newProps = [];

          for (const prop of node.arguments[0].properties) {
            if (
              prop.type === 'ObjectProperty' &&
              prop.key.name === 'encode' &&
              prop.value.type === 'ObjectExpression'
            ) {
              prop.value.properties.forEach((encProp) => {
                if (encProp.type === 'ObjectProperty') {
                  const newProp = b.objectProperty(b.identifier(encProp.key.name + 'Field'), encProp.value);
                  if (encProp.comments) {
                    newProp.comments = encProp.comments;
                  }
                  newProps.push(newProp);
                }
              });
              // encode 自身的注释也附加到最后一个字段上
              if (prop.comments && newProps.length > 0) {
                const last = newProps[newProps.length - 1];
                last.comments = [...(last.comments || []), ...prop.comments];
              }
            } else {
              newProps.push(prop);
            }
          }

          // 构建新的对象
          objects.push(b.objectExpression(newProps.filter((p) => p.key?.name !== 'encode')));
          return false;
        }
        this.traverse(path);
      },
    });

    if (!found) return null;
    // 获取最长的对象
    const finalObject = objects.reduce((longest, current) => {
      return current.properties.length > longest.properties.length ? current : longest;
    }, objects[0]);
    const staticCode = staticDecls.map((node) => recast.print(node).code).join('\n');
    const optionsCode = recast.print(finalObject).code;
    return [optionsCode.replace(/\n{1,}/g, '\n'), staticCode];
  } catch (error) {
    console.log(chalk.red('⛔️ electric:extract-and-rewrite'), error);
    return null;
  }
}

// 主处理函数
function processOptions(lines) {
  let output = '';
  let inCodeBlock = false;
  let codeBuffer = [];
  let codeSign = '';
  let render = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // 进入代码块
    if (!inCodeBlock && /^```[ts|js|javascript]/.test(line.trim())) {
      inCodeBlock = true;
      render = line.includes('autoMount');
      codeBuffer = [];
      codeSign = render ? line : `\`\`\`js`;
      continue;
    }

    // 离开代码块
    if (inCodeBlock && line.trim() === '```') {
      // 如果 codeBuffer[0] === `(() => {` 并且 codeBuffer[codeBuffer.length - 1] === `})()`，则移除这两行
      if (codeBuffer[0].includes('(() => {') && codeBuffer[codeBuffer.length - 1].includes('})()')) {
        codeBuffer = codeBuffer.slice(1, -1);
      }
      const code = codeBuffer.join('\n');
      const [optionsCode, staticCode] = extractAndTransformOptions(code);
      const newLine = staticCode && optionsCode ? '\n' : '';
      if (optionsCode) {
        render = render || (optionsCode.includes('data') && optionsCode.includes('xField'));
        output += `${codeSign}\n${
          render ? template(optionsCode, staticCode) : staticCode + newLine + optionsCode
        }\n\`\`\``;
      } else {
        // fallback，保留原始代码块
        output += `${codeSign}\n${code}\n\`\`\``;
      }

      inCodeBlock = false;
      render = false;
      continue;
    }

    // 累积代码内容
    if (inCodeBlock) {
      codeBuffer.push(line);
    } else {
      // 非代码块内容直接输出
      output += line + '\n';
    }
  }

  return output;
}

const filePath = process.argv[2];

if (filePath) {
  const fs = require('fs');
  const raw = fs.readFileSync(filePath, 'utf-8');
  const output = processOptions(raw.split('\n'));
  fs.writeFileSync('temp.md', output, 'utf-8');
  console.log('✅ 已生成 temp.md');
}

module.exports = { processOptions };
