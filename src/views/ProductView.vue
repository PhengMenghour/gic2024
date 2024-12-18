<template>
    <nav class="breadcrumb">
        <span><a href="/">Home</a></span>
        <span> &gt; </span>
        <span><a href="/products">Vegetables & tubers</a></span>
        <span> &gt; </span>
        <span>Seeds of Change Organic</span>
    </nav>
    <div class="container">
        <div>
            <ProductImageComponent :imgSrc="parsedImages" />
        </div>
        <div>
            <ProductDetailComponent :name="product.name" :product="products[productId - 1]" />
        </div>
    </div>
    <div class="tabs">
        <!-- Tab Buttons -->
        <div class="tab-buttons">
            <button v-for="tab in tabs" :key="tab.id" class="tab-button" :class="{ active: activeTab === tab.id }"
                @click="setActiveTab(tab.id)">
                {{ tab.label }}
            </button>
        </div>

        <!-- Tab Content -->
        <div class="tab-content" v-for="tab in tabs" :key="tab.id" v-show="activeTab === tab.id">
            <p v-for="(paragraph, index) in tab.content" :key="index">
                {{ paragraph }}
            </p>
        </div>
    </div>
</template>
<script>
import ProductDetailComponent from '@/components/ProductDetailComponent.vue';
import ProductImageComponent from '@/components/ProductImageComponent.vue';
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
        ProductImageComponent,
        ProductDetailComponent
    },

    props: {
        productId: Number,
    },

    methods: {
        setActiveTab(tabId) {
            this.activeTab = tabId;
        }
    },

    computed: {
        ...mapState(useProductStore, {
            products: "products",
        }),

        product() {
            console.log(this.products?.[this.productId - 1]?.image[0])
            return this.products?.[this.productId - 1]?.name || "Product not found";
        },

        parsedImages() {
            console.log(JSON.parse(this.products[this.productId - 1].image))
            return JSON.parse(this.products[this.productId - 1].image)
        }
    },

    data() {
        return {
            activeTab: 'description', // Default active tab
            tabs: [
                {
                    id: 'description',
                    label: 'Description',
                    content: [
                        `Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off far quetzal goodness and from for grimaced goodness unaccountably and meadowlark near unblushingly crucial scallop tightly neurotic hungrily some and dear furiously this apart.`,
                        `Spluttered narrowly yikes left moth in yikes bowed this that grizzly much hello on spoon-fed that alas rethought much decently richly and wow against the frequent fluidly at formidable acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch mastodon goodness gnashed a jellyfish and one however because.`
                    ]
                },
                {
                    id: 'additional-info',
                    label: 'Additional info',
                    content: ['Additional information content goes here.']
                },
                {
                    id: 'reviews',
                    label: 'Reviews (3)',
                    content: ['Reviews content goes here.']
                }
            ]
        };

    },
}
</script>
<style scoped>
.container {
    display: flex;
    justify-content: space-evenly;
    margin-top: 25px;
}

.breadcrumb {
    font-size: 0.9rem;
    color: #6d6d6d;
    font-family: "Lato";
}

.breadcrumb a {
    text-decoration: none;
    color: #6d6d6d;
}

.breadcrumb a:hover {
    text-decoration: underline;
}

.breadcrumb span {
    margin: 0 5px;
}

.tabs {
    max-width: 800px;
    margin: 50px auto;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.tab-buttons {
    display: flex;
    border-bottom: 1px solid #e0e0e0;
}

.tab-button {
    flex: 1;
    padding: 15px;
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    font-size: 16px;
    text-align: center;
    transition: all 0.3s ease;
    color: #6d6d6d
}

.tab-button.active {
    border-bottom: 2px solid #28a745;
    color: #28a745;
}

.tab-content {
    padding: 20px;
    font-size: 14px;
    color: #333;
}
</style>