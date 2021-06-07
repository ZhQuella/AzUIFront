<template>
  <az-container>
    
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
