<template>
    <div class="product-detail-card">
      <div class="stock-status" v-if="inStock">In Stock</div>
      <h1 class="product-title">{{ product.name }}</h1>
      <div class="rating">
        <span class="stars">⭐️⭐️⭐️⭐️☆</span>
        <span class="rating-value">({{ product.rating }})</span>
      </div>
      <div class="pricing">
        <span class="current-price">${{ product.price }}</span>
        <span class="original-price" v-if="product.originalPrice">
          ${{ product.originalPrice }}
        </span>
      </div>
      <p class="description">{{ product.description }}</p>
      <div class="actions">
        <input
          type="number"
          v-model="quantity"
          class="quantity-input"
          min="1"
        />
        <button class="add-to-cart" @click="addToCart">Add To Cart</button>
        <button class="wishlist">❤️</button>
        <button class="compare">⇄</button>
      </div>
      <div class="product-meta">
        <p><strong>Vendor:</strong> {{ product.vendor }}</p>
        <p><strong>SKU:</strong> {{ product.sku }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inStock: true, // Replace with actual stock status
        quantity: 1,
        product: {
          name: "Seeds of Change Organic Quinoa, Brown",
          rating: 4.0,
          price: 38,
          originalPrice: 42,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!",
          vendor: "NestMart",
          sku: "FWM15VKT",
        },
      };
    },
    methods: {
      addToCart() {
        console.log(`Added ${this.quantity} items to the cart.`);
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
  }
  
  .product-title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .rating {
    font-size: 14px;
    color: #ff9800;
    margin-bottom: 10px;
  }
  
  .pricing {
    margin-bottom: 15px;
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
  }
  
  .actions {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
  }
  
  .quantity-input {
    width: 50px;
    padding: 5px;
  }
  
  .add-to-cart {
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
  }
  </style>
  