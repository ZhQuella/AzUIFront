<template>
  <az-scroll-view :height="height"
                  :noresize="true">
    {{ height }}
    <div class="index-container">
      <div class="index-banner">
        <img src="../assets/image/home_banner.png" alt="azui banner">
      </div>
      <div class="index-banner">
        <img src="../assets/image/home_banner.png" alt="azui banner">
      </div>
    </div>
  </az-scroll-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHeight } from "../public/use/useHeight";

export default defineComponent({
  name: 'AppLayout',
  setup() {
    const { height } = useHeight();

    return {
      height
    }
  }
})
</script>

<style lang="scss" scoped>
@import "../style/pages/IndexPageStyle.scss";
</style>