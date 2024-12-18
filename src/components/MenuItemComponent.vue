<template>
    <div v-if="type === 1" class="type-1">
        <button>
            <i :class="iconClass"></i>
            {{ buttonName }}
        </button>
    </div>

    
    <div v-if="type === 2" class="type-2">
        <slot name="link">
            <!-- Default behavior if no slot is provided -->

                <button class="styled-button">
                    {{ buttonName }}
                    <i class="ri-arrow-down-s-line"></i>
                </button>

        </slot>
    </div>
</template>
<script>
export default {
    props: {
        type: Number,
        buttonName: String,
        iconClass: String,
        categoryId: Number
    }
}
</script>
<style scoped>

.type-1 button {
    background-color: transparent;
    color: #7E7E7E;
    font-size: 14px;
}

.type-1 button:hover {
    color: #000;
    transition: ease-in-out 0.2s;
}

.styled-button {
  background-color: #007bff;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
}

.styled-button:hover {
  background-color: #0056b3;
}

/* .type-2 button {
    background-color: transparent;
    color: #7E7E7E;
    color: aqua;
    font-size: 14px;
    font-weight: bold;
    width: auto;
}

.type-2 button:hover {
    color: #000;
    transition: ease-in-out 0.2s;
} */
</style>