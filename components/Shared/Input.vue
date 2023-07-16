<script setup lang="ts">
defineProps({
  id: {
    type: String,
  },
  label: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
  },
  modelValue: {
    type: [String, Number, Date, Boolean],
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  disabled: {
    type: Boolean,
  },
  autocomplete: {
    type: String,
    default: 'none',
  },
  validation: {
    type: String,
  },
})

const emit = defineEmits(['update:modelValue'])

function updateValue(e: Event) {
  const target = (e.target as HTMLInputElement).value
  emit('update:modelValue', target)
}
</script>

<template>
  <div class="block">
    <label
      class="-ml-10 text-xl text-gray-800 placeholder:text-gray-300 dark:text-white dark:placeholder:text-gray-500"
    >{{ label }}</label>
    <input
      :id="id"
      :autocomplete="autocomplete"
      :value="modelValue"
      :disabled="disabled"
      :type="type"
      class="block h-12 w-72 border-r border-t border-b border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
      :placeholder="placeholder"
      @input="updateValue"
    >
    <p class="ml-2 text-sm text-red-600 dark:text-red-500">
      {{ validation }}
    </p>
  </div>
</template>
