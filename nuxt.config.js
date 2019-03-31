module.exports = {
  // router: {
  //   base: '/app/'
  // },
  css: [
    'assets/main.styl'
  ],
  plugins: [
  ],
  /*
   ** Headers of the page
   */
  head: {
    title: '中僖创智',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no'},
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/zongheng.ico'}
    ],
    script: [
      // {src: 'https://s19.cnzz.com/z_stat.php?id=1263271603&web_id=1263271603'}, /*引入统计的js*/
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {color: '#ff3c41'},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    // extend (config, ctx) {
    //   if (ctx.dev && ctx.isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // }
  }
}
