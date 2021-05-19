---
title: 开发常用知识及网站
date: 2021-05-14
tags:
  - other
categories:
  - other
---

<articleTop></articleTop>

## VScode
[修改背景图](https://www.cnblogs.com/ashidamana/p/9403838.html)

[修改不受支持](https://blog.csdn.net/weixin_44470813/article/details/105693969)

#### 常用插件

```javascript
// Chinese (Simplified) Language Pack for Visual Studio Code
汉化

// open in browser
在快捷菜单中添加了在默认浏览器查看文件选项

// Live Server
具有实时加载功能的小型服务器

// Project Manager
工程项目过多时，shift+cmd+p(shift+ctrl+p) 然后输入project，第一次选择edit Project编辑自己的工程项目，之后就可以直接选择open打开你的项目

// vscode-icons
目录树图标

// Dracula Official
主题

// koroFileHeader
一键生成注释格式

// GitLens — Git supercharged
git源代码管理

// Prettier
自动格式化代码

// Auto Close Tag
自动添加HTML / XML关闭标签（必备）

// Auto Rename Tag
自动重命名配对的HTML / XML标签(必备)

// Bracket Pair Colorizer
用于匹配相同着色的括号

// jQuery Code Snippets
自动提示jQuery代码

// Code Spell Checker
代码拼写检查

// Path Intellisense
路径自动补全（必备）

// HTML CSS Support
在 html 标签上写class 智能提示当前项目所支持的样式（必备）

// HTML Snippets
html 代码片段（必备）

// JavaScript (ES6) code snippets
es6代码片段（必备）

// markdownlint
markdown 语法检查

// Highlight Matching Tag
实时高亮匹配标签

// CSS Peek
可以追踪至样式表中 CSS 类和 ids 定义的地方
```

## vue系列

```javascript
// vetur
语法高亮、智能感知

// VueHelper
vue代码片段

// Vue TypeScript Snippets
vue的 typescript 代码片段

// Vue 2 Snippets
vue 2代码片段
```

## React 系列

```javascript
// React-Native/React/Redux snippets for es6/es7
react代码片段，下载人数超多

// react-beautify
格式化 javascript, JSX, typescript, TSX 文件

// ES7 React/Redux/GraphQL/React-Native snippets
生成react代码块以及快速补全react代码
```



## 日常开发

图片压缩： [TinyPNG](https://tinypng.com/)

浏览器兼容性： [caniuse](https://caniuse.com/)

变量命名： [codelf](https://unbug.github.io/codelf/)

MDN开发者文档： [MDN](https://developer.mozilla.org/zh-CN/)

阿里巴巴图标库：[iconfont](https://www.iconfont.cn/)

在线开发工具：[在线工具](https://tool.lu/c/developer)

[前端开发应知网站（全）](https://wudi98.blog.csdn.net/article/details/91164392)



个人vscode配置

```javascript
{
  //改变注释颜色
  "editor.tokenColorCustomizations": {
    "comments": "#009933" // 注释
  },
  "editor.fontFamily": "‘Cascadia Code’,'黑体'",
  "editor.fontSize": 16,
  "editor.fontWeight": "500",
  "editor.wordWrap": "on",
  "editor.renameOnType": true,
  "editor.multiCursorModifier": "ctrlCmd",
  "editor.formatOnPaste": false,
  "editor.lineHeight": 36,
  "editor.fontLigatures": true,
  "editor.minimap.enabled": false,
  "workbench.startupEditor": "newUntitledFile",
  "explorer.confirmDelete": false,
  "workbench.tips.enabled": false,
  "breadcrumbs.enabled": true,
  "breadcrumbs.filePath": "off",
  "zenMode.hideActivityBar": false,
  "window.menuBarVisibility": "default",
  "workbench.statusBar.visible": true,
  "workbench.activityBar.visible": true,
  "update.enableWindowsBackgroundUpdates": false,
  "update.mode": "manual",
  /* Git相关配置 */
  "terminal.integrated.shell.windows": "D:\\Git\\bin\\bash.exe",
  "git.path": "D:/Git/cmd/git.exe",
  "git.autofetch": true,
  "git.confirmSync": false,
  "git.ignoreWindowsGit27Warning": true,
  "explorer.confirmDragAndDrop": false,
  "liveServer.settings.donotShowInfoMsg": true,
  "window.zoomLevel": 0,
  "files.enableTrash": false,
  "files.autoSave": "afterDelay",
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur"
  },
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "vscode.json-language-features"
  },
  // 工作区颜色主题
  "workbench.colorTheme": "Dracula",
  // 文件图标
  "workbench.iconTheme": "vscode-icons",
  // 终端字体
  "terminal.integrated.fontFamily": "‘Cascadia Code’,'黑体'",
  //  终端字体大小
  "terminal.integrated.fontSize": 16,
  //  终端字重
  "terminal.integrated.fontWeight": 400,
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "window.titleBarStyle": "custom", //首先把标题栏改为非原生的
}
```

