module.exports = {
  base: '/vuepress-boilerplate/',
  title: 'VuePress Boilerplate',
  description: 'VuePress is amazing!',
  themeConfig: {
    sidebar: {
        '/ref/': [
          'homepage',
          'config',
          'deploy'
        ]
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ]
}