 document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slides');
    const totalSlides = slides[0].children.length;
    let index = 0;

    function showSlide() {
        slides.forEach(slide => {
            slide.style.transform = `translateX(-${index * 100}%)`;
        });
        index = (index + 1) % totalSlides;
    }

    setInterval(showSlide, 3000); // Change slide every 3 seconds
});

// function openModal(element) {
//     var modal = document.getElementById("image-modal");
//     var modalImg = document.getElementById("modal-image");
//     var captionText = document.getElementById("caption");
//     modal.style.display = "block";
//     modalImg.src = element.src;
//     captionText.innerHTML = element.alt;
// }



var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    var modal = document.getElementById("image-modal");
    modal.style.display = "none";
}





function openModal(element) {
    var modal = document.getElementById("image-modal");
    var modalImg = document.getElementById("modal-image");
    var captionText = document.getElementById("caption");
    
    if (modal && modalImg && captionText) {
        modal.style.display = "block";
        modalImg.src = element.src;
        captionText.innerHTML = element.alt;
    } else {
        console.error('Modal elements are missing.');
    }
}

function closeModal() {
    var modal = document.getElementById("image-modal");
    
    if (modal) {
        modal.style.display = "none";
    } else {
        console.error('Modal element is missing.');
    }
}

var closeButton = document.getElementsByClassName("close")[0];
if (closeButton) {
    closeButton.onclick = function() {
        closeModal();
    };
} else {
    console.error('Close button element is missing.');
}

window.onclick = function(event) {
    var modal = document.getElementById("image-modal");
    if (modal && event.target == modal) {
        closeModal();
    }
};



function addToCart(name, price, imageUrl) {
    // Display a notification for added item
    var notification = document.getElementById("cart-notification");
    notification.innerHTML = `Added ${name} to cart. Price: $${price}`;
    notification.style.display = "block";
    
    // Hide the notification after 3 seconds
    setTimeout(function() {
        notification.style.display = "none";
    }, 3000);
}

// let cart = [];
// const cartItemCount = document.getElementById('cart-item-count');
// const cartItems = document.getElementById('cart-items');
// const cartTotal = document.getElementById('cart-total');
// const cartContainer = document.getElementById('cart-container');

// function addToCart(product, price, image, details) {
//     // Check if the item is already in the cart
//     const existingItemIndex = cart.findIndex(item => item.product === product);
    
//     if (existingItemIndex > -1) {
//         // Item is already in the cart
//         alert(`${product} is already in the cart.`);
//         return;
//     }
    
//     // Add new item to the cart
//     const cartItem = {
//         product: product,
//         price: price,
//         image: image,
//         details: details
//     };
//     cart.push(cartItem);
//     updateCart();
// }


// function removeFromCart(product) {
//     cart = cart.filter(item => item.product !== product);
//     updateCart();
// }


// function updateCart() {
//     // Update cart item count
//     cartItemCount.textContent = cart.length;

//     // Clear cart items list
//     cartItems.innerHTML = '';

//     // Populate cart items list
//     let total = 0;
//     cart.forEach(item => {
//         const li = document.createElement('li');
//         li.classList.add('cart-item');
//         li.innerHTML = `
//             <img src="${item.image}" alt="${item.product}" class="cart-item-image">
//            <div class="cart-item-details">
//              <strong>${item.product}</strong><br>
//               $${item.price.toFixed(2)}<br>
//                 ${item.details}
//                <button class="remove-button" onclick="removeFromCart('${item.product}')">Remove</button>
//             </div>`;
//         cartItems.appendChild(li);
//         total += item.price;
//     });

//     // Update total
//     cartTotal.textContent = total.toFixed();

//     // Show cart container
//     cartContainer.style.display = 'block';
// }

// function toggleCart() {
//     if (cartContainer.style.display === 'block') {
//         cartContainer.style.display = 'none';
//     } else {
//         cartContainer.style.display = 'block';
//     }
// }

// // Example usage
// addToCart('Stylish Watch', 99.99, 'https://eona.qodeinteractive.com/wp-content/uploads/2020/05/single-product-img-18.jpg', 'Elegant watch with a classic design.');
// addToCart('Designer Sunglasses', 59.99, 'https://i.pinimg.com/originals/9f/b6/20/9fb620aea26d1551e3d105959dba72e9.jpg', 'Trendy sunglasses with UV protection.');


let cart = [];
const cartItemCount = document.getElementById('cart-item-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartContainer = document.getElementById('cart-container');

function addToCart(product, price, image, details, quantity = 1) {
    const existingItemIndex = cart.findIndex(item => item.product === product);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        const cartItem = {
            product: product,
            price: price,
            image: image,
            details: details,
            quantity: quantity
        };
        cart.push(cartItem);
    }
    updateCart();
}

function removeFromCart(product) {
    cart = cart.filter(item => item.product !== product);
    updateCart();
}

function updateCart() {
    cartItemCount.textContent = `${cart.reduce((total, item) => total + item.quantity, 0)} items`;

    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('cart-item');
        li.innerHTML = `
            <img src="${item.image}" alt="${item.product}" class="cart-item-image">
            <div class="cart-item-details">
                <strong>${item.product}</strong><br>
                $${item.price.toFixed(2)} each<br>
                Quantity: ${item.quantity}<br>
                ${item.details}<br>
                <button class="remove-button" onclick="removeFromCart('${item.product}')">Remove</button>
            </div>`;
        cartItems.appendChild(li);
        total += item.price * item.quantity;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;

    cartContainer.style.display = cart.length > 0 ? 'block' : 'none';
}

function toggleCart() {
    if (cartContainer.style.display === 'block') {
        cartContainer.style.display = 'none';
    } else {
        cartContainer.style.display = 'block';
    }
}

// Example usage
addToCart('Stylish Watch', 99.99, 'https://eona.qodeinteractive.com/wp-content/uploads/2020/05/single-product-img-18.jpg', 'Elegant watch with a classic design.', 1);
addToCart('Designer Sunglasses', 59.99, 'https://i.pinimg.com/originals/9f/b6/20/9fb620aea26d1551e3d105959dba72e9.jpg', 'Trendy sunglasses with UV protection.', 2);
addToCart('Leather Wallet', 39.99, 'https://example.com/wallet.jpg', 'Stylish leather wallet.', 1);
