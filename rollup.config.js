import typescript from "rollup-plugin-typescript";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const configs = {
  input: "./src/index.ts",
  plugins: [resolve(), commonjs(), typescript(), terser()],
  output: [
    {
      name: "TrackSession",
      format: "iife",
      file: "dist/tracksession.min.js",
      sourcemap: true
    }
  ]
};
export default configs;
