<template>
  <div class="az-button-group">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, App, provide, reactive } from 'vue';
import vptypes from 'vptypes';

const AzButtonConfig = "#AzButtonConfig";

const ButtonGroup = defineComponent({
  name: "AzButtonGroup",
  props: {
    size: vptypes.oneOfString([ 'big', 'medium', 'small', 'mini']),
    type: vptypes.oneOfString([ 'primary', 'success', 'danger', 'warning', 'text']),
  },
  setup(props){
    const config = reactive({
      size: props.size,
      type: props.type
    });
    provide(AzButtonConfig, config);
  }
});

ButtonGroup.install = (app:App):void => {
  app.component(ButtonGroup.name, ButtonGroup)
};
export default ButtonGroup;
</script>
