import { resolve } from "path";
import { defineConfig } from "vite";
import path from 'path/posix';
import dts from "vite-plugin-dts";
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "my-lib",
      fileName: "my-lib",
    },
  },
  plugins: [dts({ rollupTypes: true }), tsconfigPaths()], // rollupTypes: crea los .d.ts en un solo file
  resolve: {
    alias: {
      "@/*": path.resolve(__dirname, './src/*')
    }
  }
});
