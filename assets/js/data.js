window.MC_DATA = {
  site: {
    name: "MC Resource Hub",
    shortName: "MC Hub",
    description: "给朋友与社群玩家准备的 Minecraft 资源与教程站。",
    version: "1.0"
  },

  categories: [
    { id: "launcher", name: "启动器", icon: "▣", description: "从安装游戏到启动实例" },
    { id: "modpack", name: "整合包", icon: "◆", description: "精选整合包与朋友联机所需资源" },
    { id: "shader", name: "光影", icon: "☼", description: "让你的 Minecraft 画面更有氛围" },
    { id: "resource-pack", name: "材质包", icon: "▤", description: "改变方块、UI 与整体视觉体验" },
    { id: "skin", name: "皮肤", icon: "◉", description: "给自己的角色换一套新外观" },
    { id: "save", name: "存档", icon: "▦", description: "我们的世界" }
  ],

  resources: [
    {
      id: "pcl2",
      category: "launcher",
      title: "PCL2",
      version: "最新版",
      description: "简单、直观、适合新手的(bushi) Minecraft 启动器",
      image: "/assets/images/pcl2.webp",
      tags: ["启动器", "Windows", "新手"],
      download: "https://bkhe.lanzout.com/ioHoq48me0hg",
      tutorial: "tutorials.html#pcl2",
      featured: true
    },
    {
      id: "xplus",
      category: "modpack",
      title: "Xplus 基础优化整合包",
      version: "26.1.2",
      description: "保持原版体验的基础优化整合包",
      image: "/assets/images/xplus_logo.jpg",
      tags: ["整合包", "Fabric", "优化"],
      download: "https://bkhe.lanzout.com/izfCv494852d",
      tutorial: "tutorials/tutorials_xplus.html",
      featured: true
    },
    {
      id: "example-shader",
      category: "shader",
      title: "光影示例",
      version: "更新中",
      description: "这里用于展示光影资源卡片，后续替换成你的实际资源",
      image: "assets/images/mc_shaders.avif",
      tags: ["提取码：2272", "Shaders"],
      download: "https://bkhe.lanzout.com/b00oe6fesd",
      tutorial: "tutorials.html#shader"
    },
    {
      id: "example-resource-pack",
      category: "resource-pack",
      title: "材质包示例",
      version: "待更新",
      description: "这里用于展示材质包资源卡片",
      image: "assets/images/mc_resource.jpg",
      tags: ["材质包", "Resource Pack"],
      download: "404.html",
      tutorial: "tutorials.html#resource-pack"
    },
    {
      id: "example-skin",
      category: "skin",
      title: "皮肤示例",
      version: "待更新",
      description: "这里用于展示皮肤资源卡片",
      image: "assets/images/mc_skin.png",
      tags: ["皮肤", "Skin"],
      download: "https://namemc.com/minecraft-skins",
      tutorial: "tutorials.html#skin"
    },
    {
      category: "save",
      title: "Xplus 存档",
      version: "2026/9/15",
      description: "我们的世界",
      image: "assets/images/save.webp",
      tags: [],
      download: URLS.xplus_save,
      tutorial: "tutorials/tutorials_save.html"
    },
  ],

  tutorials: [
    {
      id: "start",
      title: "Minecraft 新手快速开始",
      description: "从安装 Java、启动器到进入游戏的完整流程",
      category: "入门",
      time: "约 10 分钟",
      featured: true
    },
    {
      id: "pcl2",
      title: "PCL2 安装与基础配置",
      description: "下载启动器、安装 Java、创建游戏实例并启动",
      category: "启动器",
      time: "约 5 分钟",
      featured: true
    },
    {
      url: "tutorials/tutorials_xplus.html",
      title: "Xplus 整合包安装教程",
      description: "从下载到安装，再到第一次进入游戏",
      category: "整合包",
      time: "约 8 分钟",
      featured: true
    },
    
    {
      url: "tutorials/tutorials_save.html",
      title: "Xplus 存档导入教程",
      description: "介绍存档导入与注意事项",
      category: "存档",
      time: "约 5 分钟"
    },
    {
      id: "shader",
      title: "Minecraft 光影安装教程",
      description: "介绍光影加载器、光影文件与常见问题",
      category: "光影",
      time: "约 6 分钟"
    },
    {
      id: "resource-pack",
      title: "材质包安装教程",
      description: "介绍资源包位置、启用方法与排序",
      category: "材质包",
      time: "约 3 分钟"
    },
    {
      id: "skin",
      title: "Minecraft 皮肤安装教程",
      description: "介绍正版与离线模式下的常见皮肤使用方式",
      category: "皮肤",
      time: "约 4 分钟"
    },
  ],

  // 在 window.MC_DATA 内部追加或修改：
  // ... 保留 site, categories, resources, tutorials ...

  // ===== 新增：专门用于 tutorials/ 目录下独立教程页面的数据 =====
  tutorialDetails: {
    "tutorials_xplus": {
      title: "Xplus 整合包安装与配置",
      subtitle: "从基础部署到自定义 Mod 替换的全流程说明",
      breadcrumb: "Xplus 整合包",
      steps: [
        {
          stepNumber: "01",
          title: "下载基础整合包",
          description: "解压下载好的文件",
          image: "/assets/images/tutorials_xplus/01.webp",
          downloadUrl: "https://bkhe.lanzout.com/izfCv494852d",
          downloadText: "获取 Xplus 基础包"
        },
        {
          stepNumber: "02",
          title: "导入整合包到启动器",
          description: "打开 PCL2 启动器，直接将解压后的文件拖入启动器任意位置",
          image: "/assets/images/tutorials_xplus/02.webp",
        },
        {
          stepNumber: "03",
          title: "检查版本是否一致",
          description: "在PCL首页，核对版本名，不一致需要在\"版本选择\"里找到刚才下载好的版本",
          image: "/assets/images/tutorials_xplus/03.webp",
        },
        {
          stepNumber: "04",
          title: "下载 MOD 拓展包",
          description: "解压下载好的文件",
          image: "/assets/images/tutorials_xplus/04.webp",
          downloadUrl: "https://bkhe.lanzout.com/i0IZ0493q4ah",
          downloadText: "获取 MOD 拓展包"
        },
        {
          stepNumber: "05",
          title: "删除 Fabric API",
          description: "这个mod版本比较旧，留着它会报错",
          image: "/assets/images/tutorials_xplus/05.webp",
        },
        {
          stepNumber: "06",
          title: "更新 MOD",
          description: "打开mod文件夹，将刚才下载的四个mod全部拖入",
          image: "/assets/images/tutorials_xplus/06.webp",
        },
        {
          stepNumber: "07",
          title: "启动游戏",
          description: "启动！",
          image: "/assets/images/tutorials_xplus/07.webp",
        },
      ]
    },

    "tutorials_save": {
      title: "Xplus 整合包存档导入",
      subtitle: "全流程说明",
      breadcrumb: "存档",
      steps: [
        {
          stepNumber: "01",
          title: "下载存档",
          description: "解压下载好的文件。由于存档过大，采用极限压缩，解压可能需要点时间",
          image: "/assets/images/tutorials_save/01.webp",
          downloadUrl: URLS.xplus_save,
          downloadText: "获取存档"
        },
        {
          stepNumber: "02",
          title: "打开版本设置",
          description: "要注意，当前是什么版本存档就导入到什么版本下",
          image: "/assets/images/tutorials_save/02.webp",
        },
        {
          stepNumber: "03",
          title: "打开存档文件夹",
          description: "",
          image: "/assets/images/tutorials_save/03.webp",
        },
        {
          stepNumber: "04",
          title: "拖入",
          description: "注意，要拖入空白处，千万不要拖入到其他存档文件夹中！",
          image: "/assets/images/tutorials_save/04.webp",
        },
      ]
    }
  }
};
