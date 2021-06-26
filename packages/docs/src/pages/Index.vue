<template>
  <div class="index-container">
    <div class="index-banner">
      <h1 v-for="(item) of 100" :key="item">{{item}}</h1>
      <div class="index-banner">
        <img src="../assets/image/home_banner.png" alt="azui banner">
      </div>
      <az-button>aaa</az-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppLayout',
  setup() {
    
  }
})
</script>

<style lang="scss" scoped>
@import "../style/pages/IndexPageStyle.scss";
</style>