<script setup lang="ts">
import { useSidebarStore } from "~/stores/sidebar";

const store = useSidebarStore();
</script>

<template>
  <div class="dark:bg-gray-900 dark:text-white w-full h-screen">
    <LayoutSidebar />

    <div class="mt-12">
      <div class="p-5" :class="{ '!ml-[220px]': store.sidebar }">
        <Icon
          name="sidebar"
          class="hover:cursor-pointer text-gray-300 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
          :class="
            store.sidebar
              ? ' hover:text-blue-500'
              : 'rotate-180 hover:text-blue-500'
          "
          @click="store.toggleSidebar"
        />
        <NuxtPage />
      </div>
    </div>
  </div>
</template>
