
const product = [
    {                              // ye Object hai 
        id : 1,
        name : "iphone 15",
        price : 69999,
        category : "mobile"
    },
    {
        id : 2,
        name : "Samsung Galaxy S24",
        price : 64999,
        category : "mobile"
    },
    {
        id : 3,
        name : "Sony Headphones",
        price : 7999,
        category : "Audio"
    },
    {
        id : 4,
        name : "HP Laptop",
        price : 55999,
        category : "Laptop"
    },
    {
        id : 5,
        name : "Sony Headphone",
        price : 5999,
        category : "Audio"
    }
];

const productContainer = document.querySelector("#productContainer");
function displayProducts(products){

    productContainer.innerHTML = "";

    products.map(product => {
        productContainer.innerHTML += `
        <div class="product">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
        <p>${product.category}</p>

        <button class="addCartBtn"
                data-id="${product.id}">
                Add to Cart 
        </button>

        <button class="buyNowBtn"
                data-id="${product.id}">
                Buy Now
        </button>
        </div>
        
        `;
    });
}

displayProducts(products);

// Add to Cart
let cart = [];

productContainer.addEventListener("click", function(event){
    if(event.target.classList.contains("addCartBtn")){
        const productId = Number(event.target.dataset.id);
        addToCart(productId);
    }
});

// Add cart function

function addToCart(productId){
    const product = products.find(product => product.id === productId);
    cart.push(product);
    console.log(cart);
}

