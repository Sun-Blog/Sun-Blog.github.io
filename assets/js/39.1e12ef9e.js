(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{564:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"git安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git安装"}},[s._v("#")]),s._v(" Git安装")]),s._v(" "),t("p",[s._v("进入网站https://git-scm.com/下载相应版本并安装，然后在cmd命令行配置")]),s._v(" "),t("h2",{attrs:{id:"初始化git"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化git"}},[s._v("#")]),s._v(" 初始化Git")]),s._v(" "),t("h3",{attrs:{id:"git三个阶段"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git三个阶段"}},[s._v("#")]),s._v(" Git三个阶段")]),s._v(" "),t("p",[s._v("​\t\t\t工作区（Working Directory）、暂存区（Staging Area）、git目录（git directory / Repository）")]),s._v(" "),t("h3",{attrs:{id:"初次运行配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初次运行配置"}},[s._v("#")]),s._v(" 初次运行配置")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 通过如下命令查看所有配置及所在文件夹\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list --show-origin\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"配置用户信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置用户信息"}},[s._v("#")]),s._v(" 配置用户信息")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global user.name "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户名'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" congif --global user.email "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'邮箱'")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"检查配置信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检查配置信息"}},[s._v("#")]),s._v(" 检查配置信息")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 查询git所有配置\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --list\n\n// 检查git某一项的配置\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config user.name\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"获取帮助"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#获取帮助"}},[s._v("#")]),s._v(" 获取帮助")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("verb"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n// 例如\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("help")]),s._v(" config\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"基础命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础命令"}},[s._v("#")]),s._v(" 基础命令")]),s._v(" "),t("h3",{attrs:{id:"查看当前状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看当前状态"}},[s._v("#")]),s._v(" 查看当前状态")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 例如：所在分支、是否有数据未提交\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" status\n\n// 显示如下信息\nOn branch master\nnothing to commit, working tree clean\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"初始化文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化文件夹"}},[s._v("#")]),s._v(" 初始化文件夹")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"查看历史操作记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看历史操作记录"}},[s._v("#")]),s._v(" 查看历史操作记录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 显示所有提交过的版本信息\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log\n\ncommit 41e83ccd67a0c3ee2402aeff1a4688e0e19eb425 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master, origin/master, origin/HEAD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nAuthor: 南风 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("49223092")]),s._v("+Sun-Blog@users.noreply.github.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nDate:   Sun Mar "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("19")]),s._v(":37:38 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" +0800\n    Update README.md\n    \n // 加上参数  --pretty"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline，只会显示版本号和提交时的备注信息\n "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" log --pretty"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("oneline\n \n 41e83ccd67a0c3ee2402aeff1a4688e0e19eb425 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("HEAD -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master, origin/master, origin/HEAD"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" Update README.md\n f61b261bf5dc77f3c32143d5548d97c9365b1e69 Update README.md\n e72873af237dbb986a1ffbde57ef62802fc10afa Update README.md\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("h3",{attrs:{id:"回滚快照"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回滚快照"}},[s._v("#")]),s._v(" 回滚快照")]),s._v(" "),t("p",[s._v("​\t注：快照即提交的版本，每个版本称之为一个快照")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 只移动 HEAD 到指定的 commit，但保留原先暂存区和工作目录的内容，同时会将指定 commit 之后提交的内容设置到暂存区中\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --soft\n// 移动 HEAD 到指定的 commit，同时重置暂存区为指定 commit 的状态"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("将内容从 HEAD 复制到暂存区中"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("，但保留原先的工作目录，同时将添加暂存区的修改撤销到工作目录中。该选项为默认选项，可以省略\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --mixed\n// 移动 HEAD，同时重置暂存区和工作目录到指定 commit。也即是将三个树都重置为指定的 commit。\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard\n// 这三个参数中，只有 soft 和 mixed 是安全的，hard 会令工作丢失，使用时应该小心。\n\n// 回滚指定快照\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reset --hard 快照id号\n\n// 查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" reflog\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"版本对比"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本对比"}},[s._v("#")]),s._v(" 版本对比")]),s._v(" "),t("h3",{attrs:{id:"暂存区与工作区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#暂存区与工作区"}},[s._v("#")]),s._v(" 暂存区与工作区")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v("\n// 比对出暂存区与工作区代码差异\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h3",{attrs:{id:"两个历史快照"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#两个历史快照"}},[s._v("#")]),s._v(" 两个历史快照")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" A快照id号 B快照id号\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"比较仓库和暂存区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#比较仓库和暂存区"}},[s._v("#")]),s._v(" 比较仓库和暂存区")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("diff")]),s._v(" --cached 快照id号\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"文件恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件恢复"}},[s._v("#")]),s._v(" 文件恢复")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// 将暂存区的文件恢复至工作目录\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -- 文件名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h2",{attrs:{id:"文件重命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#文件重命名"}},[s._v("#")]),s._v(" 文件重命名")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" oldname newname\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支"}},[s._v("#")]),s._v(" 分支")]),s._v(" "),t("h3",{attrs:{id:"创建、删除和切换分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建、删除和切换分支"}},[s._v("#")]),s._v(" 创建、删除和切换分支")]),s._v(" "),t("h4",{attrs:{id:"查看所有分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看所有分支"}},[s._v("#")]),s._v(" 查看所有分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" barnch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"新建分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新建分支"}},[s._v("#")]),s._v(" 新建分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch 分支名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"切换分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#切换分支"}},[s._v("#")]),s._v(" 切换分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout 分支名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"创建并切换分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建并切换分支"}},[s._v("#")]),s._v(" 创建并切换分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b 分支名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"删除分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除分支"}},[s._v("#")]),s._v(" 删除分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d 分支名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"合并分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[s._v("#")]),s._v(" 合并分支")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge 分支名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),t("p",[s._v("若想将A分支内容合并至master分支，则需要切换至master分支，然后执行上述命令，分支名为A分支名")])]),s._v(" "),t("h2",{attrs:{id:"合并多次提交"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并多次提交"}},[s._v("#")]),s._v(" 合并多次提交")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("a",{attrs:{href:"https://www.liaoxuefeng.com/wiki/896043488029600/1216289527823648",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考文章"),t("OutboundLink")],1)]),s._v(" "),t("h2",{attrs:{id:"ssh免密登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh免密登录"}},[s._v("#")]),s._v(" ssh免密登录")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("// "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("、执行如下命令，连续点击回车后，生成公私钥\nssh-keygen -t rsa -C "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'邮箱'")]),s._v("\n\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("、此时会在/home/usera/.ssh目录下生成密钥对，将id_rsa.pub文件中内容复制\n\n// "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("、在github或gitlab的设置中找到 setting -"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" ssh公钥；将复制内容粘贴至公钥内容区，保存即可\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h2",{attrs:{id:"提交类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#提交类型"}},[s._v("#")]),s._v(" 提交类型")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("feat: 新增feature\nfix: 修复bug\ndocs: 仅仅修改了文档，如readme.md\nstyle: 仅仅是对格式进行修改，如逗号、缩进、空格等。不改变代码逻辑。\nrefactor: 代码重构，没有新增功能或修复bug\nperf: 优化相关，如提升性能、用户体验等。\ntest: 测试用例，包括单元测试、集成测试。\nchore: 改变构建流程、或者增加依赖库、工具等。\nrevert: 版本回滚\nbuild: 打包构建\nci\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("p",[t("a",{attrs:{href:"https://juejin.cn/post/6974184935804534815",target:"_blank",rel:"noopener noreferrer"}},[s._v("我在工作中是如何使用 git 的"),t("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);