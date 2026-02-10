// ====================================
// LAUNCHPOINT - EXPENSE TRACKER
// ====================================

// ---- Sample Expenses Data ----
let expenses = [
    {
        id: 1,
        name: 'Server Hosting',
        category: 'hosting',
        amount: 49.99,
        date: '2025-01-25',
        paymentMethod: 'card',
        description: 'Monthly DigitalOcean server',
        recurring: true
    },
    {
        id: 2,
        name: 'Google Ads Campaign',
        category: 'marketing',
        amount: 250.00,
        date: '2025-01-22',
        paymentMethod: 'card',
        description: 'Q1 marketing campaign',
        recurring: false
    }
];

let nextId = 3;

// ---- Form Elements ----
const form = document.getElementById('expenseForm');
const expenseNameInput = document.getElementById('expenseName');
const categorySelect = document.getElementById('category');
const amountInput = document.getElementById('amount');
const expenseDateInput = document.getElementById('expenseDate');
const paymentMethodSelect = document.getElementById('paymentMethod');
const descriptionTextarea = document.getElementById('description');
const recurringCheckbox = document.getElementById('recurring');

// ---- Set Today's Date ----
function setTodayDate() {
    const today = new Date().toISOString().split('T')[0];
    expenseDateInput.value = today;
    expenseDateInput.max = today;
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

// ---- Render Expenses ----
function renderExpenses() {
    const expensesList = document.getElementById('expensesList');
    
    if (expenses.length === 0) {
        expensesList.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-receipt"></i>
                <p>No expenses yet. Add your first expense above!</p>
            </div>
        `;
        return;
    }
    
    expensesList.innerHTML = expenses.slice(-5).reverse().map(expense => `
        <div class="expense-item">
            <div class="expense-info">
                <div class="expense-name">${expense.name}</div>
                <div class="expense-meta">
                    ${formatDate(expense.date)} • ${getCategoryLabel(expense.category)}
                    ${expense.recurring ? ' • <i class="fa-solid fa-rotate"></i> Recurring' : ''}
                </div>
            </div>
            <div class="expense-amount">${formatCurrency(expense.amount)}</div>
            <button class="expense-delete" onclick="deleteExpense(${expense.id})" title="Delete expense">
                <i class="fa-solid fa-trash"></i>
            </button>
        </div>
    `).join('');
}

// ---- Get Category Label ----
function getCategoryLabel(value) {
    const categories = {
        'software': 'Software',
        'marketing': 'Marketing',
        'hosting': 'Hosting',
        'utilities': 'Utilities',
        'hardware': 'Hardware',
        'subscriptions': 'Subscriptions',
        'other': 'Other'
    };
    return categories[value] || value;
}

// ---- Add Expense ----
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validate
    if (!expenseNameInput.value.trim()) {
        alert('Please enter an expense name');
        return;
    }
    
    if (!categorySelect.value) {
        alert('Please select a category');
        return;
    }
    
    if (!amountInput.value || parseFloat(amountInput.value) <= 0) {
        alert('Please enter a valid amount');
        return;
    }
    
    // Create expense object
    const expense = {
        id: nextId++,
        name: expenseNameInput.value.trim(),
        category: categorySelect.value,
        amount: parseFloat(amountInput.value),
        date: expenseDateInput.value,
        paymentMethod: paymentMethodSelect.value,
        description: descriptionTextarea.value.trim(),
        recurring: recurringCheckbox.checked
    };
    
    // Add to expenses array
    expenses.push(expense);
    
    // Show success message
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-check"></i> Added!';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
    
    // Reset form
    form.reset();
    setTodayDate();
    recurringCheckbox.checked = false;
    
    // Re-render expenses
    renderExpenses();
    
    // Show notification
    alert(`Expense Added!\n\n${expense.name}\n${formatCurrency(expense.amount)}`);
    
    // Focus first input
    expenseNameInput.focus();
});

// ---- Delete Expense ----
window.deleteExpense = function(id) {
    if (confirm('Delete this expense?')) {
        expenses = expenses.filter(e => e.id !== id);
        renderExpenses();
    }
};

// ---- Cancel Button ----
document.getElementById('cancelBtn')?.addEventListener('click', () => {
    if (confirm('Clear the form?')) {
        form.reset();
        setTodayDate();
        recurringCheckbox.checked = false;
        expenseNameInput.focus();
    }
});

// ---- Close Button ----
document.getElementById('closeBtn')?.addEventListener('click', () => {
    if (confirm('Close the expense tracker?')) {
        window.location.href = 'dashboard.html';
    }
});

// ---- Format Amount Input ----
amountInput.addEventListener('input', function() {
    // Remove non-numeric characters except decimal
    let value = this.value.replace(/[^\d.]/g, '');
    
    // Limit to 2 decimal places
    const parts = value.split('.');
    if (parts[1] && parts[1].length > 2) {
        value = parts[0] + '.' + parts[1].substring(0, 2);
    }
    
    this.value = value;
});

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
    setTodayDate();
    renderExpenses();
    expenseNameInput.focus();
    
    console.log('Expense tracker initialized');
});