import { acceptHMRUpdate, defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { Todo } from "~~/types/todo.type";

const todoStore = useStorage("locale", [] as Todo[]);

export const useTodoStore = defineStore("todos", {
  state: () => ({
    todos: todoStore,
  }),

  getters: {},

  actions: {
    async getTodos() {
      const data: Todo[] = await $fetch("/api/todo/todo");
      return this.todos = data
    },
    async createdTodo(todo: Todo) {
      await useFetch("/api/todo/todo", {
        method: "POST",
        body: todo,
      });
      this.getTodos();
    },
    async deteleTodo(id: Todo["_id"]) {
      await useFetch(`/api/todo/edit/${id}`, {
        method: "DELETE",
      });
      this.getTodos();
    },
    async updateTodo(id: Todo["_id"], todo: Todo) {
      await useFetch(`/api/todo/edit/${id}`, {
        method: "PUT",
        body: {
          todo: todo.todo,
          isCompleted: todo.isCompleted,
        },
      });
      this.getTodos();
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTodoStore, import.meta.hot));
}
