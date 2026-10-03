// ================= CART =================

// Pehle localStorage se cart check karo.
// Agar cart nahi mila to empty array use karo.

let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];


// ================= SAVE CART =================

function saveCart() {

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

}


// ================= GET CART =================

export function getCart() {

    return cart;

}


// ================= ADD TO CART =================

export function addToCart(product) {

    const existingProduct = cart.find(
        item => item.id === product.id
    );


    // Product already exists
    if (existingProduct) {

        existingProduct.quantity++;

    }


    // New product
    else {

        cart.push({
            ...product,
            quantity: 1
        });

    }


    // Cart ko localStorage mein save karo
    saveCart();

}


// ================= DELETE =================

export function deleteFromCart(productId) {

    cart = cart.filter(
        product => product.id !== productId
    );


    // Updated cart save karo
    saveCart();

}


// ================= INCREASE QUANTITY =================

export function increaseQuantity(productId) {

    const product = cart.find(
        item => item.id === productId
    );


    if (product) {

        product.quantity++;

        saveCart();

    }

}


// ================= DECREASE QUANTITY =================

export function decreaseQuantity(productId) {

    const product = cart.find(
        item => item.id === productId
    );


    if (!product) {

        return;

    }


    if (product.quantity > 1) {

        product.quantity--;

        saveCart();

    }


    else {

        deleteFromCart(productId);

    }

}


// ================= TOTAL =================

export function getCartTotal() {

    return cart.reduce(
        (total, product) => {

            return total +
                product.price * product.quantity;

        },
        0
    );

}