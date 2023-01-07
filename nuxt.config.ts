// https://nuxt.com/docs/api/configuration/nuxt-config

import en from "./locale/en.json";
import km from "./locale/km.json";

export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/i18n",
    "nuxt-icon",
  ],
  i18n: {
    vueI18n: {
      legacy: false,
      locale: "en",
      messages: {
        en,
        km,
      },
    },
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: true,
  },
  typescript: {
    shim: false,
    strict: true,
  },
});
