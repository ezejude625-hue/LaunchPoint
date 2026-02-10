// ====================================
// LAUNCHPOINT - DASHBOARD OVERVIEW
// ====================================

// ---- Sample Orders Data ----
const ordersData = [
    {
        id: 'DB-0842',
        customer: 'Liam Johnson',
        date: '2025-01-30 14:30',
        amount: 250.00,
        status: 'completed'
    },
    {
        id: 'DB-0841',
        customer: 'Olivia Smith',
        date: '2025-01-30 11:15',
        amount: 150.00,
        status: 'completed'
    },
    {
        id: 'DB-0840',
        customer: 'Noah Williams',
        date: '2025-01-29 18:45',
        amount: 320.50,
        status: 'pending'
    },
    {
        id: 'DB-0839',
        customer: 'Emma Brown',
        date: '2025-01-29 09:00',
        amount: 45.00,
        status: 'canceled'
    },
    {
        id: 'DB-0838',
        customer: 'James Davis',
        date: '2025-01-28 16:20',
        amount: 189.99,
        status: 'completed'
    }
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

// ---- Format Currency ----
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// ---- Render Orders Table ----
function renderOrdersTable() {
    const tbody = document.getElementById('ordersTableBody');
    
    tbody.innerHTML = ordersData.map(order => {
        const statusClass = `status-${order.status}`;
        const statusLabel = order.status.charAt(0).toUpperCase() + order.status.slice(1);
        
        return `
            <tr>
                <td class="order-id">#${order.id}</td>
                <td>${order.customer}</td>
                <td>${order.date}</td>
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

// ---- View Order ----
window.viewOrder = function(orderId) {
    const order = ordersData.find(o => o.id === orderId);
    if (order) {
        alert(`Order Details\n\nID: #${order.id}\nCustomer: ${order.customer}\nAmount: ${formatCurrency(order.amount)}\nStatus: ${order.status}`);
    }
};

// ---- Revenue Chart ----
let revenueChart;

function initRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;
    
    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(65, 105, 225, 0.2)');
    gradient.addColorStop(1, 'rgba(65, 105, 225, 0)');
    
    revenueChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan 1', 'Jan 5', 'Jan 10', 'Jan 15', 'Jan 20', 'Jan 25', 'Jan 30'],
            datasets: [{
                label: 'Revenue',
                data: [32000, 35000, 33000, 42000, 45000, 43000, 45231],
                borderColor: '#4169E1',
                backgroundColor: gradient,
                tension: 0.4,
                fill: true,
                pointRadius: 0,
                pointHoverRadius: 6,
                pointBackgroundColor: '#4169E1',
                pointBorderColor: '#fff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1a1a2e',
                    padding: 12,
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#4169E1',
                    borderWidth: 1,
                    callbacks: {
                        label: function(context) {
                            return 'Revenue: ' + formatCurrency(context.parsed.y);
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: function(value) {
                            return '$' + (value / 1000) + 'K';
                        },
                        color: '#6b7280'
                    },
                    grid: {
                        color: '#e5e7eb'
                    }
                },
                x: {
                    ticks: {
                        color: '#6b7280'
                    },
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// ---- Categories Donut Chart ----
let categoriesChart;

function initCategoriesChart() {
    const ctx = document.getElementById('categoriesChart');
    if (!ctx) return;
    
    categoriesChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Scripts', 'APIs', 'Apps', 'Other'],
            datasets: [{
                data: [40, 30, 20, 10],
                backgroundColor: ['#4169E1', '#17A2B8', '#10b981', '#f59e0b'],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            cutout: '70%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    backgroundColor: '#1a1a2e',
                    padding: 12,
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });
}

// ---- Navigation ----
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
        }
        
        if (!this.closest('.sidebar-footer') && !this.id) {
            document.querySelectorAll('.sidebar-nav .nav-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// ---- Quick Actions ----
document.querySelectorAll('.quick-action-card').forEach(card => {
    card.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#') {
            e.preventDefault();
            const label = this.querySelector('.action-label').textContent;
            console.log('Quick action clicked:', label);
        }
    });
});

// ---- Add Product Button ----
document.getElementById('addProductBtn')?.addEventListener('click', () => {
    window.location.href = 'create-product.html';
});

// ---- Notification Button ----
document.getElementById('notificationBtn')?.addEventListener('click', () => {
    alert('Notifications\n\n• New order received\n• Customer message received\n• Product review submitted');
});

// ---- View All Orders ----
document.getElementById('viewAllOrdersBtn')?.addEventListener('click', () => {
    alert('Redirecting to full orders page...');
});

// ---- Logout ----
document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Logout from admin panel?')) {
        window.location.href = 'login.html';
    }
});

// ---- Animate Stats on Load ----
function animateStats() {
    const statValues = document.querySelectorAll('.stat-value, .action-value');
    
    statValues.forEach((stat, index) => {
        stat.style.opacity = '0';
        stat.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            stat.style.transition = 'all 0.5s ease-out';
            stat.style.opacity = '1';
            stat.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
    loadAdminData();
    renderOrdersTable();
    initRevenueChart();
    initCategoriesChart();
    animateStats();
    
    console.log('Dashboard overview initialized');
});