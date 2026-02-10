// LAUNCHPOINT - ORDERS MANAGEMENT

const ordersData = [
    { id: 'DB-10583', customer: 'Alex Johnson', date: '2023-10-26', amount: 149.00, status: 'completed' },
    { id: 'DB-10582', customer: 'Maria Garcia', date: '2023-10-25', amount: 99.00, status: 'pending' },
    { id: 'DB-10581', customer: 'Chen Wei', date: '2023-10-25', amount: 25.50, status: 'completed' },
    { id: 'DB-10580', customer: 'Fatima Al-Sayed', date: '2023-10-24', amount: 299.00, status: 'refunded' },
    { id: 'DB-10579', customer: 'David Smith', date: '2023-10-23', amount: 49.99, status: 'cancelled' },
    { id: 'DB-10578', customer: 'Sarah Johnson', date: '2023-10-22', amount: 199.00, status: 'completed' },
    { id: 'DB-10577', customer: 'Michael Brown', date: '2023-10-21', amount: 75.50, status: 'pending' }
];

let filteredOrders = [...ordersData];
let currentFilter = 'all';

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

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function renderOrdersTable() {
    const tbody = document.getElementById('ordersTableBody');
    tbody.innerHTML = filteredOrders.map(order => {
        const statusClass = `status-${order.status}`;
        const statusLabel = order.status.charAt(0).toUpperCase() + order.status.slice(1);
        return `
            <tr>
                <td class="order-id">#${order.id}</td>
                <td class="customer-name">${order.customer}</td>
                <td>${formatDate(order.date)}</td>
                <td style="font-weight: 700;">${formatCurrency(order.amount)}</td>
                <td>
                    <span class="status-badge ${statusClass}">
                        <span class="status-dot"></span>
                        ${statusLabel}
                    </span>
                </td>
                <td class="text-center">
                    <div class="action-buttons">
                        <button class="action-btn view" onclick="viewOrder('${order.id}')" title="View Details">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

window.viewOrder = function(orderId) {
    window.location.href = `order-details.html?id=${orderId}`;
};

function filterOrders(status) {
    currentFilter = status;
    filteredOrders = status === 'all' ? [...ordersData] : ordersData.filter(o => o.status === status);
    renderOrdersTable();
}

document.querySelectorAll('.chip[data-status]').forEach(chip => {
    chip.addEventListener('click', function() {
        document.querySelectorAll('.chip[data-status]').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        filterOrders(this.getAttribute('data-status'));
    });
});

document.getElementById('searchInput')?.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    filteredOrders = ordersData.filter(order => {
        const matchesSearch = order.customer.toLowerCase().includes(query) || order.id.toLowerCase().includes(query);
        const matchesFilter = currentFilter === 'all' || order.status === currentFilter;
        return matchesSearch && matchesFilter;
    });
    renderOrdersTable();
});

document.getElementById('exportBtn')?.addEventListener('click', () => {
    alert('Export Orders\n\nFormats:\n- CSV\n- Excel\n- PDF');
});

document.getElementById('filterBtn')?.addEventListener('click', () => {
    alert('Advanced Filters\n\n- Date Range\n- Amount Range\n- Customer');
});

document.querySelectorAll('.page-number').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.page-number').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Logout from admin panel?')) window.location.href = 'login.html';
});

document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        if (!this.closest('.sidebar-footer') && !this.id && this.getAttribute('href') === '#') {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    loadAdminData();
    renderOrdersTable();
    console.log('Orders management initialized');
});