<script setup lang="ts">
import { useTodoStore } from '~~/stores/todo'

definePageMeta({
  layout: 'projects',
})

const { t } = useI18n()

const store = useTodoStore()
const msg = ref<string>('')
const keyword = ref<string>('')

watch(msg, () => {
  setTimeout(() => {
    msg.value = ''
  }, 1000)
})

function submit() {
  if (!keyword.value)
    return (msg.value = 'The field is required!')

  const now = new Date()
  now.toISOString().substring(0, 10)
  const todo = {
    todo: keyword.value,
    isCompleted: false,
    createdAt: now,
  }
  store.createdTodo(todo)
  keyword.value = ''
}

const todos = computed(() => {
  return store.todos
})

const filterTodo = computed(() => {
  if (!keyword.value)
    return todos.value
  return todos.value.filter((item) => {
    return item.todo.toLowerCase().includes(keyword.value.toLowerCase())
  })
})

function markAllCompleted() {
  console.log('mark all')
}

onMounted(() => {
  store.getTodos()
})
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <form @submit.prevent="submit">
      <div class="mb-6 flex">
        <button
          id="dropdown-button"
          data-dropdown-toggle="dropdown"
          class="mt-7 inline-flex h-12 items-center border border-gray-300 bg-gray-100 px-2 text-center text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-0 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          type="button"
        >
          <Icon name="dropdown" @click="markAllCompleted" />
        </button>
        <div class="relative w-full">
          <SharedInput
            v-model="keyword"
            :label="t('what_needs_to_be_done')"
            :placeholder="t('add_search_todo')"
            type="text"
            :validation="msg"
          />
        </div>
      </div>
    </form>
    <div v-if="!todos.length" class="animate-pulse text-sm">
      Loading...
    </div>
    <div v-else-if="!filterTodo.length" class="mx-2 text-sm text-gray-500">
      No data, Create one instead!
    </div>
    <SharedLists v-else :todo-data="filterTodo" />
    <p class="text-xs items-center justify-end hover:text-blue-500">
      <NuxtLink to="https://github.com/rithyskun/TODO-APP-with-NextJS">
        with <strong> NextJS</strong>
        <Icon name="github" />
      </NuxtLink>
    </p>
  </div>
</template>
