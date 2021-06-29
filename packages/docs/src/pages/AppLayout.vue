<template>
  <az-aside width="260px"
            class="app-layout-warp">
    <az-scroll-view :height="height" :noresize="false">
      
    </az-scroll-view>
  </az-aside>
  <az-container>
    <az-scroll-view :height="height" :noresize="false">
      <div class="app-layout-container">
        <router-view />
      </div>
    </az-scroll-view>
  </az-container>
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
.app-layout-warp {
  border-right: 1px solid #ededed;
}
.app-layout-container {
  padding: 20px 50px;
  box-sizing: border-box;
}
</style>
