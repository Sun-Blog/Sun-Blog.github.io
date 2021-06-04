module.exports = [
  [
    "link",
    {
      "rel": "icon",
      "href": "https://p26-tt.byteimg.com/origin/pgc-image/bbc9993bf04442938c3696c4501c6f55.jpg"
    }
  ],
  [
    "meta",
    {
      "name": "viewport",
      "content": "width=device-width,initial-scale=1,user-scalable=no"
    }
  ],
  ['script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?8c8f944e36fca7d15275ed1aae1172cc";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
          `] //百度统计
]