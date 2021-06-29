<template>
  <az-row justify="space-between"
          class="az-roof">
    <az-col :span="2">
      <router-link to="/" class="logo-warp">
        <img src="../../assets/image/logo.png"
          alt="AzUILogo"
          class="logo">
      </router-link>
    </az-col>
    <az-col :span="12"
            :offset="10">
      <slot name="menu"></slot>    
    </az-col>
  </az-row>
</template>

<script lang="ts">
export default {
  name: "roof",
  setup () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "../../style/public/RoofStyle.scss";
</style>