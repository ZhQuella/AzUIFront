<template>
  <div>
    123
  </div>
</template>

<script lang="ts">
import { defineComponent, App } from "vue";

import vptypes from 'vptypes';

const AzMenu = defineComponent({
  name: "AzMenu",
  props: {
    mode: vptypes.oneOfString(['horizontal', 'vertical', 'popper']).def('horizontal')
  },
  setup () {
    return {}
  }
})

AzMenu.install = (app: App) => {
  app.component(AzMenu.name, AzMenu);
}

export default AzMenu;
</script>
