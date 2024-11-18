// Array to store cart items
let cart = [];

// DOM Elements
const cartButton = document.getElementById('cart-button');
const cartSection = document.getElementById('cart-section');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');
const closeCartButton = document.getElementById('close-cart');

// Event Listener to open the cart
cartButton.addEventListener('click', () => {
    cartSection.style.display = 'block';
    displayCartItems();
});

// Event Listener to close the cart
closeCartButton.addEventListener('click', () => {
    cartSection.style.display = 'none';
});

// Event Listener for Add to Cart Buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.getAttribute('data-product');
        const productPrice = parseFloat(e.target.getAttribute('data-price'));
        addToCart(productId, productPrice);
    });
});

// Add product to cart
function addToCart(productId, productPrice) {
    const existingProductIndex = cart.findIndex(item => item.id === productId);
    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1;  // Increase quantity
    } else {
        cart.push({ id: productId, price: productPrice, quantity: 1 });
    }
    updateCart();
}

// Display cart items
function displayCartItems() {
    cartItemsContainer.innerHTML = '';  // Clear cart items container
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            Product ${item.id} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}
        `;
        cartItemsContainer.appendChild(itemDiv);
    });
}

// Update the cart button and total
function updateCart() {
    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

    cartButton.innerText = `View Cart (${cartItemCount})`;
    cartTotal.innerText = totalPrice;
}

// Checkout Button
checkoutButton.addEventListener('click', () => {
    if (cart.length > 0) {
        alert('Proceeding to checkout');
        // Here you can add your checkout logic (e.g., payment API integration)
        cart = []; // Empty cart after checkout
        updateCart();
        displayCartItems();
        cartSection.style.display = 'none';  // Close the cart after checkout
    } else {
        alert('Your cart is empty!');
    }
});
