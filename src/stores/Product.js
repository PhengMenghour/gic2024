import axios from "axios";
import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    groups: [],
    promotions: [],
    categories: [],
    products: [],
  }),

  getters: {
    // getCategoriesByGroup(groupName): List all categories by group name
    getCategoriesByGroup: (state) => (groupName) => {
      return state.categories.filter(
        (category) => category.groupName === groupName
      );
    },

    // getProductsByGroup(groupName): List all products by group name
    getProductsByGroup: (state) => (groupName) => {
      return state.products.filter(
        (product) => product.groupName === groupName
      );
    },

    // getProductsByCategory(categoryId): List all products by given categoryId
    getProductsByCategory: (state) => (categoryId) => {
      return state.products.filter(
        (product) => product.categoryId === categoryId
      );
    },

    // getPopularProducts(): Any product with countSold > 10 is considered popular
    getPopularProduct: (state) => {
      return state.products.filter((product) => product.countSold > 10);
    },
  },

  actions: {
    async fetchGroup() {
      // Axios call goes here
      try {
        const response = await axios.get("http://localhost:3000/api/groups");
        this.groups = response.data;
      } catch (error) {
        console.error("Error fetching groups:");
      }
    },

    async fetchCategories() {
      // Axios call goes here
      try {
        const response = await axios.get(
          "http://localhost:3000/api/categories"
        );
        this.categories = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },

    async fetchProducts(){
        // Axios call goes here
        try {
            const response = await axios.get(
                "http://localhost:3000/api/products"
            );
            this.products = response.data;
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    },

    async fetchPromotions() {
      // Axios call goes here
      try {
        const response = await axios.get(
          "http://localhost:3000/api/promotions"
        );
        this.promotions = response.data;
      } catch (error) {
        console.error("Error fetching promotions:", error);
      }
    },
  },
});
