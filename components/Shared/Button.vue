<script setup lang="ts">
defineProps({
  id: {
    type: String,
  },
  label: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
});
</script>
<template>
  <button
    :disabled="disabled"
    :id="id"
    type="button"
    class="text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    {{ label }}
  </button>
</template>
