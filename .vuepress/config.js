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

    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    blogConfig: require("./config/blogConfig"),
    friendLink: require("./config/friendLink"),
    other: require("./config/other"),
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: require("./config/plugins"),
};
