<template>
  <div :style="{ backgroundColor: color }" class="container">
    <img :src="image" alt="" />
    <h3>{{ title }}</h3>
    <CardButton @click="shopNow()" id="button" :buttonColor="buttonColor" />
  </div>
</template>

<script>
import CardButton from "./CardButton.vue";
export default {
  components: {
    CardButton,
  },

  props: {
    title: String,
    image: String,
    color: String,
    buttonColor: String,
  },

  methods: {
    shopNow() {
      alert("Let's shop: " + this.title);
    },
  },

};
</script>

<style scoped>
.container {
  width: 520px;
  height: 300px;
  border-radius: 15px;
  margin: 10px;
  position: relative;
  display: flex;
  /* justify-content: space-between;
    align-items: center; */
}

.container img {
  /* width: 75%; */
  height: 75%;
  object-fit: contain;
  position: absolute;
  right: 0;
  bottom: 0;
  flex-shrink: 0; /* Prevents the image from shrinking */
  max-width: 100%; /* Keeps image responsive */
  width: auto; /* Maintains aspect ratio */
}

.container h3 {
  width: 200px;
  font-family: "Quicksand";
  font-size: 24px;
  position: absolute;
  top: 15%;
  left: 10%;
  width: 50%;
}

#button {
  position: relative;
  top: 60%;
  left: -30%;
}

#button :hover {
  cursor: pointer;
}
</style>
