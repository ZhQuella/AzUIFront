import { computed } from "vue";

export const useClasses = ({
  justify,
  align,
  wrap
}) => {

  const classes = computed(() => {
    const alignValue  = align?.value;
    const justifyValue  = justify?.value;
    return {
      [`az-row--${alignValue}`]: Boolean(alignValue),
      [`az-row--${justifyValue}`]: Boolean(justifyValue),
      [`az-row--no-wrap`]: wrap?.value
    };
  })

  return classes;
}
