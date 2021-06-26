import { computed, reactive } from "vue";

import { on, off } from "../../../utils/dom";

import { BAR_MAP } from "../use/config";

export const useEvent = ({
  config,
  showBar,
  height,
  emit,
  contentRef
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
    if(config.isMouseDown) return;
    const proportionY = Math.min(height.value / config.warpInfo.offsetHeight,1);
    const proportionX = Math.min(config.clientWidth / config.warpInfo.offsetWidth,1);
    const num = event.target.scrollLeft < 17?0:17;
    config.scrollConfig.left = (event.target.scrollLeft + num) * proportionX;
    config.scrollConfig.top = event.target.scrollTop * proportionY;
    emit("scroll", event);
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
    const { type } = mouseDownConfig;
    let contentOffset = type === "vertical"?height.value:config[BAR_MAP[type].area];
    let proportion =  contentOffset / config.warpInfo[BAR_MAP[type].content];
    let position = event[BAR_MAP[type].client] - (mouseDownConfig[BAR_MAP[type].client] - mouseDownConfig[BAR_MAP[type].offset]);
    position = Math.max(position, 0);
    position = Math.min(contentOffset - mouseDownConfig[BAR_MAP[type].content], position);
    config.scrollConfig[BAR_MAP[type].direction] = position;
    Reflect.set(contentRef?.value || {}, BAR_MAP[type].scroll, position / proportion);
  }

  const mouseUpDocumentHandler = (event) => {
    off(document, 'mousemove', mouseMoveDocumentHandler);
    off(document, 'mouseup', mouseUpDocumentHandler);
    config.isMouseDown = false;
    mouseDownConfig[BAR_MAP[mouseDownConfig.type].client] = 0;
    mouseDownConfig[BAR_MAP[mouseDownConfig.type].offset] = 0;
    mouseDownConfig[BAR_MAP[mouseDownConfig.type].content] = 0;
    mouseDownConfig.type = "";
  }
  
  const onScrollBarMouseDown = (type, event) => {
    const { target } = event;
    window?.getSelection()?.removeAllRanges();
    config.isMouseDown = true;
    mouseDownConfig.type = type;
    mouseDownConfig[BAR_MAP[type].client] = event[BAR_MAP[type].client];
    mouseDownConfig[BAR_MAP[type].offset] = target[BAR_MAP[type].offset];
    mouseDownConfig[BAR_MAP[type].content] = target[BAR_MAP[type].content];
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
    mouseDownConfig
  }

}
