<template>
  <div>
    123456
  </div>
</template>

<script lang="ts">
import { App, defineComponent } from 'vue';

const AzContainer = defineComponent({
  name: "AzContainer"
})

AzContainer.install = (app: App): void => {
  app.component(AzContainer.name, AzContainer)
}

export default AzContainer;
</script>

<style lang="scss" scoped>

</style>