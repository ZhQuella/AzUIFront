<template>
  <div class="az-aside"
      :style="{ width: width }">
    <slot />
  </div>
</template>

<script lang="ts">
import { App, defineComponent, inject, onBeforeUnmount } from 'vue';

import vptypes from 'vptypes';
import { layoutInjectKey } from "./type";

const AzAside = defineComponent({
  name: "AzAside",
  props: {
    width: vptypes.string().def("250px")
  },
  setup () {
    const layout = inject(layoutInjectKey);
    layout?.setAside();

    onBeforeUnmount(() => {
      layout?.removeAside();
    });
  }
})

AzAside.install = (app: App) => {
  app.component(AzAside.name, AzAside)
}

export default AzAside;
</script>
