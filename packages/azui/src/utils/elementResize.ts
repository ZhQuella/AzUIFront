import { isServer } from "./config";
import ResizeObserver  from 'resize-observer-polyfill';

import { CustomizedHTMLElement } from "./types";

export type ResizableElement = CustomizedHTMLElement<{
  __resizeListeners__: Array<(...args: unknown[]) => unknown>
  __ro__: ResizeObserver
}>;

const resizeHandler = function(entries) {
  for (const entry of entries) {
    const listeners = entry.target.__resizeListeners__ || [];
    if (listeners.length) {
      listeners.forEach(fn => {
        fn();
      });
    };
  };
}

export const addEventResize = (node, fun) => {
  if (isServer || !node) return;
  if(!node.__resizeListeners__){
    node.__resizeListeners__ = [];
    node.__ro__ = new ResizeObserver(resizeHandler);
    node.__ro__.observe(node);
  }
  node.__resizeListeners__.push(fun)
}

export const removeResizeListener = (node,fun) => {
  if (!node || !node.__resizeListeners__) return
  node.__resizeListeners__.splice(node.__resizeListeners__.indexOf(fun), 1,);
  if (!node.__resizeListeners__.length) {
    node.__ro__.disconnect();
  }
}
