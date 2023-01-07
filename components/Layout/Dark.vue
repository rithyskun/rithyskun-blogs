<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);

</script>

<template>
  <button
    @click="toggleDark()"
    class="text-sm dark:bg-gray-900 focus:ring-1 focus:ring-gray-200 px-2.5 dark:text-yellow-300"
  >
    <Icon :name="isDark ? 'light' : 'dark'" />
  </button>
</template>
