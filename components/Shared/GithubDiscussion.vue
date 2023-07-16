<script setup lang="ts">
import Giscus from '@giscus/vue'
</script>

<template>
  <Suspense>
    <Giscus
      id="comments"
      repo="rithyskun/rithyskun-blogs"
      repo-id="R_kgDOIvEogA"
      category="General"
      category-id="DIC_kwDOIvEogM4CTeiw"
      mapping="pathname"
      term="Welcome my blog discussion"
      reactions-enabled="1"
      emit-metadata="0"
      input-position="bottom"
      theme="preferred_color_scheme"
      lang="en"
      loading="lazy"
      crossorigin="anonymous"
    />
  </Suspense>
</template>
