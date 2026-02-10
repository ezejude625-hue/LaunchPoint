// ---- Load cart and discount from localStorage ----
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let appliedDiscount = parseFloat(localStorage.getItem("appliedDiscount")) || 0;
let appliedCouponCode = localStorage.getItem("appliedCouponCode") || "";

// ---- Elements ----
const productList = document.getElementById("checkout-items");
const subtotalEl = document.getElementById("subtotal-amount");
const discountEl = document.getElementById("discount-amount");
const discountRow = document.getElementById("discount-row");
const discountCodeLabel = document.getElementById("discount-code-label");
const totalEl = document.getElementById("total-amount");
const payButton = document.getElementById("pay-now-btn");

// ---- Render Checkout Items ----
function renderCheckout() {
  // Check if cart is empty
  if (!cartItems || cartItems.length === 0) {
    if (productList) {
      productList.innerHTML = `
        <div class="empty-checkout">
          <i class="fa-solid fa-bag-shopping"></i>
          <p>Your cart is empty</p>
          <a href="marketplace.html" class="btn btn-primary">Browse Templates</a>
        </div>
      `;
    }
    if (subtotalEl) subtotalEl.textContent = "$0.00";
    if (discountEl) discountEl.textContent = "-$0.00";
    if (totalEl) totalEl.textContent = "$0.00";
    if (payButton) {
      payButton.textContent = "Complete Purchase & Launch →";
      payButton.disabled = true;
      payButton.style.opacity = "0.5";
      payButton.style.cursor = "not-allowed";
    }
    return;
  }

  // Render cart items
  if (productList) {
    productList.innerHTML = cartItems
      .map(
        (item) => `
          <div class="product-item">
            <img src="${item.image}" alt="${item.name}" class="product-thumbnail">
            <div class="product-info">
              <p class="product-name">${item.name}</p>
              <p class="product-category">${item.category}</p>
              <p class="product-quantity">Qty: ${item.quantity}</p>
            </div>
            <p class="product-price">$${(Number(item.price) * Number(item.quantity)).toFixed(2)}</p>
          </div>
        `,
      )
      .join("");
  }

  updateTotals();
}

// ---- Update totals ----
function updateTotals() {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0,
  );

  const discountAmount = subtotal * (appliedDiscount / 100);
  const total = subtotal - discountAmount;

  // Update display
  if (subtotalEl) subtotalEl.textContent = "$" + subtotal.toFixed(2);

  // Show/hide discount row
  if (appliedDiscount > 0 && discountRow) {
    discountRow.style.display = "flex";
    if (discountEl) discountEl.textContent = "-$" + discountAmount.toFixed(2);
    if (discountCodeLabel)
      discountCodeLabel.textContent = `(${appliedCouponCode})`;
  } else if (discountRow) {
    discountRow.style.display = "none";
  }

  if (totalEl) totalEl.textContent = "$" + total.toFixed(2);

  if (payButton) {
    payButton.textContent = `Complete Purchase - $${total.toFixed(2)} →`;
    payButton.disabled = false;
    payButton.style.opacity = "1";
    payButton.style.cursor = "pointer";
  }
}

// ---- Payment method selection ----
const paymentOptions = document.querySelectorAll(".payment-option");
const radioInputs = document.querySelectorAll('input[name="payment-method"]');

radioInputs.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    paymentOptions.forEach((option) => option.classList.remove("selected"));
    paymentOptions[index].classList.add("selected");
  });
});

paymentOptions.forEach((option, index) => {
  option.addEventListener("click", () => {
    radioInputs[index].checked = true;
    paymentOptions.forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");
  });
});

// ---- Pay Button Handler ----
if (payButton) {
  payButton.addEventListener("click", () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before checking out!");
      return;
    }

    const selectedPayment = document.querySelector(
      'input[name="payment-method"]:checked',
    );
    const paymentMethod = selectedPayment ? selectedPayment.value : "card";

    const total = totalEl.textContent;

    // Show processing message
    payButton.textContent = "Processing...";
    payButton.disabled = true;

    // Simulate payment processing
    setTimeout(() => {
      // DON'T clear cart yet - we need it for the confirmation page!
      // Just redirect to confirmation page
      window.location.href = "confirmpayment.html";
    }, 1500);
  });
}

// ---- Initialize on page load ----
document.addEventListener("DOMContentLoaded", () => {
  renderCheckout();
});


// ----- Showing Prouct Detail from homepage -----//
// LAUNCHPOINT - CHECKOUT PAGE 

// Product icons 
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

// Render checkout items
function renderCheckoutItems() {
    const checkoutItemsContainer = document.getElementById('checkout-items');
    const subtotalElement = document.getElementById('subtotal-amount');
    const totalElement = document.getElementById('total-amount');
    
    if (cart.length === 0) {
        if (checkoutItemsContainer) {
            checkoutItemsContainer.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: var(--muted);">
                    <i class="fa-solid fa-shopping-cart" style="font-size: 3rem; margin-bottom: 1rem; opacity: 0.5;"></i>
                    <p>Your cart is empty</p>
                    <a href="marketplace.html" class="btn btn-primary" style="margin-top: 1rem;">Browse Products</a>
                </div>
            `;
        }
        if (subtotalElement) subtotalElement.textContent = '$0.00';
        if (totalElement) totalElement.textContent = '$0.00';
        return;
    }
    
    // Render items
    if (checkoutItemsContainer) {
        checkoutItemsContainer.innerHTML = cart.map(item => {
            const icon = item.icon || productIcons[item.id] || 'fa-box';
            return `
                <div class="product-item">
                    <div class="product-thumbnail" style="background: linear-gradient(135deg, var(--primary), var(--accent)); display: flex; align-items: center; justify-content: center;">
                        <i class="fa-solid ${icon}" style="font-size: 1.5rem; color: white;"></i>
                    </div>
                    <div class="product-info">
                        <div class="product-name">${item.name}</div>
                        <div class="product-category">${item.category || 'Digital Product'}</div>
                        ${item.license ? `<div class="product-quantity">${item.license === 'extended' ? 'Extended' : 'Regular'} License</div>` : ''}
                    </div>
                    <div class="product-price">$${item.price.toFixed(2)}</div>
                </div>
            `;
        }).join('');
    }
    
    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `$${subtotal.toFixed(2)}`;
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

// Initialize checkout
document.addEventListener('DOMContentLoaded', () => {
    renderCheckoutItems();
    updateCartBadge();
});

*/