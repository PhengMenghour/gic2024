<template>
    <div>
        <PageHeaderComponent :name="category" />
    </div>
</template>
<script>
import PageHeaderComponent from '@/components/PageHeaderComponent.vue';
import { useProductStore } from '@/stores/Product';
import { mapState } from 'pinia';

export default {
    setup() {
        const store = useProductStore();

        return {
            store,
        }
    },
    components: {
        PageHeaderComponent
    },
    props: {
        categoryId: Number,
    },
    computed: {
        ...mapState(useProductStore, {
            categories: "categories",
        }),

        category() {
            return this.categories[this.categoryId - 1].name
        }
    },

    mounted() {
        console.log(this.categories)
    }

}
</script>
<style></style>