<template>
  <button class="az-button"
          :class="classes"
          @click="handleClick"
          :type="nativeType">
    <i>11</i>
    <slot/>
  </button>
</template>

<script lang="ts">
//  todo loading图标以及显示逻辑没有添加
//  todo button-group 还没有写
import { App, defineComponent, toRefs } from 'vue';
import vptypes from 'vptypes';
import { useClasses } from "./use/useClasses";
import { useEvent } from "./use/useEvent";

const AzButton = defineComponent({
  name: 'AzButton',
  props: {
    size: vptypes.oneOfString([ 'big', 'medium', 'small', 'mini']),
    type: vptypes.oneOfString([ 'primary', 'success', 'danger', 'warning', 'text']),
    nativeType: vptypes.oneOfString(['button', 'submit', 'reset']).def('button'),
    loading: vptypes.oneOfType([vptypes.bool()]),
    disabled: vptypes.oneOfType([vptypes.bool()]),
    block: vptypes.oneOfType([vptypes.bool()]),
    round: vptypes.oneOfType([vptypes.bool()]),
    circle: vptypes.oneOfType([vptypes.bool()]),
    waves: vptypes.oneOfType([vptypes.bool()])
  },
  emits: ['click'],
  setup(props, { emit }) {
    const {
      size,
      type,
      loading,
      disabled,
      block,
      round,
      circle
    } = toRefs(props)

    const classes = useClasses({
      size,
      type,
      loading,
      disabled,
      block,
      round,
      circle
    });

    const { handleClick } = useEvent({ emit })

    return {
      classes,
      handleClick
    }
  }
})

AzButton.install = (app: App): void => {
  app.component(AzButton.name, AzButton)
}

export default AzButton;
</script>
