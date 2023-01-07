<script setup lang="ts">
import { mainNav } from "~~/navigationList";

const { t } = useI18n();
const isMobile = ref<boolean>(false);

const close = () => {
  isMobile.value = false;
};
</script>

<template>
  <nav
    class="fixed top-0 left-0 z-20 w-full border-b border-gray-200 bg-white h-14 py-2 dark:border-gray-600 dark:bg-gray-900 sm:px-4"
  >
    <div class="container mx-auto flex flex-wrap items-center justify-between">
      <div class="flex md:order-2">
        <button
          @click="isMobile = !isMobile"
          data-collapse-toggle="navbar-sticky"
          type="button"
          class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
          aria-controls="navbar-sticky"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <Icon name="menu" />
        </button>
      </div>

      <div
        class="container hidden w-full items-center md:order-1 md:flex md:w-auto"
        id="navbar-sticky"
      >
        <ul
          class="flex flex-col items-center rounded-lg border border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-white md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:text-sm md:font-medium md:dark:bg-gray-900"
        >
          <NuxtLink v-for="nav in mainNav" :key="nav.name" :to="nav.to">{{
            t(nav.locale)
          }}</NuxtLink>

          <layout-locale />

          <layout-dark />
        </ul>
      </div>
      <div class="flex space-x-2 md:hidden lg:hidden">
        <layout-locale />
        <layout-dark />
      </div>
    </div>
  </nav>
  <LayoutDrawer :show="isMobile" @closeDrawer="close" />
</template>
