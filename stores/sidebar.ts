import { defineStore } from "pinia";

export const useSidebarStore = defineStore("sidebar", {
  state: () => ({
    sidebar: true,
  }),
  actions: {
    toggleSidebar(state: boolean = false) {
      this.sidebar = !this.sidebar;
    },
  },
  getters: {},
});
