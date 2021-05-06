<template>
  <button class="az-button"
          :class="classes">
    <slot/>
  </button>
</template>

<script lang="ts">
import { App, defineComponent, toRefs } from 'vue';
import vptypes from 'vptypes';

import { userClasses } from "./use/useClasses";

const AzButton = defineComponent({
  name: 'AzButton',
  props: {
    size: vptypes.oneOfString([ 'big', 'medium', 'small', 'mini']),
    type: vptypes.oneOfString([ 'primary', 'success', 'danger', 'warning', 'text']),
    loading: vptypes.bool().def(false),
    disabled: vptypes.bool().def(false)
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const {
      size,
      type,
      loading,
      disabled
    } = toRefs(props)

    const classes = userClasses({
      size,
      type,
      loading,
      disabled
    });
    
    return {
      classes
    }
  }
})

AzButton.install = (app: App): void => {
  app.component(AzButton.name, AzButton)
}

export default AzButton;
</script>
