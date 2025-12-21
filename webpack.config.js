const path = require("path");

module.exports = {
  // mode: 模式配置
  // 作用：指定当前的构建环境，webpack会根据不同模式自动优化配置
  mode: "development",
  // 常见属性值：
  // - 'development': 开发模式，不压缩代码，有详细的错误信息
  // - 'production': 生产模式，自动压缩代码，优化性能
  // - 'none': 不使用任何默认优化

  // entry: 入口配置
  // 作用：指定webpack从哪个文件开始打包，这是打包的起点
  entry: "./src/index.js",
  // 常见属性值：
  // - 单入口（字符串）: './src/index.js'
  // - 单入口（对象）: { main: './src/index.js' }
  // - 多入口（对象）: {
  //     app: './src/app.js',
  //     admin: './src/admin.js'
  //   }
  // - 多入口（数组）: ['./src/app.js', './src/vendor.js']

  // output: 输出配置
  // 作用：指定打包后的文件输出到哪里，以及文件名是什么
  output: {
    // filename: 输出文件的名称
    filename: "bundle.js",
    // 常见属性值：
    // - 'bundle.js': 固定名称
    // - '[name].js': 使用入口名称（多入口时使用）
    // - '[name].[hash].js': 带哈希值，用于缓存优化
    // - '[name].[contenthash:8].js': 根据内容生成8位哈希

    // path: 输出目录的绝对路径
    path: path.resolve(__dirname, "dist"),
    // 常见属性值：
    // - path.resolve(__dirname, 'dist'): 输出到 dist 目录
    // - path.resolve(__dirname, 'build'): 输出到 build 目录

    // clean: 是否在打包前清空输出目录
    // clean: true,
    // 常见属性值：true / false
  },

  // module: 模块配置
  // 作用：配置如何处理不同类型的模块（文件）
  module: {
    // rules: 规则数组
    // 作用：定义不同文件类型使用哪个loader处理
    rules: [
      {
        // test: 匹配规则（正则表达式）
        // 作用：匹配哪些文件需要被这个loader处理
        test: /\.js$/,
        // 常见属性值：
        // - /\.js$/: 匹配所有 .js 文件
        // - /\.css$/: 匹配所有 .css 文件
        // - /\.(png|jpg|gif)$/: 匹配图片文件
        // - /\.tsx?$/: 匹配 .ts 和 .tsx 文件

        // exclude: 排除规则
        // 作用：排除不需要处理的文件
        exclude: /node_modules/,
        // 常见属性值：
        // - /node_modules/: 排除 node_modules 目录
        // - /dist/: 排除 dist 目录

        // use: 使用哪个loader
        // 作用：指定用什么工具来处理匹配到的文件
        use: {
          // loader: 加载器名称
          loader: "babel-loader",
          // 常见的loader：
          // - 'babel-loader': 转译 JavaScript
          // - 'css-loader': 处理 CSS
          // - 'style-loader': 把 CSS 插入到页面
          // - 'sass-loader': 处理 SCSS
          // - 'ts-loader': 处理 TypeScript
          // - 'file-loader': 处理文件资源

          // options: loader的配置选项
          options: {
            // 使用我们的自定义插件
            plugins: ["./my-babel-plugin.js"],
          },
        },
      },

      // 示例：如果要处理CSS，可以添加：
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      //   // 注意：多个loader从右向左执行
      //   // 1. css-loader 先把CSS转成JS模块
      //   // 2. style-loader 再把CSS插入到页面
      // }

      // 示例：如果要处理图片，可以添加：
      // {
      //   test: /\.(png|jpg|gif)$/,
      //   type: 'asset/resource'
      //   // webpack5 内置资源模块，不需要额外loader
      // }
    ],
  },

  // plugins: 插件配置（可选）
  // 作用：扩展webpack的功能，做一些loader做不到的事情
  plugins: [
    // 常见插件示例：
    // 1. HtmlWebpackPlugin: 自动生成HTML文件
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
    //   filename: 'index.html'
    // }),
    // 2. MiniCssExtractPlugin: 把CSS提取成单独文件
    // new MiniCssExtractPlugin({
    //   filename: 'css/[name].css'
    // }),
    // 3. CleanWebpackPlugin: 清理输出目录
    // new CleanWebpackPlugin(),
    // 4. DefinePlugin: 定义全局常量
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify('production')
    // })
  ],

  // devServer: 开发服务器配置（可选）
  // 作用：启动本地开发服务器，支持热更新
  // devServer: {
  //   port: 8080,              // 端口号，常见值：8080, 3000, 9000
  //   open: true,              // 是否自动打开浏览器，常见值：true / false
  //   hot: true,               // 是否开启热更新，常见值：true / false
  //   static: './dist',        // 静态文件目录
  //   compress: true,          // 是否启用gzip压缩
  // },

  // devtool: 源码映射配置（可选）
  // 作用：控制如何生成source map，方便调试
  // devtool: 'source-map',
  // 常见属性值：
  // - 'source-map': 生成独立的.map文件，质量最高
  // - 'inline-source-map': map内联到bundle中
  // - 'cheap-source-map': 较快，但精度较低
  // - 'eval': 最快，但调试体验差
  // - false: 不生成source map
};
