// ====================================
// LAUNCHPOINT - INVOICE
// ====================================

// ---- Load order data from localStorage ----
const orderItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const appliedDiscount = parseFloat(localStorage.getItem("appliedDiscount")) || 0;
const appliedCouponCode = localStorage.getItem("appliedCouponCode") || "";

// ---- Tax rate ----
const TAX_RATE = 0.085; // 8.5%

// ---- Generate invoice number ----
function generateInvoiceNumber() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `INV-${new Date().getFullYear()}-${timestamp.toString().slice(-6)}${random}`;
}

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

// ---- Calculate totals ----
function calculateTotals() {
    const subtotal = orderItems.reduce(
        (sum, item) => sum + Number(item.price) * Number(item.quantity),
        0
    );
    
    const discountAmount = subtotal * (appliedDiscount / 100);
    const taxableAmount = subtotal - discountAmount;
    const tax = taxableAmount * TAX_RATE;
    const total = taxableAmount + tax;

    return {
        subtotal,
        discountAmount,
        tax,
        total
    };
}

// ---- Render invoice items ----
function renderInvoiceItems() {
    const invoiceItemsTable = document.getElementById('invoice-items');
    
    if (!invoiceItemsTable) return;

    if (orderItems.length === 0) {
        invoiceItemsTable.innerHTML = `
            <tr>
                <td colspan="5" style="text-align: center; padding: 2rem; color: var(--muted);">
                    No items found
                </td>
            </tr>
        `;
        return;
    }

    invoiceItemsTable.innerHTML = orderItems.map(item => `
        <tr>
            <td>
                <div class="product-name">${item.name}</div>
            </td>
            <td>
                <div class="product-category">${item.category}</div>
            </td>
            <td>${item.quantity}</td>
            <td class="text-right">$${Number(item.price).toFixed(2)}</td>
            <td class="text-right">$${(Number(item.price) * Number(item.quantity)).toFixed(2)}</td>
        </tr>
    `).join('');
}

// ---- Display invoice details ----
function displayInvoiceDetails() {
    const invoiceNumber = generateInvoiceNumber();
    const orderID = generateOrderID();
    const invoiceDate = getCurrentDate();
    const totals = calculateTotals();

    // Set invoice metadata
    document.getElementById('invoice-number').textContent = invoiceNumber;
    document.getElementById('invoice-date').textContent = invoiceDate;
    document.getElementById('order-id').textContent = orderID;

    // Set customer info (placeholder - in real app, would come from user data)
    document.getElementById('customer-name').textContent = 'Valued Customer';
    document.getElementById('customer-email').textContent = 'customer@example.com';

    // Set totals
    document.getElementById('subtotal-amount').textContent = `$${totals.subtotal.toFixed(2)}`;
    document.getElementById('tax-amount').textContent = `$${totals.tax.toFixed(2)}`;
    document.getElementById('grand-total').textContent = `$${totals.total.toFixed(2)}`;

    // Show discount if applicable
    const discountRow = document.getElementById('discount-row');
    if (appliedDiscount > 0 && discountRow) {
        discountRow.style.display = 'flex';
        document.getElementById('discount-code').textContent = appliedCouponCode;
        document.getElementById('discount-amount').textContent = `-$${totals.discountAmount.toFixed(2)}`;
    }
}

// ---- Download PDF function ----
document.getElementById('downloadBtn').addEventListener('click', function() {
    alert('Generating PDF...\n\nIn a real implementation, this would download your invoice as a PDF file.');
    console.log('Download PDF triggered');
});

// ---- Print function ----
document.getElementById('printBtn').addEventListener('click', function() {
    window.print();
});

// ---- Initialize on page load ----
document.addEventListener('DOMContentLoaded', () => {
    // Check if there are items
    if (orderItems.length === 0) {
        alert('No order data found. Redirecting to marketplace...');
        window.location.href = 'marketplace.html';
        return;
    }

    // Display invoice details
    displayInvoiceDetails();
    
    // Render items
    renderInvoiceItems();
});