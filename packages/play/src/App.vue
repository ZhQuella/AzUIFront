<template>
  <az-scroll-view :height="600" :noresize="true">
    <h3 v-for="(item,i) of 100" :key="i" class="content">{{item}}</h3>
  </az-scroll-view>
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
