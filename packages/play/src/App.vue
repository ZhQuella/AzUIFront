<template>
  <az-container height="500px">
    <az-header>e-header</az-header>
    <az-container>
      <az-aside width="200px">e-aside</az-aside>
      <az-main>e-main</az-main>
    </az-container>
    <az-footer>az-footer</az-footer>
  </az-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup(){
    let type = ref("text")
    function onButtonClick (){
      type.value = "success";
      console.log(type)
    }

    return {
      onButtonClick
    }
  }
})
</script>
