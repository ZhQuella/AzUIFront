<template>
  <div class="az-scroll-view__warp"
      @mouseenter="onMouseenter"
      @mouseleave="onMouseleave"
      :style="warpStyle"
      ref="clientRef">
    <!--竖向滚动条-->
    <transition name="az-fade">
      <div class="az-scroll-bar az-scroll-vertical-bar"
          :style="verticalStyle"
          v-show="isShowBar">
        <div class="az-scroll-bar-content"
            :style="verticalBarStyle"></div>
      </div>
    </transition>
    <!--横向滚动条-->
    <transition name="az-fade">
      <div class="az-scroll-bar az-scroll-cross-bar"
          :style="crossStyle"
          v-show="isShowBar">
        <div class="az-scroll-bar-content"
            :style="crossBarStyle"></div>
      </div>
    </transition>
    <div class="az-scroll-view-content"
        :style="containerStyle"
        @scroll="onWarpScroll">
      <div class="az-scroll__view"
            ref="scrollViewContentRef">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { App, defineComponent, toRefs, reactive } from "vue";
import vptypes from 'vptypes';

import { useBarStyles } from "./use/useStyles";
import { useEvent } from "./use/useEvent";
import { useInit } from "./use/useInit";

//  todo 需要进一步完善
const AzScrollView = defineComponent({
  name: "AzScrollView",
  props: {
    size: vptypes.string().def("10px"),
    showBar: vptypes.oneOfType([vptypes.bool()]).def(true),
    height: vptypes.oneOfType([vptypes.number()]).def(600)
  },
  setup(props){
    const {
      size,
      showBar,
      height
    } = toRefs(props);

    const config = reactive({
      isEnterWarp: false,
      barWidth: 0,
      barHeight: 0,
      warpInfo: {
        offsetHeight: 0,
        offsetWidth: 0
      },
      clientWidth: 0,
      scrollConfig: {
        left: 0,
        top: 0
      }
    });

    const { 
      scrollViewContentRef,
      clientRef
    } = useInit({
      config
    });

    const { onMouseenter, onMouseleave, onWarpScroll, isShowBar } = useEvent({config, showBar});

    const {
      verticalStyle,
      crossStyle,
      warpStyle,
      containerStyle,
      verticalBarStyle,
      crossBarStyle
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

      onWarpScroll,
      onMouseenter,
      onMouseleave,
      isShowBar
    }
  }
});

AzScrollView.install = (app: App) => {
  app.component(AzScrollView.name, AzScrollView);
};

export default AzScrollView;
</script>
