import { ref, onMounted, onBeforeUnmount } from "vue";

import { addEventResize, removeResizeListener } from "../../../utils/elementResize";

export const useInit = ({
  config,
  noresize
}) => {


  const scrollViewContentRef = ref<HTMLElement>();
  const clientRef = ref<HTMLElement>();

  const resetConfig =() => {
    config.warpInfo.offsetHeight = scrollViewContentRef.value?.offsetHeight;
    config.warpInfo = {
      offsetHeight: scrollViewContentRef.value?.offsetHeight || 0,
      offsetWidth: scrollViewContentRef.value?.offsetWidth || 0
    }
    config.clientWidth = clientRef.value?.clientWidth;
  }


  onMounted(() => {
    if(noresize.value){
      addEventResize(clientRef.value, resetConfig);
      addEventListener('resize', resetConfig);
    }else{
      resetConfig();
    }
  });

  onBeforeUnmount(() => {
    if(noresize.value){
      removeResizeListener(clientRef.value, resetConfig);
      removeEventListener('resize', resetConfig);
    }
  });

  return {
    scrollViewContentRef,
    clientRef
  }

}
