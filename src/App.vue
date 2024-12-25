<template>
    <div class="header">
        <h1>Header</h1>
        <div class="button-container">
            <router-link @click="storeMessage(currPage, 1)" to="/page1" active-class="active">Page 1</router-link>
            <router-link @click="storeMessage(currPage, 2)" to="/page2" active-class="active">Page 2</router-link>
            <router-link @click="storeMessage(currPage, 3)" to="/page3" active-class="active">Page 3</router-link>
        </div>
    </div>

    <router-view></router-view>

    <div class="input-container">
        <p>Message</p>
        <input type="text" v-model="message">
    </div>

    <div class="footer">
        <h1>Footer</h1>
    </div>

</template>

<script>
import { RouterView } from 'vue-router';
import { useMessageStore } from './stores/messageStore';

export default {
    setup() {
        const store = useMessageStore();

        return {
            store,
        }
    },
    data() {
        return {
            currPage: 1,
            message: "",
        }
    },

    methods: {
        storeMessage(pageNb, toPage) {
            this.store.page[pageNb] = {
                message: this.message,
            }
            this.store.fromPage = pageNb;

            this.message = "";

            this.currPage = toPage;
        }
    }
}

</script>


<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.footer {
    display: flex;
    justify-content: center;
}

.active {
    color: red;
}

.button-container {
    display: flex;
    gap: 20px;
}

.input-container{
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
}

input {
    width: 200px;
    height: 30px;
}
</style>
