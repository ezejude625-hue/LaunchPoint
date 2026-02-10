// ====================== //
// LAUNCHPOINT - PRODUCTS //
// ====================== //

// Products Data - Based on LaunchPoint's actual marketplace offerings
const productsData = [
    {
        id: 1,
        name: 'SaaS Landing Page Template',
        category: 'UI Kits & Templates',
        price: 79.00,
        status: 'published',
        seller: 'Tech Innovators Inc.',
        dateAdded: '2024-10-26',
        thumbnail: 'SL',
        slug: 'saas-landing'
    },
    {
        id: 2,
        name: 'Futuristic Website Template',
        category: 'UI Kits & Templates',
        price: 49.00,
        status: 'published',
        seller: 'Creative Scripts Co.',
        dateAdded: '2024-10-24',
        thumbnail: 'FW',
        slug: 'futuristic-website'
    },
    {
        id: 3,
        name: 'Complete Branding Kit',
        category: 'UI Kits & Templates',
        price: 149.00,
        status: 'published',
        seller: 'AI Solutions Hub',
        dateAdded: '2024-09-15',
        thumbnail: 'CB',
        slug: 'branding-kit'
    },
    {
        id: 4,
        name: 'E-Commerce Website Theme',
        category: 'UI Kits & Templates',
        price: 199.00,
        status: 'published',
        seller: 'Web Wizards',
        dateAdded: '2024-08-01',
        thumbnail: 'EC',
        slug: 'ecommerce-theme'
    },
    {
        id: 5,
        name: 'AI Chatbot Script',
        category: 'Scripts & Code',
        price: 99.00,
        status: 'published',
        seller: 'Tech Innovators Inc.',
        dateAdded: '2024-08-15',
        thumbnail: 'AI',
        slug: 'ai-chatbot'
    },
    {
        id: 6,
        name: 'Project Management Script',
        category: 'Scripts & Code',
        price: 49.99,
        status: 'published',
        seller: 'Code Masters Studio',
        dateAdded: '2024-07-20',
        thumbnail: 'PM',
        slug: 'project-management'
    },
    {
        id: 7,
        name: 'Mobile App Design Course',
        category: 'E-Learning & Courses',
        price: 129.00,
        status: 'draft',
        seller: 'Digital Marketplace Pro',
        dateAdded: '2024-11-15',
        thumbnail: 'MA',
        slug: 'mobile-course'
    },
    {
        id: 8,
        name: 'UX Design Masterclass',
        category: 'E-Learning & Courses',
        price: 299.00,
        status: 'archived',
        seller: 'Creative Scripts Co.',
        dateAdded: '2024-05-01',
        thumbnail: 'UX',
        slug: 'ux-masterclass'
    },
    {
        id: 9,
        name: 'Automation Tools Suite',
        category: 'Scripts & Code',
        price: 159.00,
        status: 'published',
        seller: 'AI Solutions Hub',
        dateAdded: '2024-09-10',
        thumbnail: 'AT',
        slug: 'automation-tools'
    },
    {
        id: 10,
        name: 'Marketing Dashboard Template',
        category: 'UI Kits & Templates',
        price: 89.00,
        status: 'draft',
        seller: 'Web Wizards',
        dateAdded: '2024-11-01',
        thumbnail: 'MD',
        slug: 'marketing-dashboard'
    }
];

let filteredProducts = [...productsData];
let currentCategory = 'all';
let currentStatus = 'all';
let currentSort = 'newest';

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

// Calculate Stats
function updateStats() {
    const total = productsData.length;
    const published = productsData.filter(p => p.status === 'published').length;
    const draft = productsData.filter(p => p.status === 'draft').length;
    const totalValue = productsData.reduce((sum, p) => sum + p.price, 0);
    
    document.getElementById('totalProducts').textContent = total;
    document.getElementById('publishedProducts').textContent = published;
    document.getElementById('draftProducts').textContent = draft;
    document.getElementById('totalValue').textContent = `$${totalValue.toLocaleString()}`;
}

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Format Currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Render Products Table
function renderProductsTable() {
    const tbody = document.getElementById('productsTableBody');
    
    if (filteredProducts.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="7" style="text-align: center; padding: 3rem; color: var(--muted);">
                    <i class="fa-solid fa-inbox" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
                    No products found
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = filteredProducts.map(product => {
        const statusClass = `status-${product.status}`;
        const statusLabel = product.status.charAt(0).toUpperCase() + product.status.slice(1);
        
        return `
            <tr>
                <td>
                    <div class="product-cell">
                        <div class="product-thumbnail">${product.thumbnail}</div>
                        <div class="product-info">
                            <span class="product-name">${product.name}</span>
                        </div>
                    </div>
                </td>
                <td>${product.category}</td>
                <td>${formatCurrency(product.price)}</td>
                <td>
                    <span class="status-badge ${statusClass}">
                        ${statusLabel}
                    </span>
                </td>
                <td class="product-seller">${product.seller}</td>
                <td>${formatDate(product.dateAdded)}</td>
                <td class="text-center">
                    <div class="action-buttons">
                        <button class="action-btn view" onclick="viewProduct(${product.id})" title="View Details">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                        <button class="action-btn edit" onclick="editProduct(${product.id})" title="Edit">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button class="action-btn delete" onclick="deleteProduct(${product.id})" title="Delete">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
    
    updatePaginationInfo();
}

// Update Pagination Info
function updatePaginationInfo() {
    document.getElementById('showingStart').textContent = filteredProducts.length > 0 ? '1' : '0';
    document.getElementById('showingEnd').textContent = filteredProducts.length;
    document.getElementById('totalCount').textContent = filteredProducts.length;
}

// Search Products
document.getElementById('searchInput')?.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    
    filteredProducts = productsData.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(query) || 
                            product.id.toString().includes(query);
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
        const matchesStatus = currentStatus === 'all' || product.status === currentStatus;
        return matchesSearch && matchesCategory && matchesStatus;
    });
    
    applySorting();
    renderProductsTable();
});

// Category Filter
document.getElementById('categoryFilter')?.addEventListener('click', function() {
    const categories = ['all', 'UI Kits & Templates', 'Scripts & Code', 'E-Learning & Courses'];
    const currentIndex = categories.indexOf(currentCategory);
    const nextIndex = (currentIndex + 1) % categories.length;
    currentCategory = categories[nextIndex];
    
    const label = currentCategory === 'all' ? 'All' : currentCategory;
    document.getElementById('categoryLabel').textContent = label;
    
    filterProducts();
});

// Status Filter
document.getElementById('statusFilter')?.addEventListener('click', function() {
    const statuses = ['all', 'published', 'draft', 'archived'];
    const currentIndex = statuses.indexOf(currentStatus);
    const nextIndex = (currentIndex + 1) % statuses.length;
    currentStatus = statuses[nextIndex];
    
    const label = currentStatus.charAt(0).toUpperCase() + currentStatus.slice(1);
    document.getElementById('statusLabel').textContent = label;
    
    filterProducts();
});

// Sort Filter
document.getElementById('sortFilter')?.addEventListener('click', function() {
    const sorts = ['newest', 'oldest', 'name', 'price-high', 'price-low'];
    const currentIndex = sorts.indexOf(currentSort);
    const nextIndex = (currentIndex + 1) % sorts.length;
    currentSort = sorts[nextIndex];
    
    const labels = {
        'newest': 'Newest',
        'oldest': 'Oldest',
        'name': 'Name',
        'price-high': 'Price: High-Low',
        'price-low': 'Price: Low-High'
    };
    document.getElementById('sortLabel').textContent = labels[currentSort];
    
    applySorting();
    renderProductsTable();
});

// Filter Products
function filterProducts() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    filteredProducts = productsData.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(query) || 
                            product.id.toString().includes(query);
        const matchesCategory = currentCategory === 'all' || product.category === currentCategory;
        const matchesStatus = currentStatus === 'all' || product.status === currentStatus;
        return matchesSearch && matchesCategory && matchesStatus;
    });
    
    applySorting();
    renderProductsTable();
}

// Apply Sorting
function applySorting() {
    filteredProducts.sort((a, b) => {
        switch (currentSort) {
            case 'newest':
                return new Date(b.dateAdded) - new Date(a.dateAdded);
            case 'oldest':
                return new Date(a.dateAdded) - new Date(b.dateAdded);
            case 'name':
                return a.name.localeCompare(b.name);
            case 'price-high':
                return b.price - a.price;
            case 'price-low':
                return a.price - b.price;
            default:
                return 0;
        }
    });
}

// View Product - Navigate to product details
window.viewProduct = function(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product) {
        // Store product data in localStorage
        localStorage.setItem('launchpoint_current_product', JSON.stringify(product));
        // Navigate to product details
        window.location.href = `product-details.html?id=${productId}`;
    }
};

// Edit Product
window.editProduct = function(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product) {
        alert(`Edit Product: ${product.name}\n\nThis would open the product editor...`);
    }
};

// Delete Product
window.deleteProduct = function(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product && confirm(`Delete "${product.name}"?\n\nThis action cannot be undone.`)) {
        const index = productsData.findIndex(p => p.id === productId);
        if (index > -1) {
            productsData.splice(index, 1);
            filterProducts();
            updateStats();
            alert('Product deleted successfully!');
        }
    }
};

// Add Product
document.getElementById('addProductBtn')?.addEventListener('click', function() {
    alert('Add New Product\n\nThis would open the product creation form...\n\nCategories:\n- UI Kits & Templates\n- Scripts & Code\n- E-Learning & Courses');
});

// Export
document.getElementById('exportBtn')?.addEventListener('click', function() {
    alert(`Export Products\n\nTotal Products: ${filteredProducts.length}\nFormat: CSV\n\nDownload would start...`);
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
    updateStats();
    renderProductsTable();
    console.log('Products page initialized');
    console.log('Click "View" button to see product details');
});