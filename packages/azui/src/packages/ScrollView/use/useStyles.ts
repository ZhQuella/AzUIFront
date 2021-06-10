import { computed } from "vue";

export const useBarStyles = ({
  size
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

  const crossStyle = computed(() => {
    return {
      height: size.value,
      right: `${parseFloat(size.value)}px`,
      ...sameStyle.value
    }
  })

  return {
    verticalStyle,
    crossStyle
  }
}
