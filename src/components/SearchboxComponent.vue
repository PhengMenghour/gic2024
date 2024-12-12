<template>
    <div class="search-bar">
      <select v-model="selectedCategory" class="category-dropdown">
        <option>All Categories</option>
        <option>Category 1</option>
        <option>Category 2</option>
        <option>Category 3</option>
      </select>
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search for items"
        class="search-input"
      />
      <button @click="performSearch" class="search-button">
        <i class="ri-search-line"></i>
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCategory: "All Categories",
        searchQuery: "",
      };
    },
    methods: {
      performSearch() {
        console.log(
          `Searching for "${this.searchQuery}" in "${this.selectedCategory}"`
        );
        // Search logic here
      },
    },
  };
  </script>
  
  <style scoped>
.search-bar {
  display: flex;
  align-items: center;
  border: 1px solid #c9e8d4; 
  border-radius: 4px;
  padding: 5px;
  max-width: 600px;
  margin: 0 auto;
}

.category-dropdown {
  border: none; 
  background: none; 
  font-size: 14px; 
  margin-right: 10px; 
}

.search-input {
  flex-grow: 1; 
  border: none; 
  outline: none; 
  font-size: 14px; 
  padding: 5px; 
}

.search-button {
  background: none; 
  border: none; 
  cursor: pointer; 
  font-size: 16px; 
  margin-left: 10px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
}

.search-button i {
  font-size: 20px; 
  color: #7E7E7E; 
}



  </style>
  