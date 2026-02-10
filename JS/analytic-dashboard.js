// ====================================
// LAUNCHPOINT - ANALYTICS DASHBOARD
// ====================================

// ---- Sample Data ----
const productsData = [
    { name: 'AI Content Generator', category: 'AI Tools', sales: 1250, revenue: 25000, trend: 'up' },
    { name: 'SaaS Boilerplate Kit', category: 'Scripts', sales: 980, revenue: 19600, trend: 'up' },
    { name: 'Ultimate UI/UX Course', category: 'E-Learning', sales: 760, revenue: 15200, trend: 'down' },
    { name: 'E-commerce App Template', category: 'Apps', sales: 540, revenue: 10800, trend: 'up' }
];

// ---- Format Currency ----
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    }).format(amount);
}

// ---- Render Products Table ----
function renderProductsTable() {
    const tbody = document.getElementById('productsTableBody');
    
    tbody.innerHTML = productsData.map(product => `
        <tr>
            <td class="product-name">${product.name}</td>
            <td><span class="category-badge">${product.category}</span></td>
            <td>${product.sales.toLocaleString()}</td>
            <td style="font-weight: 700;">${formatCurrency(product.revenue)}</td>
            <td>
                <span class="trend-badge ${product.trend}">
                    <i class="fa-solid fa-arrow-${product.trend === 'up' ? 'up' : 'down'}"></i>
                    ${product.trend === 'up' ? '+' : '-'}${Math.floor(Math.random() * 10) + 1}%
                </span>
            </td>
        </tr>
    `).join('');
}

// ---- Revenue Chart ----
let revenueChart;

function initRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;
    
    revenueChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Revenue',
                data: [65000, 72000, 68000, 85000, 92000, 88000, 95000, 105000, 98000, 112000, 118000, 125670],
                borderColor: '#4169E1',
                backgroundColor: 'rgba(65, 105, 225, 0.1)',
                tension: 0.4,
                fill: true,
                pointRadius: 0,
                pointHoverRadius: 6
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
                        }
                    },
                    grid: {
                        color: '#e5e7eb'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// ---- Traffic Chart ----
let trafficChart;

function initTrafficChart() {
    const ctx = document.getElementById('trafficChart');
    if (!ctx) return;
    
    trafficChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Organic', 'Referral', 'Direct'],
            datasets: [{
                data: [65, 25, 10],
                backgroundColor: ['#4169E1', '#17A2B8', '#e5e7eb'],
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
        if (!this.closest('.sidebar-footer')) {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        }
    });
});

// ---- Date Filter ----
document.getElementById('dateFilter')?.addEventListener('click', () => {
    alert('Date range picker would open here\n\nOptions:\n- Last 7 Days\n- Last 30 Days\n- Last 90 Days\n- Custom Range');
});

// ---- Export Button ----
document.getElementById('exportBtn')?.addEventListener('click', () => {
    alert('Export analytics report\n\nFormats available:\n- PDF Report\n- CSV Data\n- Excel Spreadsheet');
});

// ---- Logout ----
document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Logout from admin panel?')) {
        window.location.href = 'login.html';
    }
});

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

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
    loadAdminData();
    renderProductsTable();
    initRevenueChart();
    initTrafficChart();
    
    console.log('Analytics dashboard initialized');
});