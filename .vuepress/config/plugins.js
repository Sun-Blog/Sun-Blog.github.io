module.exports = [
  [
    //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
    "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    {
      theme: [
        "wanko",
      ],
      clean: true,
      messages: {
        welcome: "我是lookroot欢迎你的关注 ",
        home: "心里的花，我想要带你回家。",
        theme: "好吧，希望你能喜欢我的其他小伙伴。",
        close: "再见哦",
      },
      width: 240,
      height: 352,
    },
  ],
  [
    //鼠标点击特效 先安装在配置， npm install vuepress-plugin-cursor-effects --save
    "cursor-effects",
    {
      size: 3, // size of the particle, default: 2
      shape: ["circle"], // shape of the particle, default: 'star'
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    },
  ],
  [
    //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
    "dynamic-title",
    {
      showIcon: "/favicon.ico",
      showText: "(/≧▽≦/)咦！又好了！",
      hideIcon: "/failure.ico",
      hideText: "(●—●)喔哟，崩溃啦！",
      recoverTime: 2000,
    },
  ],
  [
    "vuepress-plugin-nuggets-style-copy",
    {
      copyText: "复制代码", //vuepress复制粘贴提示插件P 先安装在配置 npm install vuepress-plugin-nuggets-style-copy --save
      tip: {
        content: "复制成功!",
      },
    },
  ],
  // 樱花插件
  [
    "sakura",
    {
      num: 20, // 默认数量
      show: true, //  是否显示
      zIndex: 9, // 层级
      img: {
        replace: false, // false 默认图 true 换图 需要填写httpUrl地址
        httpUrl: "...", // 绝对路径
      },
    },
  ],
];
