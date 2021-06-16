import { computed } from "vue";

export const useBarStyles = ({
  size,
  height,
  config
}) => {

  const sameStyle = computed(() => {
    return {
      borderRadius: size.value
    }
  })

  const verticalStyle = computed(() => {
    return {
      width: size.value,
      ...sameStyle.value
    }
  })

  const verticalBarStyle = computed(() => {
    let proportion = height.value / config.warpInfo.offsetHeight;
    proportion = Math.min(proportion, 1);
    return {
      height: `${100 * proportion}%`,
      top: `${config.scrollConfig.top * proportion}px`
    }
  })

  const crossStyle = computed(() => {
    return {
      height: size.value,
      right: `${parseFloat(size.value)}px`,
      ...sameStyle.value
    }
  })

  const crossBarStyle = computed(() => {
    let proportion = config.clientWidth / config.warpInfo.offsetWidth;
    proportion = Math.min(proportion, 1);
    return {
      width: `${100 * proportion}%`,
      left: `${config.scrollConfig.left * proportion}px`
    }
  })

  const warpStyle = computed(() => {
    return {
      height: `${height.value}px`
    }
  });

  const containerStyle = computed(() => {
    return {
      height: `${height.value + 17}px`
    }
  });

  return {
    verticalStyle,
    crossStyle,
    warpStyle,
    containerStyle,
    verticalBarStyle,
    crossBarStyle
  }
}
