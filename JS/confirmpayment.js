// ---- Load cart data from localStorage ----
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let appliedDiscount = parseFloat(localStorage.getItem("appliedDiscount")) || 0;
let appliedCouponCode = localStorage.getItem("appliedCouponCode") || "";

// ---- Calculate tax (example: 8.5%) ----
const TAX_RATE = 0.085;

// ---- Elements ----
const orderItemsList = document.getElementById("order-items-list");
const subtotalDisplay = document.getElementById("subtotal-display");
const discountDisplay = document.getElementById("discount-display");
const discountDisplayRow = document.getElementById("discount-display-row");
const promoBadge = document.getElementById("promo-badge");
const taxDisplay = document.getElementById("tax-display");
const totalDisplay = document.getElementById("total-display");
const confirmBtn = document.getElementById("confirmBtn");
const confirmAmount = document.getElementById("confirm-amount");
const successModal = document.getElementById("successModal");

// ---- Render Order Items ----
function renderOrderItems() {
  if (!cartItems || cartItems.length === 0) {
    if (orderItemsList) {
      orderItemsList.innerHTML = `
        <div class="empty-order">
          <i class="fa-solid fa-bag-shopping"></i>
          <p>No items in your cart</p>
          <a href="marketplace.html" class="btn btn-primary">Browse Templates</a>
        </div>
      `;
    }
    return;
  }

  if (orderItemsList) {
    orderItemsList.innerHTML = cartItems
      .map(
        (item) => `
          <div class="order-item">
            <div class="item-info">
              <div class="item-icon">
                <img src="${item.image}" alt="${item.name}">
              </div>
              <div class="item-details">
                <p class="item-name">${item.name}</p>
                <p class="item-category">${item.category} • Qty: ${item.quantity}</p>
              </div>
            </div>
            <p class="item-price">$${(Number(item.price) * Number(item.quantity)).toFixed(2)}</p>
          </div>
        `
      )
      .join("");
  }

  calculateTotals();
}

// ---- Calculate Totals ----
function calculateTotals() {
  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0
  );

  // Calculate discount
  const discountAmount = subtotal * (appliedDiscount / 100);

  // Calculate tax on discounted amount
  const taxableAmount = subtotal - discountAmount;
  const tax = taxableAmount * TAX_RATE;

  // Calculate total
  const total = taxableAmount + tax;

  // Update displays
  if (subtotalDisplay) subtotalDisplay.textContent = "$" + subtotal.toFixed(2);

  // Show/hide discount row
  if (appliedDiscount > 0 && discountDisplayRow) {
    discountDisplayRow.style.display = "flex";
    if (discountDisplay) discountDisplay.textContent = "-$" + discountAmount.toFixed(2);
    if (promoBadge) promoBadge.textContent = appliedCouponCode;
  } else if (discountDisplayRow) {
    discountDisplayRow.style.display = "none";
  }

  if (taxDisplay) taxDisplay.textContent = "$" + tax.toFixed(2);
  if (totalDisplay) totalDisplay.textContent = "$" + total.toFixed(2);
  if (confirmAmount) confirmAmount.textContent = "$" + total.toFixed(2);
}

// ---- Confirm Payment Handler ----
if (confirmBtn) {
  confirmBtn.addEventListener("click", function () {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before checking out!");
      window.location.href = "marketplace.html";
      return;
    }

    // Disable button and show processing
    confirmBtn.disabled = true;
    confirmBtn.innerHTML = `
      <i class="fa-solid fa-spinner fa-spin"></i>
      Processing Payment...
    `;

    if (confirmBtn) {
      window.location.href = "payment-succ.html";
    }

    // Simulate payment processing
    setTimeout(() => {
      // Show success modal
      if (successModal) {
        successModal.style.display = "flex";
      }

      // Clear cart after successful payment
      setTimeout(() => {
        localStorage.removeItem("cartItems");
        localStorage.removeItem("appliedDiscount");
        localStorage.removeItem("appliedCouponCode");
      }, 1000);
    }, 2000);
  });
}

// ---- Redirect to Downloads ----
function redirectToDownloads() {
  window.location.href = "marketplace.html";
}

// ---- Change Payment Method ----
const changeBtn = document.querySelector(".change-btn");
if (changeBtn) {
  changeBtn.addEventListener("click", function () {
    window.location.href = "checkout.html";
  });
}

// ---- Initialize on page load ----
document.addEventListener("DOMContentLoaded", () => {
  renderOrderItems();
});