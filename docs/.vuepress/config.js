module.exports = {
  title: "vue-outils文档",
  description: "基于vue的工具组件库",
  base: "/vue-outils/",
  port: 9000,
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "组件文档", link: "/guide/" },
      {
        text: "github",
        // 这里是下拉列表展现形式。
        items: [
          {
            text: "vue-outils",
            link: "https://github.com/phoenix355/vue-outils",
          },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "开发指南",
          collapsable: false,
          children: [
            // { title: "安装", path: "/guide/" },
            { title: "快速上手", path: "/guide/fast" }
          ],
        },
      ],
    },
  },
};
