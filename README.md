<h1 align="center">HEUindex</h1>

<div align="center">

HEUer 专属导航页 - 衍生自南哪指南

</div></br>


> 🏠 这儿就是咱的家了

**🤣咦？好像这所学校也不错>v<**

* 电脑端 / 移动端适配
* 可切换谷歌 / 必应 / 百度搜索
* 哈工程相关资源网站整理
* PWA 缓存技术，快速加载

## 说明

本项目的一些修改：

* [新增] 优化的、适用于 Fork 仓库的 GitHub Actions
* [新增] 适用于 Cloudflare Workers Sites 的部署方式
* [修改] 整理生成文件夹路径为 css js fonts img
* [修改] 添加 `crossorigin` 属性防止引用模块跨源报错
* [修改] 替换原腾讯内置浏览器提示图片和遮罩效果
* [修改] 删除栏目较少时影响观感的尾部块

本项目的部署地址：

* https://heu.today 部署于 Cloudflare Workers Sites
* https://hi.monsterx.cn 部署于腾讯云静态网站托管和阿里云全球 CDN。

本项目的其他说明：

* 首次加载完成后为了更好的访问体验，建议不要删除站点缓存。
* 贵校也想整一个？ Fork 后修改 `public/data.json` 和部署方式。
* 开发与 Debug？ `yarn install|serve|lint|build`
* 投稿、建议或意见？ [Issue](https://github.com/monsterxcn/Life-in-HEU/issues/new)

<details><summary><b>Cloudflare Workers Sites 部署指北</b></summary><br>

参考《[将 Hexo 部署到 Cloudflare Workers Site 上的趟坑记录 | Sukka's Blog](https://blog.skk.moe/post/deploy-blog-to-cf-workers-site/#%E8%87%AA%E5%AE%9A%E4%B9%89-Cloudflare-Workers-Site-%E7%9A%84%E8%A1%8C%E4%B8%BA)》，本仓库尝试将导航页部署至 Cloudflare Workers Sites 以提升浏览体验。注意这需要开启 Workers Unlimited （每月 5 美元），如需体验可邮件联系我获取测试 Workers Unlimited 域名。

以下部署过程仅供参考。

 - 创建 Cloudflare 域名解析（可选）

这部分是 Workers 绑定域名的范畴，如果不需要可以跳过。在 Cloudflare DNS 解析处新建域名 A 记录，值随意，务必启用 Cloudflare Proxy。然后在 Cloudflare Workers 处添加 Route，指向一个空 Worker （后续 GitHub Action 会自动部署）。如果新建路由时这里不指向任何 Workers 则 GitHub Action 部署完成后需将此处指向新生成的 Workers

 - **安装 Wrangler CLI**

```bash
$ npm i @cloudflare/wrangler -g
# yarn global add @cloudflare/wrangler
```

 - **创建 Cloudflare API Token**

从 [这里](https://dash.cloudflare.com/profile/api-tokens) 申请一个 API Token

 - **创建 GitHub Repo Secrets**

在 [这里](https://github.com/monsterxcn/Life-in-HEU/settings/secrets) 的 GitHub 仓库的设置页面添加 Secrets 环境变量，内容为之前生成的 Cloudflare 的 API Token

 - **修改 GitHub Actions**

如果绑定域名，请参考现有 wrangler.toml 修改 `account_id` `route` `zone_id` 等。如果没有绑定域名，请使用默认域名，参考下方示例自行修改 wrangler.toml

```
name = "workers-site"
type = "webpack"
workers_dev = true
account_id = ""

[site]
bucket = "./dist"
entry-point = "workers-site"
```

</details>


## LICENSE

MIT @ [idealclover](https://github.com/idealclover)

MIT @ [monsterxcn](https://github.com/monsterxcn)
