<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { App, defineComponent } from 'vue';

const AzCol = defineComponent({
  name: "AzCol",
  setup(){
    return {}
  }

});

AzCol.install = (app: App): void => {
  app.component(AzCol.name, AzCol)
}

export default AzCol;
</script>

<style lang="scss" scoped>

</style>