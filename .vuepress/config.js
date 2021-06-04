module.exports = {
  "title": "南风",
  "description": "南风知我意，吹梦到西洲。",
  "dest": "dist",
  "head": require('./config/head'),
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  "themeConfig": {
    "type": "blog",
    "sidebar": false,  //侧边栏

    "nav": require('./config/nav'),
    "blogConfig": require('./config/blog'),
    "friendLink": require('./config/friendLink'),

    // 评论
    // "valineConfig": require('./config/valine'),

    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "南风",
    "authorAvatar": "https://p26-tt.byteimg.com/origin/pgc-image/bbc9993bf04442938c3696c4501c6f55.jpg",
    // "record": "你的备案号 ", //icp备案
    "startYear": "2021",
    "info": "南风知我意，吹梦到西洲。",

    // 个人页面相关链接
    "socials": require('./config/socials'),

    // 首页文案
    "mottos": require('./config/mottos'),

    // 首页图片
    "covers": require('./config/covers'),

    "codeTheme": "tomorrow"
  },
  "markdown": {
    "lineNumbers": false
  },

  'plugins': require("./config/plugins"),

  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     // 修改客户端的 webpack 配置
  //     config.output.publicPath = config.mode === 'production'
  //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
  //       : '/';
  //     config.output.filename = "assets/js/[name].js";
  //   }
  // }
}