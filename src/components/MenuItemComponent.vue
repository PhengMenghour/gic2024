<template>
    <div v-if="type === 1" class="type-1">
        <button>
            <i :class="iconClass"></i>
            {{ buttonName }}
        </button>
    </div>

    <div v-if="type === 2" class="type-2">
        <router-link :to="`/categories/${categoryId}`" class="button-link">
            <button>
                {{ buttonName }}
                <i class="ri-arrow-down-s-line"></i>
            </button>
        </router-link>
    </div>
</template>
<script>
export default {
    props: {
        type: Number,
        buttonName: String,
        iconClass: String
    }
}
</script>
<style scoped>
.button-link{
    text-decoration: none; /* Remove underline for links */
    color: inherit; /* Ensure text color stays the same */
}

.type-1 button {
    background-color: transparent;
    color: #7E7E7E;
    font-size: 14px;
}

.type-1 button:hover {
    color: #000;
    transition: ease-in-out 0.2s;
}

.type-2 button {
    background-color: transparent;
    color: #7E7E7E;
    font-size: 14px;
    font-weight: bold;
    width: auto;
}

.type-2 button:hover {
    color: #000;
    transition: ease-in-out 0.2s;
}
</style>