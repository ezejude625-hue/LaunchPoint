// ====================================
// LAUNCHPOINT - CUSTOMER DETAILS
// ====================================

// ---- Sample Customer Data ----
const customerData = {
    id: 1024,
    name: 'Brooklyn Simmons',
    email: 'brooklyn.s@example.com',
    avatar: 'https://i.pravatar.cc/150?img=25',
    joined: '2024-01-12',
    location: 'New York, USA',
    role: 'admin',
    status: 'active',
    totalSpent: 1450.00,
    totalPurchases: 22
};

// ---- Sample Activity Data ----
const activityData = [
    {
        title: 'User logged in',
        description: 'From IP: 192.168.1.1',
        time: '2 min ago'
    },
    {
        title: 'Password changed',
        description: 'Security measure taken',
        time: '1 day ago'
    },
    {
        title: 'Purchased "Quantum UI Kit"',
        description: 'Order ID: #82375',
        time: '3 days ago'
    },
    {
        title: 'Role changed to Admin',
        description: 'By admin: Alex Johnson',
        time: '5 days ago'
    }
];

// ---- Sample Purchases Data ----
const purchasesData = [
    { name: 'Quantum UI Kit', date: '3 days ago', price: 89.99 },
    { name: 'SaaS Dashboard Template', date: '1 week ago', price: 149.00 },
    { name: 'API Integration Script', date: '2 weeks ago', price: 49.99 }
];

// ---- Sample Downloads Data ----
const downloadsData = [
    { name: 'Quantum UI Kit', date: '3 days ago' },
    { name: 'SaaS Dashboard Template', date: '1 week ago' },
    { name: 'API Integration Script', date: '2 weeks ago' }
];

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

// ---- Load Customer Data ----
function loadCustomerData() {
    // Update profile
    document.getElementById('customerName').textContent = customerData.name;
    document.getElementById('customerNameBreadcrumb').textContent = customerData.name;
    document.getElementById('customerEmail').textContent = customerData.email;
    document.getElementById('customerLocation').textContent = customerData.location;
    
    // Update joined date
    const joinedDate = new Date(customerData.joined);
    document.getElementById('joinedDate').textContent = joinedDate.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
    
    // Update stats
    document.getElementById('totalSpent').textContent = `$${customerData.totalSpent.toFixed(2)}`;
    document.getElementById('totalPurchases').textContent = customerData.totalPurchases;
    
    // Update role and status
    document.getElementById('roleSelect').value = customerData.role;
    document.getElementById('statusSelect').value = customerData.status;
}

// ---- Render Activity Timeline ----
function renderActivityTimeline() {
    const timeline = document.getElementById('activityTimeline');
    
    timeline.innerHTML = activityData.map(activity => `
        <div class="activity-item">
            <div class="activity-dot"></div>
            <div class="activity-content">
                <div class="activity-header">
                    <div class="activity-title">${activity.title}</div>
                    <div class="activity-time">${activity.time}</div>
                </div>
                <div class="activity-description">${activity.description}</div>
            </div>
        </div>
    `).join('');
}

// ---- Render Purchases ----
function renderPurchases() {
    const purchasesList = document.getElementById('purchasesList');
    
    purchasesList.innerHTML = purchasesData.map(purchase => `
        <div class="list-item">
            <div class="item-info">
                <div class="item-name">${purchase.name}</div>
                <div class="item-meta">${purchase.date}</div>
            </div>
            <div class="item-price">$${purchase.price.toFixed(2)}</div>
        </div>
    `).join('');
}

// ---- Render Downloads ----
function renderDownloads() {
    const downloadsList = document.getElementById('downloadsList');
    
    downloadsList.innerHTML = downloadsData.map(download => `
        <div class="list-item">
            <div class="item-info">
                <div class="item-name">${download.name}</div>
                <div class="item-meta">Downloaded ${download.date}</div>
            </div>
            <button class="btn btn-primary" style="padding: 0.5rem 1rem; font-size: 0.8125rem;">
                <i class="fa-solid fa-download"></i>
                Download Again
            </button>
        </div>
    `).join('');
}

// ---- Tab Switching ----
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove active class from all tabs and panes
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        
        // Add active class to clicked tab
        this.classList.add('active');
        
        // Show corresponding pane
        const tabName = this.getAttribute('data-tab');
        document.getElementById(`${tabName}Tab`).classList.add('active');
    });
});

// ---- Edit Customer ----
document.getElementById('editCustomerBtn')?.addEventListener('click', () => {
    alert('Edit customer form would open here');
});

// ---- Delete Customer ----
document.getElementById('deleteCustomerBtn')?.addEventListener('click', () => {
    if (confirm(`Delete customer "${customerData.name}"?\n\nThis action cannot be undone.`)) {
        alert('Customer deleted!');
        window.location.href = 'customer-detail.html';
    }
});

// ---- Save Changes ----
document.getElementById('saveChangesBtn')?.addEventListener('click', () => {
    const role = document.getElementById('roleSelect').value;
    const status = document.getElementById('statusSelect').value;
    
    alert(`Changes saved!\n\nRole: ${role}\nStatus: ${status}`);
});

// ---- Logout ----
document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Logout from admin panel?')) {
        window.location.href = 'login.html';
    }
});

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
    loadAdminData();
    loadCustomerData();
    renderActivityTimeline();
    renderPurchases();
    renderDownloads();
    
    console.log('Customer details initialized');
});