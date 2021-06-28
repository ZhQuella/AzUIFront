<template>
  <transition name="az-fade">
    <div ref="instance"
        class="az-scrollbar__bar"
        :class="barClass"
        @mousedown="clickTrackHandler"
        v-show="visible">
      <div ref="thumb"
          class="az-scrollbar__thumb"
          @mousedown="clickThumbHandler"
          :style="thumbStyle">
      </div>  
    </div>
  </transition>
</template>

<script lang="ts">
import { App, defineComponent, toRefs } from "vue";

import vptypes from 'vptypes';

import { useBarCollect } from "./use/useCollect";
import { useBarEvent } from "./use/useEvent";
import { useBarStyles } from "./use/useStyles";
import { useBarClasses } from "./use/useClasses";

const Bar = defineComponent({
  name: "AzBar",
  props: {
    type: vptypes.oneOfString(['vertical','horizontal']).def('vertical'),
    position: vptypes.number().def(0),
    size: vptypes.string().def("0px"),
    area: vptypes.string().def("0px")
  },
  setup (props) {
    const {
      type,
      size,
      position,
      area
    } = toRefs(props);

    const { 
      bar, 
      thumb,
      instance,
      wrap,
      scrollbar
    } = useBarCollect({
      type
    });

    const {
      thumbStyle
    } = useBarStyles({
      size,
      position,
      type,
      bar,
      area
    });

    const {
      barClass
    } = useBarClasses({type});

    const {
      clickThumbHandler,
      clickTrackHandler,
      visible
    } = useBarEvent({
      type,
      thumb,
      instance,
      bar,
      wrap,
      scrollbar,
      size
    });

    return {
      clickThumbHandler,
      clickTrackHandler,
      thumbStyle,
      barClass,
      thumb,
      instance,
      visible
    }
  }
})

Bar.install = (app: App) => {
  app.component(Bar.name, Bar);
}

export default Bar;
</script>
