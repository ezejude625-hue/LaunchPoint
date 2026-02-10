// ====================================
// LAUNCHPOINT - COUPON CREATOR
// ====================================

// ---- Form Elements ----
const form = document.getElementById('couponForm');
const couponCodeInput = document.getElementById('couponCode');
const generateBtn = document.getElementById('generateBtn');
const discountTypeRadios = document.querySelectorAll('input[name="discountType"]');
const discountValueInput = document.getElementById('discountValue');
const valuePrefix = document.getElementById('valuePrefix');
const valueGroup = document.getElementById('valueGroup');
const startDateInput = document.getElementById('startDate');
const endDateInput = document.getElementById('endDate');

// Preview elements
const previewCode = document.getElementById('previewCode');
const previewDiscount = document.getElementById('previewDiscount');
const previewExpiry = document.getElementById('previewExpiry');

// ---- Set Min Dates ----
function setMinDates() {
    const today = new Date().toISOString().split('T')[0];
    startDateInput.min = today;
    endDateInput.min = today;
    startDateInput.value = today;
}

// ---- Generate Random Coupon Code ----
function generateCouponCode() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const length = 8;
    let code = '';
    
    for (let i = 0; i < length; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    
    return code;
}

// ---- Update Value Prefix ----
function updateValuePrefix(type) {
    if (type === 'percentage') {
        valuePrefix.textContent = '%';
        discountValueInput.placeholder = '15';
        discountValueInput.max = '100';
        valueGroup.style.display = 'flex';
        discountValueInput.disabled = false;
    } else if (type === 'fixed') {
        valuePrefix.textContent = '$';
        discountValueInput.placeholder = '50';
        discountValueInput.removeAttribute('max');
        valueGroup.style.display = 'flex';
        discountValueInput.disabled = false;
    } else if (type === 'free-shipping') {
        valueGroup.style.display = 'none';
        discountValueInput.value = '0';
        discountValueInput.disabled = true;
    }
    
    updatePreview();
}

// ---- Update Preview ----
function updatePreview() {
    const code = couponCodeInput.value || 'SUMMER2025';
    const type = document.querySelector('input[name="discountType"]:checked').value;
    const value = discountValueInput.value;
    const endDate = endDateInput.value;
    
    // Update code
    previewCode.textContent = code;
    
    // Update discount
    if (type === 'percentage') {
        previewDiscount.textContent = value ? `${value}% OFF` : '15% OFF';
    } else if (type === 'fixed') {
        previewDiscount.textContent = value ? `$${value} OFF` : '$50 OFF';
    } else {
        previewDiscount.textContent = 'FREE SHIPPING';
    }
    
    // Update expiry
    if (endDate) {
        const date = new Date(endDate);
        previewExpiry.textContent = date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
    } else {
        previewExpiry.textContent = '-';
    }
}

// ---- Generate Button ----
generateBtn.addEventListener('click', () => {
    const newCode = generateCouponCode();
    couponCodeInput.value = newCode;
    updatePreview();
    
    // Animation
    generateBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        generateBtn.style.transform = 'rotate(0deg)';
    }, 300);
});

// ---- Discount Type Change ----
discountTypeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
        updateValuePrefix(e.target.value);
    });
});

// ---- Real-time Preview Updates ----
couponCodeInput.addEventListener('input', updatePreview);
discountValueInput.addEventListener('input', updatePreview);
endDateInput.addEventListener('change', updatePreview);

// ---- Form Submit ----
form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validate
    if (!couponCodeInput.value.trim()) {
        alert('Please enter a coupon code');
        return;
    }
    
    const type = document.querySelector('input[name="discountType"]:checked').value;
    if (type !== 'free-shipping' && (!discountValueInput.value || parseFloat(discountValueInput.value) <= 0)) {
        alert('Please enter a valid discount value');
        return;
    }
    
    if (!startDateInput.value || !endDateInput.value) {
        alert('Please select validity period');
        return;
    }
    
    // Collect data
    const couponData = {
        code: couponCodeInput.value.toUpperCase(),
        type: type,
        value: discountValueInput.value || '0',
        startDate: startDateInput.value,
        endDate: endDateInput.value,
        totalLimit: document.getElementById('totalLimit').value || 'Unlimited',
        userLimit: document.getElementById('userLimit').value || 'Unlimited',
        minPurchase: document.getElementById('minPurchase').value || '0',
        products: Array.from(document.getElementById('products').selectedOptions).map(o => o.text),
        isActive: document.getElementById('isActive').checked
    };
    
    // Show loading
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        console.log('Coupon Created:', couponData);
        
        alert(`Coupon Created Successfully!\n\nCode: ${couponData.code}\nDiscount: ${previewDiscount.textContent}\nValid Until: ${previewExpiry.textContent}`);
        
        // Reset
        form.reset();
        setMinDates();
        updateValuePrefix('percentage');
        updatePreview();
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// ---- Cancel Button ----
document.getElementById('cancelBtn')?.addEventListener('click', () => {
    if (confirm('Clear the form?')) {
        form.reset();
        setMinDates();
        updateValuePrefix('percentage');
        updatePreview();
    }
});

// ---- Close Button ----
document.getElementById('closeBtn')?.addEventListener('click', () => {
    if (confirm('Close the coupon creator?')) {
        window.location.href = 'dashboard.html';
    }
});

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
    setMinDates();
    updateValuePrefix('percentage');
    updatePreview();
    
    console.log('Coupon creator initialized');
});