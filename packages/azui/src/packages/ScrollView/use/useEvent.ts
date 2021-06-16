import { computed } from "vue";

import { on, off } from "../../../utils/dom";

export const useEvent = ({
  config,
  showBar,
  height
}) => {

  const onMouseenter = () => {
    config.isEnterWarp = true;
  };

  const onMouseleave = () => {
    config.isEnterWarp = false; 
  };

  const isShowBar = computed(() => {
    return showBar?.value && config.isEnterWarp;
  });

  const onWarpScroll = (event) => {
    config.scrollConfig.left = event.target.scrollLeft;
    config.scrollConfig.top = event.target.scrollTop;
  }

  const mouseMoveDocumentHandler = (event) => {

  }

  const mouseUpDocumentHandler = () => {
    off(document, 'mousemove', mouseMoveDocumentHandler);
    off(document, 'mouseup', mouseUpDocumentHandler);
  }

  const onScrollBarMouseDown = (type, event) => {
    window?.getSelection()?.removeAllRanges();
    on(document, 'mousemove', mouseMoveDocumentHandler);
    on(document, 'mouseup', mouseUpDocumentHandler);
    document.onselectstart = () => false;
  }

  return {
    onMouseenter,
    onMouseleave,
    isShowBar,
    onWarpScroll,
    onScrollBarMouseDown
  }

}
