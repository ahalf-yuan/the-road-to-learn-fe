module.exports = {
  base: '/the-road-to-learn-fe/',
  title: '前端指南',
  description: 'We offer a foundation before you dive into the broader FE ecosystem.',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    // lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated' // 文档更新时间：每个文件git最后提交的时间
  },
  themeConfig: {
    // 添加导航栏
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/start/0-prepare' },
      { text: '拓展进阶', link: '/advanced/1-html' },
      {
        text: 'github',
        link: 'https://github.com/yuanyazhen/the-road-to-learn-fe'
      }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/start/': [
        ['before-start', '开始之前'],
        ['0-prepare', '准备工作'],
        {
          title: '基础知识',
          collapsable: false,
          children: [
            '1-base/1-0-npm',
            '1-base/1-1-package',
            '1-base/1-2-library',
            '1-base/1-3-build',
            '1-base/1-4-broswerRender',
            '1-base/1-5-trace'
          ]
        },
        ['2-start', '从零开始'],
        ['3-pratise', '一个完整的项目']
      ],
      '/advanced/': [
        ['1-html', 'html'],
        ['2-css', 'css']
      ]
    },
    sidebarDepth: 2,
    lastUpdated: 'Last Updated', 
  },
}