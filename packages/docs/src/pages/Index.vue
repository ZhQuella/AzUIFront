<template>
  <h1>{{ msg }}</h1>
  <router-link to="/component">文档</router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppLayout',
  setup() {
    
    return {
      msg: "AzUi"
    }
  }
})
</script>

<style lang="scss" scoped>

</style>