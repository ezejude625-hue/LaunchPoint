// ====================================
// LAUNCHPOINT - EXPENSES MANAGEMENT
// ====================================

// ---- Sample Expenses Data ----
let expensesData = [
    {
        id: 1,
        date: '2025-01-26',
        item: 'Server Hosting Fees',
        category: 'infrastructure',
        amount: 150.00,
        status: 'paid'
    },
    {
        id: 2,
        date: '2025-01-25',
        item: 'Marketing Campaign (Q1)',
        category: 'marketing',
        amount: 2500.00,
        status: 'paid'
    },
    {
        id: 3,
        date: '2025-01-24',
        item: 'Freelance Developer Payment',
        category: 'salaries',
        amount: 1200.00,
        status: 'pending'
    },
    {
        id: 4,
        date: '2025-01-23',
        item: 'Software Subscription',
        category: 'software',
        amount: 49.99,
        status: 'overdue'
    }
];

let filteredExpenses = [...expensesData];
let currentCategory = 'all';
let selectedExpenses = new Set();

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

// ---- Calculate Summaries ----
function calculateSummaries() {
    const total = expensesData.reduce((sum, exp) => sum + exp.amount, 0);
    const paid = expensesData.filter(e => e.status === 'paid').reduce((sum, exp) => sum + exp.amount, 0);
    const pending = expensesData.filter(e => e.status === 'pending').reduce((sum, exp) => sum + exp.amount, 0);
    const overdue = expensesData.filter(e => e.status === 'overdue').reduce((sum, exp) => sum + exp.amount, 0);
    
    document.getElementById('totalExpenses').textContent = formatCurrency(total);
    document.getElementById('paidExpenses').textContent = formatCurrency(paid);
    document.getElementById('pendingExpenses').textContent = formatCurrency(pending);
    document.getElementById('overdueExpenses').textContent = formatCurrency(overdue);
}

// ---- Render Expenses Table ----
function renderExpensesTable() {
    const tbody = document.getElementById('expensesTableBody');
    
    tbody.innerHTML = filteredExpenses.map(expense => {
        const statusClass = `status-${expense.status}`;
        const statusLabel = expense.status.charAt(0).toUpperCase() + expense.status.slice(1);
        const isChecked = selectedExpenses.has(expense.id);
        
        return `
            <tr>
                <td>
                    <input 
                        type="checkbox" 
                        class="checkbox expense-checkbox" 
                        data-id="${expense.id}"
                        ${isChecked ? 'checked' : ''}
                    />
                </td>
                <td class="expense-date">${formatDate(expense.date)}</td>
                <td class="expense-item">${expense.item}</td>
                <td class="expense-category">${getCategoryLabel(expense.category)}</td>
                <td class="expense-amount">${formatCurrency(expense.amount)}</td>
                <td>
                    <span class="status-badge ${statusClass}">
                        <span class="status-dot"></span>
                        ${statusLabel}
                    </span>
                </td>
                <td class="text-center">
                    <div class="action-buttons">
                        <button class="action-btn edit" onclick="editExpense(${expense.id})" title="Edit">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button class="action-btn delete" onclick="deleteExpense(${expense.id})" title="Delete">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
    
    // Reattach checkbox listeners
    attachCheckboxListeners();
    updateSelectedCount();
}

// ---- Get Category Label ----
function getCategoryLabel(category) {
    const labels = {
        infrastructure: 'Infrastructure',
        marketing: 'Marketing',
        software: 'Software',
        salaries: 'Salaries'
    };
    return labels[category] || category;
}

// ---- Filter Expenses ----
function filterExpenses(category) {
    currentCategory = category;
    
    if (category === 'all') {
        filteredExpenses = [...expensesData];
    } else {
        filteredExpenses = expensesData.filter(e => e.category === category);
    }
    
    renderExpensesTable();
}

// ---- Search Expenses ----
document.getElementById('searchInput')?.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    
    filteredExpenses = expensesData.filter(expense => {
        const matchesSearch = 
            expense.item.toLowerCase().includes(query) ||
            getCategoryLabel(expense.category).toLowerCase().includes(query);
        const matchesCategory = currentCategory === 'all' || expense.category === currentCategory;
        return matchesSearch && matchesCategory;
    });
    
    renderExpensesTable();
});

// ---- Filter Chips ----
document.querySelectorAll('.chip[data-category]').forEach(chip => {
    chip.addEventListener('click', function() {
        document.querySelectorAll('.chip[data-category]').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        filterExpenses(this.getAttribute('data-category'));
    });
});

// ---- Select All Checkbox ----
const selectAllCheckbox = document.getElementById('selectAllCheckbox');

selectAllCheckbox?.addEventListener('change', function() {
    const checkboxes = document.querySelectorAll('.expense-checkbox');
    
    if (this.checked) {
        checkboxes.forEach(cb => {
            cb.checked = true;
            selectedExpenses.add(parseInt(cb.dataset.id));
        });
    } else {
        checkboxes.forEach(cb => {
            cb.checked = false;
            selectedExpenses.clear();
        });
    }
    
    updateSelectedCount();
});

// ---- Attach Checkbox Listeners ----
function attachCheckboxListeners() {
    document.querySelectorAll('.expense-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const id = parseInt(this.dataset.id);
            
            if (this.checked) {
                selectedExpenses.add(id);
            } else {
                selectedExpenses.delete(id);
                selectAllCheckbox.checked = false;
            }
            
            updateSelectedCount();
        });
    });
}

// ---- Update Selected Count ----
function updateSelectedCount() {
    const count = selectedExpenses.size;
    document.getElementById('selectedCount').textContent = `${count} selected`;
    
    const bulkDeleteBtn = document.getElementById('bulkDeleteBtn');
    if (bulkDeleteBtn) {
        bulkDeleteBtn.disabled = count === 0;
    }
    
    // Update select all checkbox
    const totalCheckboxes = document.querySelectorAll('.expense-checkbox').length;
    if (selectAllCheckbox) {
        selectAllCheckbox.checked = count > 0 && count === totalCheckboxes;
        selectAllCheckbox.indeterminate = count > 0 && count < totalCheckboxes;
    }
}

// ---- Edit Expense ----
window.editExpense = function(id) {
    const expense = expensesData.find(e => e.id === id);
    if (expense) {
        alert(`Edit Expense\n\nItem: ${expense.item}\nAmount: ${formatCurrency(expense.amount)}\nStatus: ${expense.status}`);
    }
};

// ---- Delete Expense ----
window.deleteExpense = function(id) {
    const expense = expensesData.find(e => e.id === id);
    if (expense && confirm(`Delete expense "${expense.item}"?`)) {
        expensesData = expensesData.filter(e => e.id !== id);
        selectedExpenses.delete(id);
        filterExpenses(currentCategory);
        calculateSummaries();
    }
};

// ---- Bulk Delete ----
document.getElementById('bulkDeleteBtn')?.addEventListener('click', () => {
    if (selectedExpenses.size === 0) return;
    
    if (confirm(`Delete ${selectedExpenses.size} selected expenses?`)) {
        expensesData = expensesData.filter(e => !selectedExpenses.has(e.id));
        selectedExpenses.clear();
        filterExpenses(currentCategory);
        calculateSummaries();
    }
});

// ---- Add Expense ----
document.getElementById('addExpenseBtn')?.addEventListener('click', () => {
    alert('Add new expense form would open here');
});

// ---- Export ----
document.getElementById('exportBtn')?.addEventListener('click', () => {
    alert('Export expenses\n\nFormats:\n- CSV\n- Excel\n- PDF');
});

// ---- Date Filter ----
document.getElementById('filterDateBtn')?.addEventListener('click', () => {
    alert('Date Range Filter\n\nSelect date range to filter expenses');
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
    calculateSummaries();
    renderExpensesTable();
    
    console.log('Expenses management initialized');
});