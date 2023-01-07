<script setup lang="ts">
import type { PropType } from "vue";
import { Todo } from "~/types/todo.type";
import { useTodoStore } from "~/stores/todo";

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
      class="mb-8 ml-2.5 flex w-80 flex-col space-y-4 text-left text-gray-500 dark:text-gray-400"
    >
      <li
        class="flex items-center justify-between p-1 text-center"
        v-for="(list, index) in props.todoData"
        :key="index"
      >
        <!-- Icon -->
        <div class="flex items-center">
          <input
            id="isCompleted"
            type="checkbox"
            v-model="list.isCompleted"
            @change="markCompleted(list)"
            class="h-4 w-4 rounded border-gray-300 bg-gray-100 text-blue-600 focus:ring-2 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
          />
          <span class="ml-5 flex items-center text-center">{{
            list.todo
          }}</span>
        </div>
        <Icon
          name="trash"
          @click="handleDelete(list._id)"
          class="text-end hover:cursor-pointer hover:text-red-500"
        />
      </li>
    </ul>
    <SharedConfirmedModal :show="showModal" :_id="confirmedId" @closeModal="close" />
  </div>
</template>
