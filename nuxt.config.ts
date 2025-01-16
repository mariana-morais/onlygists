// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-primevue',
  ],

  css: ['primeicons/primeicons.css','normalize.css/normalize.css'],

  imports: {
    dirs: ['./composables/useMarkdown']
  },

  googleFonts: {
    base64: true,
    fontsDir: 'assets/fonts',
    overwriting: true,
    families: {
      Inter: [300, 500, 800],
    },
  },

  primevue: {
    options: { unstyled: true },
    importPT: { as: "lara", from: "@/assets/presets/lara/" }
  }
})
