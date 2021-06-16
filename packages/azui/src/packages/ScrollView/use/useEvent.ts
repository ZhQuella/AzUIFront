import { computed } from "vue";

export const useEvent = ({
  config,
  showBar
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

  return {
    onMouseenter,
    onMouseleave,
    isShowBar,
    onWarpScroll
  }

}
