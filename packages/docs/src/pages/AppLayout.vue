<template>
  <az-scroll-view :height="height" :noresize="true">
    <router-view />
  </az-scroll-view>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useRoute } from 'vue-router';
import menus from '../menus';
import { useHeight } from "../public/use/useHeight";

export default defineComponent({
  name: 'AppLayout',
  setup() {
    const route = useRoute();

    const data = reactive({
      primaryColor: '#409eff',
    });

    const { height } = useHeight();

    return {
      route,
      menus,
      data,
      height
    }
  },
})
</script>
<style lang="scss">
.demo-layout {
  height: 100vh;
}
.layout-center {
  max-width: 1200px;
  width: 100vw;
  margin: 0 auto;
}
.site-content {
  width: 100%;
  padding: 20px;
  // max-width: 900px;
  margin: 0 auto;
}

.demo-aside {
  border-right: solid 1px #e6e6e6;
}
.demo-header {
  border-bottom: solid 1px #e6e6e6;
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
