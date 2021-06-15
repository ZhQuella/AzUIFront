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
    return {
      height: `${100 * (height.value / config.warpInfo.offsetHeight)}%`
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
    return {
      width: `${100 * (config.clientWidth / config.warpInfo.offsetWidth)}%`
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
