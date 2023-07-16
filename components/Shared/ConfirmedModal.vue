<script setup lang="ts">
import { onClickOutside, useMagicKeys, whenever } from '@vueuse/core'
import type { Todo } from '~~/types/todo.type'
import { useTodoStore } from '~/stores/todo'

defineProps<{
  show: boolean
  _id?: string
}>()

const emit = defineEmits(['closeModal'])
const store = useTodoStore()
const refTarget = ref(null)
const keys = useMagicKeys()
whenever(keys.escape, () => {
  emit('closeModal')
})

onClickOutside(refTarget, () => {
  emit('closeModal')
})

async function handleConfirmed(id: Todo['_id']) {
  await useFetch(`/api/todo/edit/${id}`, {
    method: 'DELETE',
  })
  store.getTodos()
  emit('closeModal')
}
</script>

<template>
  <div
    v-show="show"
    id="popup-modal"
    ref="refTarget"
    class="fixed inset-0 z-10 flex items-center justify-center bg-gray-100"
  >
    <div class="relative bg-white rounded-lg dark:bg-gray-700">
      <button
        type="button"
        class="absolute top-3 right-2.5 bg-gray-100 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-900 text-sm py-0.5 px-2 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        data-modal-toggle="popup-modal"
        @click="$emit('closeModal')"
      >
        X<span class="sr-only">Close modal</span>
      </button>
      <div class="p-6 text-center">
        <Icon name="lightning" size="32px" />
        <h3 class="p-5 text-lg font-normal text-gray-500 dark:text-gray-400">
          Are you sure you want to delete?
        </h3>
        <button
          data-modal-toggle="popup-modal"
          type="button"
          class="text-gray-700 bg-red-500 border hover:bg-red-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
          @click="handleConfirmed(_id)"
        >
          Yes, I'm sure
        </button>
        <button
          data-modal-toggle="popup-modal"
          type="button"
          class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          @click="$emit('closeModal')"
        >
          No, cancel
        </button>
      </div>
    </div>
  </div>
</template>
