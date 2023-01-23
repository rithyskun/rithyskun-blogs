<script setup lang="ts">
const contents = ref([
  {
    id: 1,
    title: '1 content',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    isActive: true,
  },
  {
    id: 2,
    title: '2 content',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    isActive: true,
  },
  {
    id: 3,
    title: '3 content',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    isActive: true,
  },
  {
    id: 4,
    title: '4 content',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    isActive: true,
  },
  {
    id: 5,
    title: '5 content',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    isActive: true,
  },
  {
    id: 6,
    title: '6 content',
    description:
      'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    isActive: true,
  },
])
</script>

<template>
  <div
    class="md:p-5 grid grid-cols-1 md:grid-cols-2 gap-5 bg-white dark:bg-black dark:border-gray-700 rounded"
  >
    <NuxtLink
      v-for="(content, index) in contents"
      :key="index"
      class="block max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <h5
        class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
      >
        {{ content.title }}
      </h5>
      <p class="font-normal text-gray-700 dark:text-gray-400">
        {{ content.description }}
      </p>
    </NuxtLink>
  </div>
</template>
