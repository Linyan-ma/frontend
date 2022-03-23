// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import shebang from "rollup-plugin-preserve-shebang";

// const watchOptions = {...};
// const watcher = rollup.watch(watchOptions);
export default {
  input: "index.ts",
  output: {
    file: "./dist/index.js",
    format: "cjs",
  },
  plugins: [shebang(), json(), typescript(), commonjs()],
};
