<template>
    <div class="image-gallery">
      <div class="main-image">
        <img :src="currentImage" alt="Main Image" />
      </div>
      <div class="thumbnail-container">
        <button 
          v-for="(image, index) in images" 
          :key="index" 
          class="thumbnail"
          @click="changeImage(image)"
        >
          <img :src="image" alt="Thumbnail" />
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        images: [
          "/src/assets/images/kiwi.svg", // Replace with actual paths to images
          "/src/assets/images/lemons.svg",
          "/src/assets/images/steak.svg",
          "/src/assets/images/orange.svg"
        ],
        currentImage: "/src/assets/images/fish.svg" // Set the initial main image
      };
    },
    methods: {
      changeImage(image) {
        this.currentImage = image;
      }
    }
  };
  </script>
  
  <style scoped>
  .image-gallery {
    text-align: center;
  }
  
  .main-image img {
    width: 300px; /* Adjust size as needed */
    height: auto;
    margin-bottom: 1rem;
    border-radius: 10px;
  }
  
  .thumbnail-container {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  
  .thumbnail img {
    width: 60px; /* Adjust size as needed */
    height: auto;
    cursor: pointer;
    border-radius: 5px;
    border: 2px solid transparent;
    transition: border-color 0.3s ease;
  }
  
  .thumbnail img:hover {
    border-color: #ff9800; /* Highlight color on hover */
  }
  </style>
  