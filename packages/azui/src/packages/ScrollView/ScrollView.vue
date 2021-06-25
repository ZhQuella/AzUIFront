<template>
  <div class="az-scroll-view__warp"
      @mouseenter="onMouseenter"
      @mouseleave="onMouseleave"
      :style="warpStyle"
      ref="clientRef">
    <transition name="az-fade">
      <div class="az-scroll-bar az-scroll-vertical-bar"
          :style="verticalStyle"
          v-show="isShowBar"
          v-if="isRenderBar.vertical">
        <div class="az-scroll-bar-content"
            :style="verticalBarStyle"
            @mousedown="onScrollBarMouseDown('vertical',$event)"
            :class="{
              active: mouseDownConfig.type === 'vertical'
            }"></div>
      </div>
    </transition>
    <transition name="az-fade">
      <div class="az-scroll-bar az-scroll-cross-bar"
          :style="crossStyle"
          v-show="isShowBar"
          v-if="isRenderBar.cross">
        <div class="az-scroll-bar-content"
            :style="crossBarStyle"
            @mousedown="onScrollBarMouseDown('cross',$event)"
            :class="{
              active: mouseDownConfig.type === 'cross'
            }"></div>
      </div>
    </transition>
    <div class="az-scroll-view-content"
        :style="containerStyle"
        @scroll="onWarpScroll"
        ref="contentRef">
      <component class="az-scroll__view"
                ref="scrollViewContentRef"
                :is="tag">
        <slot />
      </component>
    </div>
  </div>
</template>

<script lang="ts">
import { App, defineComponent, toRefs, reactive } from "vue";
import vptypes from 'vptypes';

import { useBarStyles } from "./use/useStyles";
import { useEvent } from "./use/useEvent";
import { useInit } from "./use/useInit";

const AzScrollView = defineComponent({
  name: "AzScrollView",
  props: {
    size: vptypes.string().def("10px"),
    showBar: vptypes.oneOfType([vptypes.bool()]).def(true),
    height: vptypes.oneOfType([vptypes.number()]).def(600),
    noresize: vptypes.oneOfType([vptypes.bool()]).def(false),
    tag: vptypes.string().def("div")
  },
  emit:["scroll"],
  setup(props, { emit }){
    const {
      size,
      showBar,
      height,
      noresize
    } = toRefs(props);

    const config = reactive({
      isEnterWarp: false,
      barWidth: 0,
      barHeight: 0,
      warpInfo: {
        offsetHeight: 0,
        offsetWidth: 0
      },
      content: {
        offsetHeight: 0,
        offsetWidth: 0
      },
      clientWidth: 0,
      scrollConfig: {
        left: 0,
        top: 0
      },
      isMouseDown: false
    });

    const { 
      scrollViewContentRef,
      clientRef,
      contentRef
    } = useInit({
      config,
      noresize
    });

    const { 
      onMouseenter, 
      onMouseleave, 
      onWarpScroll, 
      isShowBar,
      onScrollBarMouseDown,
      mouseDownConfig
    } = useEvent({config, showBar, height, emit, contentRef });

    const {
      verticalStyle,
      crossStyle,
      warpStyle,
      containerStyle,
      verticalBarStyle,
      crossBarStyle,
      isRenderBar
    } = useBarStyles({
      size,
      height,
      config
    });
    
    return {
      scrollViewContentRef,
      clientRef,
      verticalStyle,
      crossStyle,
      warpStyle,
      containerStyle,
      verticalBarStyle,
      crossBarStyle,
      isRenderBar,
      onWarpScroll,
      onMouseenter,
      onMouseleave,
      onScrollBarMouseDown,
      isShowBar,
      mouseDownConfig,
      contentRef
    }
  }
});

AzScrollView.install = (app: App) => {
  app.component(AzScrollView.name, AzScrollView);
};

export default AzScrollView;
</script>
