import { defineConfig } from 'vitepress'

const year = new Date().getFullYear()

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Foxe Labs Docs',
  description: 'Official documentation for Foxe Labs',
  lastUpdated: true,
  cleanUrls: true,
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '96x96',
        href: '/favicon/favicon-96x96.png',
      },
    ],
    ['link', { rel: 'shortcut icon', href: '/favicon/favicon.ico' }],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon/apple-touch-icon.png',
      },
    ],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Foxe Labs' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/foxelabs' },
      { icon: 'twitter', link: 'https://x.com/foxelabs' },
      { icon: 'facebook', link: 'https://facebook.com/foxelabs' },
      { icon: 'instagram', link: 'https://instagram.com/foxelabs' },
      { icon: 'youtube', link: 'https://youtube.com/@foxelabs' },
    ],

    editLink: {
      pattern: 'https://github.com/foxelabs/foxelabs.github.io/edit/main/:path',
      text: 'Edit this page on GitHub',
    },

    search: {
      provider: 'local',
    },

    footer: {
      copyright: `Copyright © ${year}, <a href="https://foxelabs.com">Foxe Labs</a>. All rights reserved.`,
    },
  },
})
