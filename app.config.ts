// app.config.ts
export default defineAppConfig({
  docus: {
    title: "Home",
    description: "The best place to start your documentation.",
    image:
      "https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png",
    socials: {
      twitter: "rithyskun",
      github: "rithyskun",
    },
    aside: {
      level: 1,
      exclude: [],
    },
    footer: {
      iconLinks: [
        {
          href: "https://rithyskun-blogs.netlify.app/",
          icon: "logos:nuxt-icon",
        },
      ],
    },
  },
  nuxtIcon: {
    size: "24px", // default <Icon> size applied
    aliases: {
      nuxt: "logos:nuxt-icon",
      home: "carbon:home",
      dark: "carbon:moon",
      light: "carbon:light",
      github: "carbon:logo-github",
      check: "carbon:checkbox",
      checked: "carbon:checkbox-checked",
      trash: "carbon:trash-can",
      lightning: "carbon:lightning",
      dropdown: "carbon:chevron-down",
      apps: "carbon:apps",
      dashboard: "carbon:dashboard",
      cafe: "carbon:cafe",
      new: "carbon:add",
      menu: "carbon:menu",
      close: "carbon:close",
      locale: "carbon:language",
      sidebar: "carbon:side-panel-close",
      folder: "carbon:folder",
      screen: "carbon:screen",
    },
  },
});
