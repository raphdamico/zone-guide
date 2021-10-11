const { description } = require('../../package')

module.exports = {
  markdown: {
    toc: { includeLevel: [1,2]}
  },
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  // base: '/zone-guide/',
  title: 'The Zone Reference',
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
    displayAllHeaders: false, // Default: false
    logo: '/assets/zone-logo.png',
    nav: [
      {
        text: 'Guide',
        link: '/1_intro/',
      },
      // {
      //   text: 'Haha',
      //   link: '/haha/',
      // },      
      // {
      //   text: 'Config',
      //   link: '/config/'
      // },
      // {
      //   text: 'VuePress',
      //   link: 'https://v1.vuepress.vuejs.org'
      // }
    ],

    sidebar: {
      
      '/guide/': [     
        {
          title: 'INTRO',   // required
          // path: '/guide/',      // optional, link of the title, which should be an absolute path and must exist
          collapsable: false, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1          
          children: [
            '',       
          ]
        },     
        {
          title: 'TROUBLESHOOTING',   // required
          // path: '/guide/',      // optional, link of the title, which should be an absolute path and must exist
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1          
          children: [
            'troubleshooting',       
          ]
        },            
        {
          title: 'RULES REFERENCE',   // required
          // path: '/guide/',      // optional, link of the title, which should be an absolute path and must exist
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1          
          children: [
            'rules/',       
            'rules/characters',
            'rules/rules',
            'rules/moves',
            'rules/mutation',
            'rules/death',
            'rules/endgame',
          ]
        },      
        {
          title: 'COMMENTARY',   // required
          // path: '/guide/',      // optional, link of the title, which should be an absolute path and must exist
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1          
          children: [
            'advice/',     
          ]
        },                            
        {
          title: 'MAKE YOUR OWN ZONE',   // required
          // path: '/guide/',      // optional, link of the title, which should be an absolute path and must exist
          collapsable: true, // optional, defaults to true
          sidebarDepth: 1,    // optional, defaults to 1          
          children: [
            'mods/',         
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
    '@vuepress/active-header-links'
  ]
}
