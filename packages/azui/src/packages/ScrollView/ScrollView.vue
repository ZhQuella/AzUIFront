<template>
  <div ref="scrollbar"
      class="az-scrollbar">
    <div ref="wrap"
          class="az-scrollbar__wrap"
          :class="scrollClass"
          :style="scrollStyles"
          @scroll="handleScroll">
      <component :is="tag"
                  class="az-scrollbar__view">
        <slot></slot>
      </component>
    </div>
    <template v-if="!native">
      <az-bar type="vertical"
              :size="sizeConfig.sizeHeight"
              :position="positionConfig.moveY"
              :area="size"></az-bar>
      <az-bar type="horizontal"
              :size="sizeConfig.sizeWidth"
              :position="positionConfig.moveX"
              :area="size"></az-bar>
    </template>
  </div>
</template>

<script lang="ts">
import { App, defineComponent, toRefs, provide } from "vue";
import vptypes from 'vptypes';

import AzBar from "./Bar.vue";

import { useScrollEvent } from "./use/useEvent";
import { useScrollStyles } from "./use/useStyles";
import { useScrollClasses } from "./use/useClasses";
import { useScrollCollect } from "./use/useCollect";

const AzScrollView = defineComponent({
  name: "AzScrollView",
  components: {
    AzBar
  },
  props: {
    size: vptypes.string().def("10px"),
    showBar: vptypes.oneOfType([vptypes.bool()]).def(true),
    height: vptypes.oneOfType([vptypes.number()]).def(600),
    noresize: vptypes.oneOfType([vptypes.bool()]).def(false),
    tag: vptypes.string().def("div"),
    native: vptypes.oneOfType([vptypes.bool()]).def(false)
  },
  emit:["scroll"],
  setup(props, { emit, slots }){
    
    const {
      height,
      native,
      noresize
    } = toRefs(props);

    const { 
      scrollbar,
      wrap,
      resize,
      sizeConfig,
      update
    } = useScrollCollect({ slots });

    const { scrollStyles } = useScrollStyles({
      height
    });

    const { scrollClass } = useScrollClasses({
      native
    });

    const { 
      handleScroll,
      positionConfig
    } = useScrollEvent({
      update,
      native,
      noresize,
      resize,
      wrap,
      emit
    });

    provide('scrollbar', scrollbar);
    provide('scrollbar-wrap', wrap);

    return {
      handleScroll,
      scrollStyles,
      scrollClass,
      sizeConfig,
      scrollbar,
      wrap,
      resize,
      positionConfig
    }
  }
});

AzScrollView.install = (app: App) => {
  app.component(AzScrollView.name, AzScrollView);
};

export default AzScrollView;
</script>
