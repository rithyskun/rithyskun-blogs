// app.config.ts
export default defineAppConfig({
  docus: {
    title: "Rithy's blog",
    description: "I love to explore the new tech",
    socials: {
      twitter: "rithyskun",
      github: "rithyskun",
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      title: 'RS',
      logo: false,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    },
    aside: {
      level: 1,
      collapsed: false,
      exclude: [],
    },
    footer: {
      iconLinks: [
        {
          href: "https://rithyskun-blogs.netlify.app/",
          icon: "cafe",
        },
      ],
      fluid: true
    },
    prose: {
      copyButton: {
        iconCopy: "ph:copy",
        iconCopied: "ph:check"
      },
      headings: {
        icon: "ph:link"
      }
    }
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
