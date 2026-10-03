// ================= BUY NOW =================

export function buyNow(product) {

    // Selected product ko localStorage mein save karo
    localStorage.setItem(
        "buyNowProduct",
        JSON.stringify(product)
    );

    // Checkout page par jao
    window.location.href =
        "./pages/checkout.html";
}


// ================= GET BUY NOW PRODUCT =================

export function getBuyNowProduct() {

    const product =
        localStorage.getItem(
            "buyNowProduct"
        );

    if (!product) {
        return null;
    }

    return JSON.parse(product);
}


// ================= CLEAR BUY NOW PRODUCT =================

export function clearBuyNowProduct() {

    localStorage.removeItem(
        "buyNowProduct"
    );

}