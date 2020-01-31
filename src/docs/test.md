
---
title: 首页
lang: zh-CN
---


{{ 1 + 1 }}

<span v-for="i in 3">{{ i }} </span>

* [演示](./presentation/README.md) <!-- 具体文件可以使用 .md 结尾（推荐） -->

* [文章](./articles/) <!-- 跳转到指定目录根部的 README.md -->

::: tip
这是一个提示 {{ 1 + 1 }}
:::

::: tip 网站的元数据
{{ $page }}
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，Kubernetes！')
console.log('你好，Kubernotes！')
```
:::

```js
console.log('你好，Kubernetes！')
console.log('你好，Kubernotes！')
```
