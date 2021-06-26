<template>
  <az-main>
    <az-header>
      <roof>
        <template v-slot:menu>
          <az-button>456456</az-button>
        </template>
      </roof>
    </az-header>
    <az-container>
      <az-scroll-view :height="height-60" :noresize="true">
        <div class="public-container">
          <router-view />
        </div>
      </az-scroll-view>
    </az-container>
  </az-main>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { useHeight } from "./public/use/useHeight";

import Roof from "./compoents/Public/Roof.vue";

export default defineComponent({
  name: 'App',
  components: {
    Roof
  },
  setup(){
    const { height } = useHeight();

    return {
      height
    }
  }
})
</script>

<style lang="scss">
@import "./style/public/AppStyle.scss";
</style>
