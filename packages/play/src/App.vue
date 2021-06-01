<template>
  <az-row :gutter="20"
          tag="ul">
    <az-col>11</az-col>
    <az-col>11</az-col>
  </az-row>
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
