<script setup lang="ts">
const colorMode = useColorMode()
function onClick() {
  const values = ['system', 'light', 'dark']
  const index = values.indexOf(colorMode.preference)
  const next = (index + 1) % values.length

  colorMode.preference = values[next]
}
</script>

<template>
  <button aria-label="Color Mode" class="hover:text-cyan-500" @click="onClick">
    <Icon v-if="colorMode.preference === 'dark'" name="carbon:moon" />
    <Icon v-else-if="colorMode.preference === 'light'" name="carbon:light" />
    <Icon v-else name="carbon:screen" />
  </button>
</template>
