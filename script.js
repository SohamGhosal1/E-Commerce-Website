// Add item to cart
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = {
        name: name,
        price: price,
        image: image
    };

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart!");
}

// Display cart items
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    let total = 0;

    if (!cartItems) return;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-card">
                <img src="${item.image}">
                <div>
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    document.getElementById("total-price").innerText =
        "Total: ₹" + total;
}

// Remove item
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Checkout
function checkout() {
    alert("Order placed successfully! 🎉");
    localStorage.removeItem("cart");
    loadCart();
}

// Load cart automatically
document.addEventListener("DOMContentLoaded", loadCart);
// Add item to cart
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    let product = {
        name: name,
        price: price,
        image: image
    };

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Item added to cart!");
}

// Display cart items
function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItems = document.getElementById("cart-items");
    let total = 0;

    if (!cartItems) return;

    cartItems.innerHTML = "";

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
            <div class="cart-card">
                <img src="${item.image}">
                <div>
                    <h3>${item.name}</h3>
                    <p>₹${item.price}</p>
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    document.getElementById("total-price").innerText =
        "Total: ₹" + total;
}

// Remove item
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

// Checkout
function checkout() {
    alert("Order placed successfully! 🎉");
    localStorage.removeItem("cart");
    loadCart();
}

// Load cart automatically
document.addEventListener("DOMContentLoaded", loadCart);
