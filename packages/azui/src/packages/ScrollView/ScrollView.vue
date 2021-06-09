<template>
  <div>
    132465
  </div>
</template>

<script lang="ts">
import { App, defineComponent } from "vue";

const AzScrollView = defineComponent({
  name: "AzScrollView"
});

AzScrollView.install = (app: App) => {
  app.component(AzScrollView.name, AzScrollView);
};

export default AzScrollView;
</script>

<style lang="scss" scoped>

</style>