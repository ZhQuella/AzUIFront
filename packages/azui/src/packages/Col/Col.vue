<template>
  <component class="az-col"
            :style="styles"
            :class="classes"
            :is="tag">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { App, defineComponent, inject, toRefs } from 'vue';
import vptypes from 'vptypes';

import { useStyles } from "./use/useStyle";
import { useClasses, SizeProp } from "./use/useClasses";

const AzRowConfig = "#AzRowConfig";

const AzCol = defineComponent({
  name: "AzCol",
  props: {
    span: vptypes.oneOfType([vptypes.number()]),
    order: vptypes.oneOfType([vptypes.number()]),
    offset: vptypes.oneOfType([vptypes.number()]),
    push: vptypes.oneOfType([vptypes.number()]),
    pull: vptypes.oneOfType([vptypes.number()]),
    tag: vptypes.oneOfType([vptypes.string()]).def("div"),
    xs: vptypes.oneOfType([vptypes.number(), vptypes.object<SizeProp>()]),
    sm: vptypes.oneOfType([vptypes.number(), vptypes.object<SizeProp>()]),
    md: vptypes.oneOfType([vptypes.number(), vptypes.object<SizeProp>()]),
    lg: vptypes.oneOfType([vptypes.number(), vptypes.object<SizeProp>()]),
    xl: vptypes.oneOfType([vptypes.number(), vptypes.object<SizeProp>()]),
    flex: vptypes.oneOfType([vptypes.string(), vptypes.number()])
  },
  setup(props){
    const {
      span
    } = toRefs(props);
    const config = inject(AzRowConfig, {});
    const styles = useStyles({config});
    const classes = useClasses({ span, props});
    return {
      styles,
      classes
    }
  }
});

AzCol.install = (app: App): void => {
  app.component(AzCol.name, AzCol)
}

export default AzCol;
</script>

<style lang="scss" scoped>

</style>