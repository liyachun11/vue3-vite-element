const path = require("path");
// vite.config.js # or vite.config.ts
console.log(path.resolve(__dirname, "./src"));

module.exports = {
  alias: {
    // 键必须以斜线开始和结束
    "/@/": path.resolve(__dirname, "./src"),
  },
  /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
  base: "./",
  /**
   * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
   * @default 'dist'
   */
  outDir: "dist",
  port: 3000,
  // 是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
  // 引入第三方的配置
  //   optimizeDeps: {
  //     include: ["moment", "echarts", "axios", "mockjs"],
  //   },
  // 打包配置
  build: {
    target: 'modules', // 设置最终构建的浏览器兼容目标。modules:支持原生 ES 模块的浏览器
    outDir: 'dist', // 指定输出路径
    assetsDir: 'assets', // 指定生成静态资源的存放路径
    sourcemap: false, // 构建后是否生成 source map 文件
    minify: 'terser' // 混淆器，terser构建后文件体积更小
  },
  proxy: {
    // 如果是 /api 打头，则访问地址如下
    "/api": {
      target: "http://test.imydao.cn:13001/",
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ""),
    },
  },
};
