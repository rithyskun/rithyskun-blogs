<script setup lang="ts">
const colorMode = useColorMode();
const onClick = () => {
  const values = ["system", "light", "dark"];
  const index = values.indexOf(colorMode.preference);
  const next = (index + 1) % values.length;

  colorMode.preference = values[next];
};
</script>

<template>
  <button aria-label="Color Mode" @click="onClick" class="hover:text-cyan-500">
    <Icon v-if="colorMode.preference === 'dark'" name="carbon:moon" size="16" />
    <Icon v-else-if="colorMode.preference === 'light'" name="carbon:light" size="16"/>
    <Icon v-else name="carbon:screen" size="16"/>
  </button>
</template>
