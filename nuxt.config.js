
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  router: {
    base: '/nuxt-hexschool-demo-app/'
  },

  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    script: [
      { src: "/nuxt-hexschool-demo-app/js/jquery.min.js", body: true },
      { src: "/nuxt-hexschool-demo-app/js/browser.min.js", body: true },
      { src: "/nuxt-hexschool-demo-app/js/breakpoints.min.js", body: true },
      { src: "/nuxt-hexschool-demo-app/js/util.js", body: true },
      { src: "/nuxt-hexschool-demo-app/js/main.js", body: true }
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    "~/assets/sass/main.scss"
  ],

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
