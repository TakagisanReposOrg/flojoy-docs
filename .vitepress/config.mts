import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "纷语文档仓",
  description: "纷语驿站'相关信息与帮助页面",
  lastUpdated: true,
  cleanUrls: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    logo: {
      src: 'https://pic.imgdb.cn/item/660294819f345e8d0321dcca.png',
      alt: "全站图标",
    }, 

    nav: [
      { text: '文档', link: '/' },
      { text: '主站', link: 'https://flojoy.fun' },
      { text: '赞助', link: '/donate' }
    ],

    sidebar: {
      "/": [
        {
          text: "基础规范",
          items: [
            {
              text: "加入",
              link: "/join/",
            },
            {
              text: "服务条款",
              link: "/tos/",
            },
            {
              text: "合理使用规约",
              link: "/aup/",
            },
          ],
        },
        {
          text: "其它",
          items: [
            {
              text: "服务架构",
              link: "/service-structure/",
            },
            {
              text: "联系我们",
              link: "/contact/",
            },
            {
              text: "赞助",
              link: "/donate/",
            },
          ],
        },
      ],
    },

    footer: {
      message: '基于 <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh-hans">CC-BY-SA-4.0</a> 授权<br>本文档部分内容&素材来自 <a href="https://docs.nya.one/">喵窝 (NyaOne)</a>',
      copyright: 'Copyright © 2023-2024 <a href="https://takagi3.top">木创社Team</a>'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TakagisanReposOrg/flojoy-docs' }
    ],

    search: {
      provider: 'local'
    }

                                                                                                             }
})
