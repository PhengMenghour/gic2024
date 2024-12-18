<template>
  <div class="image-gallery">
    <!-- Main Image Display -->
    <div class="main-image">
      <img :src="'http://localhost:3000/' + currentImage" alt="Main Image" />
    </div>

    <!-- Navigation and Thumbnails -->
    <div class="navigation-container">
      <!-- Previous Button -->
      <button @click="prevImage" class="nav-button">
        <span>&larr;</span>
      </button>

      <!-- Thumbnails -->
      <div class="thumbnail-container">
        <button
          v-for="(image, index) in imgSrc"
          :key="index"
          class="thumbnail"
          :class="{ active: currentImage === image }"
          @click="changeImage(index)"
        >
          <img :src="'http://localhost:3000/' + image" alt="Thumbnail" />
        </button>
      </div>

      <!-- Next Button -->
      <button @click="nextImage" class="nav-button">
        <span>&rarr;</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentImageIndex: 0, // Tracks the current image index
    };
  },

  props: {
    imgSrc: {
      type: Array, // Changed to Array since `imgSrc` is expected to hold multiple images
      required: true,
    },
  },

  computed: {
    currentImage() {
      return this.imgSrc[this.currentImageIndex];
    },
  },

  methods: {
    changeImage(index) {
      this.currentImageIndex = index;
    },
    prevImage() {
      this.currentImageIndex =
        (this.currentImageIndex - 1 + this.imgSrc.length) % this.imgSrc.length;
    },
    nextImage() {
      this.currentImageIndex =
        (this.currentImageIndex + 1) % this.imgSrc.length;
    },
  },
};
</script>

<style scoped>
.image-gallery {
  text-align: center;
  font-family: Arial, sans-serif;
}

.main-image img {
  width: 400px; /* Set fixed width */
  height: 300px; /* Set fixed height */
  object-fit: cover; /* Ensures the image fills the dimensions without distortion */
  margin-bottom: 1rem;
  border-radius: 10px;
  border: 2px solid #ddd;
}

/* Navigation and Thumbnail Layout */
.navigation-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

/* Navigation Buttons */
.nav-button {
  background-color: #f5f5f5;
  border: none;
  font-size: 24px;
  color: #333;
  cursor: pointer;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: #ddd;
}

/* Thumbnails */
.thumbnail-container {
  display: flex;
  gap: 10px;
}

.thumbnail img {
  width: 70px; /* Fixed width for thumbnails */
  height: 70px; /* Fixed height for thumbnails */
  object-fit: cover; /* Ensures consistent size and proportions */
  border-radius: 5px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.thumbnail.active img {
  border-color: #4caf50; /* Green outline for active image */
}

.thumbnail img:hover {
  border-color: #ff9800;
}
</style>
