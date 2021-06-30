<template>
  <az-menu></az-menu>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup(){
    let flag = ref(false);

    function onButtonClick (){
      flag.value = true;
    }
    return {
      onButtonClick,
      flag
    }
  }
})
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}
.content {
  width: 1273px;
}
</style>
