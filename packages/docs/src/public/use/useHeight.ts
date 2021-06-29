import { removeResizeListener } from './../../../../azui/src/utils/elementResize';
import { ref, onMounted, onUnmounted } from 'vue';
import ResizeObserver from "resize-observer-polyfill";

export const useHeight = () => {
  const height = ref(0);

  const resize = function(){
    height.value = document.documentElement.clientHeight - 60;
  }

  onMounted(() => {
    window.addEventListener("resize", resize);
    resize();
  });

  onUnmounted(() => {
    window.removeEventListener("resize", resize);
  })

  return {
    height
  };
}

