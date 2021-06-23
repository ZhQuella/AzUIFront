<template>
  <div class="demo-layout">
    <div>
      <div class="demo-header">
        <div class="layout-center">
          <div align="middle">
            <div :flex="1">
              <Logo />
            </div>
            <div>
              <div mode="horizontal">
                <div>
                  <input v-model="data.primaryColor" />
                </div>
                <div>
                  <a href="https://github.com/JasKang/elenext" target="__blank">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="layout-center">
          <div align="top" :wrap="false">
            <div :flex="'200px'">
              <div style="padding-top: 40px">
                <div mode="vertical" :current-path="route.path">
                  <template v-for="menu in menus" :key="menu.title">
                    <div :title="menu.title">
                      <div v-for="item in menu.items" :key="item" :path="`/${item.name.toLowerCase()}`">
                        {{ `${item.name}-Aaron` }}
                      </div>
                    </div>
                  </template>
                </div>
              </div>
            </div>
            <div :flex="1">
              <div class="site-content">
                <router-view />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRoute } from 'vue-router'
import menus from '../menus'

export default defineComponent({
  name: 'AppLayout',
  setup() {
    const route = useRoute()


    const data = reactive({
      primaryColor: '#409eff',
    })

    return {
      route,
      menus,
      data,
    }
  },
})
</script>
<style lang="scss">
.demo-layout {
  height: 100vh;
}
.layout-center {
  max-width: 1200px;
  width: 100vw;
  margin: 0 auto;
}
.site-content {
  width: 100%;
  padding: 20px;
  // max-width: 900px;
  margin: 0 auto;
}

.demo-aside {
  border-right: solid 1px #e6e6e6;
}
.demo-header {
  border-bottom: solid 1px #e6e6e6;
  // box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
