// ====================================
// LAUNCHPOINT - PAYMENT SUCCESS
// ====================================

// ---- Load order data from localStorage ----
let orderItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let appliedDiscount = parseFloat(localStorage.getItem("appliedDiscount")) || 0;
let appliedCouponCode = localStorage.getItem("appliedCouponCode") || "";

// ---- Generate order ID ----
function generateOrderID() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `LP${timestamp.toString().slice(-6)}${random}`;
}

// ---- Get current date ----
function getCurrentDate() {
    const now = new Date();
    return now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

// ---- Calculate total ----
function calculateTotal() {
    const subtotal = orderItems.reduce(
        (sum, item) => sum + Number(item.price) * Number(item.quantity),
        0
    );
    const discountAmount = subtotal * (appliedDiscount / 100);
    return subtotal - discountAmount;
}

// ---- Render purchased items ----
function renderPurchasedItems() {
    const purchasedItemsList = document.getElementById('purchased-items');
    
    if (!purchasedItemsList) return;

    if (orderItems.length === 0) {
        purchasedItemsList.innerHTML = `
            <p style="text-align: center; color: var(--muted);">No items found</p>
        `;
        return;
    }

    purchasedItemsList.innerHTML = orderItems.map(item => `
        <div class="purchased-item">
            <img src="${item.image}" alt="${item.name}" class="item-thumbnail">
            <div class="item-info">
                <div class="item-name">${item.name}</div>
                <div class="item-category">${item.category} • Qty: ${item.quantity}</div>
            </div>
        </div>
    `).join('');
}

// ---- Display order details ----
function displayOrderDetails() {
    const orderID = generateOrderID();
    const orderDate = getCurrentDate();
    const totalPaid = calculateTotal();

    document.getElementById('order-id').textContent = orderID;
    document.getElementById('order-date').textContent = orderDate;
    document.getElementById('total-paid').textContent = `$${totalPaid.toFixed(2)}`;
}

// ---- Download files function ----
function downloadFiles() {
    alert('Your files are being prepared for download!\n\nIn a real implementation, this would trigger downloads for all your purchased templates.');
    
    // Simulate download
    console.log('Downloading files:', orderItems);
}

// ---- Clear cart after successful payment ----
function clearCartData() {
    localStorage.removeItem("cartItems");
    localStorage.removeItem("appliedDiscount");
    localStorage.removeItem("appliedCouponCode");
}

// ---- Initialize on page load ----
document.addEventListener('DOMContentLoaded', () => {
    // Check if there are items (if not, redirect to marketplace)
    if (orderItems.length === 0) {
        alert('No order found. Redirecting to marketplace...');
        window.location.href = 'marketplace.html';
        return;
    }

    // Display order details
    displayOrderDetails();
    
    // Render purchased items
    renderPurchasedItems();

    // Clear cart data after showing success
    clearCartData();

    // Confetti animation duration
    setTimeout(() => {
        const confettiElements = document.querySelectorAll('.confetti');
        confettiElements.forEach(el => el.style.display = 'none');
    }, 3000);
});