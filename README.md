# MC Resource Hub
BKHE

一个面向朋友与社群玩家的 Minecraft 资源共享静态网站。

## 特点

- 纯 HTML + CSS + JavaScript，无框架、无构建步骤
- 适合 GitHub Pages / Cloudflare Pages / 其他静态托管
- 资源内容采用 `data/resources.js` 集中管理
- 教程采用独立 Markdown 风格 HTML 页面，后续可以继续拆分
- PC 优先，同时兼容移动端
- 首页、启动器、整合包、教程、资源详情、404 页面完整
- 不依赖第三方 CDN，国内访问环境更稳定
- 图片采用本地占位结构，后续只需要替换 `assets/images/` 中的图片
- 动效控制在轻量范围内

## 目录

```text
mc-resource-site/
├─ index.html
├─ launchers.html
├─ modpacks.html
├─ tutorials.html
├─ resources.html
├─ resource.html
├─ 404.html
├─ robots.txt
├─ sitemap.xml
├─ assets/
│  ├─ css/
│  │  └─ style.css
│  ├─ js/
│  │  ├─ app.js
│  │  ├─ data.js
│  │  └─ resource-page.js
│  └─ images/
│     └─ README.md
└─ .nojekyll
```

## 部署

### Cloudflare Pages

构建方式选择：
- Framework preset：None
- Build command：留空
- Build output directory：`/`

直接连接 GitHub 仓库即可。

### GitHub Pages

Settings → Pages → Deploy from a branch → 选择 `main` / `root`。

## 添加资源

编辑：

```text
assets/js/data.js
```

在对应分类数组中增加资源对象即可。

资源对象示例：

```js
{
  id: "my-resource",
  category: "launcher",
  title: "我的启动器",
  version: "1.0.0",
  description: "资源简介",
  image: "assets/images/my-resource.svg",
  tags: ["启动器", "Windows"],
  download: "https://example.com/download",
  tutorial: "tutorials.html#my-resource",
  featured: true
}
```

## 图片

当前项目使用纯 CSS / SVG 占位，不需要外部图片服务。

以后可以把图片放到：

```text
assets/images/
```

然后在 `data.js` 中填写相对路径。

## 设计原则

网站故意保持克制：
- 不堆渐变
- 不使用大型 JS 框架
- 不使用复杂动画
- 不依赖在线字体
- 不把下载按钮藏起来
- 每个资源都尽量同时提供“下载”和“教程”
