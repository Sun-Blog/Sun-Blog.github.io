module.exports = [
    [
        //动态标题 先安装在配置， npm install vuepress-plugin-dynamic-title --save
        "dynamic-title",
        {
            showIcon: "/favicon.jpg",
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
    // 页面滚动时自动激活侧边栏链接的插件
    ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    }],
    "reading-progress", // 阅读进度条
]