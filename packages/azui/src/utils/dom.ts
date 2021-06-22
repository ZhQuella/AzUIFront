import { nodeType } from "./types";

export const getAbsolutePosition = (node, attr = "offsetTop"): number => {
  let sum = 0;
  let content = node;
  while (content.tagName !== "HTML") {
    sum += content[attr];
    content = content.parentNode;
  }
  return sum;
}

export const on = (element: nodeType, event: string, handler: EventListener, useCapture = false) => {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture)
  }
}

export const off = (element: nodeType, event: string, handler: EventListener, useCapture = false) => {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture)
  }
}

export const once = function(
  el: nodeType,
  event: string,
  fn: EventListener
): void {
  const listener = function(...args: unknown[]) {
    if (fn) {
      fn.apply(this, args)
    }
    off(el, event, listener)
  }
  on(el, event, listener)
}
