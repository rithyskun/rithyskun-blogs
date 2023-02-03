// https://nuxt.com/docs/api/configuration/nuxt-config

import en from "./locale/en.json";
import km from "./locale/km.json";

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    ["@nuxtjs/tailwindcss", {
      cssPath: "~/assets/css/tailwind.css",
      configPath: "tailwind.config",
      exposeConfig: true,
    }],
    "@vueuse/nuxt",
    ["@nuxtjs/i18n", {
      vueI18n: {
        legacy: false,
        locale: "en",
        messages: {
          en,
          km,
        },
      },
    }],
    "nuxt-icon",
    ["@nuxtjs/color-mode", {
      classSuffix: ""
    }],
    "@nuxtjs/plausible"
  ],
  extends: "@nuxt-themes/docus",
  typescript: {
    shim: false,
    strict: true,
  },
  // nitro: {
  //   plugins: ["~/plugins/vue-gtag.client.js"]
  // },
  runtimeConfig: {
    mongodbUri: process.env.MONGODB_URI,
    plausible: process.env.NUXT_PUBLIC_PLAUSIBLE_DOMAIN,
    GA: process.env.GOOGLE_ANALYTICS_ID
  },
  
});
