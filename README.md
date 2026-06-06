# Jinming Shi · Personal Portfolio

> 极简、克制、具有克制的科技感 —— 一个用纯静态文件搭建的多页个人主页 / 作品集。

## ✨ 设计取向

- **配色**：深色暖灰 + 暗金点缀 —— 安静、不张扬，长时间阅读不疲劳
- **排版**：宽松的间距系统 (4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96)，阅读宽度 720px
- **字体**：Inter (正文) + JetBrains Mono (代码/标签)
- **装饰**：极少的元素 —— 没有粒子、没有光晕、没有自定义光标
- **动效**：缓慢、克制 —— 滚动揭示、悬停过渡用 0.18s ~ 0.32s

## 🗂️ 目录结构

```
personal_page/
├── index.html       主页 (Hero + 精选项目)
├── about.html       About (简介 / 技能 / 经历)
├── projects.html    Projects (全部项目)
├── blog.html        Notes (随笔与文章)
├── contact.html     Contact (联系方式)
├── css/
│   └── style.css    共享样式
├── js/
│   ├── data.js      个人信息数据 (★ 修改这里)
│   └── main.js      共享脚本 (注入导航 / 渲染内容 / 滚动揭示)
├── .gitignore
└── README.md
```

## 🛠️ 本地预览

### 方式一：双击 HTML
直接双击 `index.html` 即可在浏览器中查看（推荐 Chrome / Edge）。

### 方式二：VSCode Live Server（推荐）
1. 安装 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 扩展
2. 右键 `index.html` → **Open with Live Server**
3. 自动打开 `http://127.0.0.1:5500`，修改后自动热更新

### 方式三：Python HTTP Server
```bash
cd personal_page
python -m http.server 8000
# 访问 http://127.0.0.1:8000
```

### 方式四：Node.js
```bash
npx http-server personal_page -p 8000
```

## ✏️ 自定义内容

打开 **`js/data.js`**，修改 `window.SITE_DATA` 对象即可更新全站：

| 字段 | 说明 |
| --- | --- |
| `name` | 你的名字（导航、Hero、SEO） |
| `role` | 职位 |
| `location` | 所在地 |
| `email` | 联系邮箱 |
| `intro` | Hero 下方的一行简介 |
| `bio` | About 页面的多段介绍 |
| `skills` | 技能分组 `[{ group, items: [] }]` |
| `experience` | 经历列表 `[{ period, role, org, place, desc }]` |
| `projects` | 项目列表 `[{ name, tagline, desc, stack, year, link, repo, status }]` |
| `featured` | 主页精选项目的 name 数组（取自 projects） |
| `posts` | 博客文章 `[{ date, title, excerpt, tag, readTime }]` |
| `socials` | 联系方式 `[{ name, url, handle }]` |
| `footer` | 页脚文字 |

> 💡 改完保存 → 浏览器刷新即可看到全站更新（无需重启服务）

## 🎨 自定义主题

打开 `css/style.css`，修改 `:root` 下的 CSS 变量：

```css
:root {
  --bg-0: #0e0e10;        /* 页面底色 */
  --bg-1: #15151a;        /* 卡片 */
  --text-1: #ece9e2;      /* 主文字 */
  --accent: #c9a961;      /* 主色 - 暗金 */
  /* ... */
}
```

### 主题推荐

| 主题 | 主色 | 适用 |
| --- | --- | --- |
| 🥇 **暗金**（默认） | `#c9a961` | 偏暖、高级、适合个人品牌 |
| 🌊 **深蓝灰** | `#5b8def` | 冷静、技术感强 |
| 🌿 **森林绿** | `#6fcf97` | 清新、自然、适合设计 / 写作 |
| 🪨 **炭黑中性** | `#a8a39a` | 最克制、纯排版、几乎无色彩 |
| 🌅 **暖橙铜** | `#e0a87a` | 温暖、亲和、适合服务 / 教学 |

> 直接替换 `--accent` 和 `--accent-bg` / `--accent-soft` 几个相关变量即可。

## 🚀 部署到 GitHub Pages

### 步骤 1：创建仓库
1. GitHub → **New repository**
2. 仓库名：`<username>.github.io`（user 替换成你的 GitHub 用户名）
3. 选 **Public**，不勾选 Add README

### 步骤 2：推送代码
```bash
cd personal_page
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/<username>/<username>.github.io.git
git push -u origin main
```

### 步骤 3：开启 Pages
1. 仓库 → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` / `(root)`
4. 保存 → 等待 1~2 分钟 → 访问 `https://<username>.github.io`

### 子路径部署
如果用项目仓库（如 `blog`）部署，访问地址为 `https://<user>.github.io/blog/`
本项目所有资源路径已是相对路径，无需修改。

## 📋 路线图

- [x] 多页架构（5 个页面）
- [x] 响应式 + 移动端菜单
- [x] 极简深色 + 暗金主色
- [x] 滚动揭示
- [ ] RSS feed
- [ ] 暗 / 亮主题切换
- [ ] 多语言

## 📄 License

MIT. Fork freely, make it yours.

---

<p align="center">
  Built quietly · Hosted on GitHub Pages
</p>
