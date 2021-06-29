import { computed } from "vue";

export const useScrollClasses = ({
  native
}) => {

  const scrollClass = computed(() => {
    return {
      "az-scrollbar__wrap--hidden-default": !native.value
    }
  })

  return {
    scrollClass
  }

}

export const useBarClasses = ({
  type
}) => {

  const barClass = computed(() => {
    return [
      {
        [`is-${type.value}`]: type.value
      }
    ]
  })

  return {
    barClass
  }

}
