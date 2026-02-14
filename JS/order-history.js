// ====================================
// LAUNCHPOINT - ORDER HISTORY
// ====================================

// ---- Sample Orders Data ----
const ordersData = [
    {
        id: '#LP-11235',
        date: '2025-01-28',
        product: 'Professional Branding Kit',
        total: 149,
        status: 'completed'
    },
    {
        id: '#LP-10984',
        date: '2025-01-25',
        product: 'E-Commerce Website Theme',
        total: 199,
        status: 'completed'
    },
    {
        id: '#LP-10571',
        date: '2025-01-20',
        product: 'SaaS Landing Page Bundle',
        total: 89,
        status: 'processing'
    },
    {
        id: '#LP-10123',
        date: '2025-01-15',
        product: 'React UI Component Library',
        total: 120,
        status: 'completed'
    },
    {
        id: '#LP-09876',
        date: '2025-01-10',
        product: 'Marketing Integration Pack',
        total: 49,
        status: 'refunded'
    },
    {
        id: '#LP-09543',
        date: '2025-01-05',
        product: 'Portfolio Website Theme',
        total: 79,
        status: 'canceled'
    },
    {
        id: '#LP-09234',
        date: '2024-12-28',
        product: 'Email Marketing Templates',
        total: 65,
        status: 'completed'
    },
    {
        id: '#LP-08912',
        date: '2024-12-20',
        product: 'Social Media Graphics Pack',
        total: 39,
        status: 'completed'
    }
];

let filteredOrders = [...ordersData];
let currentPage = 1;
const ordersPerPage = 6;

// ---- Load User Data ----
function loadUserData() {
    const userData = JSON.parse(localStorage.getItem('launchpoint_user') || '{}');
    
    if (userData.name) {
        document.getElementById('userName').textContent = userData.name;
    }
    
    const savedAvatar = localStorage.getItem('launchpoint_avatar');
    if (savedAvatar) {
        const img = document.createElement('img');
        img.src = savedAvatar;
        document.getElementById('userAvatar').innerHTML = '';
        document.getElementById('userAvatar').appendChild(img);
    }
}

// ---- Update Cart Badge ----
function updateCartBadge() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartBadge = document.getElementById('cartBadge');
    if (cartBadge) {
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// ---- Format Date ----
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ---- Get Status Details ----
function getStatusDetails(status) {
    const statusMap = {
        completed: { icon: 'check-circle', class: 'status-completed', label: 'Completed' },
        processing: { icon: 'clock', class: 'status-processing', label: 'Processing' },
        refunded: { icon: 'undo', class: 'status-refunded', label: 'Refunded' },
        canceled: { icon: 'times-circle', class: 'status-canceled', label: 'Canceled' }
    };
    return statusMap[status] || statusMap.completed;
}

// ---- Render Orders ----
function renderOrders() {
    const tbody = document.getElementById('ordersTableBody');
    const emptyState = document.getElementById('emptyState');
    const tableContainer = document.querySelector('.table-container');
    
    const startIndex = (currentPage - 1) * ordersPerPage;
    const endIndex = startIndex + ordersPerPage;
    const paginatedOrders = filteredOrders.slice(startIndex, endIndex);
    
    if (filteredOrders.length === 0) {
        tableContainer.style.display = 'none';
        document.querySelector('.pagination').style.display = 'none';
        emptyState.style.display = 'flex';
        return;
    }
    
    tableContainer.style.display = 'block';
    document.querySelector('.pagination').style.display = 'flex';
    emptyState.style.display = 'none';
    
    tbody.innerHTML = paginatedOrders.map(order => {
        const statusDetails = getStatusDetails(order.status);
        
        return `
            <tr data-order-id="${order.id}">
                <td class="order-id">${order.id}</td>
                <td class="order-date">${formatDate(order.date)}</td>
                <td class="product-name">${order.product}</td>
                <td class="order-total">$${order.total.toFixed(2)}</td>
                <td>
                    <span class="status-badge ${statusDetails.class}">
                        <i class="fa-solid fa-${statusDetails.icon}"></i>
                        ${statusDetails.label}
                    </span>
                </td>
                <td>
                    <div class="order-actions">
                        <button class="action-btn" title="View Details" onclick="viewOrderDetails('${order.id}')">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                        <button class="action-btn" title="Download Invoice" onclick="downloadInvoice('${order.id}')">
                            <i class="fa-solid fa-download"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
    
    renderPagination();
}

// ---- Render Pagination ----
function renderPagination() {
    const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
    const pageNumbers = document.getElementById('pageNumbers');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;
    
    let pages = '';
    for (let i = 1; i <= totalPages; i++) {
        if (
            i === 1 ||
            i === totalPages ||
            (i >= currentPage - 1 && i <= currentPage + 1)
        ) {
            pages += `<button class="page-number ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
        } else if (i === currentPage - 2 || i === currentPage + 2) {
            pages += `<span>...</span>`;
        }
    }
    
    pageNumbers.innerHTML = pages;
    
    // Add click listeners to page numbers
    document.querySelectorAll('.page-number').forEach(btn => {
        btn.addEventListener('click', () => {
            currentPage = parseInt(btn.getAttribute('data-page'));
            renderOrders();
        });
    });
}

// ---- Filter Orders ----
document.querySelectorAll('.chip[data-status]').forEach(chip => {
    chip.addEventListener('click', function() {
        // Remove active from all chips
        document.querySelectorAll('.chip[data-status]').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        
        const status = this.getAttribute('data-status');
        
        if (status === 'all') {
            filteredOrders = [...ordersData];
        } else {
            filteredOrders = ordersData.filter(order => order.status === status);
        }
        
        currentPage = 1;
        renderOrders();
    });
});

// ---- Clear Filters ----
document.getElementById('clearFiltersBtn')?.addEventListener('click', () => {
    document.querySelectorAll('.chip[data-status]').forEach(c => c.classList.remove('active'));
    document.querySelector('.chip[data-status="all"]').classList.add('active');
    filteredOrders = [...ordersData];
    currentPage = 1;
    renderOrders();
});

// ---- Search Orders ----
document.getElementById('searchInput')?.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    
    filteredOrders = ordersData.filter(order =>
        order.id.toLowerCase().includes(query) ||
        order.product.toLowerCase().includes(query)
    );
    
    currentPage = 1;
    renderOrders();
});

// ---- Pagination Buttons ----
document.getElementById('prevBtn')?.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        renderOrders();
    }
});

document.getElementById('nextBtn')?.addEventListener('click', () => {
    const totalPages = Math.ceil(filteredOrders.length / ordersPerPage);
    if (currentPage < totalPages) {
        currentPage++;
        renderOrders();
    }
});

// ---- View Order Details ----
window.viewOrderDetails = function(orderId) {
    const order = ordersData.find(o => o.id === orderId);
    if (order) {
        alert(`Order Details\n\nOrder ID: ${order.id}\nProduct: ${order.product}\nDate: ${formatDate(order.date)}\nTotal: $${order.total.toFixed(2)}\nStatus: ${order.status}`);
        // In production, redirect to order details page
    }
};

// ---- Download Invoice ----
window.downloadInvoice = function(orderId) {
    alert(`Downloading invoice for ${orderId}...`);
    // In production, trigger actual download
    window.location.href = 'invoice.html';
};

// ---- Export History ----
document.getElementById('exportBtn')?.addEventListener('click', () => {
    const csvData = [
        ['Order ID', 'Date', 'Product', 'Total', 'Status'],
        ...ordersData.map(order => [
            order.id,
            formatDate(order.date),
            order.product,
            `$${order.total.toFixed(2)}`,
            order.status
        ])
    ];
    
    const csv = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'launchpoint-order-history.csv';
    a.click();
    
    alert('Order history exported successfully!');
});

// ---- Cart Button ----
document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            window.location.href = '/cart.html';
        });
    }
});

// ====================================
// MOBILE MENU TOGGLE
// ====================================

const menu = document.getElementById("menu");

function toggleMenu() {
    menu.classList.toggle("open");
    menu.classList.contains("open") 
        ? menu.setAttribute("aria-expanded", "true") 
        : menu.setAttribute("aria-expanded", "false");
}

function closeMenu() {
    menu.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.querySelector('.nav');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (menu && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMenu();
    }
});

// Close menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && menu) {
        closeMenu();
    }
});

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    updateCartBadge();
    renderOrders();
    
    console.log('Order history page loaded successfully');
});