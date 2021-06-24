import path from "path";
import scss from "rollup-plugin-scss";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import replace from "@rollup/plugin-replace";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import ts from "rollup-plugin-typescript2";

import pkg from "./package.json";

const vuePlugin = require("./rollup-plugin-vue/index");
const getPath = (_path) => path.resolve(__dirname, _path);

const name = "AzUi";

const createBanner = () => {
  return `/*!
  * ${pkg.name} v${pkg.version}
  * (c) ${new Date().getFullYear()} Aaron
  * @license MIT
  */`;
};

const extensions = [".js", ".ts", ".tsx", ".scss"];

const tsPlugin = ts({
  tsconfig: getPath("./tsconfig.json"),
  extensions,
});

const createBaseConfig = () => {
  return {
    input: "src/index.ts",
    external: ["vue"],
    plugins: [
      peerDepsExternal(),
      babel(),
      resolve({
        extensions,
      }),
      commonjs(),
      json(),
      tsPlugin,
      vuePlugin({
        css: true
      }),
      scss({
        output: './dist/lib/index.css',
        watch: ["./src/styles"]
      })
    ],
    output: {
      sourcemap: false,
      banner: createBanner(),
      externalLiveBindings: false,
      globals: {
        vue: "Vue"
      }
    }
  };
};

function mergeConfig(baseConfig, configB) {
  const config = Object.assign({}, baseConfig);
  // plugin
  if (configB.plugins) {
    baseConfig.plugins.push(...configB.plugins);
  }

  // output
  config.output = Object.assign({}, baseConfig.output, configB.output);

  return config;
}

function createFileName(formatName) {
  return `dist/az-ui.${formatName}.js`;
}

// es-bundle
const esBundleConfig = {
  plugins: [
    replace({
      __DEV__: `(process.env.NODE_ENV !== 'production')`,
    }),
  ],
  output: {
    file: createFileName("esm-bundler"),
    format: "es",
  },
};

// es-browser
const esBrowserConfig = {
  plugins: [
    replace({
      __DEV__: true,
    }),
  ],
  output: {
    file: createFileName("esm-browser"),
    format: "es",
  },
};

// es-browser.prod
const esBrowserProdConfig = {
  plugins: [
    terser(),
    replace({
      __DEV__: false,
    }),
  ],
  output: {
    file: createFileName("esm-browser.prod"),
    format: "es",
  },
};

// cjs
const cjsConfig = {
  plugins: [
    replace({
      __DEV__: true,
    }),
  ],
  output: {
    file: createFileName("cjs"),
    format: "cjs",
  },
};
// cjs.prod
const cjsProdConfig = {
  plugins: [
    terser(),
    replace({
      __DEV__: false,
    }),
  ],
  output: {
    file: createFileName("cjs.prod"),
    format: "cjs",
  },
};

// global
const globalConfig = {
  plugins: [
    replace({
      __DEV__: true,
      "process.env.NODE_ENV": true,
    }),
  ],
  output: {
    file: createFileName("global"),
    format: "iife",
    name
  },
};
// global.prod
const globalProdConfig = {
  plugins: [
    terser(),
    replace({
      __DEV__: false,
    }),
  ],
  output: {
    file: createFileName("global.prod"),
    format: "iife",
    name
  },
};

const formatConfigs = [
  esBundleConfig,
  esBrowserProdConfig,
  esBrowserConfig,
  cjsConfig,
  cjsProdConfig,
  globalConfig,
  globalProdConfig,
];

function createPackageConfigs() {
  return formatConfigs.map((formatConfig) => {
    return mergeConfig(createBaseConfig(), formatConfig);
  });
}

export default createPackageConfigs();
