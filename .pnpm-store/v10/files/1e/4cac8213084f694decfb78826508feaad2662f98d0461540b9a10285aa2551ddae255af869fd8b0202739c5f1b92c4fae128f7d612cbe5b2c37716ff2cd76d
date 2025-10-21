// Utility to parse height from an HTML string, limited: `box-sizing: border-box`
export const parseHeightFromHTML = (html: string): number => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, 'text/html');
  const el = doc.body.firstElementChild;
  console.log(el?.getClientRects(), 11);

  if (!el) return 0;

  const style = el.getAttribute('style') || '';
  const rules = Object.fromEntries(
    style
      .split(';')
      .map((r) => r.trim())
      .filter((r) => r.includes(':'))
      .map((r) => {
        const [key, value] = r.split(':').map((s) => s.trim());
        return [key.toLowerCase(), value];
      })
  );

  const parsePx = (v: string): number => {
    if (!v) return 0;
    const match = v.match(/([\d.]+)px/);
    return match ? parseFloat(match[1]) : 0;
  };

  if (rules.height) {
    return parsePx(rules.height);
  }

  const fontSize = parsePx(rules['font-size']) || 16;

  // line-height
  const lineHeight = rules['line-height'];
  let baseHeight;
  if (!lineHeight || lineHeight === 'normal') {
    baseHeight = 1.2 * fontSize; // 默认 normal ≈ 1.2
  } else if (lineHeight.endsWith('px')) {
    baseHeight = parsePx(lineHeight);
  } else if (/^[\d.]+$/.test(lineHeight)) {
    baseHeight = parseFloat(lineHeight) * fontSize;
  } else {
    baseHeight = fontSize; // fallback
  }

  let paddingTop = parsePx(rules['padding-top']);
  let paddingBottom = parsePx(rules['padding-bottom']);

  if (rules.padding) {
    const parts = rules.padding.split(/\s+/).map(parsePx);
    if (parts.length === 1) {
      paddingTop = parts[0];
      paddingBottom = parts[0];
    } else if (parts.length === 2) {
      paddingTop = parts[0];
      paddingBottom = parts[0];
    } else if (parts.length === 3) {
      paddingTop = parts[0];
      paddingBottom = parts[2];
    } else if (parts.length === 4) {
      paddingTop = parts[0];
      paddingBottom = parts[2];
    }
  }

  let borderTop = parsePx(rules['border-top-width']);
  let borderBottom = parsePx(rules['border-bottom-width']);
  if (rules.border) {
    const match = rules.border.match(/([\d.]+)px/);
    if (match) {
      borderTop = parseFloat(match[1]);
      borderBottom = parseFloat(match[1]);
    }
  }
  if (rules['border-width']) {
    const parts = rules['border-width'].split(/\s+/).map(parsePx);
    if (parts.length === 1) {
      borderTop = parts[0];
      borderBottom = parts[0];
    } else if (parts.length === 2) {
      borderTop = parts[0];
      borderBottom = parts[0];
    } else if (parts.length === 3) {
      borderTop = parts[0];
      borderBottom = parts[2];
    } else if (parts.length === 4) {
      borderTop = parts[0];
      borderBottom = parts[2];
    }
  }

  return baseHeight + paddingTop + paddingBottom + borderTop + borderBottom;
};
