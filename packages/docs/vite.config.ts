import { defineConfig } from "vite";

import { createPlugin, vueDocFiles } from "vite-plugin-vuedoc";
import markdownItContainer from "markdown-it-container";
import vue from "@vitejs/plugin-vue";

import vitePluginSyncmd from "./scripts/vitePluginSyncmd";

const containers = ["success", "warning", "info", "error"].map((type) => {
  return [
    markdownItContainer,
    type,
    {
      validate: function (params: string) {
        const str = params.trim();
        if (str === type || str.startsWith(`${type} `)) {
          return [str, str === type ? "" : str.substr(type.length + 1)];
        }
        return null;
      },
      render: function (tokens: any[], idx: number) {
        const str = tokens[idx].info.trim();
        const m = [str, str === type ? "" : str.substr(type.length + 1)];
        if (tokens[idx].nesting === 1) {
          // opening tag
          return `<p>${type}--${m[1]}`;
        } else {
          // closing tag
          return "</p>";
        }
      },
    },
  ];
});

export default defineConfig({
  base: "/AzUIFront/",
  server: {
    port: 3000,
  },
  assetsInclude: ["src/assets"],
  optimizeDeps: {
    exclude: ["azui"],
  },
  plugins: [
    vitePluginSyncmd(),
    createPlugin({
      markdownIt: {
        plugins: [...containers],
      },
      highlight: {
        theme: "one-dark",
      },
    }),
    vue({
      include: [...vueDocFiles],
    }),
  ],
});
