const indent = ' '.repeat(2);
const indentData = ' '.repeat(4);

/**
 * @this {Matrix}
 * @returns {string}
 */
export function inspectMatrix() {
  return inspectMatrixWithOptions(this);
}

export function inspectMatrixWithOptions(matrix, options = {}) {
  const {
    maxRows = 15,
    maxColumns = 10,
    maxNumSize = 8,
    padMinus = 'auto',
  } = options;
  return `${matrix.constructor.name} {
${indent}[
${indentData}${inspectData(matrix, maxRows, maxColumns, maxNumSize, padMinus)}
${indent}]
${indent}rows: ${matrix.rows}
${indent}columns: ${matrix.columns}
}`;
}

function inspectData(matrix, maxRows, maxColumns, maxNumSize, padMinus) {
  const { rows, columns } = matrix;
  const maxI = Math.min(rows, maxRows);
  const maxJ = Math.min(columns, maxColumns);
  const result = [];

  if (padMinus === 'auto') {
    padMinus = false;
    loop: for (let i = 0; i < maxI; i++) {
      for (let j = 0; j < maxJ; j++) {
        if (matrix.get(i, j) < 0) {
          padMinus = true;
          break loop;
        }
      }
    }
  }

  for (let i = 0; i < maxI; i++) {
    let line = [];
    for (let j = 0; j < maxJ; j++) {
      line.push(formatNumber(matrix.get(i, j), maxNumSize, padMinus));
    }
    result.push(`${line.join(' ')}`);
  }
  if (maxJ !== columns) {
    result[result.length - 1] += ` ... ${columns - maxColumns} more columns`;
  }
  if (maxI !== rows) {
    result.push(`... ${rows - maxRows} more rows`);
  }
  return result.join(`\n${indentData}`);
}

function formatNumber(num, maxNumSize, padMinus) {
  return (
    num >= 0 && padMinus
      ? ` ${formatNumber2(num, maxNumSize - 1)}`
      : formatNumber2(num, maxNumSize)
  ).padEnd(maxNumSize);
}

function formatNumber2(num, len) {
  // small.length numbers should be as is
  let str = num.toString();
  if (str.length <= len) return str;

  // (7)'0.00123' is better then (7)'1.23e-2'
  // (8)'0.000123' is worse then (7)'1.23e-3',
  let fix = num.toFixed(len);
  if (fix.length > len) {
    fix = num.toFixed(Math.max(0, len - (fix.length - len)));
  }
  if (
    fix.length <= len &&
    !fix.startsWith('0.000') &&
    !fix.startsWith('-0.000')
  ) {
    return fix;
  }

  // well, if it's still too long the user should've used longer numbers
  let exp = num.toExponential(len);
  if (exp.length > len) {
    exp = num.toExponential(Math.max(0, len - (exp.length - len)));
  }
  return exp.slice(0);
}
