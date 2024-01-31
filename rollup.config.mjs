import { rollupPluginHTML as html } from "@web/rollup-plugin-html";
import copy from "rollup-plugin-copy";

export default {
  input: "src/index.html",
  output: { dir: "dist" },
  plugins: [
    html(),
    copy({
      targets: [
        { src: "src/images/**/*", dest: "dist/images" },
        { src: "src/sounds/**/*", dest: "dist/sounds" },
      ],
    }),
  ],
};
