module.exports = [
    [
        //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
        "dynamic-title",
        {
            showIcon: "https://p5.toutiaoimg.com/origin/pgc-image/2a94ecb5cdd6475c88dde8859f518987.png",
            showText: "(/≧▽≦/)咦！又好了！",
            hideIcon: "https://p5.toutiaoimg.com/origin/pgc-image/2a94ecb5cdd6475c88dde8859f518987.png",
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
    // 页面滚动时自动激活侧边栏链接的插件
    ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    }],
    "reading-progress", // 阅读进度条
    // 看板娘
    ['vuepress-plugin-helper-live2d', {
        // 是否开启控制台日志打印(default: false)
        log: true,
        live2d: {
            // 是否启用(关闭请设置为false)(default: true)
            enable: true,
            // 模型名称(default: hibiki)
            model: 'koharu',
            display: {
                vOffset: -55, //  垂直偏移(default: 0)
            },
            mobile: {
                show: false // 是否在移动设备上显示(default: false)
            },
            react: {
                opacity: 0.8 // 模型透明度(default: 0.8)
            }
        }
    }],
    // 音乐播放器
    [
        "meting", {
            meting: {
                // 歌单地址-> 如果输入可忽略server|type|mid
                // 但是不知道为什么不写上这三个会报错, 所以我都写上了
                auto: 'https://music.163.com/#/playlist?id=5312894314',
                // 当前服务为netease -> 网易
                server: "netease",
                // 类型为歌单
                type: "playlist",
                // 歌单id
                mid: "5312894314",
            },
            aplayer: {
                // 歌单为随机
                order: 'random',
                // 0为不显示歌词
                lrcType: 0,
                // 音量
                volume: 0.15,
                // 开启迷你模式
                mini: true,
                // 自动播放
                autoplay: false
            },
        },
    ],
    // 图片查看器
    ['@vuepress/medium-zoom', {
        selector: 'img.zoom-custom-imgs',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
          margin: 16
        }
      }]
]