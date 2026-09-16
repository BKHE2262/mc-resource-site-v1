window.MC_DATA = {
  site: {
    name: "MC Resource Hub",
    shortName: "MC Hub",
    description: "给朋友与社群玩家准备的 Minecraft 资源与教程站。",
    version: "1.0"
  },

  categories: [
    { id: "launcher", name: "启动器", icon: "▣", description: "从安装游戏到启动实例，一步到位。" },
    { id: "modpack", name: "整合包", icon: "◆", description: "精选整合包与朋友联机所需资源。" },
    { id: "shader", name: "光影", icon: "☼", description: "让你的 Minecraft 画面更有氛围。" },
    { id: "resource-pack", name: "材质包", icon: "▤", description: "改变方块、UI 与整体视觉体验。" },
    { id: "skin", name: "皮肤", icon: "◉", description: "给自己的角色换一套新外观。" }
  ],

  resources: [
    {
      id: "pcl2",
      category: "launcher",
      title: "PCL2",
      version: "最新版",
      description: "简单、直观、适合新手的 Minecraft 启动器。",
      image: "/images/fufu01.jpg",
      tags: ["启动器", "Windows", "新手"],
      download: "#",
      tutorial: "tutorials.html#pcl2",
      featured: true
    },
    {
      id: "hmcl",
      category: "launcher",
      title: "HMCL",
      version: "最新版",
      description: "功能完整的 Minecraft 启动器，适合进阶玩家。",
      image: "",
      tags: ["启动器", "Windows", "Java"],
      download: "#",
      tutorial: "tutorials.html#hmcl",
      featured: true
    },
    {
      id: "xplus",
      category: "modpack",
      title: "Xplus 基础优化整合包",
      version: "1.x",
      description: "保持原版体验的基础优化整合包，适合日常游玩。",
      image: "",
      tags: ["整合包", "Fabric", "优化"],
      download: "#",
      tutorial: "tutorials.html#xplus",
      featured: true
    },
    {
      id: "example-shader",
      category: "shader",
      title: "光影示例",
      version: "待更新",
      description: "这里用于展示光影资源卡片，后续替换成你的实际资源。",
      image: "",
      tags: ["光影", "Shaders"],
      download: "#",
      tutorial: "tutorials.html#shader"
    },
    {
      id: "example-resource-pack",
      category: "resource-pack",
      title: "材质包示例",
      version: "待更新",
      description: "这里用于展示材质包资源卡片。",
      image: "",
      tags: ["材质包", "Resource Pack"],
      download: "#",
      tutorial: "tutorials.html#resource-pack"
    },
    {
      id: "example-skin",
      category: "skin",
      title: "皮肤示例",
      version: "待更新",
      description: "这里用于展示皮肤资源卡片。",
      image: "",
      tags: ["皮肤", "Skin"],
      download: "#",
      tutorial: "tutorials.html#skin"
    }
  ],

  tutorials: [
    {
      id: "start",
      title: "Minecraft 新手快速开始",
      description: "从安装 Java、启动器到进入游戏的完整流程。",
      category: "入门",
      time: "约 10 分钟",
      featured: true
    },
    {
      id: "pcl2",
      title: "PCL2 安装与基础配置",
      description: "下载启动器、安装 Java、创建游戏实例并启动。",
      category: "启动器",
      time: "约 5 分钟",
      featured: true
    },
    {
      id: "hmcl",
      title: "HMCL 安装与基础配置",
      description: "适合第一次使用 HMCL 的玩家。",
      category: "启动器",
      time: "约 5 分钟"
    },
    {
      id: "xplus",
      title: "Xplus 整合包安装教程",
      description: "从下载到安装，再到第一次进入游戏。",
      category: "整合包",
      time: "约 8 分钟",
      featured: true
    },
    {
      id: "shader",
      title: "Minecraft 光影安装教程",
      description: "介绍光影加载器、光影文件与常见问题。",
      category: "光影",
      time: "约 6 分钟"
    },
    {
      id: "resource-pack",
      title: "材质包安装教程",
      description: "介绍资源包位置、启用方法与排序。",
      category: "材质包",
      time: "约 3 分钟"
    },
    {
      id: "skin",
      title: "Minecraft 皮肤安装教程",
      description: "介绍正版与离线模式下的常见皮肤使用方式。",
      category: "皮肤",
      time: "约 4 分钟"
    }
  ]
};
