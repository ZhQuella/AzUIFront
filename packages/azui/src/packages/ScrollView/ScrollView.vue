<template>
  <div class="az-scroll-view__warp">
    <!--竖向滚动条-->
    <div class="az-scroll-bar az-scroll-vertical-bar"
        :style="verticalStyle">
      <div class="az-scroll-bar-content"></div>
    </div>
    <!--横向滚动条-->
    <div class="az-scroll-bar az-scroll-cross-bar"
        :style="crossStyle">
      <div class="az-scroll-bar-content"></div>
    </div>
    <div class="az-scroll-view-content"
        ref="scrollViewContentRef">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { App, defineComponent, ref, nextTick, toRefs } from "vue";
import vptypes from 'vptypes';

import { useBarStyles } from "./use/useStyles";

//  todo 需要进一步完善
const AzScrollView = defineComponent({
  name: "AzScrollView",
  props: {
    size: vptypes.string().def("10px")
  },
  setup(props){
    const {
      size
    } = toRefs(props);

    // const data = reactive({

    // });

    const scrollViewContentRef = ref<HTMLElement>();

    nextTick(() => {
      // console.dir(scrollViewContentRef.value?.offsetHeight);
      // console.log(data);
    });

    const {  
      verticalStyle,
      crossStyle
    } = useBarStyles({
      size
    });
    
    return {
      scrollViewContentRef,
      verticalStyle,
      crossStyle
    }
  }
});

AzScrollView.install = (app: App) => {
  app.component(AzScrollView.name, AzScrollView);
};

export default AzScrollView;
</script>
