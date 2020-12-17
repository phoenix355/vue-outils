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
            { title: "安装", path: "/guide/" },
            { title: "快速上手", path: "/guide/fast" },
            { 
              title: '指令集合', 
              path: '/guide/directives/remove-node',
              children: [
                { title: '删除元素指令(remove-node)', path: '/guide/directives/remove-node' },
                { title: '删除元素指令(remove-node1)', path: '/guide/directives/remove-node1' },
              ]
            }
          ],
        },
      ],
    },
  },
};
