<script setup lang="ts">
import { useLocaleStore } from "../../stores/locale";

// const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();

const { t, availableLocales, locale } = useI18n();
const store = useLocaleStore();

const language = store.useLocale;

watch(locale, (cv) => {
  store.changeLocale(cv);
});
</script>

<template>
  <select
    class="flex border-none text-sm focus:outline-none focus:ring-1 focus:ring-gray-200 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
    v-model="locale"
  >
    <option value="en">EN</option>
    <option value="km">ខ្មែរ</option>
  </select>

</template>
