import { computed } from 'vue';

export const useEle = ({
  slots,
  loading,
  circle
}) => {


  const isShowContainer = computed(() => {
    if(circle.value && loading.value) return false;
    if(!slots.default) return false;
    return true;
  });

  return {
    isShowContainer
  }
}
