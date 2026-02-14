// ---- Global Variables ----
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

// LaunchPoint Products (Updated to match our vision)
const recommendedProducts = [
  {
    id: 101,
    name: "Professional Branding Kit",
    category: "Brand Identity Package",
    price: 149.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhuJnjBZ1QAX_lFhhNpQQsh7pzzHeLlU9emz5tEWgzWoX0g4X6eqZLCcimbs6GGMIFGLTAKtWzBhuh1bG2NwU7SOWnGvqHefgabIDe8jN8McuTvIe-H8HGQWWW2pM5p2TRwVfzOAFze6Ne9rhVlW0-ABuahIF3w-YHWaIUX4b0c9nOPEIpqVsA9qLwq8S1Wl3QNGVckidmRBGGE-C4KJ1kaiqvzWcIXlTT9LoP49PXeUIPS9ANLcd2DMRy0CrZzdzeHU9DJ_qybdw",
  },
  {
    id: 102,
    name: "E-Commerce Website Theme",
    category: "Website Template",
    price: 199.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBS5wAVFqwzXR9Vko6Crzo-NUZRbu_rKK0yhCiIgvt74ormkv5GZK4uK3qsuZ_KgKBzRTcCzJ0qoi01b9uoQqfWzEE-ZpWU6vubhBuGAKEa5CfcFjX90Fsujd1xIyNuX_nIg8p6v6wWXDZQa87ksNtm5SJvXgpc3Q6VN80C0OH3YlSNiLIHwkVgRI5OZ4ATw39avb9OOT1r_B2Gwm-hlM9wV9IFJmQMAio0mAaF3TPXHxbyYE3QQegtcZEcAvYDD-t8u0Zm8Gfa2fY",
  },
  {
    id: 103,
    name: "Landing Page Template Bundle",
    category: "Landing Page Pack",
    price: 89.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrUqX1FgVKJRnWoej_cYDwuzUj65ToYEZPK0TTOdd4stiLHeXsqY6SDS5xGpIjq8gaSpcWcKAUvMUWjxkN_yotjWxNZaJ1Hsv4ck9kDoR_FuHfm271KsMk6u_AuJhyCQ8xAzDwx8nChgQglohDdChGS7Hj7GD1VC9EDx3-4emxxoRTq3NiuQVwEYYwBumnX2gkvPpLN_uWNwMxGEUv7hxVRsZ850Qt1IYDwI7-Wz0-WK0l23WBCZrKVqhRKd6YuJGaxbn_n5ITcSo",
  },
  {
    id: 104,
    name: "Marketing Integration Pack",
    category: "Integration Tools",
    price: 49.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9A3GMLiN6Dnth_pDmNz3xen3yMj07yKbFTZA5fC3uxv-Iycrr3eQpNXBLjc84hMGRdtd86dprKrP_ItkKrZhr16KjwaIUaZOCPmLSlITYr777yd85ijRfNJra2NHYxGqm4uIa5V7tVs7f4S5yPouBDBL4oJjJU3ZmsRkTdeynssv0lwSpovtBi3ECSFu7W6Q6pXpuUvDIREMQuLVQ8ylTpcRdteATIhAgCcfIVaB0lZF6AJKCMa9OCVcxu6tf8UJ5iYw4nXAvJxc",
  },
];

// ---- Discount tracking ----
let appliedDiscount = 0;
let appliedCouponCode = "";

// ---- Show/Hide empty cart state ----
function updateCartDisplay() {
  const cartItemsContainer = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const summaryContainer = document.querySelector(".summary-container");

  const hasItems = cartItems.length > 0;

  if (hasItems) {
    emptyCart.style.display = "none";
    cartItemsContainer.style.display = "block";
    summaryContainer.style.display = "block";
  } else {
    emptyCart.style.display = "block";
    cartItemsContainer.style.display = "none";
    summaryContainer.style.display = "none";
  }
}

// ---- Render cart items ----
function renderCartItems() {
  const container = document.getElementById("cart-items");

  if (cartItems.length === 0) {
    container.innerHTML = "";
    updateCartDisplay();
    return;
  }

  container.innerHTML = cartItems
    .map(
      (item) => `
        <div class="cart-item">
            <div class="item-image" style='background-image: url("${item.image}");'></div>
            <div class="item-info">
                <h4 class="item-name">${item.name}</h4>
                <p class="item-category">${item.category}</p>
            </div>
            <div class="item-actions">
                <div class="quantity-control">
                    <button onclick="updateQuantity(${item.id}, -1)" class="quantity-btn">-</button>
                    <input class="quantity-input" type="number" value="${item.quantity}" readonly/>
                    <button onclick="updateQuantity(${item.id}, 1)" class="quantity-btn">+</button>
                </div>
                <p class="item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeItem(${item.id})" class="delete-btn" title="Remove item">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>
        </div>
    `,
    )
    .join("");

  updateCartDisplay();
  updateSummary();
}

// ---- Update quantity ----
function updateQuantity(itemId, change) {
  const item = cartItems.find((i) => i.id === itemId);
  if (item) {
    item.quantity = Math.max(1, item.quantity + change);
    renderCartItems();
    updateLocalStorage();
    updateCartBadge();
  }
}

// ---- Remove item ----
function removeItem(itemId) {
  const item = cartItems.find((i) => i.id === itemId);
  if (!item) return;

  const confirmDelete = confirm(`Remove "${item.name}" from your Launch Kit?`);
  if (!confirmDelete) return;

  cartItems = cartItems.filter((i) => i.id !== itemId);
  renderCartItems();
  updateCartBadge();
  updateLocalStorage();
}

// ---- Add to cart ----
function addToCart(productId) {
  const product = recommendedProducts.find((p) => p.id === productId);
  if (!product) return;

  const existingItem = cartItems.find((i) => i.id === productId);

  if (existingItem) {
    existingItem.quantity++;
    alert(`${product.name} quantity updated in your Launch Kit!`);
  } else {
    cartItems.push({ ...product, quantity: 1 });
    alert(`${product.name} added to your Launch Kit!`);
  }

  renderCartItems();
  updateCartBadge();
  updateLocalStorage();

  // Scroll to top to see the added item
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ---- Apply Coupon ----
function applyCoupon() {
  const couponInput = document.getElementById("coupon-input");
  const couponMessage = document.getElementById("coupon-message");

  if (!couponInput || !couponMessage) return;

  const code = couponInput.value.trim().toUpperCase();

  // Valid promo codes for LaunchPoint
  const validCodes = {
    LAUNCH10: 10,
    NEWUSER: 15,
    SAVE20: 20,
    FIRSTBUY: 25,
  };

  if (validCodes[code]) {
    appliedDiscount = validCodes[code];
    appliedCouponCode = code;
    couponMessage.textContent = `Promo code applied! ${appliedDiscount}% off`;
    couponMessage.className = "coupon-message success";
    updateSummary();
  } else if (code === "") {
    couponMessage.textContent = "Please enter a promo code";
    couponMessage.className = "coupon-message error";
  } else {
    couponMessage.textContent = "Invalid promo code. Please try again.";
    couponMessage.className = "coupon-message error";
  }
}

// ---- Update summary ----
function updateSummary() {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const discountAmount = subtotal * (appliedDiscount / 100);
  const total = subtotal - discountAmount;

  document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
  document.getElementById("total").textContent = "$" + total.toFixed(2);

  // Store discount info for checkout page
  localStorage.setItem("appliedDiscount", appliedDiscount);
  localStorage.setItem("appliedCouponCode", appliedCouponCode);
}

// ---- Update cart badge (for navigation) ----
function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  if (badge) {
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? "inline-block" : "none";
  }
}

// ---- Local storage ----
function updateLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// ---- Render recommendations ----
function renderRecommendations() {
  const container = document.querySelector(".recommendations-grid");
  if (!container) return;

  container.innerHTML = recommendedProducts
    .map(
      (product) => `
        <div class="product-card">
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <h4 class="product-name">${product.name}</h4>
                <p class="product-category">${product.category}</p>
                <div class="product-footer">
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Add to Cart <span class="material-symbols-outlined">add_shopping_cart</span>
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("");
}

// ---- Initialize on page load ----
document.addEventListener("DOMContentLoaded", function () {
  renderCartItems();
  renderRecommendations();
  updateCartBadge();
  updateCartDisplay();
});

// Navigation menu handlers
const menu = document.getElementById("menu");

function toggleMenu() {
    menu.classList.toggle("open");
}

function closeMenu() {
    menu.classList.remove("open");
}


// ----- Showing Prouct Detail from homepage -----//
// Sample product images/icons
/*const productIcons = {
    1: 'fa-file-lines',
    2: 'fa-palette',
    3: 'fa-plug',
    4: 'fa-bullseye',
    5: 'fa-bolt',
    6: 'fa-bag-shopping'
};

// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem('launchpoint_cart') || '[]');

// Render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    
    if (cart.length === 0) {
        if (cartItemsContainer) cartItemsContainer.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'flex';
        if (subtotalElement) subtotalElement.textContent = '$0.00';
        if (totalElement) totalElement.textContent = '$0.00';
        return;
    }
    
    if (cartItemsContainer) cartItemsContainer.style.display = 'block';
    if (emptyCart) emptyCart.style.display = 'none';
    
    // Render items
    if (cartItemsContainer) {
        cartItemsContainer.innerHTML = cart.map((item, index) => {
            const icon = item.icon || productIcons[item.id] || 'fa-box';
            return `
                <div class="cart-item" data-index="${index}">
                    <div class="item-image" style="background: linear-gradient(135deg, var(--primary), var(--accent)); display: flex; align-items: center; justify-content: center;">
                        <i class="fa-solid ${icon}" style="font-size: 2rem; color: white;"></i>
                    </div>
                    <div class="item-info">
                        <div class="item-name">${item.name}</div>
                        <div class="item-category">${item.category || 'Digital Product'}${item.license ? ` • ${item.license === 'extended' ? 'Extended' : 'Regular'} License` : ''}</div>
                    </div>
                    <div class="item-actions">
                        <div class="quantity-control">
                            <button class="quantity-btn" onclick="updateQuantity(${index}, -1)">−</button>
                            <input type="number" class="quantity-input" value="${item.quantity || 1}" min="1" readonly>
                            <button class="quantity-btn" onclick="updateQuantity(${index}, 1)">+</button>
                        </div>
                        <div class="item-price">$${item.price.toFixed(2)}</div>
                        <button class="delete-btn" onclick="removeFromCart(${index})">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `$${subtotal.toFixed(2)}`;
}

// Update quantity
function updateQuantity(index, change) {
    if (!cart[index].quantity) cart[index].quantity = 1;
    cart[index].quantity = Math.max(1, cart[index].quantity + change);
    localStorage.setItem('launchpoint_cart', JSON.stringify(cart));
    renderCartItems();
}

// Remove from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    localStorage.setItem('launchpoint_cart', JSON.stringify(cart));
    renderCartItems();
    updateCartBadge();
}

// Update cart badge
function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        badge.textContent = cart.length;
        if (cart.length > 0) {
            badge.style.display = 'flex';
        } else {
            badge.style.display = 'none';
        }
    }
}

// Apply coupon (placeholder)
function applyCoupon() {
    const input = document.getElementById('coupon-input');
    const message = document.getElementById('coupon-message');
    
    if (!input || !message) return;
    
    const code = input.value.trim().toLowerCase();
    
    if (code === 'launch10') {
        message.textContent = '✓ Coupon applied! 10% off';
        message.className = 'coupon-message success';
    } else if (code) {
        message.textContent = '✗ Invalid coupon code';
        message.className = 'coupon-message error';
    }
}

// Initialize cart
document.addEventListener('DOMContentLoaded', () => {
    renderCartItems();
    updateCartBadge();
});

*/