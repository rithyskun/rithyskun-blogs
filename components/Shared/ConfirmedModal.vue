<script setup lang="ts">
import { onClickOutside, whenever, useMagicKeys } from "@vueuse/core";
import { Todo } from "~~/types/todo.type";
import { useTodoStore } from "~/stores/todo";

defineProps<{
  show: boolean;
  _id?: string;
}>();

const store = useTodoStore();
const emit = defineEmits(["closeModal"]);

const refTarget = ref(null);
const keys = useMagicKeys();
whenever(keys.escape, () => {
  emit("closeModal");
});

onClickOutside(refTarget, () => {
  emit("closeModal");
});

const handleConfirmed = async (id: Todo["_id"]) => {
  await useFetch(`/api/todo/${id}`, {
    method: "DELETE",
  });
  //   store.deteleTodo(id)
  store.getTodos();
  emit("closeModal");
};
</script>

<template>
  <div
    v-show="show"
    ref="refTarget"
    id="popup-modal"
    className="fixed inset-0 z-40 flex items-center justify-center bg-gray-300"
  >
    <div className="relative bg-white rounded-lg dark:bg-gray-700">
      <button
        @click="$emit('closeModal')"
        type="button"
        className="absolute top-3 right-2.5 bg-gray-100 rounded-full text-gray-400 hover:bg-gray-200 hover:text-gray-900 text-sm py-1.5 px-2.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
        data-modal-toggle="popup-modal"
      >
        X<span className="sr-only">Close modal</span>
      </button>
      <div className="p-6 text-center">
        <Icon name="lightning" size="32px" />
        <h3
          className="p-5 text-lg font-normal text-gray-500 dark:text-gray-400"
        >
          Are you sure you want to delete?
        </h3>
        <button
          @click="handleConfirmed(_id)"
          data-modal-toggle="popup-modal"
          type="button"
          className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
        >
          Yes, I'm sure
        </button>
        <button
          @click="$emit('closeModal')"
          data-modal-toggle="popup-modal"
          type="button"
          className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
        >
          No, cancel
        </button>
      </div>
    </div>
  </div>
</template>