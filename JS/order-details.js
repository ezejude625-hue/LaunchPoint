// ====================================
// LAUNCHPOINT - ORDER DETAILS
// ====================================

// ---- Load Admin Data ----
function loadAdminData() {
    const userData = JSON.parse(localStorage.getItem('launchpoint_user') || '{}');
    
    if (userData.name) {
        document.getElementById('adminName').textContent = userData.name;
    }
    
    const savedAvatar = localStorage.getItem('launchpoint_avatar');
    if (savedAvatar) {
        const img = document.createElement('img');
        img.src = savedAvatar;
        document.getElementById('adminAvatar').innerHTML = '';
        document.getElementById('adminAvatar').appendChild(img);
    }
}

// ---- Print Invoice ----
document.getElementById('printInvoiceBtn')?.addEventListener('click', () => {
    window.print();
});

// ---- Send Download Link ----
document.getElementById('sendDownloadBtn')?.addEventListener('click', () => {
    alert('Download link has been sent to sarah.chen@techstart.io');
});

// ---- Delivery Status Change ----
document.getElementById('deliveryStatus')?.addEventListener('change', function() {
    const status = this.value;
    const statusText = this.options[this.selectedIndex].text;
    
    if (confirm(`Update delivery status to "${statusText}"?`)) {
        alert(`Delivery status updated to "${statusText}"`);
        console.log('Delivery status changed to:', status);
    } else {
        // Revert to previous value
        this.value = 'delivered';
    }
});

// ---- Copy Transaction ID ----
document.getElementById('transactionId')?.addEventListener('click', function() {
    const text = this.textContent;
    
    navigator.clipboard.writeText(text).then(() => {
        const originalText = this.textContent;
        this.textContent = '✓ Copied!';
        this.style.background = 'rgba(16, 185, 129, 0.2)';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy transaction ID');
    });
});

// ---- Issue Refund ----
document.getElementById('refundBtn')?.addEventListener('click', () => {
    if (confirm('Are you sure you want to issue a full refund for this order?\n\nThis action cannot be undone.')) {
        // Simulate refund processing
        const btn = document.getElementById('refundBtn');
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
        
        setTimeout(() => {
            alert('Refund processed successfully!\n\nCustomer will be notified via email.');
            btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> Refund Issued';
            btn.style.background = 'rgba(16, 185, 129, 0.2)';
            btn.style.color = 'var(--success)';
            btn.style.border = '1px solid var(--success)';
            
            // Update delivery status to refunded
            const statusSelect = document.getElementById('deliveryStatus');
            if (statusSelect) {
                statusSelect.value = 'refunded';
                statusSelect.disabled = true;
            }
        }, 2000);
    }
});

// ---- Logout ----
document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Logout from admin panel?')) {
        window.location.href = 'login.html';
    }
});

// ---- Navigation ----
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        if (!this.closest('.sidebar-footer') && !this.id && this.getAttribute('href') === '#') {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// ---- Animate Cards on Load ----
function animateCards() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
    loadAdminData();
    animateCards();
    
    console.log('Order details page initialized');
});