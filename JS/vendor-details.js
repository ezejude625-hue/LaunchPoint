// ============================ //
// LAUNCHPOINT - SELLER DETAILS //
// ============================ //


// Seller Data
const sellerData = {
    id: 1,
    name: 'John Doe',
    username: 'johndoe',
    initials: 'JD',
    joined: 'Jan 15, 2024',
    status: 'active',
    totalProducts: 12,
    totalSales: '$8,945',
    rating: '4.8',
    pendingPayout: '$1,245'
};

// Products Data
const productsData = [
    {
        id: 1,
        name: 'Futuristic Website Template',
        category: 'UI Kits',
        status: 'live',
        price: '$49.00',
        image: 'FW',
        dateAdded: '2024-10-26'
    },
    {
        id: 2,
        name: 'AI Chatbot Script',
        category: 'Scripts',
        status: 'live',
        price: '$99.00',
        image: 'AI',
        dateAdded: '2024-08-15'
    },
    {
        id: 3,
        name: 'Mobile App Design Course',
        category: 'E-Learning',
        status: 'review',
        price: '$129.00',
        image: 'MA',
        dateAdded: '2024-05-01'
    },
    {
        id: 4,
        name: 'SaaS Landing Page Kit',
        category: 'UI Kits',
        status: 'live',
        price: '$79.00',
        image: 'SL',
        dateAdded: '2024-09-20'
    }
];

// Load Admin Data
function loadAdminData() {
    const userData = JSON.parse(localStorage.getItem('launchpoint_user') || '{}');
    if (userData.name) document.getElementById('adminName').textContent = userData.name;
    
    const savedAvatar = localStorage.getItem('launchpoint_avatar');
    if (savedAvatar) {
        const img = document.createElement('img');
        img.src = savedAvatar;
        document.getElementById('adminAvatar').innerHTML = '';
        document.getElementById('adminAvatar').appendChild(img);
    }
}

// Load Seller Data
function loadSellerData() {
    document.getElementById('sellerInitials').textContent = sellerData.initials;
    document.getElementById('sellerName').textContent = sellerData.name;
    document.getElementById('sellerUsername').textContent = `@${sellerData.username}`;
    document.getElementById('sellerJoined').innerHTML = `
        <i class="fa-solid fa-calendar-days"></i>
        Member since ${sellerData.joined}
    `;
    
    document.getElementById('totalProducts').textContent = sellerData.totalProducts;
    document.getElementById('totalSales').textContent = sellerData.totalSales;
    document.getElementById('sellerRating').textContent = sellerData.rating;
    document.getElementById('pendingPayout').textContent = sellerData.pendingPayout;
}

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Render Products Table
function renderProductsTable() {
    const tbody = document.getElementById('productsTableBody');
    
    tbody.innerHTML = productsData.map(product => {
        const statusClass = `status-${product.status}`;
        const statusLabel = product.status === 'live' ? 'Live' : 
                          product.status === 'review' ? 'Pending Review' : 'Draft';
        
        return `
            <tr>
                <td>
                    <div class="product-cell">
                        <div class="product-image" style="
                            background: linear-gradient(135deg, var(--primary), var(--accent));
                            color: white;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-weight: 700;
                            font-size: 0.875rem;
                        ">${product.image}</div>
                        <div class="product-info">
                            <div class="product-name">${product.name}</div>
                            <div class="product-category">${product.category}</div>
                        </div>
                    </div>
                </td>
                <td>${product.category}</td>
                <td>
                    <span class="product-status ${statusClass}">
                        ${statusLabel}
                    </span>
                </td>
                <td>${product.price}</td>
                <td>${formatDate(product.dateAdded)}</td>
                <td class="text-center">
                    <div class="action-buttons">
                        <button class="action-btn view" onclick="viewProduct(${product.id})" title="View Product">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                        <button class="action-btn delist" onclick="delistProduct(${product.id})" title="Delist Product">
                            <i class="fa-solid fa-ban"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// View Product
window.viewProduct = function(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product) {
        alert(`View Product\n\nName: ${product.name}\nCategory: ${product.category}\nPrice: ${product.price}\nStatus: ${product.status}`);
    }
};

// Delist Product
window.delistProduct = function(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product && confirm(`Delist "${product.name}"?\n\nThis will remove the product from the marketplace.`)) {
        alert('Product delisted successfully!');
    }
};

// Tab Switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tab = this.getAttribute('data-tab');
        
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        this.classList.add('active');
        document.getElementById(tab).classList.add('active');
    });
});

// Message Button
document.getElementById('messageBtn')?.addEventListener('click', function() {
    alert(`Send Message to ${sellerData.name}\n\nCompose your message here...`);
});

// Suspend Button
document.getElementById('suspendBtn')?.addEventListener('click', function() {
    if (confirm(`Suspend ${sellerData.name}?\n\nThis will suspend the seller's account and remove all their products from the marketplace.`)) {
        alert('Seller account suspended!');
    }
});

// Edit Profile Button
document.getElementById('editProfileBtn')?.addEventListener('click', function() {
    alert(`Edit Seller Profile\n\nName: ${sellerData.name}\nUsername: ${sellerData.username}\n\nEdit form would open here...`);
});

// Change Status Button
document.getElementById('changeStatusBtn')?.addEventListener('click', function() {
    const statuses = ['Active', 'Pending', 'Suspended'];
    const currentStatus = sellerData.status.charAt(0).toUpperCase() + sellerData.status.slice(1);
    
    alert(`Change Seller Status\n\nCurrent: ${currentStatus}\n\nAvailable statuses:\n${statuses.join('\n')}`);
});

// Logout
document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Logout from admin panel?')) {
        window.location.href = 'login.html';
    }
});

// Navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        if (!this.closest('.sidebar-footer') && !this.id && this.getAttribute('href') === '#') {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadAdminData();
    loadSellerData();
    renderProductsTable();
    console.log('Seller details page initialized');
});