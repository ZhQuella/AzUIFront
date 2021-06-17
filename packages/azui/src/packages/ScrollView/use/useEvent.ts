import { computed, reactive, ref } from "vue";

import { on, off } from "../../../utils/dom";

// import { BAR_MAP } from "../use/config";

export const useEvent = ({
  config,
  showBar,
  height
}) => {

  const content = ref<HTMLElement>();

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
    if(config.isMouseDown) return;
    let proportion = height.value / config.warpInfo.offsetHeight;
    proportion = Math.min(proportion, 1);
    config.scrollConfig.left = event.target.scrollLeft * proportion;
    config.scrollConfig.top = event.target.scrollTop * proportion;
  }

  const mouseDownConfig = reactive({
    clientY: 0,
    clientX: 0,
    offsetTop: 0,
    offsetLeft: 0,
    offsetHeight: 0,
    offsetWidth: 0,
    type: ""
  })

  const mouseMoveDocumentHandler = (event) => {
    let proportion = height.value / config.warpInfo.offsetHeight;
    const { clientY } = event;
    let top = clientY - (mouseDownConfig.clientY - mouseDownConfig.offsetTop);
    top = Math.max(top, 0);
    top = Math.min(height.value - mouseDownConfig.offsetHeight, top);
    config.scrollConfig.top = top;
    Reflect.set(content?.value || {}, "scrollTop", top / proportion);
  }

  const mouseUpDocumentHandler = (event) => {
    off(document, 'mousemove', mouseMoveDocumentHandler);
    off(document, 'mouseup', mouseUpDocumentHandler);
    config.isMouseDown = false;
    mouseDownConfig.clientY = mouseDownConfig.clientX = 0;
    mouseDownConfig.offsetTop = mouseDownConfig.offsetLeft = 0;
    mouseDownConfig.type = "";
  }

  const onScrollBarMouseDown = (type, event) => {
    const { clientY, target } = event;
    window?.getSelection()?.removeAllRanges();
    config.isMouseDown = true;
    mouseDownConfig.type = type;
    mouseDownConfig.clientY = clientY;
    mouseDownConfig.offsetTop = target.offsetTop;
    mouseDownConfig.offsetHeight = target.offsetHeight;
    on(document, 'mousemove', mouseMoveDocumentHandler);
    on(document, 'mouseup', mouseUpDocumentHandler);
    document.onselectstart = () => false;
  }

  return {
    onMouseenter,
    onMouseleave,
    isShowBar,
    onWarpScroll,
    onScrollBarMouseDown,
    content
  }

}
