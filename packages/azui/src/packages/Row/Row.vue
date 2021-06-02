<template>
  <component class="az-row"
          :style="styles"
          :class="classes"
          :is="tag">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { App, defineComponent, toRefs } from 'vue';
import vptypes from 'vptypes';

import { useStyles } from "./use/useStyles";
import { useClasses } from "./use/useClass";

const AzRow = defineComponent({
  name: "AzRow",
  props: {
    gutter: vptypes.oneOfType([vptypes.number()]).def(0),
    justify: vptypes.oneOfString([ 'start', 'end', 'center','space-between','space-around']).def('start'),
    align: vptypes.oneOfString([ 'top', 'middle', 'bottom']).def('top'),
    tag: vptypes.oneOfType([vptypes.string()]).def('div'),
    wrap: vptypes.oneOfType([vptypes.bool()]).def(true)
  },
  setup (props) {
    const {
      gutter,
      justify,
      align,
      wrap
    } = toRefs(props);

    const styles = useStyles(gutter);
    const classes = useClasses({
      justify,
      align,
      wrap
    });

    return {
      gutter,
      styles,
      classes
    }
  }
})

AzRow.install = (app: App): void => {
  app.component(AzRow.name, AzRow)
}

export default AzRow;
</script>
