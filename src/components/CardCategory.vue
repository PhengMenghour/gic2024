<template>
  <div class="card-container">
    <div :style="{ backgroundColor: Color }" class="card">
      <div class="image-container">
        <img :src="Image" alt="" />
      </div>
      <h2>{{ Name }}</h2>
      <p>
        <span>{{ Number }}</span>
        items
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    Image: String,
    Name: String,
    Number: Number,
    Color: String,
  },
};
</script>

<style scoped>

.card-container {
  transition: transform 0.3s ease;
}

.card-container:hover {
  transform: scale(1.1); /* Adjust the scale as needed */
  border: 5px;
  border-color: black;
}

.card {
  margin: 10px;
  padding: 10px;
  width: 120px;
  height: 165px;
  border-radius: 15px;
  justify-content: center;
  display: flex;
  flex-direction: column;
}


.card :hover{
    border-color: black;
}

.image-container {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

h2 {
  font-size: 16px;
  margin: 5px 10px;
  text-align: center;
  font-family: "Quicksand", sans-serif;
}

p {
  font-family: "Lato", sans-serif;
  font-size: 12px;
  margin: 0;
  text-align: center;
  color: grey;
}
</style>
