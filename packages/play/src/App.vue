<template>
  <az-button :type="type"
            circle
            size="big">12</az-button>
  <az-button @click="onButtonClick">Click Me!</az-button>
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
      type,
      onButtonClick
    }
  }
})
</script>
