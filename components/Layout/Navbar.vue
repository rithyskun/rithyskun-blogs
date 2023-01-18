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
    class="bg-gray-100 border-gray-200  px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900"
  >
    <div class="container flex flex-wrap items-center justify-center mx-auto">
      <a href="/profile" class="items-center hidden md:flex">
        <span
          class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >@Rithy
          <strong class="font-mono italic text-cyan-500">SKUN</strong></span
        >
      </a>

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
      <div class="hidden w-full md:block md:w-auto" id="navbar-sticky">
        <ul
          class="flex flex-col p-2 items-center justify-center text-center border border-gray-100 rounded-lg bg-gray-100 md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-gray-100 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
          <NuxtLink
            class="block hover:bg-blue-500 rounded py-2.5 px-3 py-2.5 px-5 rounded-full"
            active-class="dark:bg-gray-200 dark:text-gray-900 py-2.5 px-3 rounded-full"
            v-for="nav in mainNav"
            :key="nav.name"
            :to="nav.to"
            >{{ t(nav.locale) }}</NuxtLink
          >

          <div class="flex items-center">
            <layout-locale />

            <layout-dark />
          </div>
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
