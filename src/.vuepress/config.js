const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  base: '/zone-guide/',
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    displayAllHeaders: true, // Default: false
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Haha',
        link: '/haha/',
      },      
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],

    sidebar: {
      '/guide/': [
        {
          title: 'Introduction',
          collapsable: false,
          children: [ 
            '',
          ]
        },          
        {
          title: 'Guide',   // required
          path: '/guide/',      // optional, link of the title, which should be an absolute path and must exist
          collapsable: false, // optional, defaults to true
          sidebarDepth: 2,    // optional, defaults to 1
          
          children: [
            'rules',
            'moves',            
          ]
        },
        {
          title: 'Moves',
          collapsable: false,
          children: [ 

          ]
        },               
        {
          title: 'Mutation',
          collapsable: false,
          children: [ 
            'mutation/',
            'mutation/blabla'
          ]
        },             
        {
          title: 'Community', 
          collapsable: false,
          children: [ 
            'tips'
          ],
          // initialOpenGroupIndex: -1 // optional, defaults to 0, defines the index of initially opened subgroup
        },
         
      ],
      '/haha/': [
        {
          title: 'Haha',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],      
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}