"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@floating-ui+utils@0.2.7";
exports.ids = ["vendor-chunks/@floating-ui+utils@0.2.7"];
exports.modules = {

/***/ "(ssr)/./node_modules/.pnpm/@floating-ui+utils@0.2.7/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@floating-ui+utils@0.2.7/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getComputedStyle: () => (/* binding */ getComputedStyle),\n/* harmony export */   getContainingBlock: () => (/* binding */ getContainingBlock),\n/* harmony export */   getDocumentElement: () => (/* binding */ getDocumentElement),\n/* harmony export */   getFrameElement: () => (/* binding */ getFrameElement),\n/* harmony export */   getNearestOverflowAncestor: () => (/* binding */ getNearestOverflowAncestor),\n/* harmony export */   getNodeName: () => (/* binding */ getNodeName),\n/* harmony export */   getNodeScroll: () => (/* binding */ getNodeScroll),\n/* harmony export */   getOverflowAncestors: () => (/* binding */ getOverflowAncestors),\n/* harmony export */   getParentNode: () => (/* binding */ getParentNode),\n/* harmony export */   getWindow: () => (/* binding */ getWindow),\n/* harmony export */   isContainingBlock: () => (/* binding */ isContainingBlock),\n/* harmony export */   isElement: () => (/* binding */ isElement),\n/* harmony export */   isHTMLElement: () => (/* binding */ isHTMLElement),\n/* harmony export */   isLastTraversableNode: () => (/* binding */ isLastTraversableNode),\n/* harmony export */   isNode: () => (/* binding */ isNode),\n/* harmony export */   isOverflowElement: () => (/* binding */ isOverflowElement),\n/* harmony export */   isShadowRoot: () => (/* binding */ isShadowRoot),\n/* harmony export */   isTableElement: () => (/* binding */ isTableElement),\n/* harmony export */   isTopLayer: () => (/* binding */ isTopLayer),\n/* harmony export */   isWebKit: () => (/* binding */ isWebKit)\n/* harmony export */ });\nfunction getNodeName(node) {\n  if (isNode(node)) {\n    return (node.nodeName || '').toLowerCase();\n  }\n  // Mocked nodes in testing environments may not be instances of Node. By\n  // returning `#document` an infinite loop won't occur.\n  // https://github.com/floating-ui/floating-ui/issues/2317\n  return '#document';\n}\nfunction getWindow(node) {\n  var _node$ownerDocument;\n  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;\n}\nfunction getDocumentElement(node) {\n  var _ref;\n  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;\n}\nfunction isNode(value) {\n  return value instanceof Node || value instanceof getWindow(value).Node;\n}\nfunction isElement(value) {\n  return value instanceof Element || value instanceof getWindow(value).Element;\n}\nfunction isHTMLElement(value) {\n  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;\n}\nfunction isShadowRoot(value) {\n  // Browsers without `ShadowRoot` support.\n  if (typeof ShadowRoot === 'undefined') {\n    return false;\n  }\n  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;\n}\nfunction isOverflowElement(element) {\n  const {\n    overflow,\n    overflowX,\n    overflowY,\n    display\n  } = getComputedStyle(element);\n  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);\n}\nfunction isTableElement(element) {\n  return ['table', 'td', 'th'].includes(getNodeName(element));\n}\nfunction isTopLayer(element) {\n  return [':popover-open', ':modal'].some(selector => {\n    try {\n      return element.matches(selector);\n    } catch (e) {\n      return false;\n    }\n  });\n}\nfunction isContainingBlock(elementOrCss) {\n  const webkit = isWebKit();\n  const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;\n\n  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block\n  return css.transform !== 'none' || css.perspective !== 'none' || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));\n}\nfunction getContainingBlock(element) {\n  let currentNode = getParentNode(element);\n  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {\n    if (isContainingBlock(currentNode)) {\n      return currentNode;\n    } else if (isTopLayer(currentNode)) {\n      return null;\n    }\n    currentNode = getParentNode(currentNode);\n  }\n  return null;\n}\nfunction isWebKit() {\n  if (typeof CSS === 'undefined' || !CSS.supports) return false;\n  return CSS.supports('-webkit-backdrop-filter', 'none');\n}\nfunction isLastTraversableNode(node) {\n  return ['html', 'body', '#document'].includes(getNodeName(node));\n}\nfunction getComputedStyle(element) {\n  return getWindow(element).getComputedStyle(element);\n}\nfunction getNodeScroll(element) {\n  if (isElement(element)) {\n    return {\n      scrollLeft: element.scrollLeft,\n      scrollTop: element.scrollTop\n    };\n  }\n  return {\n    scrollLeft: element.scrollX,\n    scrollTop: element.scrollY\n  };\n}\nfunction getParentNode(node) {\n  if (getNodeName(node) === 'html') {\n    return node;\n  }\n  const result =\n  // Step into the shadow DOM of the parent of a slotted node.\n  node.assignedSlot ||\n  // DOM Element detected.\n  node.parentNode ||\n  // ShadowRoot detected.\n  isShadowRoot(node) && node.host ||\n  // Fallback.\n  getDocumentElement(node);\n  return isShadowRoot(result) ? result.host : result;\n}\nfunction getNearestOverflowAncestor(node) {\n  const parentNode = getParentNode(node);\n  if (isLastTraversableNode(parentNode)) {\n    return node.ownerDocument ? node.ownerDocument.body : node.body;\n  }\n  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {\n    return parentNode;\n  }\n  return getNearestOverflowAncestor(parentNode);\n}\nfunction getOverflowAncestors(node, list, traverseIframes) {\n  var _node$ownerDocument2;\n  if (list === void 0) {\n    list = [];\n  }\n  if (traverseIframes === void 0) {\n    traverseIframes = true;\n  }\n  const scrollableAncestor = getNearestOverflowAncestor(node);\n  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);\n  const win = getWindow(scrollableAncestor);\n  if (isBody) {\n    const frameElement = getFrameElement(win);\n    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);\n  }\n  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));\n}\nfunction getFrameElement(win) {\n  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGZsb2F0aW5nLXVpK3V0aWxzQDAuMi43L25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvdXRpbHMvZGlzdC9mbG9hdGluZy11aS51dGlscy5kb20ubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWdWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGEtMC4wLjEvLi9ub2RlX21vZHVsZXMvLnBucG0vQGZsb2F0aW5nLXVpK3V0aWxzQDAuMi43L25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvdXRpbHMvZGlzdC9mbG9hdGluZy11aS51dGlscy5kb20ubWpzPzkxOGYiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0Tm9kZU5hbWUobm9kZSkge1xuICBpZiAoaXNOb2RlKG5vZGUpKSB7XG4gICAgcmV0dXJuIChub2RlLm5vZGVOYW1lIHx8ICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIC8vIE1vY2tlZCBub2RlcyBpbiB0ZXN0aW5nIGVudmlyb25tZW50cyBtYXkgbm90IGJlIGluc3RhbmNlcyBvZiBOb2RlLiBCeVxuICAvLyByZXR1cm5pbmcgYCNkb2N1bWVudGAgYW4gaW5maW5pdGUgbG9vcCB3b24ndCBvY2N1ci5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2Zsb2F0aW5nLXVpL2Zsb2F0aW5nLXVpL2lzc3Vlcy8yMzE3XG4gIHJldHVybiAnI2RvY3VtZW50Jztcbn1cbmZ1bmN0aW9uIGdldFdpbmRvdyhub2RlKSB7XG4gIHZhciBfbm9kZSRvd25lckRvY3VtZW50O1xuICByZXR1cm4gKG5vZGUgPT0gbnVsbCB8fCAoX25vZGUkb3duZXJEb2N1bWVudCA9IG5vZGUub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9ub2RlJG93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcpIHx8IHdpbmRvdztcbn1cbmZ1bmN0aW9uIGdldERvY3VtZW50RWxlbWVudChub2RlKSB7XG4gIHZhciBfcmVmO1xuICByZXR1cm4gKF9yZWYgPSAoaXNOb2RlKG5vZGUpID8gbm9kZS5vd25lckRvY3VtZW50IDogbm9kZS5kb2N1bWVudCkgfHwgd2luZG93LmRvY3VtZW50KSA9PSBudWxsID8gdm9pZCAwIDogX3JlZi5kb2N1bWVudEVsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc05vZGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgTm9kZSB8fCB2YWx1ZSBpbnN0YW5jZW9mIGdldFdpbmRvdyh2YWx1ZSkuTm9kZTtcbn1cbmZ1bmN0aW9uIGlzRWxlbWVudCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBFbGVtZW50IHx8IHZhbHVlIGluc3RhbmNlb2YgZ2V0V2luZG93KHZhbHVlKS5FbGVtZW50O1xufVxuZnVuY3Rpb24gaXNIVE1MRWxlbWVudCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCB8fCB2YWx1ZSBpbnN0YW5jZW9mIGdldFdpbmRvdyh2YWx1ZSkuSFRNTEVsZW1lbnQ7XG59XG5mdW5jdGlvbiBpc1NoYWRvd1Jvb3QodmFsdWUpIHtcbiAgLy8gQnJvd3NlcnMgd2l0aG91dCBgU2hhZG93Um9vdGAgc3VwcG9ydC5cbiAgaWYgKHR5cGVvZiBTaGFkb3dSb290ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBTaGFkb3dSb290IHx8IHZhbHVlIGluc3RhbmNlb2YgZ2V0V2luZG93KHZhbHVlKS5TaGFkb3dSb290O1xufVxuZnVuY3Rpb24gaXNPdmVyZmxvd0VsZW1lbnQoZWxlbWVudCkge1xuICBjb25zdCB7XG4gICAgb3ZlcmZsb3csXG4gICAgb3ZlcmZsb3dYLFxuICAgIG92ZXJmbG93WSxcbiAgICBkaXNwbGF5XG4gIH0gPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICByZXR1cm4gL2F1dG98c2Nyb2xsfG92ZXJsYXl8aGlkZGVufGNsaXAvLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpICYmICFbJ2lubGluZScsICdjb250ZW50cyddLmluY2x1ZGVzKGRpc3BsYXkpO1xufVxuZnVuY3Rpb24gaXNUYWJsZUVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gWyd0YWJsZScsICd0ZCcsICd0aCddLmluY2x1ZGVzKGdldE5vZGVOYW1lKGVsZW1lbnQpKTtcbn1cbmZ1bmN0aW9uIGlzVG9wTGF5ZXIoZWxlbWVudCkge1xuICByZXR1cm4gWyc6cG9wb3Zlci1vcGVuJywgJzptb2RhbCddLnNvbWUoc2VsZWN0b3IgPT4ge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5tYXRjaGVzKHNlbGVjdG9yKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGlzQ29udGFpbmluZ0Jsb2NrKGVsZW1lbnRPckNzcykge1xuICBjb25zdCB3ZWJraXQgPSBpc1dlYktpdCgpO1xuICBjb25zdCBjc3MgPSBpc0VsZW1lbnQoZWxlbWVudE9yQ3NzKSA/IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudE9yQ3NzKSA6IGVsZW1lbnRPckNzcztcblxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQ29udGFpbmluZ19ibG9jayNpZGVudGlmeWluZ190aGVfY29udGFpbmluZ19ibG9ja1xuICByZXR1cm4gY3NzLnRyYW5zZm9ybSAhPT0gJ25vbmUnIHx8IGNzcy5wZXJzcGVjdGl2ZSAhPT0gJ25vbmUnIHx8IChjc3MuY29udGFpbmVyVHlwZSA/IGNzcy5jb250YWluZXJUeXBlICE9PSAnbm9ybWFsJyA6IGZhbHNlKSB8fCAhd2Via2l0ICYmIChjc3MuYmFja2Ryb3BGaWx0ZXIgPyBjc3MuYmFja2Ryb3BGaWx0ZXIgIT09ICdub25lJyA6IGZhbHNlKSB8fCAhd2Via2l0ICYmIChjc3MuZmlsdGVyID8gY3NzLmZpbHRlciAhPT0gJ25vbmUnIDogZmFsc2UpIHx8IFsndHJhbnNmb3JtJywgJ3BlcnNwZWN0aXZlJywgJ2ZpbHRlciddLnNvbWUodmFsdWUgPT4gKGNzcy53aWxsQ2hhbmdlIHx8ICcnKS5pbmNsdWRlcyh2YWx1ZSkpIHx8IFsncGFpbnQnLCAnbGF5b3V0JywgJ3N0cmljdCcsICdjb250ZW50J10uc29tZSh2YWx1ZSA9PiAoY3NzLmNvbnRhaW4gfHwgJycpLmluY2x1ZGVzKHZhbHVlKSk7XG59XG5mdW5jdGlvbiBnZXRDb250YWluaW5nQmxvY2soZWxlbWVudCkge1xuICBsZXQgY3VycmVudE5vZGUgPSBnZXRQYXJlbnROb2RlKGVsZW1lbnQpO1xuICB3aGlsZSAoaXNIVE1MRWxlbWVudChjdXJyZW50Tm9kZSkgJiYgIWlzTGFzdFRyYXZlcnNhYmxlTm9kZShjdXJyZW50Tm9kZSkpIHtcbiAgICBpZiAoaXNDb250YWluaW5nQmxvY2soY3VycmVudE5vZGUpKSB7XG4gICAgICByZXR1cm4gY3VycmVudE5vZGU7XG4gICAgfSBlbHNlIGlmIChpc1RvcExheWVyKGN1cnJlbnROb2RlKSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGN1cnJlbnROb2RlID0gZ2V0UGFyZW50Tm9kZShjdXJyZW50Tm9kZSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5mdW5jdGlvbiBpc1dlYktpdCgpIHtcbiAgaWYgKHR5cGVvZiBDU1MgPT09ICd1bmRlZmluZWQnIHx8ICFDU1Muc3VwcG9ydHMpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuIENTUy5zdXBwb3J0cygnLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXInLCAnbm9uZScpO1xufVxuZnVuY3Rpb24gaXNMYXN0VHJhdmVyc2FibGVOb2RlKG5vZGUpIHtcbiAgcmV0dXJuIFsnaHRtbCcsICdib2R5JywgJyNkb2N1bWVudCddLmluY2x1ZGVzKGdldE5vZGVOYW1lKG5vZGUpKTtcbn1cbmZ1bmN0aW9uIGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkge1xuICByZXR1cm4gZ2V0V2luZG93KGVsZW1lbnQpLmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG59XG5mdW5jdGlvbiBnZXROb2RlU2Nyb2xsKGVsZW1lbnQpIHtcbiAgaWYgKGlzRWxlbWVudChlbGVtZW50KSkge1xuICAgIHJldHVybiB7XG4gICAgICBzY3JvbGxMZWZ0OiBlbGVtZW50LnNjcm9sbExlZnQsXG4gICAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsVG9wXG4gICAgfTtcbiAgfVxuICByZXR1cm4ge1xuICAgIHNjcm9sbExlZnQ6IGVsZW1lbnQuc2Nyb2xsWCxcbiAgICBzY3JvbGxUb3A6IGVsZW1lbnQuc2Nyb2xsWVxuICB9O1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50Tm9kZShub2RlKSB7XG4gIGlmIChnZXROb2RlTmFtZShub2RlKSA9PT0gJ2h0bWwnKSB7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbiAgY29uc3QgcmVzdWx0ID1cbiAgLy8gU3RlcCBpbnRvIHRoZSBzaGFkb3cgRE9NIG9mIHRoZSBwYXJlbnQgb2YgYSBzbG90dGVkIG5vZGUuXG4gIG5vZGUuYXNzaWduZWRTbG90IHx8XG4gIC8vIERPTSBFbGVtZW50IGRldGVjdGVkLlxuICBub2RlLnBhcmVudE5vZGUgfHxcbiAgLy8gU2hhZG93Um9vdCBkZXRlY3RlZC5cbiAgaXNTaGFkb3dSb290KG5vZGUpICYmIG5vZGUuaG9zdCB8fFxuICAvLyBGYWxsYmFjay5cbiAgZ2V0RG9jdW1lbnRFbGVtZW50KG5vZGUpO1xuICByZXR1cm4gaXNTaGFkb3dSb290KHJlc3VsdCkgPyByZXN1bHQuaG9zdCA6IHJlc3VsdDtcbn1cbmZ1bmN0aW9uIGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yKG5vZGUpIHtcbiAgY29uc3QgcGFyZW50Tm9kZSA9IGdldFBhcmVudE5vZGUobm9kZSk7XG4gIGlmIChpc0xhc3RUcmF2ZXJzYWJsZU5vZGUocGFyZW50Tm9kZSkpIHtcbiAgICByZXR1cm4gbm9kZS5vd25lckRvY3VtZW50ID8gbm9kZS5vd25lckRvY3VtZW50LmJvZHkgOiBub2RlLmJvZHk7XG4gIH1cbiAgaWYgKGlzSFRNTEVsZW1lbnQocGFyZW50Tm9kZSkgJiYgaXNPdmVyZmxvd0VsZW1lbnQocGFyZW50Tm9kZSkpIHtcbiAgICByZXR1cm4gcGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gZ2V0TmVhcmVzdE92ZXJmbG93QW5jZXN0b3IocGFyZW50Tm9kZSk7XG59XG5mdW5jdGlvbiBnZXRPdmVyZmxvd0FuY2VzdG9ycyhub2RlLCBsaXN0LCB0cmF2ZXJzZUlmcmFtZXMpIHtcbiAgdmFyIF9ub2RlJG93bmVyRG9jdW1lbnQyO1xuICBpZiAobGlzdCA9PT0gdm9pZCAwKSB7XG4gICAgbGlzdCA9IFtdO1xuICB9XG4gIGlmICh0cmF2ZXJzZUlmcmFtZXMgPT09IHZvaWQgMCkge1xuICAgIHRyYXZlcnNlSWZyYW1lcyA9IHRydWU7XG4gIH1cbiAgY29uc3Qgc2Nyb2xsYWJsZUFuY2VzdG9yID0gZ2V0TmVhcmVzdE92ZXJmbG93QW5jZXN0b3Iobm9kZSk7XG4gIGNvbnN0IGlzQm9keSA9IHNjcm9sbGFibGVBbmNlc3RvciA9PT0gKChfbm9kZSRvd25lckRvY3VtZW50MiA9IG5vZGUub3duZXJEb2N1bWVudCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9ub2RlJG93bmVyRG9jdW1lbnQyLmJvZHkpO1xuICBjb25zdCB3aW4gPSBnZXRXaW5kb3coc2Nyb2xsYWJsZUFuY2VzdG9yKTtcbiAgaWYgKGlzQm9keSkge1xuICAgIGNvbnN0IGZyYW1lRWxlbWVudCA9IGdldEZyYW1lRWxlbWVudCh3aW4pO1xuICAgIHJldHVybiBsaXN0LmNvbmNhdCh3aW4sIHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNPdmVyZmxvd0VsZW1lbnQoc2Nyb2xsYWJsZUFuY2VzdG9yKSA/IHNjcm9sbGFibGVBbmNlc3RvciA6IFtdLCBmcmFtZUVsZW1lbnQgJiYgdHJhdmVyc2VJZnJhbWVzID8gZ2V0T3ZlcmZsb3dBbmNlc3RvcnMoZnJhbWVFbGVtZW50KSA6IFtdKTtcbiAgfVxuICByZXR1cm4gbGlzdC5jb25jYXQoc2Nyb2xsYWJsZUFuY2VzdG9yLCBnZXRPdmVyZmxvd0FuY2VzdG9ycyhzY3JvbGxhYmxlQW5jZXN0b3IsIFtdLCB0cmF2ZXJzZUlmcmFtZXMpKTtcbn1cbmZ1bmN0aW9uIGdldEZyYW1lRWxlbWVudCh3aW4pIHtcbiAgcmV0dXJuIHdpbi5wYXJlbnQgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKHdpbi5wYXJlbnQpID8gd2luLmZyYW1lRWxlbWVudCA6IG51bGw7XG59XG5cbmV4cG9ydCB7IGdldENvbXB1dGVkU3R5bGUsIGdldENvbnRhaW5pbmdCbG9jaywgZ2V0RG9jdW1lbnRFbGVtZW50LCBnZXRGcmFtZUVsZW1lbnQsIGdldE5lYXJlc3RPdmVyZmxvd0FuY2VzdG9yLCBnZXROb2RlTmFtZSwgZ2V0Tm9kZVNjcm9sbCwgZ2V0T3ZlcmZsb3dBbmNlc3RvcnMsIGdldFBhcmVudE5vZGUsIGdldFdpbmRvdywgaXNDb250YWluaW5nQmxvY2ssIGlzRWxlbWVudCwgaXNIVE1MRWxlbWVudCwgaXNMYXN0VHJhdmVyc2FibGVOb2RlLCBpc05vZGUsIGlzT3ZlcmZsb3dFbGVtZW50LCBpc1NoYWRvd1Jvb3QsIGlzVGFibGVFbGVtZW50LCBpc1RvcExheWVyLCBpc1dlYktpdCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@floating-ui+utils@0.2.7/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/.pnpm/@floating-ui+utils@0.2.7/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/.pnpm/@floating-ui+utils@0.2.7/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   alignments: () => (/* binding */ alignments),\n/* harmony export */   clamp: () => (/* binding */ clamp),\n/* harmony export */   createCoords: () => (/* binding */ createCoords),\n/* harmony export */   evaluate: () => (/* binding */ evaluate),\n/* harmony export */   expandPaddingObject: () => (/* binding */ expandPaddingObject),\n/* harmony export */   floor: () => (/* binding */ floor),\n/* harmony export */   getAlignment: () => (/* binding */ getAlignment),\n/* harmony export */   getAlignmentAxis: () => (/* binding */ getAlignmentAxis),\n/* harmony export */   getAlignmentSides: () => (/* binding */ getAlignmentSides),\n/* harmony export */   getAxisLength: () => (/* binding */ getAxisLength),\n/* harmony export */   getExpandedPlacements: () => (/* binding */ getExpandedPlacements),\n/* harmony export */   getOppositeAlignmentPlacement: () => (/* binding */ getOppositeAlignmentPlacement),\n/* harmony export */   getOppositeAxis: () => (/* binding */ getOppositeAxis),\n/* harmony export */   getOppositeAxisPlacements: () => (/* binding */ getOppositeAxisPlacements),\n/* harmony export */   getOppositePlacement: () => (/* binding */ getOppositePlacement),\n/* harmony export */   getPaddingObject: () => (/* binding */ getPaddingObject),\n/* harmony export */   getSide: () => (/* binding */ getSide),\n/* harmony export */   getSideAxis: () => (/* binding */ getSideAxis),\n/* harmony export */   max: () => (/* binding */ max),\n/* harmony export */   min: () => (/* binding */ min),\n/* harmony export */   placements: () => (/* binding */ placements),\n/* harmony export */   rectToClientRect: () => (/* binding */ rectToClientRect),\n/* harmony export */   round: () => (/* binding */ round),\n/* harmony export */   sides: () => (/* binding */ sides)\n/* harmony export */ });\n/**\n * Custom positioning reference element.\n * @see https://floating-ui.com/docs/virtual-elements\n */\n\nconst sides = ['top', 'right', 'bottom', 'left'];\nconst alignments = ['start', 'end'];\nconst placements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + \"-\" + alignments[0], side + \"-\" + alignments[1]), []);\nconst min = Math.min;\nconst max = Math.max;\nconst round = Math.round;\nconst floor = Math.floor;\nconst createCoords = v => ({\n  x: v,\n  y: v\n});\nconst oppositeSideMap = {\n  left: 'right',\n  right: 'left',\n  bottom: 'top',\n  top: 'bottom'\n};\nconst oppositeAlignmentMap = {\n  start: 'end',\n  end: 'start'\n};\nfunction clamp(start, value, end) {\n  return max(start, min(value, end));\n}\nfunction evaluate(value, param) {\n  return typeof value === 'function' ? value(param) : value;\n}\nfunction getSide(placement) {\n  return placement.split('-')[0];\n}\nfunction getAlignment(placement) {\n  return placement.split('-')[1];\n}\nfunction getOppositeAxis(axis) {\n  return axis === 'x' ? 'y' : 'x';\n}\nfunction getAxisLength(axis) {\n  return axis === 'y' ? 'height' : 'width';\n}\nfunction getSideAxis(placement) {\n  return ['top', 'bottom'].includes(getSide(placement)) ? 'y' : 'x';\n}\nfunction getAlignmentAxis(placement) {\n  return getOppositeAxis(getSideAxis(placement));\n}\nfunction getAlignmentSides(placement, rects, rtl) {\n  if (rtl === void 0) {\n    rtl = false;\n  }\n  const alignment = getAlignment(placement);\n  const alignmentAxis = getAlignmentAxis(placement);\n  const length = getAxisLength(alignmentAxis);\n  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';\n  if (rects.reference[length] > rects.floating[length]) {\n    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);\n  }\n  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];\n}\nfunction getExpandedPlacements(placement) {\n  const oppositePlacement = getOppositePlacement(placement);\n  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];\n}\nfunction getOppositeAlignmentPlacement(placement) {\n  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);\n}\nfunction getSideList(side, isStart, rtl) {\n  const lr = ['left', 'right'];\n  const rl = ['right', 'left'];\n  const tb = ['top', 'bottom'];\n  const bt = ['bottom', 'top'];\n  switch (side) {\n    case 'top':\n    case 'bottom':\n      if (rtl) return isStart ? rl : lr;\n      return isStart ? lr : rl;\n    case 'left':\n    case 'right':\n      return isStart ? tb : bt;\n    default:\n      return [];\n  }\n}\nfunction getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {\n  const alignment = getAlignment(placement);\n  let list = getSideList(getSide(placement), direction === 'start', rtl);\n  if (alignment) {\n    list = list.map(side => side + \"-\" + alignment);\n    if (flipAlignment) {\n      list = list.concat(list.map(getOppositeAlignmentPlacement));\n    }\n  }\n  return list;\n}\nfunction getOppositePlacement(placement) {\n  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);\n}\nfunction expandPaddingObject(padding) {\n  return {\n    top: 0,\n    right: 0,\n    bottom: 0,\n    left: 0,\n    ...padding\n  };\n}\nfunction getPaddingObject(padding) {\n  return typeof padding !== 'number' ? expandPaddingObject(padding) : {\n    top: padding,\n    right: padding,\n    bottom: padding,\n    left: padding\n  };\n}\nfunction rectToClientRect(rect) {\n  const {\n    x,\n    y,\n    width,\n    height\n  } = rect;\n  return {\n    width,\n    height,\n    top: y,\n    left: x,\n    right: x + width,\n    bottom: y + height,\n    x,\n    y\n  };\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvLnBucG0vQGZsb2F0aW5nLXVpK3V0aWxzQDAuMi43L25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvdXRpbHMvZGlzdC9mbG9hdGluZy11aS51dGlscy5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGEtMC4wLjEvLi9ub2RlX21vZHVsZXMvLnBucG0vQGZsb2F0aW5nLXVpK3V0aWxzQDAuMi43L25vZGVfbW9kdWxlcy9AZmxvYXRpbmctdWkvdXRpbHMvZGlzdC9mbG9hdGluZy11aS51dGlscy5tanM/NmQ3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEN1c3RvbSBwb3NpdGlvbmluZyByZWZlcmVuY2UgZWxlbWVudC5cbiAqIEBzZWUgaHR0cHM6Ly9mbG9hdGluZy11aS5jb20vZG9jcy92aXJ0dWFsLWVsZW1lbnRzXG4gKi9cblxuY29uc3Qgc2lkZXMgPSBbJ3RvcCcsICdyaWdodCcsICdib3R0b20nLCAnbGVmdCddO1xuY29uc3QgYWxpZ25tZW50cyA9IFsnc3RhcnQnLCAnZW5kJ107XG5jb25zdCBwbGFjZW1lbnRzID0gLyojX19QVVJFX18qL3NpZGVzLnJlZHVjZSgoYWNjLCBzaWRlKSA9PiBhY2MuY29uY2F0KHNpZGUsIHNpZGUgKyBcIi1cIiArIGFsaWdubWVudHNbMF0sIHNpZGUgKyBcIi1cIiArIGFsaWdubWVudHNbMV0pLCBbXSk7XG5jb25zdCBtaW4gPSBNYXRoLm1pbjtcbmNvbnN0IG1heCA9IE1hdGgubWF4O1xuY29uc3Qgcm91bmQgPSBNYXRoLnJvdW5kO1xuY29uc3QgZmxvb3IgPSBNYXRoLmZsb29yO1xuY29uc3QgY3JlYXRlQ29vcmRzID0gdiA9PiAoe1xuICB4OiB2LFxuICB5OiB2XG59KTtcbmNvbnN0IG9wcG9zaXRlU2lkZU1hcCA9IHtcbiAgbGVmdDogJ3JpZ2h0JyxcbiAgcmlnaHQ6ICdsZWZ0JyxcbiAgYm90dG9tOiAndG9wJyxcbiAgdG9wOiAnYm90dG9tJ1xufTtcbmNvbnN0IG9wcG9zaXRlQWxpZ25tZW50TWFwID0ge1xuICBzdGFydDogJ2VuZCcsXG4gIGVuZDogJ3N0YXJ0J1xufTtcbmZ1bmN0aW9uIGNsYW1wKHN0YXJ0LCB2YWx1ZSwgZW5kKSB7XG4gIHJldHVybiBtYXgoc3RhcnQsIG1pbih2YWx1ZSwgZW5kKSk7XG59XG5mdW5jdGlvbiBldmFsdWF0ZSh2YWx1ZSwgcGFyYW0pIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyA/IHZhbHVlKHBhcmFtKSA6IHZhbHVlO1xufVxuZnVuY3Rpb24gZ2V0U2lkZShwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5zcGxpdCgnLScpWzBdO1xufVxuZnVuY3Rpb24gZ2V0QWxpZ25tZW50KHBsYWNlbWVudCkge1xuICByZXR1cm4gcGxhY2VtZW50LnNwbGl0KCctJylbMV07XG59XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZUF4aXMoYXhpcykge1xuICByZXR1cm4gYXhpcyA9PT0gJ3gnID8gJ3knIDogJ3gnO1xufVxuZnVuY3Rpb24gZ2V0QXhpc0xlbmd0aChheGlzKSB7XG4gIHJldHVybiBheGlzID09PSAneScgPyAnaGVpZ2h0JyA6ICd3aWR0aCc7XG59XG5mdW5jdGlvbiBnZXRTaWRlQXhpcyhwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIFsndG9wJywgJ2JvdHRvbSddLmluY2x1ZGVzKGdldFNpZGUocGxhY2VtZW50KSkgPyAneScgOiAneCc7XG59XG5mdW5jdGlvbiBnZXRBbGlnbm1lbnRBeGlzKHBsYWNlbWVudCkge1xuICByZXR1cm4gZ2V0T3Bwb3NpdGVBeGlzKGdldFNpZGVBeGlzKHBsYWNlbWVudCkpO1xufVxuZnVuY3Rpb24gZ2V0QWxpZ25tZW50U2lkZXMocGxhY2VtZW50LCByZWN0cywgcnRsKSB7XG4gIGlmIChydGwgPT09IHZvaWQgMCkge1xuICAgIHJ0bCA9IGZhbHNlO1xuICB9XG4gIGNvbnN0IGFsaWdubWVudCA9IGdldEFsaWdubWVudChwbGFjZW1lbnQpO1xuICBjb25zdCBhbGlnbm1lbnRBeGlzID0gZ2V0QWxpZ25tZW50QXhpcyhwbGFjZW1lbnQpO1xuICBjb25zdCBsZW5ndGggPSBnZXRBeGlzTGVuZ3RoKGFsaWdubWVudEF4aXMpO1xuICBsZXQgbWFpbkFsaWdubWVudFNpZGUgPSBhbGlnbm1lbnRBeGlzID09PSAneCcgPyBhbGlnbm1lbnQgPT09IChydGwgPyAnZW5kJyA6ICdzdGFydCcpID8gJ3JpZ2h0JyA6ICdsZWZ0JyA6IGFsaWdubWVudCA9PT0gJ3N0YXJ0JyA/ICdib3R0b20nIDogJ3RvcCc7XG4gIGlmIChyZWN0cy5yZWZlcmVuY2VbbGVuZ3RoXSA+IHJlY3RzLmZsb2F0aW5nW2xlbmd0aF0pIHtcbiAgICBtYWluQWxpZ25tZW50U2lkZSA9IGdldE9wcG9zaXRlUGxhY2VtZW50KG1haW5BbGlnbm1lbnRTaWRlKTtcbiAgfVxuICByZXR1cm4gW21haW5BbGlnbm1lbnRTaWRlLCBnZXRPcHBvc2l0ZVBsYWNlbWVudChtYWluQWxpZ25tZW50U2lkZSldO1xufVxuZnVuY3Rpb24gZ2V0RXhwYW5kZWRQbGFjZW1lbnRzKHBsYWNlbWVudCkge1xuICBjb25zdCBvcHBvc2l0ZVBsYWNlbWVudCA9IGdldE9wcG9zaXRlUGxhY2VtZW50KHBsYWNlbWVudCk7XG4gIHJldHVybiBbZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQocGxhY2VtZW50KSwgb3Bwb3NpdGVQbGFjZW1lbnQsIGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KG9wcG9zaXRlUGxhY2VtZW50KV07XG59XG5mdW5jdGlvbiBnZXRPcHBvc2l0ZUFsaWdubWVudFBsYWNlbWVudChwbGFjZW1lbnQpIHtcbiAgcmV0dXJuIHBsYWNlbWVudC5yZXBsYWNlKC9zdGFydHxlbmQvZywgYWxpZ25tZW50ID0+IG9wcG9zaXRlQWxpZ25tZW50TWFwW2FsaWdubWVudF0pO1xufVxuZnVuY3Rpb24gZ2V0U2lkZUxpc3Qoc2lkZSwgaXNTdGFydCwgcnRsKSB7XG4gIGNvbnN0IGxyID0gWydsZWZ0JywgJ3JpZ2h0J107XG4gIGNvbnN0IHJsID0gWydyaWdodCcsICdsZWZ0J107XG4gIGNvbnN0IHRiID0gWyd0b3AnLCAnYm90dG9tJ107XG4gIGNvbnN0IGJ0ID0gWydib3R0b20nLCAndG9wJ107XG4gIHN3aXRjaCAoc2lkZSkge1xuICAgIGNhc2UgJ3RvcCc6XG4gICAgY2FzZSAnYm90dG9tJzpcbiAgICAgIGlmIChydGwpIHJldHVybiBpc1N0YXJ0ID8gcmwgOiBscjtcbiAgICAgIHJldHVybiBpc1N0YXJ0ID8gbHIgOiBybDtcbiAgICBjYXNlICdsZWZ0JzpcbiAgICBjYXNlICdyaWdodCc6XG4gICAgICByZXR1cm4gaXNTdGFydCA/IHRiIDogYnQ7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBbXTtcbiAgfVxufVxuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVBeGlzUGxhY2VtZW50cyhwbGFjZW1lbnQsIGZsaXBBbGlnbm1lbnQsIGRpcmVjdGlvbiwgcnRsKSB7XG4gIGNvbnN0IGFsaWdubWVudCA9IGdldEFsaWdubWVudChwbGFjZW1lbnQpO1xuICBsZXQgbGlzdCA9IGdldFNpZGVMaXN0KGdldFNpZGUocGxhY2VtZW50KSwgZGlyZWN0aW9uID09PSAnc3RhcnQnLCBydGwpO1xuICBpZiAoYWxpZ25tZW50KSB7XG4gICAgbGlzdCA9IGxpc3QubWFwKHNpZGUgPT4gc2lkZSArIFwiLVwiICsgYWxpZ25tZW50KTtcbiAgICBpZiAoZmxpcEFsaWdubWVudCkge1xuICAgICAgbGlzdCA9IGxpc3QuY29uY2F0KGxpc3QubWFwKGdldE9wcG9zaXRlQWxpZ25tZW50UGxhY2VtZW50KSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBsaXN0O1xufVxuZnVuY3Rpb24gZ2V0T3Bwb3NpdGVQbGFjZW1lbnQocGxhY2VtZW50KSB7XG4gIHJldHVybiBwbGFjZW1lbnQucmVwbGFjZSgvbGVmdHxyaWdodHxib3R0b218dG9wL2csIHNpZGUgPT4gb3Bwb3NpdGVTaWRlTWFwW3NpZGVdKTtcbn1cbmZ1bmN0aW9uIGV4cGFuZFBhZGRpbmdPYmplY3QocGFkZGluZykge1xuICByZXR1cm4ge1xuICAgIHRvcDogMCxcbiAgICByaWdodDogMCxcbiAgICBib3R0b206IDAsXG4gICAgbGVmdDogMCxcbiAgICAuLi5wYWRkaW5nXG4gIH07XG59XG5mdW5jdGlvbiBnZXRQYWRkaW5nT2JqZWN0KHBhZGRpbmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBwYWRkaW5nICE9PSAnbnVtYmVyJyA/IGV4cGFuZFBhZGRpbmdPYmplY3QocGFkZGluZykgOiB7XG4gICAgdG9wOiBwYWRkaW5nLFxuICAgIHJpZ2h0OiBwYWRkaW5nLFxuICAgIGJvdHRvbTogcGFkZGluZyxcbiAgICBsZWZ0OiBwYWRkaW5nXG4gIH07XG59XG5mdW5jdGlvbiByZWN0VG9DbGllbnRSZWN0KHJlY3QpIHtcbiAgY29uc3Qge1xuICAgIHgsXG4gICAgeSxcbiAgICB3aWR0aCxcbiAgICBoZWlnaHRcbiAgfSA9IHJlY3Q7XG4gIHJldHVybiB7XG4gICAgd2lkdGgsXG4gICAgaGVpZ2h0LFxuICAgIHRvcDogeSxcbiAgICBsZWZ0OiB4LFxuICAgIHJpZ2h0OiB4ICsgd2lkdGgsXG4gICAgYm90dG9tOiB5ICsgaGVpZ2h0LFxuICAgIHgsXG4gICAgeVxuICB9O1xufVxuXG5leHBvcnQgeyBhbGlnbm1lbnRzLCBjbGFtcCwgY3JlYXRlQ29vcmRzLCBldmFsdWF0ZSwgZXhwYW5kUGFkZGluZ09iamVjdCwgZmxvb3IsIGdldEFsaWdubWVudCwgZ2V0QWxpZ25tZW50QXhpcywgZ2V0QWxpZ25tZW50U2lkZXMsIGdldEF4aXNMZW5ndGgsIGdldEV4cGFuZGVkUGxhY2VtZW50cywgZ2V0T3Bwb3NpdGVBbGlnbm1lbnRQbGFjZW1lbnQsIGdldE9wcG9zaXRlQXhpcywgZ2V0T3Bwb3NpdGVBeGlzUGxhY2VtZW50cywgZ2V0T3Bwb3NpdGVQbGFjZW1lbnQsIGdldFBhZGRpbmdPYmplY3QsIGdldFNpZGUsIGdldFNpZGVBeGlzLCBtYXgsIG1pbiwgcGxhY2VtZW50cywgcmVjdFRvQ2xpZW50UmVjdCwgcm91bmQsIHNpZGVzIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/.pnpm/@floating-ui+utils@0.2.7/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs\n");

/***/ })

};
;