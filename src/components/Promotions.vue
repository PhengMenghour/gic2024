<template>
  <div class="container">
    <CardPromotion
      v-for="promotion in promotions"
      :key="promotion.id"
      :color="promotion.color"
      :text="promotion.text"
      :image="promotion.image"
      :button-color="promotion.buttonColor"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import CardPromotion from "./CardPromotion.vue";
export default {
  components: {
    CardPromotion,
  },
  setup() {
    const promotions = ref([
      {
        id: 1,
        color: "#f0e8d5",
        text: "Everyday Fresh & Clean with Our Products",
        image: "./src/assets/images/onions.svg",
        buttonColor: "#3bb77e"
      },
      {
        id: 2,
        color: "#f3e8e8",
        text: "Make your Breakfast Healthy and Easy",
        image: "./src/assets/images/bottle.svg",
        buttonColor: "#3bb77e"
      },
      {
        id: 3,
        color: "#e7eaf3",
        text: "The best Organic Products Online",
        image: "./src/assets/images/allvegetable.svg",
        buttonColor: "#fdc041"
      },
    ]);
    return {
      promotions,
    };
  },
};
</script>

<style>
  .container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
</style>
