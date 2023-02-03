<template>
  <!-- <LayoutNavbar /> -->
  <main class="px-7 py-10 mx-auto max-w-[85vh]">
    <slot />
  </main>
</template>
<script setup lang="ts">
useHead({
  title: 'Rithy blog',
  meta: [
    {
      name: 'description',
      content:
        'A new developer from Cambodia, I love coding and explore the new tech.'
    }
  ],
  bodyAttrs: {
    class: 'test'
  },
  script: [
    { children: "console.log('Welcome to my blog')" },
    { 
      src: 'https://www.googletagmanager.com/gtag/js?id=G-QMH8HL61E4',
    },
    {
      src: 'https://plausible.io/js/script.js',
      defer: true,
      'data-domain': 'rithyskun-blogs.netlify.app'
    }
  ]
})
</script>
