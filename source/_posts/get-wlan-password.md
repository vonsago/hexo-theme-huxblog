---
title: 获取链接过的 WI-FI 密码
author: Von
date: 2019-11-18 18:03:06
subtitle: 获取链接过的wifi密码
tags:
    system
---

<!-- toc -->

## Windows:

管理员运行：
```
for /f "skip=9 tokens=1,2 delims=:" %i in ('netsh wlan show profiles') do  @echo %j | findstr -i -v echo | netsh wlan show profiles %j key=clear
```

还有一种方法：可以获取指定名称的wifi信息
step 1:获取所有链接过的wifi名称

```
netsh wlan show profile
```
step 2:指定wifi名称获取相关信息( 下面代码中wifi_name 是step 1 中列出的名称 )

```
netsh wlan show profile wifi_name key=clear
```

## Mac

打开 `keychain` 钥匙串
选择 系统，种类：密码
通过Wi-Fi名字查看密码
