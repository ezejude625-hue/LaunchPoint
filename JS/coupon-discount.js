// ====================================
// LAUNCHPOINT - COUPON MANAGEMENT
// ====================================

// ---- Sample Coupons Data ----
let couponsData = [
    {
        id: 1,
        code: 'LAUNCH25',
        type: 'Percentage',
        value: 25,
        status: 'active',
        used: 45,
        limit: 100,
        expires: '2025-12-31'
    },
    {
        id: 2,
        code: 'NEWUSER10',
        type: 'Fixed',
        value: 10,
        status: 'active',
        used: 128,
        limit: 500,
        expires: '2025-06-30'
    },
    {
        id: 3,
        code: 'FLASH20',
        type: 'Percentage',
        value: 20,
        status: 'inactive',
        used: 50,
        limit: 50,
        expires: '2025-03-15'
    },
    {
        id: 4,
        code: 'SUMMER15',
        type: 'Percentage',
        value: 15,
        status: 'expired',
        used: 200,
        limit: 200,
        expires: '2024-08-31'
    }
];

let filteredCoupons = [...couponsData];
let currentFilter = 'all';

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

// ---- Format Date ----
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

// ---- Render Coupons Table ----
function renderCouponsTable() {
    const tbody = document.getElementById('couponsTableBody');
    const emptyState = document.getElementById('emptyState');
    const tableContainer = document.querySelector('.table-container');
    
    if (filteredCoupons.length === 0) {
        tableContainer.style.display = 'none';
        emptyState.style.display = 'flex';
        return;
    }
    
    tableContainer.style.display = 'block';
    emptyState.style.display = 'none';
    
    tbody.innerHTML = filteredCoupons.map(coupon => {
        const statusClass = `status-${coupon.status}`;
        const statusLabel = coupon.status.charAt(0).toUpperCase() + coupon.status.slice(1);
        const valueDisplay = coupon.type === 'Percentage' ? `${coupon.value}%` : `$${coupon.value}`;
        
        return `
            <tr>
                <td class="coupon-code">${coupon.code}</td>
                <td>${coupon.type}</td>
                <td style="font-weight: 700;">${valueDisplay}</td>
                <td>
                    <span class="status-badge ${statusClass}">${statusLabel}</span>
                </td>
                <td>${coupon.used} / ${coupon.limit}</td>
                <td>${formatDate(coupon.expires)}</td>
                <td class="actions-cell">
                    <div class="action-buttons">
                        <button class="action-btn edit" onclick="editCoupon(${coupon.id})" title="Edit">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button class="action-btn toggle" onclick="toggleCoupon(${coupon.id})" title="Toggle Status">
                            <i class="fa-solid fa-toggle-${coupon.status === 'active' ? 'on' : 'off'}"></i>
                        </button>
                        <button class="action-btn delete" onclick="deleteCoupon(${coupon.id})" title="Delete">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// ---- Filter Coupons ----
function filterCoupons(status) {
    currentFilter = status;
    
    if (status === 'all') {
        filteredCoupons = [...couponsData];
    } else {
        filteredCoupons = couponsData.filter(c => c.status === status);
    }
    
    renderCouponsTable();
}

// ---- Search Coupons ----
document.getElementById('searchInput')?.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    
    filteredCoupons = couponsData.filter(coupon => {
        const matchesSearch = coupon.code.toLowerCase().includes(query);
        const matchesFilter = currentFilter === 'all' || coupon.status === currentFilter;
        return matchesSearch && matchesFilter;
    });
    
    renderCouponsTable();
});

// ---- Filter Chips ----
document.querySelectorAll('.chip[data-filter]').forEach(chip => {
    chip.addEventListener('click', function() {
        document.querySelectorAll('.chip[data-filter]').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        filterCoupons(this.getAttribute('data-filter'));
    });
});

// ---- Edit Coupon ----
window.editCoupon = function(id) {
    const coupon = couponsData.find(c => c.id === id);
    if (coupon) {
        alert(`Edit Coupon: ${coupon.code}\n\nRedirecting to edit page...`);
        window.location.href = 'coupon.html';
    }
};

// ---- Toggle Coupon Status ----
window.toggleCoupon = function(id) {
    const coupon = couponsData.find(c => c.id === id);
    if (coupon && coupon.status !== 'expired') {
        coupon.status = coupon.status === 'active' ? 'inactive' : 'active';
        filterCoupons(currentFilter);
    }
};

// ---- Delete Coupon ----
window.deleteCoupon = function(id) {
    const coupon = couponsData.find(c => c.id === id);
    if (coupon && confirm(`Delete coupon "${coupon.code}"?`)) {
        couponsData = couponsData.filter(c => c.id !== id);
        filterCoupons(currentFilter);
    }
};

// ---- Create Coupon ----
document.getElementById('createCouponBtn')?.addEventListener('click', () => {
    window.location.href = 'coupon.html';
});

// ---- Filter Button ----
document.getElementById('filterBtn')?.addEventListener('click', () => {
    alert('Advanced filters:\n\n- Date Range\n- Discount Type\n- Usage Status\n- Value Range');
});

// ---- Sort Button ----
document.getElementById('sortBtn')?.addEventListener('click', () => {
    alert('Sort options:\n\n- Code (A-Z)\n- Expiry Date\n- Usage Count\n- Created Date');
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
    renderCouponsTable();
    
    console.log('Coupon management initialized');
});