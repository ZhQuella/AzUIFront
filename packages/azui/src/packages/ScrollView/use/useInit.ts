import { ref, onMounted } from "vue";

export const useInit = ({
  config
}) => {


  const scrollViewContentRef = ref<HTMLElement>();
  const clientRef = ref<HTMLElement>();


  onMounted(() => {
    config.warpInfo.offsetHeight = scrollViewContentRef.value?.offsetHeight;
    config.warpInfo = {
      offsetHeight: scrollViewContentRef.value?.offsetHeight || 0,
      offsetWidth: scrollViewContentRef.value?.offsetWidth || 0
    }
    config.clientWidth = clientRef.value?.clientWidth;
  })

  return {
    scrollViewContentRef,
    clientRef
  }

}
