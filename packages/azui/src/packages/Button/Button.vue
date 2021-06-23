<template>
  <button class="az-button"
          :class="classes"
          @click="handleClick"
          :type="nativeType">
    <i class="az-icon-loading"
        v-if="loading"></i>
    <span v-if="isShowContainer">
      <slot/>
    </span>
  </button>
</template>

<script lang="ts">
import { App, defineComponent, toRefs, inject } from 'vue';
import vptypes from 'vptypes';
import { useClasses } from "./use/useClasses";
import { useEvent } from "./use/useEvent";
import { useEle } from "./use/useEle";

const AzButtonConfig = "#AzButtonConfig";

const AzButton = defineComponent({
  name: 'AzButton',
  props: {
    size: vptypes.oneOfString([ 'big', 'medium', 'small', 'mini']),
    type: vptypes.oneOfString([ 'primary', 'success', 'danger', 'warning', 'text']),
    nativeType: vptypes.oneOfString(['button', 'submit', 'reset']).def('button'),
    loading: vptypes.oneOfType([vptypes.bool()]),
    disabled: vptypes.oneOfType([vptypes.bool()]),
    block: vptypes.oneOfType([vptypes.bool()]).def(false),
    round: vptypes.oneOfType([vptypes.bool()]).def(false),
    circle: vptypes.oneOfType([vptypes.bool()]).def(false)
  },
  emits: ['click'],
  setup(props, { emit, slots }) {
    const {
      size,
      type,
      loading,
      disabled,
      block,
      round,
      circle
    } = toRefs(props);

    const config = inject(AzButtonConfig, {});

    const classes = useClasses({
      size,
      type,
      loading,
      disabled,
      block,
      round,
      circle,
      config
    });

    const { isShowContainer } = useEle({
      slots,
      loading,
      circle
    })

    const { handleClick } = useEvent({ emit, loading, disabled });

    return {
      classes,
      handleClick,
      isShowContainer
    }
  }
})

AzButton.install = (app: App): void => {
  app.component(AzButton.name, AzButton)
}

export default AzButton;
</script>
