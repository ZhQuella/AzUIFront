<template>
  <az-main>
    <az-header>
      <roof>
        <template v-slot:menu>
          
        </template>
      </roof>
    </az-header>
    <az-container>
      <router-view />
    </az-container>
  </az-main>
</template>

<script lang="ts">

import { defineComponent } from 'vue';


import Roof from "./compoents/Public/Roof.vue";

export default defineComponent({
  name: 'App',
  components: {
    Roof
  },
  setup(){

    return {
    }
  }
})
</script>

<style lang="scss">
@import "./style/public/AppStyle.scss";
</style>
