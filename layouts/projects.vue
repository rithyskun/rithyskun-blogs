<script setup lang="ts">
import { useSidebarStore } from '~/stores/sidebar'

const store = useSidebarStore()
</script>

<template>
  <main>
    <!-- <LayoutNavbar /> -->
    <LayoutSidebar />
    <div class="mx-5">
      <div :class="{ '!ml-[220px]': store.sidebar }">
        <Icon
          name="sidebar"
          size="20"
          class="hover:cursor-pointer text-gray-300 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
          :class="
            store.sidebar
              ? ' hover:text-blue-500'
              : 'rotate-180 hover:text-blue-500'
          "
          @click="store.toggleSidebar"
        />
        <slot />
      </div>
    </div>
  </main>
</template>
