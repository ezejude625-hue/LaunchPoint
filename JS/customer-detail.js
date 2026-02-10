// ====================================
// LAUNCHPOINT - CUSTOMER MANAGEMENT
// ====================================

// ---- Sample Customers Data ----
let customersData = [
    {
        id: 1024,
        name: 'Alex Johnson',
        email: 'alex.j@example.com',
        avatar: 'https://i.pravatar.cc/150?img=1',
        joined: '2023-10-26',
        orders: 12,
        totalSpent: 1245.50,
        status: 'active'
    },
    {
        id: 1025,
        name: 'Maria Garcia',
        email: 'maria.g@example.com',
        avatar: 'https://i.pravatar.cc/150?img=5',
        joined: '2023-10-25',
        orders: 8,
        totalSpent: 890.00,
        status: 'active'
    },
    {
        id: 1026,
        name: 'Chen Wei',
        email: 'chen.w@example.com',
        avatar: 'https://i.pravatar.cc/150?img=12',
        joined: '2023-10-24',
        orders: 5,
        totalSpent: 560.00,
        status: 'suspended'
    },
    {
        id: 1027,
        name: 'Samuel Miller',
        email: 'samuel.m@example.com',
        avatar: 'https://i.pravatar.cc/150?img=15',
        joined: '2023-10-22',
        orders: 15,
        totalSpent: 2100.00,
        status: 'active'
    },
    {
        id: 1028,
        name: 'Emma Wilson',
        email: 'emma.w@example.com',
        avatar: 'https://i.pravatar.cc/150?img=20',
        joined: '2023-10-20',
        orders: 0,
        totalSpent: 0,
        status: 'pending'
    }
];

let filteredCustomers = [...customersData];
let currentFilter = 'all';
let currentPage = 1;
const itemsPerPage = 10;

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

// ---- Format Currency ----
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// ---- Format Date ----
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

// ---- Render Customers Table ----
function renderCustomersTable() {
    const tbody = document.getElementById('customersTableBody');
    
    tbody.innerHTML = filteredCustomers.map(customer => {
        const statusClass = `status-${customer.status}`;
        const statusLabel = customer.status.charAt(0).toUpperCase() + customer.status.slice(1);
        
        return `
            <tr>
                <td>
                    <div class="customer-cell">
                        <div class="customer-avatar">
                            <img src="${customer.avatar}" alt="${customer.name}" />
                        </div>
                        <div class="customer-info">
                            <div class="customer-name">${customer.name}</div>
                            <div class="customer-id">#${customer.id}</div>
                        </div>
                    </div>
                </td>
                <td>${customer.email}</td>
                <td>${formatDate(customer.joined)}</td>
                <td>${customer.orders}</td>
                <td style="font-weight: 700;">${formatCurrency(customer.totalSpent)}</td>
                <td>
                    <span class="status-badge ${statusClass}">
                        <span class="status-dot"></span>
                        ${statusLabel}
                    </span>
                </td>
                <td class="text-center">
                    <div class="action-buttons">
                        <button class="action-btn view" onclick="viewCustomer(${customer.id})" title="View Details">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                        <button class="action-btn edit" onclick="editCustomer(${customer.id})" title="Edit">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        ${customer.status === 'suspended' 
                            ? `<button class="action-btn activate" onclick="toggleStatus(${customer.id})" title="Activate">
                                <i class="fa-solid fa-circle-check"></i>
                            </button>`
                            : `<button class="action-btn suspend" onclick="toggleStatus(${customer.id})" title="Suspend">
                                <i class="fa-solid fa-ban"></i>
                            </button>`
                        }
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// ---- Filter Customers ----
function filterCustomers(status) {
    currentFilter = status;
    
    if (status === 'all') {
        filteredCustomers = [...customersData];
    } else {
        filteredCustomers = customersData.filter(c => c.status === status);
    }
    
    renderCustomersTable();
}

// ---- Search Customers ----
document.getElementById('searchInput')?.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    
    filteredCustomers = customersData.filter(customer => {
        const matchesSearch = 
            customer.name.toLowerCase().includes(query) ||
            customer.email.toLowerCase().includes(query) ||
            customer.id.toString().includes(query);
        const matchesFilter = currentFilter === 'all' || customer.status === currentFilter;
        return matchesSearch && matchesFilter;
    });
    
    renderCustomersTable();
});

// ---- Filter Chips ----
document.querySelectorAll('.chip[data-status]').forEach(chip => {
    chip.addEventListener('click', function() {
        document.querySelectorAll('.chip[data-status]').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        filterCustomers(this.getAttribute('data-status'));
    });
});

// ---- View Customer Details ----
window.viewCustomer = function(id) {
    const customer = customersData.find(c => c.id === id);
    if (customer) {
        const modalBody = document.getElementById('modalBody');
        modalBody.innerHTML = `
            <div style="text-align: center; margin-bottom: 1.5rem;">
                <img src="${customer.avatar}" alt="${customer.name}" style="width: 5rem; height: 5rem; border-radius: 50%; margin-bottom: 1rem;" />
                <h4 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.25rem;">${customer.name}</h4>
                <p style="color: var(--muted);">#${customer.id}</p>
            </div>
            <div style="display: grid; gap: 1rem;">
                <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: var(--background); border-radius: 0.5rem;">
                    <span style="font-weight: 600;">Email:</span>
                    <span>${customer.email}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: var(--background); border-radius: 0.5rem;">
                    <span style="font-weight: 600;">Joined:</span>
                    <span>${formatDate(customer.joined)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: var(--background); border-radius: 0.5rem;">
                    <span style="font-weight: 600;">Total Orders:</span>
                    <span>${customer.orders}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: var(--background); border-radius: 0.5rem;">
                    <span style="font-weight: 600;">Total Spent:</span>
                    <span style="font-weight: 700; color: var(--primary);">${formatCurrency(customer.totalSpent)}</span>
                </div>
                <div style="display: flex; justify-content: space-between; padding: 0.75rem; background: var(--background); border-radius: 0.5rem;">
                    <span style="font-weight: 600;">Status:</span>
                    <span class="status-badge status-${customer.status}">
                        <span class="status-dot"></span>
                        ${customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                    </span>
                </div>
            </div>
        `;
        
        document.getElementById('customerModal').classList.add('active');
    }
};

// ---- Edit Customer ----
window.editCustomer = function(id) {
    const customer = customersData.find(c => c.id === id);
    if (customer) {
        alert(`Edit customer: ${customer.name}\n\nRedirecting to edit form...`);
    }
};

// ---- Toggle Customer Status ----
window.toggleStatus = function(id) {
    const customer = customersData.find(c => c.id === id);
    if (customer) {
        const action = customer.status === 'suspended' ? 'activate' : 'suspend';
        if (confirm(`${action.charAt(0).toUpperCase() + action.slice(1)} ${customer.name}?`)) {
            customer.status = customer.status === 'suspended' ? 'active' : 'suspended';
            filterCustomers(currentFilter);
        }
    }
};

// ---- Close Modal ----
document.getElementById('modalClose')?.addEventListener('click', () => {
    document.getElementById('customerModal').classList.remove('active');
});

document.getElementById('modalOverlay')?.addEventListener('click', () => {
    document.getElementById('customerModal').classList.remove('active');
});

// ---- Add Customer ----
document.getElementById('addCustomerBtn')?.addEventListener('click', () => {
    alert('Add new customer form would open here');
});

// ---- Export ----
document.getElementById('exportBtn')?.addEventListener('click', () => {
    alert('Export customers\n\nFormats:\n- CSV\n- Excel\n- PDF');
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
        if (!this.closest('.sidebar-footer') && !this.id) {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
    loadAdminData();
    renderCustomersTable();
    
    console.log('Customer management initialized');
});