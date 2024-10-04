// vite.config.js
import { defineConfig } from "file:///G:/%E5%85%B6%E4%BB%96%E9%9B%BB%E8%85%A6/%E6%88%91%E7%9A%84%E9%9B%BB%E8%85%A6/Github/2024-web-layout-training-final-Just%20Survey/node_modules/vite/dist/node/index.js";
import { ViteEjsPlugin } from "file:///G:/%E5%85%B6%E4%BB%96%E9%9B%BB%E8%85%A6/%E6%88%91%E7%9A%84%E9%9B%BB%E8%85%A6/Github/2024-web-layout-training-final-Just%20Survey/node_modules/vite-plugin-ejs/index.js";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { glob } from "file:///G:/%E5%85%B6%E4%BB%96%E9%9B%BB%E8%85%A6/%E6%88%91%E7%9A%84%E9%9B%BB%E8%85%A6/Github/2024-web-layout-training-final-Just%20Survey/node_modules/glob/dist/mjs/index.js";
import liveReload from "file:///G:/%E5%85%B6%E4%BB%96%E9%9B%BB%E8%85%A6/%E6%88%91%E7%9A%84%E9%9B%BB%E8%85%A6/Github/2024-web-layout-training-final-Just%20Survey/node_modules/vite-plugin-live-reload/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///G:/%E5%85%B6%E4%BB%96%E9%9B%BB%E8%85%A6/%E6%88%91%E7%9A%84%E9%9B%BB%E8%85%A6/Github/2024-web-layout-training-final-Just%20Survey/vite.config.js";
function moveOutputPlugin() {
  return {
    name: "move-output",
    enforce: "post",
    apply: "build",
    async generateBundle(options, bundle) {
      for (const fileName in bundle) {
        if (fileName.startsWith("pages/")) {
          const newFileName = fileName.slice("pages/".length);
          bundle[fileName].fileName = newFileName;
        }
      }
    }
  };
}
var vite_config_default = defineConfig({
  // base 的寫法：
  // base: '/Repository 的名稱/'
  base: "/2024-web-layout-training-final-Just-Survey/",
  plugins: [
    liveReload(["./layout/**/*.ejs", "./pages/**/*.ejs", "./pages/**/*.html"]),
    ViteEjsPlugin(),
    moveOutputPlugin()
  ],
  server: {
    // 啟動 server 時預設開啟的頁面
    open: "pages/index.html"
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob.sync("pages/**/*.html").map((file) => [
          path.relative("pages", file.slice(0, file.length - path.extname(file).length)),
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      )
    },
    outDir: "dist"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJHOlxcXFxcdTUxNzZcdTRFRDZcdTk2RkJcdTgxNjZcXFxcXHU2MjExXHU3Njg0XHU5NkZCXHU4MTY2XFxcXEdpdGh1YlxcXFwyMDI0LXdlYi1sYXlvdXQtdHJhaW5pbmctZmluYWwtSnVzdCBTdXJ2ZXlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkc6XFxcXFx1NTE3Nlx1NEVENlx1OTZGQlx1ODE2NlxcXFxcdTYyMTFcdTc2ODRcdTk2RkJcdTgxNjZcXFxcR2l0aHViXFxcXDIwMjQtd2ViLWxheW91dC10cmFpbmluZy1maW5hbC1KdXN0IFN1cnZleVxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRzovJUU1JTg1JUI2JUU0JUJCJTk2JUU5JTlCJUJCJUU4JTg1JUE2LyVFNiU4OCU5MSVFNyU5QSU4NCVFOSU5QiVCQiVFOCU4NSVBNi9HaXRodWIvMjAyNC13ZWItbGF5b3V0LXRyYWluaW5nLWZpbmFsLUp1c3QlMjBTdXJ2ZXkvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IFZpdGVFanNQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1lanMnO1xuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcbmltcG9ydCBwYXRoIGZyb20gJ25vZGU6cGF0aCc7XG5pbXBvcnQgeyBnbG9iIH0gZnJvbSAnZ2xvYic7XG5cbmltcG9ydCBsaXZlUmVsb2FkIGZyb20gJ3ZpdGUtcGx1Z2luLWxpdmUtcmVsb2FkJztcblxuZnVuY3Rpb24gbW92ZU91dHB1dFBsdWdpbigpIHtcbiAgcmV0dXJuIHtcbiAgICBuYW1lOiAnbW92ZS1vdXRwdXQnLFxuICAgIGVuZm9yY2U6ICdwb3N0JyxcbiAgICBhcHBseTogJ2J1aWxkJyxcbiAgICBhc3luYyBnZW5lcmF0ZUJ1bmRsZShvcHRpb25zLCBidW5kbGUpIHtcbiAgICAgIGZvciAoY29uc3QgZmlsZU5hbWUgaW4gYnVuZGxlKSB7XG4gICAgICAgIGlmIChmaWxlTmFtZS5zdGFydHNXaXRoKCdwYWdlcy8nKSkge1xuICAgICAgICAgIGNvbnN0IG5ld0ZpbGVOYW1lID0gZmlsZU5hbWUuc2xpY2UoJ3BhZ2VzLycubGVuZ3RoKTtcbiAgICAgICAgICBidW5kbGVbZmlsZU5hbWVdLmZpbGVOYW1lID0gbmV3RmlsZU5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICAvLyBiYXNlIFx1NzY4NFx1NUJFQlx1NkNENVx1RkYxQVxuICAvLyBiYXNlOiAnL1JlcG9zaXRvcnkgXHU3Njg0XHU1NDBEXHU3QTMxLydcbiAgYmFzZTogJy8yMDI0LXdlYi1sYXlvdXQtdHJhaW5pbmctZmluYWwtSnVzdC1TdXJ2ZXkvJyxcbiAgcGx1Z2luczogW1xuICAgIGxpdmVSZWxvYWQoWycuL2xheW91dC8qKi8qLmVqcycsICcuL3BhZ2VzLyoqLyouZWpzJywgJy4vcGFnZXMvKiovKi5odG1sJ10pLFxuICAgIFZpdGVFanNQbHVnaW4oKSxcbiAgICBtb3ZlT3V0cHV0UGx1Z2luKCksXG4gIF0sXG4gIHNlcnZlcjoge1xuICAgIC8vIFx1NTU1Rlx1NTJENSBzZXJ2ZXIgXHU2NjQyXHU5ODEwXHU4QTJEXHU5NThCXHU1NTVGXHU3Njg0XHU5ODAxXHU5NzYyXG4gICAgb3BlbjogJ3BhZ2VzL2luZGV4Lmh0bWwnLFxuICB9LFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgIGdsb2JcbiAgICAgICAgICAuc3luYygncGFnZXMvKiovKi5odG1sJylcbiAgICAgICAgICAubWFwKChmaWxlKSA9PiBbXG4gICAgICAgICAgICBwYXRoLnJlbGF0aXZlKCdwYWdlcycsIGZpbGUuc2xpY2UoMCwgZmlsZS5sZW5ndGggLSBwYXRoLmV4dG5hbWUoZmlsZSkubGVuZ3RoKSksXG4gICAgICAgICAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoZmlsZSwgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICAgXSlcbiAgICAgICksXG4gICAgfSxcbiAgICBvdXREaXI6ICdkaXN0JyxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF3YixTQUFTLG9CQUFvQjtBQUNyZCxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLHFCQUFxQjtBQUM5QixPQUFPLFVBQVU7QUFDakIsU0FBUyxZQUFZO0FBRXJCLE9BQU8sZ0JBQWdCO0FBTnNOLElBQU0sMkNBQTJDO0FBUTlSLFNBQVMsbUJBQW1CO0FBQzFCLFNBQU87QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxJQUNQLE1BQU0sZUFBZSxTQUFTLFFBQVE7QUFDcEMsaUJBQVcsWUFBWSxRQUFRO0FBQzdCLFlBQUksU0FBUyxXQUFXLFFBQVEsR0FBRztBQUNqQyxnQkFBTSxjQUFjLFNBQVMsTUFBTSxTQUFTLE1BQU07QUFDbEQsaUJBQU8sUUFBUSxFQUFFLFdBQVc7QUFBQSxRQUM5QjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGO0FBRUEsSUFBTyxzQkFBUSxhQUFhO0FBQUE7QUFBQTtBQUFBLEVBRzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLFdBQVcsQ0FBQyxxQkFBcUIsb0JBQW9CLG1CQUFtQixDQUFDO0FBQUEsSUFDekUsY0FBYztBQUFBLElBQ2QsaUJBQWlCO0FBQUEsRUFDbkI7QUFBQSxFQUNBLFFBQVE7QUFBQTtBQUFBLElBRU4sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLGVBQWU7QUFBQSxNQUNiLE9BQU8sT0FBTztBQUFBLFFBQ1osS0FDRyxLQUFLLGlCQUFpQixFQUN0QixJQUFJLENBQUMsU0FBUztBQUFBLFVBQ2IsS0FBSyxTQUFTLFNBQVMsS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLEtBQUssUUFBUSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQUEsVUFDN0UsY0FBYyxJQUFJLElBQUksTUFBTSx3Q0FBZSxDQUFDO0FBQUEsUUFDOUMsQ0FBQztBQUFBLE1BQ0w7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsRUFDVjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
