// app.config.ts
export default defineAppConfig({
  docus: {
    title: "Rithy's blogs",
    description: "The best place to start your documentation.",
    socials: {
      twitter: "rithyskun",
      github: "rithyskun",
    },
    layout: {
      fluid: true,
    },
    header: {
      title: 'Rithy SKUN',
      logo: false,
      showLinkIcon: true,
      exclude: []
    },
    aside: {
      level: 1,
      collapsed: false,
      exclude: [],
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Powered by Docus',
        href: 'https://docus.dev',
      },
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
      bookmark: "carbon:bookmark"
    },
  },
});
