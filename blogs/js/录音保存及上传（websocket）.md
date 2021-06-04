---
title: 录音保存及上传（websocket）
date: 2021-04-27
cover: http://browser9.qhimg.com/bdr/__85/t01a270ac5b8d390f74.jpg
tags:
  - js
categories:
  - JS知识
---

::: warning 需求
要求实现本地录音，并在结束后将文件以base64的形式发送
:::

::: tip 实现
使用了recorder.js封装库，此库支持大部分已实现`getUserMedia`的移动端、PC端浏览器；并参考了[ LiveGBS GB28181](https://gitee.com/livegbs/GB28181-Server/blob/master/web_src/components/Play.vue)相关部分代码
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
var ws = null;
var recorder = null;

//  开始录音
function startRecording() {
    if (!ws) {
            ws = new WebSocket(wsTalkURL());
            if(ws.readyState == 0) {
                layer.msg("正在建立连接，请稍后");
                console.log("ws talk connecting");
            }
            ws.onopen = evt => {
                layer.msg("连接成功，开始语音");
                $('.VoiceChat').html('正在录音');
                console.log("ws talk open");
                ws = ws;
            }
            ws.onerror = evt => {
                console.log("ws talk error", evt);
            }
        }
        if (recorder) {
            recorder.start();
            return;
        }
        LiveRecorder.get((rec, err) => {
            if (err) {
                alert(err);
                return
            }
            recorder = rec;
            recorder.start();
        }, {
            sampleBits: 16,
            sampleRate: 8000,
            pcmCallback: pcm => {
                var reader = new window.FileReader();
                reader.onloadend = () => {
                    var base64 = reader.result;
                    var base64 = base64.split(',')[1];
                    var messageObj = { serial: liveid, channel: value, audio: base64 };
                    var messageJson = JSON.stringify(messageObj);
                    if (ws) {
                        ws.send(messageJson);
                    }
                }
                reader.readAsDataURL(pcm);
            }
        })
}

//  结束录音
function endRecording() {
    if (recorder) {
            recorder.stop();
            $('.VoiceChat').html('语音通话');
        }
        if (ws) {
            ws = new WebSocket(wsTalkURL());
            ws.close();
            ws = null;
            layer.msg("语音关闭");
        }
}

function wsTalkURL() {
        var protocal = "ws:";
        if (location.protocol.startsWith("https")) {
            protocal = "wss:";
        }
        return 'wss://echo.websocket.org';
    }
```

参考文章

[Recorder.js](https://github.com/xiangyuecn/Recorder)

[ LiveGBS GB28181](https://gitee.com/livegbs/GB28181-Server/tree/master)

[WebSocket 教程](http://www.ruanyifeng.com/blog/2017/05/websocket.html)