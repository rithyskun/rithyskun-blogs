<script setup lang="ts">
import type { PropType } from 'vue'
import type { Todo } from '~/types/todo.type'
import { useTodoStore } from '~/stores/todo'

const props = defineProps({
  todoData: Array as PropType<Todo[]>,
})
const router = useRoute()
const store = useTodoStore()
const showModal = ref<boolean>(false)
const confirmedId = ref<string>()
function handleDelete(list: Todo['_id']) {
  showModal.value = true
  confirmedId.value = list
}

const input = ref<boolean>(false)
// const { focused: inputFocus } = useFocus(input)

const isEdit = ref<boolean>(false)
const editedTodo = ref<Todo>()
async function editTodo(list: Todo) {
  isEdit.value = true
  editedTodo.value = list
  console.log(input.value)
}

// watch(isEdit, async (newValue: boolean) => {
//   if(newValue==true) {
//     nextTick(() => {
//     input.value.focus()
//   })
//   }
// })

async function doneEdit() {
  isEdit.value = false
  await store.updateTodo(editedTodo.value?._id, editedTodo.value as Todo)
  editedTodo.value = undefined
}

function cancelEdit() {
  isEdit.value = false
  editedTodo.value = undefined
}

function close() {
  showModal.value = false
}

async function markCompleted(list: Todo) {
  await store.updateTodo(list._id, list)
}
</script>

<template>
  <div>
    <ul
      class="mb-6 flex w-80 flex-col space-y-1 text-left text-gray-500 dark:text-gray-400"
    >
      <li
        v-for="(list, index) in props.todoData"
        :key="index"
        class="flex items-center justify-between p-1 text-center"
      >
        <!-- Icon -->
        <div class="flex items-center justify-between text-center">
          <input
            id="isCompleted"
            v-model="list.isCompleted"
            type="checkbox"
            class="h-5 w-5 hover:cursor-pointer rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
            @change="markCompleted(list)"
          >
          <div
            v-if="!isEdit"
            class="ml-5 py-2 flex items-center text-start"
            @dblclick="editTodo(list)"
            v-html="list.todo"
          />
          <input
            v-if="isEdit"
            :id="list.todo"
            ref="input"
            type="text"
            :name="list.todo"
            :value="list.todo"
            :disabled="list.isCompleted"
            tabindex="0"
            class="border-none py-2 ml-5 items-center text-start dark:bg-gray-800"
            @blur="cancelEdit"
            @change="doneEdit"
            @keyup.enter="doneEdit"
            @keyup.escape="cancelEdit"
          >
        </div>
        <Icon
          name="trash"
          class="text-end hover:cursor-pointer hover:text-red-500"
          @click="handleDelete(list._id)"
        />
      </li>
      <SharedConfirmedModal
        :show="showModal"
        :_id="confirmedId"
        @closeModal="close"
      />
    </ul>
  </div>
</template>
