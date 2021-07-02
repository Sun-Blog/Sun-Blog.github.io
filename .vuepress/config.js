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
    "sidebar": true,  //侧边栏

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
    "lineNumbers": true
  },

  'plugins': require("./config/plugins"),
}