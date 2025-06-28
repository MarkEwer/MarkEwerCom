import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  title: 'Mark Ewer',
  description: 'Senior Software Architect & Developer - Portfolio and Blog',
  lang: 'en-US',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#2563eb' }],
    ['meta', { name: 'author', content: 'Mark Ewer' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'en' }],
    ['meta', { property: 'og:title', content: 'Mark Ewer - Software Architect & Developer' }],
    ['meta', { property: 'og:description', content: 'Personal portfolio and blog focusing on software architecture, design patterns, and agile development.' }],
    ['meta', { property: 'og:site_name', content: 'Mark Ewer' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@markewer' }],
    ['link', { rel: 'canonical', href: 'https://markewer.com' }],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: {
      '/blog/': [
        {
          text: 'Blog Posts',
          items: [
            { text: 'All Posts', link: '/blog/' },
            { text: 'Agile Methodologies', link: '/blog/category/agile' },
            { text: 'Software Architecture', link: '/blog/category/architecture' },
            { text: 'Product Development', link: '/blog/category/products' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/markewer' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/markewer/' }
    ],

    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Mark Ewer`
    },

    // search: {
    //   provider: 'local'
    // }
  },

  vite: {
    // CSS processing handled by postcss.config.js
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  },

  lastUpdated: true,
  cleanUrls: 'with-subfolders',
})
