<template>
  <button class="az-button az-button-primary is-loading" disabled>
    <slot/>
  </button>
</template>

<script lang="ts">
import { App, defineComponent } from 'vue'
import vptypes from 'vptypes';

const AzButton = defineComponent({
  name: 'AzButton',
  props: {
    size: vptypes.oneOfString(['large', 'small'])
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    
  }
})

AzButton.install = (app: App): void => {
  app.component(AzButton.name, AzButton)
}

export default AzButton;
</script>
