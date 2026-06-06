/**
 * ============================================
 * 个人信息数据
 * Jinming Shi · Personal Portfolio
 * ============================================
 */
window.SITE_DATA = {
  // 基础信息
  name: "Jinming Shi",
  nameShort: "J. Shi",
  title: "Jinming Shi",
  role: "Engineer",
  location: "Beijing",
  email: "shijinmings@outlook.com",

  // 一句话简介 (会出现在 Hero 下方)
  intro: "构建优雅的 Web 系统与人机交互。热衷于简洁的设计、扎实的工程与可维护的代码。",

  // 较长描述 (about 页面用)
  bio: [
    "你好，我是 Jinming Shi 👋",
    "我是一名软件工程师，专注于 Web 平台、分布式系统与人机交互的边界地带。我相信好的软件是工程与设计的交集 —— 它要正确，也要让人愉悦。",
    "工作之外，我维护几个开源项目，写一些关于系统设计、工程实践的笔记。如果你也对技术、阅读或好用的工具感兴趣，欢迎交流。"
  ],

  // 顶部导航
  nav: [
    { label: "Home",     href: "index.html"    },
    { label: "About",    href: "about.html"    },
    { label: "Projects", href: "projects.html" },
    { label: "Blog",     href: "blog.html"     },
    { label: "Contact",  href: "contact.html"  }
  ],

  // 技能 (about 页面)
  skills: [
    { group: "Languages",    items: ["TypeScript", "Go", "Python", "Rust", "Swift"] },
    { group: "Frontend",     items: ["React", "Next.js", "Vue", "Svelte", "Tailwind"] },
    { group: "Backend",      items: ["Node.js", "PostgreSQL", "Redis", "gRPC", "Kafka"] },
    { group: "Infrastructure", items: ["Docker", "Kubernetes", "AWS", "Terraform", "Linux"] }
  ],

  // 经历 (about 页面)
  experience: [
    {
      period: "2023 — Present",
      role:   "Senior Software Engineer",
      org:    "某科技公司",
      place:  "Bay Area, CA",
      desc:   "负责核心平台架构演进，主导从 monolith 向微服务的迁移，落地可观测性体系。"
    },
    {
      period: "2020 — 2023",
      role:   "Software Engineer",
      org:    "Startup Co.",
      place:  "Remote",
      desc:   "从 0 到 1 搭建 SaaS 产品，独立负责前后端。月活用户从 0 增长到 12 万。"
    },
    {
      period: "2016 — 2020",
      role:   "B.S. Computer Science",
      org:    "某高校",
      place:  "China",
      desc:   "主修计算机科学，辅修数学。曾任 ACM 队长，获省级算法竞赛一等奖。"
    }
  ],

  // 项目 (projects 页面 / 主页精选)
  projects: [
    {
      name: "EdgeNote",
      tagline: "Local-first 笔记应用",
      desc:  "支持端到端加密、CRDT 同步与离线编辑。基于 Rust + WebAssembly 构建核心引擎。",
      stack: ["Rust", "WASM", "TypeScript"],
      year:  2024,
      link:  "https://github.com/",
      repo:  "Jinming-S/Edgenote",
      status: "active"
    },
    {
      name: "Pulse",
      tagline: "轻量级系统监控",
      desc:  "面向小团队的实时指标监控与告警。基于 Prometheus 协议，单二进制部署，资源占用极低。",
      stack: ["Go", "Prometheus", "React"],
      year:  2023,
      link:  "https://github.com/",
      repo:  "Jinming-S/pulse",
      status: "maintained"
    },
    {
      name: "Lattice",
      tagline: "协作白板工具",
      desc:  "支持多人实时协作与无限画布。基于 CRDT 实现毫秒级同步，可导出为 SVG / PDF。",
      stack: ["TypeScript", "Yjs", "WebGL"],
      year:  2023,
      link:  "https://github.com/",
      repo:  "Jinming-S/lattice",
      status: "maintained"
    },
    {
      name: "Quietlog",
      tagline: "静态博客生成器",
      desc:  "极简的 Markdown → 静态站点工具。无配置、零依赖，一行命令部署到 GitHub Pages。",
      stack: ["Node.js", "Markdown"],
      year:  2022,
      link:  "https://github.com/",
      repo:  "Jinming-S/quietlog",
      status: "archived"
    },
    {
      name: "Spec",
      tagline: "API 设计语言",
      desc:  "为 REST + GraphQL 设计的描述性语法，支持从规范直接生成客户端 SDK。",
      stack: ["Go", "ANTLR"],
      year:  2022,
      link:  "https://github.com/",
      repo:  "Jinming-S/spec",
      status: "archived"
    },
    {
      name: "Field Notes",
      tagline: "个人知识库",
      desc:  "我的长期笔记系统。使用纯文本 + Git 版本管理，强调原子化与双向链接。",
      stack: ["Markdown", "Git"],
      year:  2021,
      link:  "https://github.com/",
      repo:  "Jinming-S/notes",
      status: "active"
    }
  ],

  // 精选项目 (主页 hero 下方)
  featured: ["EdgeNote", "Pulse", "Lattice"],

  // 博客文章 (blog 页面)
  posts: [
    {
      date: "2026-05",
      title: "关于长期主义与软件工程",
      excerpt: "我越来越相信，写代码的真正难度不在于找到正确的解法，而在于愿意为一个看起来'差不多'的方案再打磨一周。",
      tag: "随笔",
      readTime: 5
    },
    {
      date: "2025-12",
      title: "Rust + WASM：在浏览器里跑得更快",
      excerpt: "把核心计算逻辑从 TypeScript 重写为 Rust + WebAssembly，bundle 体积减小 60%，性能提升 3 倍。",
      tag: "工程",
      readTime: 12
    },
    {
      date: "2025-08",
      title: "Local-first 应用的工程实践",
      excerpt: "如何在没有服务器的状态下，提供流畅的多设备同步体验？CRDT 给了我们一个答案。",
      tag: "架构",
      readTime: 18
    },
    {
      date: "2025-04",
      title: "从零设计一个监控系统",
      excerpt: "本文记录了 Pulse 这个项目从想法到落地的全过程：单二进制、Prometheus 协议、极简部署。",
      tag: "项目",
      readTime: 15
    },
    {
      date: "2024-11",
      title: "我所理解的「简洁」",
      excerpt: "简洁不是减法，而是把每一个元素都放在它该在的位置。这需要时间，也需要勇气。",
      tag: "设计",
      readTime: 7
    }
  ],

  // 联系方式 (contact 页面)
  socials: [
    { name: "GitHub",   url: "https://github.com/shijinming",           handle: "@shijinming" },
    { name: "Email",    url: "mailto:shijinmings@outlook.com",   handle: "shijinmings@outlook.com" },
  ],

  // 页脚
  footer: "© 2026 Jinming Shi · Built quietly, hosted on GitHub Pages."
};
