<template>
  <div class="row-1">
    <CategoryComponent
      v-for="category in categories"
      :key="category.id"
      :image="category.image"
      :name="category.name"
      :productCount="category.productCount"
      :color="category.color"
    />
  </div>
  <div class="row-2">
    <PromotionComponent
      v-for="promotion in promotions"
      :key="promotion.id"
      :color="promotion.color"
      :title="promotion.title"
      :image="promotion.image"
      :buttonColor="promotion.buttonColor"
    />
  </div>
</template>

<script>
import CategoryComponent from "./components/CategoryComponent.vue";
import PromotionComponent from "./components/PromotionComponent.vue";
import ButtonComponent from "./components/ButtonComponent.vue";

// import axios from "axios";
import { useProductStore } from "./stores/Product";
import { mapState } from "pinia";

export default {
  components: {
    CategoryComponent,
    PromotionComponent,
    ButtonComponent,
  },

  

  data() {
    return {
      currentGroupname: "Group A",
    };
  },

  methods: {},

  mounted() {
    const productStore = useProductStore();
    productStore.fetchCategories();
    productStore.fetchPromotions();
    productStore.fetchGroup();
    productStore.fetchProducts();
  },

  computed: {
    // Map state and getters from the Pinia store
    ...mapState(useProductStore, {

      // Map the getter getPopularPRoduct to popularProducts
      popularProducts: "getPopularProduct",

      // Dynamically call getCategoriesByGroup with currentGroupName
      categories(store) {
        return store.getCategoriesByGroup(this.currentGroupname);
      },

      // Dynamically call getProductsByGroup with currentGroupName
      productsByGroup(store) {
        return store.getProductsByGroup(this.currentGroupname);
      },

      // Dynamically call getProductsByCategory
      getProductsByCategory(store){
        return store.getProductsByCategory;
      },

      // Get all products directly from the state
      allProducts(store) {
        return store.products;
      },

      // categories(store){
      //   return store.categories;
      // },

      promotions(store) {
        return store.promotions;
      },
    }),
  },
};
</script>

<style>
.row-1,
.row-2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
