<template>
  <az-scroll-view>
    <h1 v-for="item of 100" :key="item" class="content">{{ item }}</h1>
  </az-scroll-view>
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

<style>
.content {
  width: 200vw;
}
</style>
