import {
    getBuyNowProduct,
    clearBuyNowProduct
} from "./orders.js";


// ================= ELEMENTS =================

const checkoutProduct =
    document.querySelector(
        "#checkoutProduct"
    );


const checkoutForm =
    document.querySelector(
        "#checkoutForm"
    );


const nameInput =
    document.querySelector(
        "#name"
    );


const addressInput =
    document.querySelector(
        "#address"
    );


const phoneInput =
    document.querySelector(
        "#phone"
    );


const orderMessage =
    document.querySelector(
        "#orderMessage"
    );


// ================= GET PRODUCT =================

const product =
    getBuyNowProduct();


// ================= DISPLAY PRODUCT =================

function displayProduct() {

    if (!product) {

        checkoutProduct.innerHTML = `
            <p>
                No product selected.
            </p>

            <a href="../index.html">
                Continue Shopping
            </a>
        `;

        checkoutForm.style.display =
            "none";

        return;
    }


    checkoutProduct.innerHTML = `

        <div class="product-card">

            <h3>
                ${product.name}
            </h3>

            <p class="product-category">
                ${product.category}
            </p>

            <p class="product-price">
                ₹${product.price}
            </p>

        </div>

    `;
}


// ================= PLACE ORDER =================

checkoutForm.addEventListener(
    "submit",
    function (event) {

        // Default form submit stop
        event.preventDefault();


        // ================= VALIDATION =================

        const name =
            nameInput.value.trim();


        const address =
            addressInput.value.trim();


        const phone =
            phoneInput.value.trim();


        if (
            !name ||
            !address ||
            !phone
        ) {

            orderMessage.textContent =
                "Please fill all details.";

            orderMessage.style.color =
                "red";

            return;
        }


        // ================= ORDER OBJECT =================

        const order = {

            orderId:
                Date.now(),

            product: product,

            customer: {

                name: name,

                address: address,

                phone: phone

            },

            orderDate:
                new Date().toLocaleString()

        };


        // ================= SAVE ORDER =================

        localStorage.setItem(
            "lastOrder",
            JSON.stringify(order)
        );


        // Buy Now product remove
        clearBuyNowProduct();


        // ================= SUCCESS =================

        orderMessage.textContent =
            "Order placed successfully!";

        orderMessage.style.color =
            "green";


        checkoutForm.reset();


        // Home page par redirect
        setTimeout(
            function () {

                window.location.href =
                    "../index.html";

            },
            1500
        );

    }
);


// ================= INITIAL LOAD =================

displayProduct();