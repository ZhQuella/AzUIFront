<template>
  <button
    class="az-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'az-button--' + type : '',
      buttonSize ? 'az-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
  >
    <i class="az-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
import { computed, inject, toRefs, unref } from "vue";

export default {
  name: "AzButton",

  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    nativeType: {
      type: String,
      default: "button",
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },
  emits: ["click"],
  setup(props, ctx) {
    const { size, disabled } = toRefs(props);

    const buttonSize = useButtonSize(size);
    const buttonDisabled = useButtonDisabled(disabled);

    const handleClick = (evt) => {
      ctx.emit("click", evt);
    };

    return {
      handleClick,
      buttonSize,
      buttonDisabled,
    };
  },
};

const useButtonSize = (size) => {
  const elFormItem = inject("elFormItem", {});

  const _elFormItemSize = computed(() => {
    return unref(elFormItem.elFormItemSize);
  });

  const buttonSize = computed(() => {
    return size.value || _elFormItemSize.value;
  });

  return buttonSize;
};

const useButtonDisabled = (disabled) => {
  const azForm = inject("azForm", {});

  const buttonDisabled = computed(() => {
    return disabled.value || unref(azForm.disabled);
  });

  return buttonDisabled;
};
</script>
