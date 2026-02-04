"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTEXTMENU_CSS = void 0;
exports.getContentFromItems = getContentFromItems;
/**
 * Get the content of the right-click menu.
 * @param items - context menu items
 * @returns HTML string
 */
function getContentFromItems(items) {
    return `
    <ul class="g6-contextmenu-ul">
      ${items.map((item) => `<li  class="g6-contextmenu-li" value="${item.value}">${item.name}</li>`).join('')}
    </ul>
  `;
}
/**
 * Style of the right-click menu, same with `tooltip`.
 */
exports.CONTEXTMENU_CSS = `
  .g6-contextmenu {
    font-size: 12px;
    background-color: rgba(255, 255, 255, 0.96);
    border-radius: 4px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 6px 12px 0px;
    transition: visibility 0.2s cubic-bezier(0.23, 1, 0.32, 1) 0s, left 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s, top 0.4s cubic-bezier(0.23, 1, 0.32, 1) 0s;
  }

  .g6-contextmenu-ul {
    max-width: 256px;
    min-width: 96px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .g6-contextmenu-li {
    padding: 8px 12px;
    cursor: pointer;
    user-select: none;
  }

  .g6-contextmenu-li:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }
`;
//# sourceMappingURL=util.js.map