// ====================================
// LAUNCHPOINT - FINANCE DASHBOARD
// ====================================

// ---- Sample Transactions Data ----
const transactionsData = [
    {
        id: 'AB-12345',
        date: '2025-01-26',
        type: 'Sale',
        amount: 1250.00,
        status: 'completed'
    },
    {
        id: 'EXP-67890',
        date: '2025-01-25',
        type: 'Expense',
        amount: -75.50,
        status: 'completed'
    },
    {
        id: 'CD-54321',
        date: '2025-01-24',
        type: 'Sale',
        amount: 499.99,
        status: 'pending'
    },
    {
        id: 'RF-98765',
        date: '2025-01-23',
        type: 'Refund',
        amount: -99.00,
        status: 'refunded'
    }
];

// ---- Period Data ----
const periodData = {
    daily: {
        income: '$1,890.50',
        expenses: '$345.00',
        profit: '$1,545.50',
        sales: '42',
        incomeChange: '+2.1%',
        expensesChange: '-1.5%',
        profitChange: '+3.2%',
        salesChange: '+5.0%'
    },
    weekly: {
        income: '$12,450.00',
        expenses: '$3,200.00',
        profit: '$9,250.00',
        sales: '287',
        incomeChange: '+4.5%',
        expensesChange: '+1.2%',
        profitChange: '+6.1%',
        salesChange: '+3.8%'
    },
    monthly: {
        income: '$45,890.50',
        expenses: '$12,345.00',
        profit: '$33,545.50',
        sales: '1,204',
        incomeChange: '+5.2%',
        expensesChange: '+2.1%',
        profitChange: '+8.3%',
        salesChange: '-1.5%'
    },
    yearly: {
        income: '$548,200.00',
        expenses: '$148,500.00',
        profit: '$399,700.00',
        sales: '14,520',
        incomeChange: '+12.5%',
        expensesChange: '+8.3%',
        profitChange: '+15.2%',
        salesChange: '+10.1%'
    }
};

let incomeExpensesChart;

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
    }).format(Math.abs(amount));
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

// ---- Render Transactions Table ----
function renderTransactionsTable() {
    const tbody = document.getElementById('transactionsTableBody');
    
    tbody.innerHTML = transactionsData.map(transaction => {
        const statusClass = `status-${transaction.status}`;
        const statusLabel = transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1);
        
        let amountClass = 'amount-neutral';
        let amountPrefix = '';
        
        if (transaction.amount > 0) {
            amountClass = 'amount-positive';
            amountPrefix = '+';
        } else if (transaction.amount < 0) {
            amountClass = 'amount-negative';
        }
        
        return `
            <tr>
                <td class="transaction-id">#${transaction.id}</td>
                <td>${formatDate(transaction.date)}</td>
                <td>${transaction.type}</td>
                <td class="transaction-amount ${amountClass}">${amountPrefix}${formatCurrency(transaction.amount)}</td>
                <td>
                    <span class="status-badge ${statusClass}">
                        <span class="status-dot"></span>
                        ${statusLabel}
                    </span>
                </td>
            </tr>
        `;
    }).join('');
}

// ---- Update Dashboard Data ----
function updateDashboardData(period) {
    const data = periodData[period];
    if (!data) return;
    
    // Update stat values
    document.getElementById('incomeValue').textContent = data.income;
    document.getElementById('expensesValue').textContent = data.expenses;
    document.getElementById('profitValue').textContent = data.profit;
    document.getElementById('salesValue').textContent = data.sales;
    
    // Update stat changes
    updateStatChange('incomeChange', data.incomeChange);
    updateStatChange('expensesChange', data.expensesChange);
    updateStatChange('profitChange', data.profitChange);
    updateStatChange('salesChange', data.salesChange);
}

// ---- Update Stat Change ----
function updateStatChange(elementId, changeValue) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const isPositive = changeValue.startsWith('+');
    
    element.className = 'stat-change ' + (isPositive ? 'positive' : 'negative');
    
    const icon = isPositive ? 'fa-arrow-up' : 'fa-arrow-down';
    element.innerHTML = `<i class="fa-solid ${icon}"></i>${changeValue}`;
}

// ---- Initialize Income vs Expenses Chart ----
function initIncomeExpensesChart() {
    const ctx = document.getElementById('incomeExpensesChart');
    if (!ctx) return;
    
    const gradient1 = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
    gradient1.addColorStop(0, 'rgba(16, 185, 129, 0.2)');
    gradient1.addColorStop(1, 'rgba(16, 185, 129, 0)');
    
    const gradient2 = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
    gradient2.addColorStop(0, 'rgba(220, 38, 38, 0.2)');
    gradient2.addColorStop(1, 'rgba(220, 38, 38, 0)');
    
    incomeExpensesChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
                {
                    label: 'Income',
                    data: [38000, 42000, 40000, 45000, 43000, 47000, 48000, 46000, 49000, 45890, 50000, 52000],
                    borderColor: '#10b981',
                    backgroundColor: gradient1,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#10b981',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                },
                {
                    label: 'Expenses',
                    data: [12000, 11500, 13000, 12800, 11000, 12500, 13200, 11800, 12900, 12345, 13500, 14000],
                    borderColor: '#dc2626',
                    backgroundColor: gradient2,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 0,
                    pointHoverRadius: 6,
                    pointBackgroundColor: '#dc2626',
                    pointBorderColor: '#fff',
                    pointBorderWidth: 2
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 15,
                        font: {
                            size: 12,
                            weight: '600'
                        }
                    }
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
                            return context.dataset.label + ': ' + formatCurrency(context.parsed.y);
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

// ---- Period Filter ----
document.querySelectorAll('.period-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelectorAll('.period-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        const period = this.getAttribute('data-period');
        updateDashboardData(period);
    });
});

// ---- Export Report ----
document.getElementById('exportReportBtn')?.addEventListener('click', () => {
    alert('Export Financial Report\n\nFormats:\n- PDF\n- Excel\n- CSV');
});

// ---- View All Transactions ----
document.getElementById('viewAllTransactionsBtn')?.addEventListener('click', () => {
    alert('Redirecting to full transactions page...');
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

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
    loadAdminData();
    renderTransactionsTable();
    initIncomeExpensesChart();
    
    console.log('Finance dashboard initialized');
});