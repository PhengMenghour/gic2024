<template>
    <div class="header">
        <div>
            <img src="/src/assets/images/logo.svg" alt="Logo">
        </div>
        <SearchboxComponent />
        <div class="menuItem-container">
            <MenuItemComponent v-for="menuItem in filteredHeaderMenuItems" :key="menuItem.id" :type="menuItem.type"
                :buttonName="menuItem.buttonName" :iconClass="menuItem.iconClass" />
        </div>
    </div>
    <hr>
    <div class="header-2">
        <div class="browse-button">
            <i class="ri-layout-grid-line"></i>
            <span>Browse All Categories</span>
            <i class="ri-arrow-down-s-line"></i>
        </div>

        <MenuItemComponent v-if="hotDealMenuItem" :key="hotDealMenuItem.id" :type="hotDealMenuItem.type"
            :buttonName="hotDealMenuItem.buttonName" :iconClass="hotDealMenuItem.iconClass" />

        <MenuItemComponent v-for="menuItem in filteredCategoryMenuItems" :key="menuItem.id" :type="menuItem.type"
            :buttonName="menuItem.buttonName" :iconClass="menuItem.iconClass">
            <template v-slot:link>
                <button @click="navigateToCategory(menuItem.id)" class="styled-button">{{ menuItem.buttonName }} <i class="ri-arrow-down-s-line"></i></button>
            </template>
        </MenuItemComponent>

        <div class="contact-container">
            <div class="contact-left">
                <i class="ri-customer-service-line"></i>
            </div>
            <div class="contact-right">
                <div class="contact-right-up">099 777 888</div>
                <div class="contact-right-down">24/7 Support Center</div>
            </div>
        </div>
    </div>
    <hr>
    <router-view />
</template>

<script>
import MenuItemComponent from './MenuItemComponent.vue';
import SearchboxComponent from './SearchboxComponent.vue';
import { useRouter } from 'vue-router';

export default {
    components: {
        SearchboxComponent,
        MenuItemComponent,
    },
    data() {
        return {
            menuItems: [
                { id: 1, type: 1, buttonName: "Profile", iconClass: "ri-user-line" },
                { id: 2, type: 1, buttonName: "Compare", iconClass: "ri-loop-left-line" },
                { id: 3, type: 1, buttonName: "Wishlist", iconClass: "ri-heart-3-line" },
                { id: 4, type: 1, buttonName: "Cart", iconClass: "ri-shopping-cart-line" },
                { id: 5, type: 1, buttonName: "Hot Deals", iconClass: "ri-fire-line" },
                { id: 6, type: 2, buttonName: "Home" },
                { id: 7, type: 2, buttonName: "Food" },
                { id: 8, type: 2, buttonName: "Vegetables" },
                { id: 9, type: 2, buttonName: "Drink" },
                { id: 10, type: 2, buttonName: "Cookies" },
                { id: 11, type: 2, buttonName: "Meat & Seafood" },
                { id: 12, type: 2, buttonName: "Bakery" },
            ],
        };
    },
    computed: {
        filteredHeaderMenuItems() {
            return this.menuItems.filter(item => item.type === 1 && item.id >= 1 && item.id <= 4);
        },
        hotDealMenuItem() {
            return this.menuItems.find(item => item.id === 5);
        },
        filteredCategoryMenuItems() {
            return this.menuItems.filter(item => item.type === 2);
        },
    },
    methods: {
        navigateToCategory(categoryId) {
            this.$router.push(`/categories/${categoryId}`);
        },
    },
};
</script>

<style scoped>


.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
}

.menuItem-container {
    display: flex;
}

.header-2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px;
}

.browse-button {
    display: flex;
    align-items: center;
    background-color: #34a853;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    font-family: "Quicksand";
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.browse-button:hover {
    background-color: #2e8c47;
}

.browse-button i {
    font-size: 18px;
    margin-right: 10px;
}

.contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.contact-left i {
    font-size: 30px;
    color: #000;
}

.contact-right {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
}

.contact-right-up {
    font-family: "Quicksand";
    font-weight: bold;
    color: #3BB77E;
}

.contact-right-down {
    font-family: "Lato";
    font-size: 14px;
}

.styled-button {
    background-color: transparent;
    color: #7E7E7E;
    font-size: 14px;
    font-weight: bold;
    width: auto;
    text-decoration: none; /* Ensure no underline on the button */
}

.styled-button:hover {
    color: #000;
    transition: ease-in-out 0.2s;
}

</style>
