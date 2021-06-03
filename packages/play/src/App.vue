<template>
  <az-row :gutter="20"><az-col :sm="{ span: 4, offset: 2 }" :md="8" :lg="{ span: 6, offset: 3 }"></az-col></az-row>

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
