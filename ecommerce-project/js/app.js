import { products } from "./products.js";

import {
    addToCart,
    getCart
} from "./cart.js";

import {
    buyNow
} from "./orders.js";

import {
    getCurrentUser,
    logoutUser
} from "./auth.js";
// ================= DOM ELEMENTS =================

const productContainer =
    document.querySelector("#productContainer");

const searchInput =
    document.querySelector("#searchInput");

const cartCount =
    document.querySelector("#cartCount");


// ================= DISPLAY PRODUCTS =================

function displayProducts(productList) {

    productContainer.innerHTML = "";


    if (productList.length === 0) {

        productContainer.innerHTML = `
            <p>No products found.</p>
        `;

        return;
    }


    productList.forEach(product => {

        productContainer.innerHTML += `

            <div
                class="product-card"
                data-product-id="${product.id}"
            >

                <h3>
                    ${product.name}
                </h3>

                <p class="product-category">
                    ${product.category}
                </p>

                <p class="product-price">
                    ₹${product.price}
                </p>


                <button
                    class="btn add-cart"
                    data-action="add"
                    data-id="${product.id}"
                >
                    Add to Cart
                </button>


                <button
                    class="btn buy-now"
                    data-action="buy"
                    data-id="${product.id}"
                >
                    Buy Now
                </button>

            </div>

        `;
    });

}


// ================= UPDATE CART COUNT =================

function updateCartCount() {

    cartCount.textContent =
        getCart().length;

}


// ================= PRODUCT CLICK EVENT =================

productContainer.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest("button");


        if (!button) {
            return;
        }


        const productId =
            Number(button.dataset.id);


        const product =
            products.find(
                product => product.id === productId
            );


        if (!product) {
            return;
        }


        const action =
            button.dataset.action;


        // ADD TO CART

        if (action === "add") {

            addToCart(product);

            updateCartCount();

        }


        // BUY NOW

        if (action === "buy") {

            buyNow(product);

        }

    }
);


// ================= SEARCH EVENT =================

searchInput.addEventListener(
    "input",
    function (event) {

        const searchText =
            event.target.value
                .toLowerCase()
                .trim();


        const filteredProducts =
            products.filter(product =>
                product.name
                    .toLowerCase()
                    .includes(searchText)
            );


        displayProducts(filteredProducts);

    }
);


// ================= INITIAL LOAD =================

displayProducts(products);

updateCartCount();

const loginLink =
    document.querySelector("#loginLink");

    function updateLoginUI() {

    const user =
        getCurrentUser();


    if (user) {

        loginLink.textContent =
            "Logout";

        loginLink.href =
            "#";

    }

    else {

        loginLink.textContent =
            "Login";

        loginLink.href =
            "./pages/login.html";

    }

}


loginLink.addEventListener(
    "click",
    function (event) {

        const user =
            getCurrentUser();


        if (!user) {
            return;
        }


        event.preventDefault();


        logoutUser();


        updateLoginUI();

    }
);

updateLoginUI();