<template>
  <div class="az-scroll-view__warp">
    <div class="az-scroll-view-content"
        ref="scrollViewContentRef">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { App, defineComponent, ref, nextTick, reactive } from "vue";
//  todo 需要进一步完善
const AzScrollView = defineComponent({
  name: "AzScrollView",
  setup(){
    const data = reactive({

    });

    const scrollViewContentRef = ref<HTMLElement>();

    nextTick(() => {
      console.dir(scrollViewContentRef.value?.offsetHeight);
      console.log(data);
    });
    
    return {
      scrollViewContentRef
    }
  },
  mounted(){

  }
});

AzScrollView.install = (app: App) => {
  app.component(AzScrollView.name, AzScrollView);
};

export default AzScrollView;
</script>
