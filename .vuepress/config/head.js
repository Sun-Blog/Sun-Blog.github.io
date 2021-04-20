module.exports = [
  ["link", { rel: "icon", href: "/favicon.ico" }],
  [
    "meta",
    {
      name: "viewport",
      content: "width=device-width,initial-scale=1,user-scalable=no",
    },
  ],
  ["link", { rel: "icon", href: "/favicon.ico" }],
  [
    "script",
    {},
    `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?8c8f944e36fca7d15275ed1aae1172cc";
      var s = document.getElementsByTagName("script")[0]; 
      s.parentNode.insertBefore(hm, s);
    })();`,
  ],
];
