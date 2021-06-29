import { computed } from 'vue';

export const useContainerClasses = ({
  direction,
  data
}) => {

  const directionClass = computed(() => {
    return direction?.value;
  });

  return computed(() => {
    return {
      'is-horizontal': directionClass?.value === 'horizontal' || data.hasAside
    }
  });
};
