import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    sidebar: false,
  }),
  actions: {
    toggleSidebar(state: boolean = false) {
      this.sidebar = !this.sidebar;
    },
  },
  getters: {},
});
