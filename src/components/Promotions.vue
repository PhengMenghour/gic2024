<template>
  <div class="container">
    <CardPromotion
      v-for="promotion in promotions"
      :key="promotion.id"
      :color="promotion.color"
      :title="promotion.title"
      :image="promotion.image"
      :button-color="promotion.buttonColor"
    />
  </div>
</template>

<script>
import CardPromotion from "./CardPromotion.vue";

export default {
  components: {
    CardPromotion,
  },
  data() {
    return {
      promotions: [
        {
          id: 1,
          color: "#f0e8d5",
          title: "Everyday Fresh & Clean with Our Products",
          image: "./src/assets/images/onions.svg",
          buttonColor: "#3bb77e",
        },
        {
          id: 2,
          color: "#f3e8e8",
          title: "Make your Breakfast Healthy and Easy",
          image: "./src/assets/images/bottle.svg",
          buttonColor: "#3bb77e",
        },
        {
          id: 3,
          color: "#e7eaf3",
          title: "The best Organic Products Online",
          image: "./src/assets/images/allvegetable.svg",
          buttonColor: "#fdc041",
        },
      ],
    };
  },


};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
