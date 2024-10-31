<template>
  <div class="container">
    <CardCategory
      v-for="category in categories"
      :key="category.id"
      :image="category.image"
      :name="category.name"
      :productCount="category.productCount"
      :color="category.color"
    />
  </div>
</template>

<script>
import CardCategory from "./CardCategory.vue";

export default {
  components: {
    CardCategory,
  },

  data() {
    return {
      categories: [
        {
          id: 1,
          image: "./src/assets/images/hamburger.svg",
          name: "Cake & Milk",
          productCount: 14,
          color: "#f2fce4",
        },
        {
          id: 2,
          image: "./src/assets/images/persimmon.svg",
          name: "Peach",
          productCount: 17,
          color: "#fffceb",
        },
        {
          id: 3,
          image: "./src/assets/images/kiwi.svg",
          name: "Organic Kiwi",
          productCount: 21,
          color: "#ecffec",
        },
        {
          id: 4,
          image: "./src/assets/images/redapple.svg",
          name: "Red Apple",
          productCount: 28,
          color: "#f2fce4",
        },
        {
          id: 5,
          image: "./src/assets/images/snack.svg",
          name: "Snack",
          productCount: 34,
          color: "#fff3eb",
        },
        {
          id: 6,
          image: "./src/assets/images/blackplum.svg",
          name: "Black plum",
          productCount: 25,
          color: "#fff3ff",
        },
        {
          id: 7,
          image: "./src/assets/images/vegetable.svg",
          name: "Vegetable",
          productCount: 65,
          color: "#f2fce4",
        },
        {
          id: 8,
          image: "./src/assets/images/headphone.svg",
          name: "Headphone",
          productCount: 33,
          color: "#fffceb",
        },
        {
          id: 9,
          image: "./src/assets/images/foodpackage.svg",
          name: "Cake & Milk",
          productCount: 54,
          color: "#f2fce4",
        },
        {
          id: 10,
          image: "./src/assets/images/orange.svg",
          name: "Orange",
          productCount: 63,
          color: "#fff3ff",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
