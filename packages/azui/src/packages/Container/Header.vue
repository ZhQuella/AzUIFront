<template>
  <div class="az-header"
      :style="{height: height}">
    <slot />
  </div>
</template>

<script lang="ts">
import { App, defineComponent } from 'vue';
import vptypes from 'vptypes';

const AzHeader = defineComponent({
  name: "AzHeader",
  props: {
    height: vptypes.string().def("60px")
  }
})

AzHeader.install = (app: App) => {
  app.component(AzHeader.name, AzHeader)
}

export default AzHeader;
</script>
