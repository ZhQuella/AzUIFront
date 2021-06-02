<template>
  <az-row :gutter="20"
          tag="ul">
    <az-col>11</az-col>
    <az-col>11</az-col>
  </az-row>

  <az-button-group size="mini" type="warning">
    <az-button>1</az-button>
    <az-button>2</az-button>
    <az-button>3</az-button>
    <az-button>4</az-button>
  </az-button-group>

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
