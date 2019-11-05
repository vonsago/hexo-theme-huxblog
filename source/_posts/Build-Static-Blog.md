---
title: Build-Static-Blog
author: Von
date: 2019-11-03 19:44:44
subtitle: "\" 搭建个人博客，全程免费\""
header-img: bg.jpeg
toc: true
tags:
    - web
---

[TOC]

# Build Blog
> Gitpage + Hexo 搭建个人博客，全程免费。
## 总览

- [Gitpage](https://pages.github.com/) 慷慨的 github 提供给我们的网站托管
- [Freenom](https://www.freenom.com/) A Name for Everyone, free domains 提供免费域名
- [DNSPod](https://www.dnspod.cn/) 提供免费的DNS解析
- [Markdown](https://daringfireball.net/projects/markdown/syntax) 熟悉一些 Markdown 的语法
- [StaticSite](https://www.staticgen.com/) A List of Static Site Generators for JAMstack Sites

## Gitpage

create a new repository named username.github.io
创建一个新的代码库，名字：[github账号名].github.io

## Freenom

- 1.sign in(我是通过google账号登录的) -> Services -> Register a new domain.

- 2.想guo名字，baidu/taobao 之类的想想就算了，想一遍过就想那种生僻的(手动滑稽) -> check availability -> 成功的话就选择免费的那些 get it now! -> 然后 checkout

- 3.结账的时候注意 Period 选最大的期限 12 Months@Free (有钱可以10 years) -> 如果失败了，通过 https://whoer.net/zh 查看当前代理所在国家，要和个人资料里国家填写一致，包括地址街道(不知道的话网上搜个地址吧)也要和所在国家一致，邮编最好也是对应街道的，手机号姓名什么都可随便填。

- 4.成功后不会提示 Attention! -> Services -> My domains 查看你的域名 -> Manage Domain -> Management tools -> Use custom nameservers (enter below) 这里要填写的就是DNSPod域名服务器的域。

## DNSPod

- 登录到控制台 -> DNS管理 -> 我的域名 -> 添加刚才申请到的域名 -> 其中记录类型为 NS 的记录值填写到上面4.的最后一步

- 添加几个记录：这里可以参考 [gitpage的指导](https://help.github.com/en/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain)

| 主机记录 | 记录类型 | 记录值 |
| :-----: | :----: | :---------: |
| www     | CNAME  | [github username].github.io.|
| @       | A      | 185.199.108.153 |
| @       | A      | 185.199.109.153 |
| @       | A      | 185.199.110.153 |
| @       | A      | 185.199.111.153 |

- 点击刷新，我的情况是直接就可以使用

## 最后

在开始创建的代码仓库设置里，设置自己的Custom domain，自定义域名

## StaticSite

选择一个静态站点生成工具，我用的 [hexo](https://hexo.io/zh-cn/docs/)
跟着文档做就好了，主要是配置文件的修改。遇到了一点坑是图片的绝对路径错误 `//img/xxx.jpg` 生成后是这种路径，不过我添加了自定义域名后自动解决了这个问题

常用的hexo命令：
```
hexo new post [name of post]
hexo generate
hexo serve
hexo clean && hexo deploy
```

## 注意

- Freenom 购买免费域名时，当前 ip 所在地和账号资料的位置信息一定要对应

- `hexo deploy`后会覆盖自定义域名后生成的`CNAME`文件。把要保存的文件放在`source`文件夹里。

- 支持TOC

- 支持置顶 top: true

```
npm uninstall hexo-generator-index --save
npm install hexo-generator-index-pin-top --save
```

## 接入评论

https://disqus.com/ -> I want to install Disqus on my site -> 填写信息 重要的是Websit Name 要求全网唯一，设定后不可改变 -> 设置`_config.yaml`的参数`disqus_username=[上一步的Websit Name]`

## 站长工具

**百度统计**
https://tongji.baidu.com/
`_config.yaml` 配置参数 `ba_track_id=ol14dc912ccw01s4cxd12ss0c1acwz`

**Google分析**
https://analytics.google.com/
这里 fork 的 hexo 主题的源码似乎有 bug，需要时请 copy Google Analytics 提示的最新代码
`_config.yaml` 配置参数 `ga_track_id=UA-xxx-x`

## 接入 google 广告

https://www.google.co.in/adsense/start/#/?modal_active=none

代码写在`/hexo-theme-huxblog/themes/huxblog/layout/_partial/footer.ejs`


## 其他

[在线生成ico](http://ico.duduxuexi.com/)
