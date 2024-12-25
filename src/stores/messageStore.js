import { defineStore } from "pinia";

export const useMessageStore = defineStore("message", {
  state: () => ({
    page: {},
    section: {},
    fromPage: 1,     // Number
    fromSection: [],
  }),

  getters: {
    
  },

  actions: {
    
  },
});
