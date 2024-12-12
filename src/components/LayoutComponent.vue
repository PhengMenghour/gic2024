<template>
    <div class="header">
        <div>
            <img src="/src/assets/images/logo.svg" alt="">
        </div>
        <SearchboxComponent />
        <div class="menuItem-container">
            <MenuItemComponent
                v-for="menuItem in menuItems.filter(item => item.type === 1 && item.id >= 1 && item.id <= 4)"
                :key="menuItem.id" :type="menuItem.type" :buttonName="menuItem.buttonName"
                :iconClass="menuItem.iconClass" />
        </div>
    </div>
    <hr>
    <div class="header-2">
        <div class="browse-button">
            <i class="ri-layout-grid-line"></i>
            <span>Browse All Categories</span>
            <i class="ri-arrow-down-s-line"></i>
        </div>
        <MenuItemComponent v-if="menuItems.find(item => item.id === 5)" :key="menuItems.find(item => item.id === 5).id"
            :type="menuItems.find(item => item.id === 5).type"
            :buttonName="menuItems.find(item => item.id === 5).buttonName"
            :iconClass="menuItems.find(item => item.id === 5).iconClass" />
        <MenuItemComponent v-for="menuItem in menuItems.filter(item => item.type === 2)" :key="menuItem.id"
            :type="menuItem.type" :buttonName="menuItem.buttonName" :iconClass="menuItem.iconClass" />
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

export default {
    components: {
        SearchboxComponent,
        MenuItemComponent,
    },

    data() {
        return {
            menuItems: [
                {
                    id: 1,
                    type: 1,
                    buttonName: "Profile",
                    iconClass: "ri-user-line"
                },
                {
                    id: 2,
                    type: 1,
                    buttonName: "Compare",
                    iconClass: "ri-loop-left-line"
                },
                {
                    id: 3,
                    type: 1,
                    buttonName: "Wishlist",
                    iconClass: "ri-heart-3-line"
                },
                {
                    id: 4,
                    type: 1,
                    buttonName: "Cart",
                    iconClass: "ri-shopping-cart-line"
                },
                {
                    id: 5,
                    type: 1,
                    buttonName: "Hot Deals",
                    iconClass: "ri-fire-line"
                },
                {
                    id: 6,
                    type: 2,
                    buttonName: "Home"
                },
                {
                    id: 7,
                    type: 2,
                    buttonName: "Food"
                },
                {
                    id: 8,
                    type: 2,
                    buttonName: "Vegetables"
                },
                {
                    id: 9,
                    type: 2,
                    buttonName: "Drink"
                },
                {
                    id: 10,
                    type: 2,
                    buttonName: "Cookies"
                },
                {
                    id: 11,
                    type: 2,
                    buttonName: "Meat & Seafood"
                },
                {
                    id: 12,
                    type: 2,
                    buttonName: "Bakery"
                },
            ]

        }
    }
}
</script>
<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px 0 20px;

}

.menuItem-container {
    display: flex;
}

.header-2 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 20px 0 20px;
}

.browse-button {
    display: flex;
    align-items: center;
    background-color: #34a853;
    /* Green background */
    color: white;
    /* White text */
    padding: 10px 20px;
    border-radius: 8px;
    /* Rounded corners */
    font-family: "Quicksand";
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.browse-button:hover {
    background-color: #2e8c47;
    /* Darker green on hover */
}

.browse-button i {
    font-size: 18px;
    margin-right: 10px;
    /* Space between icon and text */
}

.contact-container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.contact-container .contact-left i {
    font-size: 30px;
    /* Adjust the size as needed */
    color: #000;
    /* Optional: Change color */
}

.contact-right {
    display: flex;
    flex-direction: column;
    margin: 0 0 0 5px;

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
</style>