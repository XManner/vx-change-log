export default {
  title: "Vationx Doc",
  description: "Just Vationx Document",
  author: "Manner",
  appearance: true,
  lang: "zh-CN",
  lastUpdated: true,
  themeConfig: {
    sidebar: [
      {
        text: "更新日志",
        collapsible: true,
        items: [
          { text: "dashboard", link: "change-log/dashboard" },
          { text: "app", link: "change-log/app" },
        ],
      },
    ],
    outlineTitle: '页面大纲',
    editLink: {
      pattern: "https://github.com/vuejs/vitepress/edit/main/docs/:path",
      text: "编辑该页面",
    },
  },
};
