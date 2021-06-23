<template>
  <az-button :disabled="flag"
              @click="onButtonClick"
              circle
              size="big">
    <b class="az-icon-loading"></b>
  </az-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup(){
    let flag = ref(false);

    function onButtonClick (){
      console.log(111)
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
  width: 20000px;
}
</style>
