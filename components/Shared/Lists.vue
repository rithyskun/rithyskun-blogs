<script setup lang="ts">
import type { PropType } from "vue";
import { Todo } from "~/types/todo.type";
import { useTodoStore } from "~/stores/todo";
import { useFocus } from "@vueuse/core";

const router = useRoute()
const store = useTodoStore();
const props = defineProps({
  todoData: Array as PropType<Todo[]>,
});

const showModal = ref<boolean>(false);
const confirmedId = ref<string>();
const handleDelete = (list: Todo["_id"]) => {
  showModal.value = true;
  confirmedId.value = list;
};

const input = ref<boolean>(false)
// const { focused: inputFocus } = useFocus(input)

const isEdit = ref<boolean>(false);
const editedTodo = ref<Todo>();
const editTodo = async (list: Todo) => {
  isEdit.value = true;
  editedTodo.value = list;
  console.log(input.value)
};

// watch(isEdit, async (newValue: boolean) => {
//   if(newValue==true) {
//     nextTick(() => {
//     input.value.focus()
//   })
//   }
// })

const doneEdit = async () => {
  isEdit.value = false;
  await store.updateTodo(editedTodo.value?._id, editedTodo.value as Todo);
  editedTodo.value = undefined;
};

const cancelEdit = () => {
  isEdit.value = false;
  editedTodo.value = undefined;
};

const close = () => {
  showModal.value = false;
};

const markCompleted = async (list: Todo) => {
  await store.updateTodo(list._id, list);
};
</script>
<template>
  <div>
    <ul
      class="mb-6 flex w-80 flex-col space-y-1 text-left text-gray-500 dark:text-gray-400"
    >
      <li
        class="flex items-center justify-between p-1 text-center"
        v-for="(list, index) in props.todoData"
        :key="index"
      >
        <!-- Icon -->
        <div class="flex items-center justify-between text-center">
          <input
            id="isCompleted"
            type="checkbox"
            v-model="list.isCompleted"
            @change="markCompleted(list)"
            class="h-5 w-5 hover:cursor-pointer rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <label
            class="ml-5 py-2 flex items-center text-start"
            @dblclick="editTodo(list)"
            v-if="!isEdit"
            >{{ list.todo }}</label
          >
          <input
            ref="input"
            v-if="isEdit"
            type="text"
            :name="list.todo"
            :id="list.todo"
            :value="list.todo"
            :disabled="list.isCompleted"
            tabindex="0"
            @blur="cancelEdit"
            @change="doneEdit"
            @keyup.enter="doneEdit"
            @keyup.escape="cancelEdit"
            class="border-none py-2 ml-5 items-center text-start dark:bg-gray-800"
          />
        </div>
        <Icon
          name="trash"
          @click="handleDelete(list._id)"
          class="text-end hover:cursor-pointer hover:text-red-500"
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
