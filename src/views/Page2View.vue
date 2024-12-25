<template>
    <div class="container">
        <div class="sidebar">
            <h1>Menu</h1>
            <ul>
                <li><router-link active-class="active" to="/page2/section1">Section 1</router-link></li>
                <li><router-link active-class="active" to="/page2/section2">Section 2</router-link></li>
                <li><router-link active-class="active" to="/page2/section3">Section 3</router-link></li>
                <li><router-link active-class="active" to="/page2/section4">Section 4</router-link></li>
            </ul>
        </div>
        <div class="content">
            <p>Welcome to Page 2</p>

            <p >From Page {{ store.fromPage }}: {{ message }} </p>
            
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import { useMessageStore } from '@/stores/messageStore';

export default {
    setup() {
        const store = useMessageStore();

        return {
            store,
        }
    },
    data() {
        return {
            message: "",
        }
    },

    mounted() {
        console.log('mounting')
        const fromPage = this.store.fromPage; 
        this.message = this.store.page[fromPage].message

        console.log('finish mounting')
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: center; /* Centers horizontally */
        align-items: center; /* Centers vertically */
    }

    .sidebar {
        width: 200px; /* Adjust based on your design */
        padding: 20px;
    }

    .content {
        flex-grow: 1; /* Allows content to take up the remaining space */
        text-align: center; /* Centers the content inside the content div */
    }

    .active {
    color: red;
}
</style>
