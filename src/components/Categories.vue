<template>
  <div class="container">
    <CardCategory
      v-for="category in categories"
      :key="category.id"
      :Image="category.Image"
      :Name="category.Name"
      :Number="category.Number"
      :Color="category.Color"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import CardCategory from "./CardCategory.vue";
export default {
  components: {
    CardCategory,
  },
  setup() {
    const categories = ref([
      {
        id: 1,
        Image: "./src/assets/images/hamburger.svg",
        Name: "Cake & Milk",
        Number: 14,
        Color: "#f2fce4",
      },
      {
        id: 2,
        Image: "./src/assets/images/persimmon.svg",
        Name: "Peach",
        Number: 17,
        Color: "#fffceb",
      },
      {
        id: 3,
        Image: "./src/assets/images/kiwi.svg",
        Name: "Organic Kiwi",
        Number: 21,
        Color: "#ecffec",
      },
      {
        id: 4,
        Image: "./src/assets/images/redapple.svg",
        Name: "Red Apple",
        Number: 28,
        Color: "#f2fce4",
      },
      {
        id: 5,
        Image: "./src/assets/images/snack.svg",
        Name: "Snack",
        Number: 34,
        Color: "#fff3eb",
      },
      {
        id: 6,
        Image: "./src/assets/images/blackplum.svg",
        Name: "Black plum",
        Number: 25,
        Color: "#fff3ff",
      },
      {
        id: 7,
        Image: "./src/assets/images/vegetable.svg",
        Name: "Vegetable",
        Number: 65,
        Color: "#f2fce4",
      },
      {
        id: 8,
        Image: "./src/assets/images/headphone.svg",
        Name: "Headphone",
        Number: 33,
        Color: "#fffceb",
      },
      {
        id: 9,
        Image: "./src/assets/images/foodpackage.svg",
        Name: "Cake & Milk",
        Number: 54,
        Color: "#f2fce4",
      },
      {
        id: 10,
        Image: "./src/assets/images/orange.svg",
        Name: "Orange",
        Number: 63,
        Color: "#fff3ff",
      },
    ]);
    return {
      categories,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  /* gap: 50px; */
  flex-wrap: wrap;
  justify-content: center;
}

</style>
