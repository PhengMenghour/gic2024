<template>
    <div class="newsletter-section">
        <div class="newsletter-content">
            <div class="header-font">
                <h1>Don’t miss amazing</h1>
                <h1>grocery deals</h1>
            </div>
            <div class="p-font">
                <p>Sign up for the daily newsletter</p>
            </div>
            <form class="newsletter-form" @submit.prevent="subscribe">
                <input v-model="email" type="email" placeholder="Your email address" required
                    aria-label="Email address" />
                <button type="submit">Subscribe</button>
            </form>
        </div>
        <div class="newsletter-image">
            <img src="/src/assets/images/freshApple.svg" alt="Grocery Bag with Apples" />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: "",
        };
    },
    methods: {
        subscribe() {
            if (this.email && this.validateEmail(this.email)) {
                alert(`Thank you for subscribing with ${this.email}!`);
                this.email = ""; // Clear the input field after submission
            } else {
                alert("Please enter a valid email address.");
            }
        },
        validateEmail(email) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return regex.test(email);
        },
    },
};
</script>

<style scoped>
.newsletter-section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    /* padding: 2rem; */
    background-color: #fef7e7;
    background-image: url("@/assets/images/background.svg");
    background-size: cover;
    background-position: center;
    border: 1px solid #ccc;
    border-radius: 10px;
    max-width: 1200px;
    margin: 2rem auto;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}



.newsletter-content {
    flex: 1;
    max-width: 50%;
    padding-left: 25px;
}

.newsletter-content h1 {
    font-size: 2.5rem;
    color: #2c3e50;
    margin: 0 0 1rem;
}

.newsletter-content p {
    font-size: 1.2rem;
    color: #34495e;
    margin: 0 0 1.5rem;
}

.newsletter-form {
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 50px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden; /* Ensures the border-radius applies to children */
    max-width: 500px;
    /* margin: 0 auto; */
}

.newsletter-form input {
    flex: 1;
    padding: 0.8rem 1rem;
    border: none;
    font-size: 1rem;
    color: #7E7E7E;
    outline: none;
    font-family: "Lato", sans-serif;
    background-color: transparent;
    display: flex;
    align-items: center;
}

.newsletter-form input::placeholder {
    color: #7E7E7E;
    font-size: 1rem;
}

.newsletter-form input:before {
    content: "\f1d8"; /* Font Awesome paper plane icon */
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    margin-right: 10px;
    color: #7E7E7E;
}

.newsletter-form button {
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 0.8rem 2rem;
    background-color: #27ae60;
    color: white;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 50px;
    font-family: "Quicksand", sans-serif;
    transition: background-color 0.3s ease;

}

.newsletter-form button:hover {
    background-color: #2ecc71;
}

.newsletter-image {
    flex: 1;
    max-width: 100%;
}

.newsletter-image img {
    max-width: 100%;
    border-radius: 10px;
}

.header-font{
    font-family: "Quicksand";
}

.p-font{
    font-family: "Lato";
    color: #7E7E7E;
}

/* Responsive Styles */
@media (max-width: 768px) {
    .newsletter-section {
        flex-direction: column;
        text-align: center;
    }

    .newsletter-content,
    .newsletter-image {
        max-width: 100%;
    }

    .newsletter-form {
        flex-direction: column;
    }

    .newsletter-form input,
    .newsletter-form button {
        width: 100%;
        margin-bottom: 0.5rem;
    }
}
</style>