module.exports = {
  title: "南风",
  description: "南风知我意，吹梦到西洲",
  dest: "public",
  head: require("./config/head"),
  theme: "reco",
  themeConfig: {
    author: "南风",
    authorAvatar: "/avatar.jpg",
    type: "blog",
    subSidebar: "auto", //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容

    nav: require("./config/nav"),
    blogConfig: require("./config/blogConfig"),
    friendLink: require("./config/friendLink"),
    other: require("./config/other"),
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: require("./config/plugins"),
};
