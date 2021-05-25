<template>
  <div>

  </div>
</template>

<script lang="ts">
import { App, defineComponent, toRefs } from 'vue';
import vptypes from 'vptypes';

import { userClasses } from "./use/useClasses";

const AzRow = defineComponent({
  name: "AzRow",
  props: {
    gutter: vptypes.oneOfType([vptypes.number()]),
    justify: vptypes.oneOfString([ 'start', 'end', 'center', 'space-around', 'space-between']).def('start'),
    align: vptypes.oneOfString([ 'top', 'middle', 'bottom']).def('top'),
    tag: vptypes.oneOfType([vptypes.string()]).def('div')
  },
  setup (props) {
    const {
      gutter
    } = toRefs(props);
    console.log(userClasses);
    return {
      gutter
    }
  }
})

AzRow.install = (app: App): void => {
  app.component(AzRow.name, AzRow)
}
</script>
