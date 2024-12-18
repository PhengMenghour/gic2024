<template>
  <div class="product-detail-card">
    <div class="stock-status" v-if="inStock">In Stock</div>
    <h1 class="product-title">{{ product.name }}</h1>
    <div class="rating">
      <span class="stars"><i class="ri-star-fill"></i></span>
      <span class="stars"><i class="ri-star-fill"></i></span>
      <span class="stars"><i class="ri-star-fill"></i></span>
      <span class="stars"><i class="ri-star-fill"></i></span>
      <span class="rating-value">({{ product.rating }})</span>
    </div>
    <div class="pricing">
      <span class="current-price">${{ product.price }}</span>
      <span class="original-price" v-if="product.price">
        ${{ product.price }}
      </span>
    </div>
    <p class="description">{{ product.description }}</p>
    <div class="actions">
      <div class="quantity-selector">
        <span class="quantity">{{ quantity }}</span>
        <div class="controls">
          <button class="increase" @click="increaseQuantity">
            <i class="ri-arrow-up-s-line"></i>
          </button>
          <button class="decrease" @click="decreaseQuantity">
            <i class="ri-arrow-down-s-line"></i>
          </button>
        </div>
      </div>

      <button class="add-to-cart" @click="addToCart">Add To Cart</button>
      <button class="wishlist"><i class="ri-heart-3-line"></i></button>
      <button class="compare"><i class="ri-shuffle-line"></i></button>
    </div>
    <div class="product-meta">
      <p><strong>Vendor:</strong> SKU</p>
      <p><strong>SKU:</strong> SKU </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    product: Object,
},

  data() {
    return {
      inStock: true, // Replace with actual stock status
      quantity: 1,
    };
  },
  methods: {
    addToCart() {
      console.log(`Added ${this.quantity} items to the cart.`);
    },
    increaseQuantity() {
      this.quantity++;
    },

    decreaseQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },


  },
};
</script>

<style scoped>
.product-detail-card {
  font-family: Arial, sans-serif;
  line-height: 1.5;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  max-width: 500px;
}

.stock-status {
  color: #28a745;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: "Quicksand"
}

.product-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  font-family: "Quicksand"
}

.rating {
  font-size: 14px;
  color: #ff9800;
  margin-bottom: 10px;
}

.pricing {
  margin-bottom: 15px;
  font-family: "Quicksand"
}

.current-price {
  font-size: 24px;
  color: #28a745;
  font-weight: bold;
}

.original-price {
  font-size: 18px;
  color: #999;
  text-decoration: line-through;
  margin-left: 10px;
}

.description {
  margin-bottom: 15px;
  font-family: "Lato"
}

.actions {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  font-family: "Quicksand";
}

.quantity-input {
  width: 50px;
  padding: 5px;
}

.add-to-cart {
  width: auto;
  background-color: #28a745;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-to-cart:hover {
  background-color: #218838;
}

.wishlist,
.compare {
  background-color: #f0f0f0;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
}

.wishlist:hover,
.compare:hover {
  background-color: #e0e0e0;
}

.product-meta {
  font-size: 14px;
  color: #666;
  font-family: "Lato";
}

.quantity-selector {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  height: 30px;
  padding: 5px 10px;
  border: 2px solid #28a745;
  border-radius: 5px;
  font-size: 16px;
  color: #28a745;
  font-weight: bold;
  transition: border-color 0.3s, transform 0.2s ease-in-out, box-shadow 0.3s ease;

  position: relative;
}

.quantity {
  text-align: center;
  width: 25px;
  /* Ensure enough space for the quantity number */
}

.controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0px;
  /* Space between the buttons */

  position: absolute;
}

.controls button {
  background: none;
  border: none;
  color: #28a745;
  cursor: pointer;
  font-size: 14px;
  padding: 5px;
  transition: color 0.3s, transform 0.2s ease-in-out;

  height: 25px;
}

.controls button:hover {
  color: #218838;
  transform: scale(1.2);
}

.controls button:active {
  color: #1c7430;
  transform: scale(1);
}
</style>