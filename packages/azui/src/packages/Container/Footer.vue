<template>
  <div class="az-footer"
      :style="{ height: height }">
    <slot />
  </div>
</template>

<script lang="ts">
import { App, defineComponent } from 'vue';
import vptypes from 'vptypes';

const AzFooter = defineComponent({
  name: "AzFooter",
  props: {
    height: vptypes.string().def("60px")
  }
})

AzFooter.install = (app: App) => {
  app.component(AzFooter.name, AzFooter)
}

export default AzFooter;
</script>
