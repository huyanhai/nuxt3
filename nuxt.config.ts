// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    // seo设置
    head: {
      charset: "utf-16",
      viewport: "width=500, initial-scale=1",
      title: "Nuxt app",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "My amazing site." },
      ],
    },
    // 页面过度
    pageTransition: {
      name: "layout",
      mode: "out-in",
    },
  },
  runtimeConfig: {
    apiSecret: "123",
    public: {
      baseApi: "/xx",
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
  tailwindcss: { cssPath: "~/assets/css/tailwind.css", configPath: "tailwind.config.ts" },
  vite: {},
  postcss: {},
  ssr: true,
  nitro: {
    // 第三方服务预设
    // preset: "vercel",
  },
});
