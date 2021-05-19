---
title: Git总结
date: 2021-04-21
tags:
  - git
categories:
  - other
---

<articleTop></articleTop>

## Git安装

进入网站https://git-scm.com/下载相应版本并安装，然后在cmd命令行配置

## 初始化Git

### 	Git三个阶段

​			工作区（Working Directory）、暂存区（Staging Area）、git目录（git directory / Repository）

### 	初次运行配置

```bash
// 通过如下命令查看所有配置及所在文件夹
git config --list --show-origin
```

### 	配置用户信息

```bash
git config --global user.name '用户名'
git congif --global user.email '邮箱'
```

### 	检查配置信息

```bash
// 查询git所有配置
git config --list

// 检查git某一项的配置
git config user.name
```

### 	获取帮助

```bash
git help <verb>
// 例如
git help config
```

## 基础命令

### 	查看当前状态

```bash
// 例如：所在分支、是否有数据未提交
$ git status

// 显示如下信息
On branch master
nothing to commit, working tree clean
```

### 	初始化文件夹

```bash
git init
```

### 	查看历史操作记录

```bash
// 显示所有提交过的版本信息
git log

commit 41e83ccd67a0c3ee2402aeff1a4688e0e19eb425 (HEAD -> master, origin/master, origin/HEAD)
Author: 南风 <49223092+Sun-Blog@users.noreply.github.com>
Date:   Sun Mar 7 19:37:38 2021 +0800
    Update README.md
    
 // 加上参数  --pretty=oneline，只会显示版本号和提交时的备注信息
 git log --pretty=oneline
 
 41e83ccd67a0c3ee2402aeff1a4688e0e19eb425 (HEAD -> master, origin/master, origin/HEAD) Update README.md
 f61b261bf5dc77f3c32143d5548d97c9365b1e69 Update README.md
 e72873af237dbb986a1ffbde57ef62802fc10afa Update README.md
```

### 回滚快照

​	注：快照即提交的版本，每个版本称之为一个快照

```bash
// 只移动 HEAD 到指定的 commit，但保留原先暂存区和工作目录的内容，同时会将指定 commit 之后提交的内容设置到暂存区中
git reset --soft
// 移动 HEAD 到指定的 commit，同时重置暂存区为指定 commit 的状态(将内容从 HEAD 复制到暂存区中)，但保留原先的工作目录，同时将添加暂存区的修改撤销到工作目录中。该选项为默认选项，可以省略
git reset --mixed
// 移动 HEAD，同时重置暂存区和工作目录到指定 commit。也即是将三个树都重置为指定的 commit。
git reset --hard
// 这三个参数中，只有 soft 和 mixed 是安全的，hard 会令工作丢失，使用时应该小心。

// 回滚指定快照
git reset --hard 快照id号

// 查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作）
git reflog
```

## 版本对比

### 	暂存区与工作区

```bash
git diff
// 比对出暂存区与工作区代码差异
```

### 	两个历史快照

```bash
git diff A快照id号 B快照id号
```

### 	比较仓库和暂存区

```bash
git diff --cached 快照id号
```

## 文件恢复

```bash
// 将暂存区的文件恢复至工作目录
git checkout -- 文件名
```

## 文件重命名

```bash
git mv oldname newname
```

## 分支

### 	创建、删除和切换分支

#### 		查看所有分支

```bash
git barnch
```

#### 		新建分支

```bash
git branch 分支名
```

#### 		切换分支

```bash
git checkout 分支名
```

#### 		创建并切换分支

```bash
git checkout -b 分支名
```

#### 		删除分支

```bash
git branch -d 分支名
```

### 	合并分支

```bash
git merge 分支名
```
::: tip 提示
若想将A分支内容合并至master分支，则需要切换至master分支，然后执行上述命令，分支名为A分支名
:::

## 合并多次提交

```bash
git rebase
```

[参考文章](https://www.liaoxuefeng.com/wiki/896043488029600/1216289527823648)

## ssh免密登录

```bash
// 1、执行如下命令，连续点击回车后，生成公私钥
ssh-keygen -t rsa -C '邮箱'

// 2、此时会在/home/usera/.ssh目录下生成密钥对，将id_rsa.pub文件中内容复制

// 3、在github或gitlab的设置中找到 setting -> ssh公钥；将复制内容粘贴至公钥内容区，保存即可
```

## 提交类型

```bash
feat: 新增feature
fix: 修复bug
docs: 仅仅修改了文档，如readme.md
style: 仅仅是对格式进行修改，如逗号、缩进、空格等。不改变代码逻辑。
refactor: 代码重构，没有新增功能或修复bug
perf: 优化相关，如提升性能、用户体验等。
test: 测试用例，包括单元测试、集成测试。
chore: 改变构建流程、或者增加依赖库、工具等。
revert: 版本回滚
build: 打包构建
ci
```