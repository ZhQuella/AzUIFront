<template>
  <div class="az-main">
    <slot />
  </div>
</template>

<script lang="ts">
import { App, defineComponent } from 'vue';

const AzMain = defineComponent({
  name: "AzMain",
  setup () {
    return {}
  }
})

AzMain.install = (app: App) => {
  app.component(AzMain.name, AzMain)
}

export default AzMain;
</script>
