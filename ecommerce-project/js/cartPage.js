import {
    getCart,
    deleteFromCart,
    increaseQuantity,
    decreaseQuantity,
    getCartTotal
} from "./cart.js";


const cartContainer =
    document.querySelector("#cartContainer");

const cartTotal =
    document.querySelector("#cartTotal");


// ================= DISPLAY CART =================

function displayCart() {

    const cart = getCart();

    cartContainer.innerHTML = "";


    // Empty cart

    if (cart.length === 0) {

        cartContainer.innerHTML = `
            <div class="empty-cart">

                <h2>Your cart is empty</h2>

                <a href="../index.html">
                    Continue Shopping
                </a>

            </div>
        `;

        cartTotal.textContent = "0";

        return;
    }


    // Display products

    cart.forEach(product => {

        cartContainer.innerHTML += `

            <div
                class="cart-item"
                data-id="${product.id}"
            >

                <div>

                    <h3>
                        ${product.name}
                    </h3>

                    <p>
                        ${product.category}
                    </p>

                </div>


                <div>

                    <p>
                        ₹${product.price}
                    </p>


                    <div class="quantity-controls">

                        <button
                            class="quantity-btn"
                            data-action="decrease"
                            data-id="${product.id}"
                        >
                            -
                        </button>


                        <span>
                            ${product.quantity}
                        </span>


                        <button
                            class="quantity-btn"
                            data-action="increase"
                            data-id="${product.id}"
                        >
                            +
                        </button>

                    </div>

                </div>


                <button
                    class="btn delete-btn"
                    data-action="delete"
                    data-id="${product.id}"
                >
                    Delete
                </button>

            </div>

        `;
    });


    cartTotal.textContent =
        getCartTotal();

}


// ================= CART EVENTS =================

cartContainer.addEventListener(
    "click",
    function (event) {

        const button =
            event.target.closest("button");


        if (!button) {
            return;
        }


        const productId =
            Number(button.dataset.id);

        const action =
            button.dataset.action;


        if (action === "increase") {

            increaseQuantity(productId);

        }


        if (action === "decrease") {

            decreaseQuantity(productId);

        }


        if (action === "delete") {

            deleteFromCart(productId);

        }


        displayCart();

    }
);


// ================= INITIAL LOAD =================

displayCart();