// ====================================
// LAUNCHPOINT - DOWNLOADS
// ====================================

// ---- Sample Downloads Data ----
const downloadsData = [
    {
        id: 1,
        name: 'Professional Branding Kit',
        icon: 'fa-palette',
        purchaseDate: '2025-01-28',
        version: 'v2.1.0',
        size: '45 MB',
        category: 'Branding'
    },
    {
        id: 2,
        name: 'E-Commerce Website Theme',
        icon: 'fa-shopping-cart',
        purchaseDate: '2025-01-25',
        version: 'v1.8.5',
        size: '128 MB',
        category: 'Website'
    },
    {
        id: 3,
        name: 'SaaS Landing Page Bundle',
        icon: 'fa-file-code',
        purchaseDate: '2025-01-20',
        version: 'v3.0.0',
        size: '67 MB',
        category: 'Landing Page'
    },
    {
        id: 4,
        name: 'React UI Component Library',
        icon: 'fa-puzzle-piece',
        purchaseDate: '2025-01-15',
        version: 'v4.2.1',
        size: '52 MB',
        category: 'UI Kit'
    },
    {
        id: 5,
        name: 'Marketing Integration Pack',
        icon: 'fa-chart-line',
        purchaseDate: '2025-01-10',
        version: 'v1.5.0',
        size: '23 MB',
        category: 'Marketing'
    },
    {
        id: 6,
        name: 'Portfolio Website Theme',
        icon: 'fa-briefcase',
        purchaseDate: '2025-01-05',
        version: 'v2.3.0',
        size: '89 MB',
        category: 'Website'
    }
];

let filteredDownloads = [...downloadsData];

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

// ---- Render Downloads ----
function renderDownloads(downloads) {
    const downloadsGrid = document.getElementById('downloadsGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (downloads.length === 0) {
        downloadsGrid.style.display = 'none';
        emptyState.style.display = 'flex';
        return;
    }
    
    downloadsGrid.style.display = 'grid';
    emptyState.style.display = 'none';
    
    downloadsGrid.innerHTML = downloads.map(download => `
        <div class="download-card">
            <div class="download-header">
                <div class="download-icon">
                    <i class="fa-solid ${download.icon}"></i>
                </div>
                <div class="download-info">
                    <h3>${download.name}</h3>
                    <p class="download-meta">${download.category}</p>
                </div>
            </div>
            
            <div class="download-details">
                <div class="detail-item">
                    <p class="detail-label">Purchased</p>
                    <p class="detail-value">${formatDate(download.purchaseDate)}</p>
                </div>
                <div class="detail-item">
                    <p class="detail-label">Version</p>
                    <p class="detail-value">${download.version}</p>
                </div>
                <div class="detail-item">
                    <p class="detail-label">Size</p>
                    <p class="detail-value">${download.size}</p>
                </div>
            </div>
            
            <div class="download-actions">
                <button class="btn btn-primary btn-download" data-id="${download.id}">
                    <i class="fa-solid fa-download"></i>
                    Download
                </button>
                <button class="btn btn-secondary btn-icon" title="View Details">
                    <i class="fa-solid fa-info-circle"></i>
                </button>
            </div>
        </div>
    `).join('');
    
    // Add download button listeners
    document.querySelectorAll('.btn-download').forEach(btn => {
        btn.addEventListener('click', function() {
            const id = parseInt(this.getAttribute('data-id'));
            const download = downloads.find(d => d.id === id);
            handleDownload(download);
        });
    });
}

// ---- Handle Download ----
function handleDownload(download) {
    // Show loading state
    const btn = event.target.closest('.btn-download');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Downloading...';
    btn.disabled = true;
    
    // Simulate download
    setTimeout(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Downloaded';
        btn.style.background = 'var(--success)';
        
        alert(`Download Started!\n\n${download.name}\nVersion: ${download.version}\nSize: ${download.size}\n\nYour download will begin shortly.`);
        
        // Reset button after 2 seconds
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.disabled = false;
            btn.style.background = '';
        }, 2000);
    }, 1500);
}

// ---- Filter Downloads ----
const filterInput = document.getElementById('filterInput');
if (filterInput) {
    filterInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        
        filteredDownloads = downloadsData.filter(download => 
            download.name.toLowerCase().includes(query) ||
            download.category.toLowerCase().includes(query)
        );
        
        renderDownloads(filteredDownloads);
    });
}

// ---- Sort Downloads ----
const sortSelect = document.getElementById('sortSelect');
if (sortSelect) {
    sortSelect.addEventListener('change', function() {
        const sortBy = this.value;
        
        filteredDownloads.sort((a, b) => {
            switch(sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'date':
                    return new Date(b.purchaseDate) - new Date(a.purchaseDate);
                case 'size':
                    const sizeA = parseFloat(a.size);
                    const sizeB = parseFloat(b.size);
                    return sizeB - sizeA;
                default:
                    return 0;
            }
        });
        
        renderDownloads(filteredDownloads);
    });
}

// ---- Search Input ----
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        console.log('Searching:', query);
        // Can implement global search here
    });
}

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
    renderDownloads(downloadsData);
    
    console.log('Downloads page loaded successfully');
});