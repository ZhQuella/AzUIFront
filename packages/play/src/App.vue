<template>
  <div style="height: 200px"></div>
  <az-scroll-view size="5px">
    <h1 v-for="item of 100" :key="item" class="content">
      {{item === 2?`transform-origin: 50% 50% 0 /这是默认值，中心点为起点
      transform-origin: 100% 100% 0 /以右下角为起点
      transform-origin: 0 0 0 /*以左上角为起点
      
      注意，Chrome和[Safari浏览器要加前缀，即 -webkit-transform-origin
      另，第三个参数是z轴的起点，在[3D转换]中才有作用，scale中无效。
      
      作者：钻石悦
      链接：https://www.jianshu.com/p/c7c36e6eabb7
      来源：简书
      著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。`: item}}
      <br/>
      {{item%3 === 2?"哈哈哈":""}}
    </h1>
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
* {
  margin: 0px;
  padding: 0px;
}
.content {
  width: 20000px;
}
</style>
