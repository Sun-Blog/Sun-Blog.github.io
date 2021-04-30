module.exports = [
  [
    //先安装在配置， npm install @vuepress-reco/vuepress-plugin-kan-ban-niang --save
    // "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    // {
    //   theme: ["wanko"],
    //   clean: false,
    //   messages: {
    //     welcome: "我是lookroot欢迎你的关注 ",
    //     home: "心里的花，我想要带你回家。",
    //     theme: "好吧，希望你能喜欢我的其他小伙伴。",
    //     close: "再见哦",
    //   },
    //   width: 240,
    //   height: 352,
    // },
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
  ["@vuepress-reco/vuepress-plugin-pagation", {}], //分页插件
  ["ribbon-animation", {
    size: 90,   // 默认数据
    opacity: 0.3,  //  透明度
    zIndex: -1,   //  层级
    opt: {
      // 色带HSL饱和度
      colorSaturation: "80%",
      // 色带HSL亮度量
      colorBrightness: "60%",
      // 带状颜色不透明度
      colorAlpha: 0.65,
      // 在HSL颜色空间中循环显示颜色的速度有多快
      colorCycleSpeed: 6,
      // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
      verticalPosition: "center",
      // 到达屏幕另一侧的速度有多快
      horizontalSpeed: 200,
      // 在任何给定时间，屏幕上会保留多少条带
      ribbonCount: 2,
      // 添加笔划以及色带填充颜色
      strokeSize: 0,
      // 通过页面滚动上的因子垂直移动色带
      parallaxAmount: -0.5,
      // 随着时间的推移，为每个功能区添加动画效果
      animateSections: true
    },
    ribbonShow: false, //  点击彩带  true显示  false为不显示
    ribbonAnimationShow: true  // 滑动彩带
  }],
  ['@vuepress/medium-zoom'],
  ['@vuepress/nprogress'],
  ["vuepress-plugin-boxx"],
  ['@vuepress/last-updated', true]
];
