import { computed } from 'vue'

export const userClasses = ({
  size,
  type,
  loading,
  disabled
}) => {

  const sizeClass = computed(() => {
    return size.value;
  });

  const typeClass = computed(() => {
    return type.value;
  });

  return computed(() => {
    const size = sizeClass.value;
    const type = typeClass.value;
    return {
      [`az-button--${size}`]: Boolean(size),
      [`az-button--${type}`]: Boolean(type),
      'is-loading':　loading.value,
      'is-disabled': disabled.value
    }
  })
}

