//=================================//
// LAUNCHPOINT - SELLER MANAGEMENT //
//=================================//

// Sellers Data
const sellersData = [
    {
        id: 1,
        name: 'Tech Innovators Inc.',
        email: 'contact@techinnovators.com',
        avatar: 'TI',
        registrationDate: '2024-10-26',
        status: 'active',
        listings: 150
    },
    {
        id: 2,
        name: 'Creative Scripts Co.',
        email: 'hello@creativescripts.com',
        avatar: 'CS',
        registrationDate: '2024-10-24',
        status: 'pending',
        listings: 0
    },
    {
        id: 3,
        name: 'AI Solutions Hub',
        email: 'support@aisolutions.io',
        avatar: 'AI',
        registrationDate: '2024-09-15',
        status: 'active',
        listings: 88
    },
    {
        id: 4,
        name: 'Web Wizards',
        email: 'team@webwizards.dev',
        avatar: 'WW',
        registrationDate: '2024-08-01',
        status: 'suspended',
        listings: 45
    },
    {
        id: 5,
        name: 'Digital Marketplace Pro',
        email: 'info@digitalmp.com',
        avatar: 'DM',
        registrationDate: '2024-11-15',
        status: 'active',
        listings: 203
    },
    {
        id: 6,
        name: 'Code Masters Studio',
        email: 'contact@codemasters.io',
        avatar: 'CM',
        registrationDate: '2024-07-10',
        status: 'active',
        listings: 127
    }
];

let filteredSellers = [...sellersData];
let currentFilter = 'all';
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

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Render Sellers Table
function renderSellersTable() {
    const tbody = document.getElementById('sellersTableBody');
    
    if (filteredSellers.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align: center; padding: 3rem; color: var(--muted);">
                    <i class="fa-solid fa-inbox" style="font-size: 3rem; margin-bottom: 1rem; display: block;"></i>
                    No sellers found
                </td>
            </tr>
        `;
        return;
    }
    
    tbody.innerHTML = filteredSellers.map(seller => {
        const statusClass = `status-${seller.status}`;
        const statusLabel = seller.status.charAt(0).toUpperCase() + seller.status.slice(1);
        
        return `
            <tr>
                <td>
                    <div class="seller-cell">
                        <div class="seller-avatar">
                            ${seller.avatar}
                        </div>
                        <div class="seller-info">
                            <span class="seller-name">${seller.name}</span>
                        </div>
                    </div>
                </td>
                <td class="seller-email">${seller.email}</td>
                <td>${formatDate(seller.registrationDate)}</td>
                <td>
                    <span class="status-badge ${statusClass}">
                        <span class="status-dot"></span>
                        ${statusLabel}
                    </span>
                </td>
                <td>${seller.listings}</td>
                <td class="text-center">
                    <div class="action-buttons">
                        <button class="action-btn view" onclick="viewSeller(${seller.id})" title="View Details">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                        <button class="action-btn edit" onclick="editSeller(${seller.id})" title="Edit">
                            <i class="fa-solid fa-pen"></i>
                        </button>
                        <button class="action-btn delete" onclick="deleteSeller(${seller.id})" title="Delete">
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
    document.getElementById('showingStart').textContent = filteredSellers.length > 0 ? '1' : '0';
    document.getElementById('showingEnd').textContent = filteredSellers.length;
    document.getElementById('totalSellers').textContent = filteredSellers.length;
}

// Search Sellers
document.getElementById('searchInput')?.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    
    filteredSellers = sellersData.filter(seller => {
        const matchesSearch = seller.name.toLowerCase().includes(query) || 
                            seller.email.toLowerCase().includes(query);
        const matchesStatus = currentFilter === 'all' || seller.status === currentFilter;
        return matchesSearch && matchesStatus;
    });
    
    applySorting();
    renderSellersTable();
});

// Status Filter
document.getElementById('statusFilter')?.addEventListener('click', function() {
    const statuses = ['all', 'active', 'pending', 'suspended'];
    const currentIndex = statuses.indexOf(currentFilter);
    const nextIndex = (currentIndex + 1) % statuses.length;
    currentFilter = statuses[nextIndex];
    
    const label = currentFilter.charAt(0).toUpperCase() + currentFilter.slice(1);
    document.getElementById('statusLabel').textContent = label;
    
    filterSellers();
});

// Sort Filter
document.getElementById('sortFilter')?.addEventListener('click', function() {
    const sorts = ['newest', 'oldest', 'name', 'listings'];
    const currentIndex = sorts.indexOf(currentSort);
    const nextIndex = (currentIndex + 1) % sorts.length;
    currentSort = sorts[nextIndex];
    
    const labels = {
        'newest': 'Newest',
        'oldest': 'Oldest',
        'name': 'Name',
        'listings': 'Listings'
    };
    document.getElementById('sortLabel').textContent = labels[currentSort];
    
    applySorting();
    renderSellersTable();
});

// Filter Sellers
function filterSellers() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    filteredSellers = sellersData.filter(seller => {
        const matchesSearch = seller.name.toLowerCase().includes(query) || 
                            seller.email.toLowerCase().includes(query);
        const matchesStatus = currentFilter === 'all' || seller.status === currentFilter;
        return matchesSearch && matchesStatus;
    });
    
    applySorting();
    renderSellersTable();
}

// Apply Sorting
function applySorting() {
    filteredSellers.sort((a, b) => {
        switch (currentSort) {
            case 'newest':
                return new Date(b.registrationDate) - new Date(a.registrationDate);
            case 'oldest':
                return new Date(a.registrationDate) - new Date(b.registrationDate);
            case 'name':
                return a.name.localeCompare(b.name);
            case 'listings':
                return b.listings - a.listings;
            default:
                return 0;
        }
    });
}

// View Seller
window.viewSeller = function(sellerId) {
    const seller = sellersData.find(s => s.id === sellerId);
    if (seller) {
        alert(`Viewing Seller Details\n\nName: ${seller.name}\nEmail: ${seller.email}\nStatus: ${seller.status}\nListings: ${seller.listings}\nRegistered: ${formatDate(seller.registrationDate)}`);
    }
};

// Edit Seller
window.editSeller = function(sellerId) {
    const seller = sellersData.find(s => s.id === sellerId);
    if (seller) {
        alert(`Edit Seller: ${seller.name}\n\nThis would open an edit dialog to modify seller details.`);
    }
};

// Delete Seller
window.deleteSeller = function(sellerId) {
    const seller = sellersData.find(s => s.id === sellerId);
    if (seller && confirm(`Delete "${seller.name}"?\n\nThis will permanently remove the seller and all their listings. This action cannot be undone.`)) {
        const index = sellersData.findIndex(s => s.id === sellerId);
        if (index > -1) {
            sellersData.splice(index, 1);
            filterSellers();
            alert('Seller deleted successfully!');
        }
    }
};

// Add Seller
document.getElementById('addSellerBtn')?.addEventListener('click', function() {
    const sellerName = prompt('Enter seller name:');
    if (!sellerName || !sellerName.trim()) return;
    
    const sellerEmail = prompt('Enter seller email:');
    if (!sellerEmail || !sellerEmail.trim()) return;
    
    const newSeller = {
        id: sellersData.length + 1,
        name: sellerName.trim(),
        email: sellerEmail.trim(),
        avatar: sellerName.trim().substring(0, 2).toUpperCase(),
        registrationDate: new Date().toISOString().split('T')[0],
        status: 'pending',
        listings: 0
    };
    
    sellersData.push(newSeller);
    filterSellers();
    
    alert(`Seller "${sellerName}" added successfully!\n\nStatus: Pending approval`);
});

// Export
document.getElementById('exportBtn')?.addEventListener('click', function() {
    alert(`Export Sellers\n\nTotal Sellers: ${filteredSellers.length}\nFormat: CSV\n\nDownload would start...`);
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
    renderSellersTable();
    console.log('Seller management page initialized');
});