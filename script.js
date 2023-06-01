// Review Submission
const reviewForms = document.querySelectorAll('.review-form');

reviewForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('input[type="text"]').value;
        const review = form.querySelector('textarea').value;

        if (name && review) {
            // Process the review submission (you can customize this part)
            console.log('Name:', name);
            console.log('Review:', review);

            // Clear the form fields
            form.reset();
        }
    });
});

// Facebook Sharing
const shareButtons = document.querySelectorAll('.share-button');

shareButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // Open the Facebook sharing dialog
        const productTitle = button.parentNode.previousElementSibling.innerText;
        const url = window.location.href;
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
        )}&quote=${encodeURIComponent(productTitle)}`;
        window.open(shareUrl, '_blank');
    });
});

// Cart Functionality
const cartButtons = document.querySelectorAll('.addtocart-button');
const cartItems = document.getElementById('cart-items');
const cartItemsCount = document.querySelector('.cart-items-count');

cartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const product = button.parentNode.parentNode;
        const productName = product.querySelector('h3').innerText;
        const productPrice = product.querySelector('.price').innerText;

        // Create a new cart item
        const cartItem = document.createElement('li');
        cartItem.innerText = `${productName} - ${productPrice}`;

        // Add the cart item to the cart
        cartItems.appendChild(cartItem);

        // Update the cart count
        updateCartCount();
    });
});

function updateCartCount() {
    const cartItems = document.querySelectorAll('#cart-items li');
    cartItemsCount.innerText = cartItems.length;
}
