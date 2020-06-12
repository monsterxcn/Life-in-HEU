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

本项目的一些修改：

* [新增] 适用于 Fork 仓库的 GitHub Actions（雾
* [新增] 适用于 Cloudflare Workers Sites 的部署方式
* [修改] 规整文件夹路径，现在只有 css js fonts img 了
* [修改] 为模块添加 crossorigin 属性防止跨源报错
* [修改] 腾讯内置浏览器提示，css 替换了丑丑的图片和遮罩
* [修改] 尾部 div 简化，删掉了栏目较少时影响观感的尾部块

**注意**： https://heu.today 托管于 GitHub Pages，在 Cloudflare CDN 加持下国内首次访问速度依旧十分不理想，没有具备一个导航页该有的速度，预计将在 8 月初优化该问题。在首次加载完成后，强烈建议不要删除 heu.today 站点缓存数据（仅 2 MB），这点缓存能带来二次访问 90% 的极速加载体验，以及神奇的离线访问。另外，这段时间项目将继续跟进 NJU 主项目并优化 data.json 追求 HEUer 们最佳体验。

国内访问建议使用 https://hi.monsterx.cn  托管于腾讯云节点（国内线路）和阿里云节点（国外线路）。

 - 投稿、建议或意见？ [Issue](https://github.com/monsterxcn/Life-in-HEU/issues/new) 请
 - 贵校也想整一个？ Fork -> `public/data.json` 请
 - 开发与 Debug？ `yarn install|serve|lint|build` 请

## Cloudflare Workers Sites

参考《[将 Hexo 部署到 Cloudflare Workers Site 上的趟坑记录 | Sukka's Blog](https://blog.skk.moe/post/deploy-blog-to-cf-workers-site/#%E8%87%AA%E5%AE%9A%E4%B9%89-Cloudflare-Workers-Site-%E7%9A%84%E8%A1%8C%E4%B8%BA)》，本仓库尝试将导航页部署至 Cloudflare Workers Sites 以提升浏览体验。

以下部署过程仅供参考。

 - 安装 Wrangler CLI

```bash
$ npm i @cloudflare/wrangler -g
# yarn global add @cloudflare/wrangler
```

 - 创建 Cloudflare API Token

从 [这里](https://dash.cloudflare.com/profile/api-tokens) 申请一个 API Token

 - 创建 GitHub Repo Secrets

在 GitHub 仓库的设置页面添加 Secrets 环境变量，内容为之前生成的 Cloudflare 的 API Token

 - 修改 GitHub Actions

如果没有绑定域名，请使用默认域名，自行修改 wrangler.toml

wrangler.toml 示例：

```
name = "cfworkers-test"
type = "webpack"
workers_dev = true
account_id = "c061f1cd........."

[site]
bucket = "./dist"
entry-point = "workers-site"
```

## LICENSE

MIT @ [idealclover](https://github.com/idealclover)
