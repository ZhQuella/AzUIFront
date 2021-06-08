import { computed } from 'vue';

export const useContainerStyles = ({
  inBody,
  height,
  nextTick
}) => {

  computed(() => {
    inBody && nextTick(() => {
      document.body.style.minHeight = 
      document.documentElement.style.minHeight = "100vh";
    });
    !inBody && nextTick(() => {
      document.body.style.minHeight = 
      document.documentElement.style.minHeight = "";
    });
  });

  return computed(() => {
    return {
      height: height?.value
    };
  });

}
