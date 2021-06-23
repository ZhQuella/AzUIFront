<template>
  <div class="az-container"
      :style="styles"
      :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { App, defineComponent, nextTick, toRefs, reactive, provide } from 'vue';
import vptypes from 'vptypes';

import { useContainerStyles } from "./use/useStyle";
import { useContainerClasses } from "./use/useClasses";

import { layoutInjectKey } from "./type";

const AzContainer = defineComponent({
  name: "AzContainer",
  props: {
    inBody: vptypes.oneOfType([vptypes.bool()]).def(false),
    height: vptypes.string(),
    direction: vptypes.oneOfString(['horizontal', 'vertical'])
  },
  setup(props){
    const data = reactive({
      hasAside: false
    })

    const {
      inBody,
      height,
      direction
    } = toRefs(props);

    const styles = useContainerStyles({
      inBody,
      height,
      nextTick
    });

    const classes = useContainerClasses({
      direction,
      data
    });

    provide(layoutInjectKey, {
      setAside: () => {
        data.hasAside = true
      },
    });

    return {
      styles,
      classes
    }
  }
})

AzContainer.install = (app: App): void => {
  app.component(AzContainer.name, AzContainer)
}

export default AzContainer;
</script>

<style lang="scss" scoped>

</style>