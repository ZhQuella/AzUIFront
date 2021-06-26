import { computed } from "vue";

export const useBarStyles = ({
  size,
  height,
  config
}) => {

  const isRenderBar = computed(() => {
    const { content, warpInfo } = config;
    return {
      vertical: warpInfo.offsetHeight > height.value,
      cross: warpInfo.offsetWidth + 17 > content.offsetWidth
    }
  })

  const verticalStyle = computed(() => {
    return {
      width: size.value
    }
  })

  const verticalBarStyle = computed(() => {
    let proportion = height.value / config.warpInfo.offsetHeight;
    proportion = Math.min(proportion, 1);
    return {
      height: `${100 * proportion}%`,
      top: `${config.scrollConfig.top}px`
    }
  })

  const crossStyle = computed(() => {
    return {
      height: size.value,
      right: `${parseFloat(size.value)}px`
    }
  })

  const crossBarStyle = computed(() => {
    let proportion = config.clientWidth / config.warpInfo.offsetWidth;
    proportion = Math.min(proportion, 1);
    return {
      width: `${100 * proportion}%`,
      left: `${config.scrollConfig.left}px`
    }
  })

  const warpStyle = computed(() => {
    return {
      height: `${height.value}px`
    }
  });

  const containerStyle = computed(() => {
    return {
      height: `${height.value}px`,
      paddingBottom: isRenderBar.value.cross? "17px": "0px"
    }
  });

  return {
    verticalStyle,
    crossStyle,
    warpStyle,
    containerStyle,
    verticalBarStyle,
    crossBarStyle,
    isRenderBar
  }
}
