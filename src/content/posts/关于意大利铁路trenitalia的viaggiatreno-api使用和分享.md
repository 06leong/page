---
title: 意大利铁路Viaggiatreno API的使用分享
published: 2025-02-02T17:23:00.000+08:00
updated: 2026-03-12T11:19:00.000+08:00
description: About viaggiatreno api
cover: https://img.bellotreno.org/file/frIeP9rz.webp
tags:
  - railway
  - api
  - dev
category: 铁路
draft: false
---
:::tip
Viaggiatreno API用于Trenitalia(包含FS各合资，全资子公司TN,TTX,FSE等)实时车次和车站出发到达信息查询。
这与Trenitalia行程规划lefrecce.it API，RFI 的Monitor Arrivi Partenze live API不同。
:::

在意大利坐火车时，最常用的就是**Trennitalia app** 或网页版的[Trenitalia - ViaggiaTreno ](http://www.viaggiatreno.it/infomobilita/index.jsp)（该网站依然采用HTTP的不安全连接，意铁也是随便凑合在用了）或者[RFI Monitor live(信息最全，包含所有在FS车站运行列车的信息，但是未找到可用API) ](http://www.viaggiatreno.it/infomobilita/index.jsp)来查询车次正晚点信息和车站大屏。
![ViaggiaTreno 老旧的界面](https://img.bellotreno.org/file/CKnAvJeq.webp)
![RFI Monitor](https://img.bellotreno.org/file/vTkXT4r1.webp)

即便是Trenitalia官方在一些信息的显示上也是有一些问题的，例如API内部经常是涵盖`origineEstera / destinazioneEstera`国外始发/终点站的，Trenitalia或Trenord担当的EC列车在搜索列车信息时却只能显示到始发/终点站为边境站(Domodossla, Modane(FR), Ventimiglia, Chiasso(CH), Brennero, Tarvisio Boscoverde, Villa Opicina等站)，购票页面反而可正常显示。。。同样的情况在FNM线路上也出现过(MXP等经过FN线路的列车只能显示到Saronno站，无后续进度)，但是FNM问题已经在2025年打通信息可正常显示了，伦巴第大区子公司Trenord也入驻FS RFI在Greco的调度办公楼。这些都与ViaggiatrenoAPI所获取的json信息也有关系，之后会详细介绍（~~可能FS纯粹的懒~~）。
