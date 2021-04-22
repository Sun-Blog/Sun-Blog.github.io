---
title: 实现录音保存及上传
date: 2021-04-22
tags:
  - js
categories:
  - js
---

::: warning 需求
要求实现本地录音，并在结束后将文件以base64的形式发送
:::

::: tip 实现
使用了recorder.js封装库，此库支持大部分已实现`getUserMedia`的移动端、PC端浏览器
:::

### html

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>音频保存上传</title>
    <link rel="stylesheet" href="./audio.css">
</head>

<body>
    <div>
        <input type="button" value="开始录音" onclick="startRecording()">
        <input type="button" value="结束录音" onclick="endRecording()">
    </div>
    <img src="./image//luyin.gif" alt="" id="imgs">  //此处图片可更换
</body>

<script src="https://cdn.jsdelivr.net/gh/xiangyuecn/Recorder@latest/recorder.mp3.min.js"></script>
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
<script src="./audio.js"></script>

</html>
```

### css

```css
input {
    width: 120px;
    height: 40px;
}

img {
    margin: 10px 10px;
    width: 70px;
    height: 70px;
    display: none;
}
```

### js

```js
var rec = Recorder(); // 实例化

//  开始录音
function startRecording() {
    rec.open(function () { // 调用open方法，调起麦克风
        rec.start(); //调用start方法，开始录音
        $('#imgs').css('display','block');
    }, function (msg) { console.log("无法录音:" + msg); })
}

//  结束录音
function endRecording() {
    rec.stop(function (blob, duration) {
        $('#imgs').css('display','none')
        // 将blob文件转成base64纯文本编码，使用普通application/x-www-form-urlencoded表单上传***/
        var reader = new FileReader();  // 实例化文件流对象
        reader.onloadend = function () {
            $.ajax({
                url: 'xxx', //上传接口地址
                type: "POST",
                data: {
                    mime: blob.type, //定义文件格式
                    upfile_b64: (/.+;\s*base64\s*,\s*(.+)$/i.exec(reader.result) || [])[1] //录音文件内容，后端进行base64解码成二进制
                }
                , success: function (res) {
                    console.log("上传成功", res);
                }
                , error: function (err) {
                    console.error("上传失败", err);
                }
            });
        };
        reader.readAsDataURL(blob);
    }, function (msg) { console.log("录音失败:" + msg); });
}
```

[Recorder.js](https://github.com/xiangyuecn/Recorder)