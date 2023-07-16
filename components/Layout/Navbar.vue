<script setup lang="ts">
import { mainNav } from '~~/navigationList'

const { t } = useI18n()
const isMobile = ref<boolean>(false)

function close() {
  isMobile.value = false
}
</script>

<template>
  <nav class="bg-white border-gray-200 sm:px-4 py-2.5 rounded dark:bg-gray-900">
    <div class="container flex flex-wrap items-center justify-between px-3">
      <a href="/profile/current" class="items-center hidden md:flex">
        <span
          class="self-center text-xl mr-5 font-semibold whitespace-nowrap dark:text-white"
        >@Rithy
          <strong class="font-mono italic text-cyan-500">SKUN</strong></span>
      </a>

      <button
        data-collapse-toggle="navbar-sticky"
        type="button"
        class="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
        aria-controls="navbar-sticky"
        aria-expanded="false"
        @click="isMobile = !isMobile"
      >
        <span class="sr-only">Open main menu</span>
        <Icon name="menu" />
      </button>
      <div id="navbar-sticky" class="hidden w-full md:block md:w-auto">
        <ul
          class="flex flex-col items-center justify-center text-center md:flex-row md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-black md:dark:bg-gray-900 dark:border-gray-700"
        >
          <NuxtLink
            v-for="nav in mainNav"
            :key="nav.name"
            class="block hover:bg-gray-200 rounded-full py-2.5 px-3 py-2.5 px-5 rounded-full"
            active-class="dark:bg-gray-200 text-white bg-cyan-500 dark:text-gray-900 py-2.5 px-3 rounded-full"
            :to="nav.to"
          >
            {{ t(nav.locale) }}
          </NuxtLink>

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
