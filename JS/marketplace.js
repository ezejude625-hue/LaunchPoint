// ====================================
// LAUNCHPOINT MARKETPLACE - JAVASCRIPT
// ====================================

// ---- Product Data ----
const products = [
  {
    id: 1,
    name: "Professional Branding Kit",
    category: "branding-kits",
    categoryDisplay: "Brand Identity",
    description: "Complete brand identity package with logo, colors, fonts, and style guide.",
    price: 149,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD7Gc0h1hHdgWjO63Ep6sU3gg6M2KWyehtmjkJPZY8x7fxP9QgprbDcXRxvQGGx0IhyPmcx3iEecsoBzWAGqQlimPwZX1GtQX2S-CgTgrKpTYNvJJ8z5cQU1KictVGlq8iHh0NCtL3KB_9eCaBOh7EtGhc1mmwN0cY4QBhLMAW7uXnYBW9NOY5p2jpD5pLb17RL7fbH7mW5oNAzDnT1jVE7H37kCc10irLozKEvO4O5AjGgY-1XcMhT-XFVfmm0m0FpHhgaj7oNqQU",
    badge: "Popular"
  },
  {
    id: 2,
    name: "E-Commerce Website Theme",
    category: "website-themes",
    categoryDisplay: "Website Template",
    description: "Modern, fully responsive e-commerce template with product pages and checkout.",
    price: 199,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcbSwp6Nv0I7G78Rte5XQKZs29m1d60wXuHFzeBp7VN5SNEYhKIfXrg12wwbO2GCIgL15KFDVMyFTMMcvDjFQ8SBOtm3uwenI4InICVt8ANDPr2uj9n5BzUpZVcY1dSTN0PEfr8SHPKsY2k97L_a2oB14HeANKlScqSujaqTwGUSl1jv4vgkTdGlw_Nkcc4twSxYZT8Ar37D3ahkDW0zKbP69rsB7ju-dAATQRIox2kQnM90n1kJLzXBIQF8CDg6IijaTTf2Th6FQ",
    badge: "New"
  },
  {
    id: 3,
    name: "SaaS Landing Page Bundle",
    category: "landing-pages",
    categoryDisplay: "Landing Page",
    description: "5 professional SaaS landing page templates ready to customize.",
    price: 89,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBWJmPu9g2U01erXAjQLF-k8XPZM0WmGLbyeOu9hbfWgCRQ2PjJxkTDOqHmAZSbCiExVv2OCCX6E8kBTARTejKmwMV8VlyqMS5ul-s113ZYZlzO3QPYUD4NFzqpRK-cxHGT0mbnzGJqa1DfErJOkzAezIYq6ig-loQambIyySktElaotts7_W3mNiWW2LcKnWZ5878rU9wSr35vkVV_6lk5fw2iqBcH9nUHbnjuyBOLPY0huW7WG9Z98c7bmqhSm6yY_bASVKpYQ0I",
    badge: "Best Value"
  },
  {
    id: 4,
    name: "React UI Component Library",
    category: "ui-components",
    categoryDisplay: "UI Components",
    description: "50+ accessible React components with TypeScript support and dark mode.",
    price: 120,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABd0DQvwk1DOFWvDKpkVTyCxTwrDx8LVImS_5eRgLcXNo9wugydHum8tjc4DkNP44oQzBBETHPYybPNHmnJn4EwwZlN81IBzxszqB0UTtRrkJX_pe_qu2y-OqMEEcpy7C--Gczzi0_IfPoq2LolzI7JXlBDnrzY3v7CVIcvrejHyRICHE7A7NIKIYA6oCOWtgrTIcCoidW3ctou82RkRT522lK2KRczRUKoiRPJ9_pyZw4xJ81ATJgq8ntv9fSIWIffQfpc3c1f88"
  },
  {
    id: 5,
    name: "Marketing Integration Pack",
    category: "integrations",
    categoryDisplay: "Marketing Tools",
    description: "Connect email, analytics, CRM, and automation tools seamlessly.",
    price: 49,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB1KFvXs0VomoKcCdFONNVBt5clYogC_kGKv9c-y2Q94AirD11ylZjJauOnh_VfYJVNYBajnWHsDi_nw_szF9QrsZXRfsiGd8LzH41ywH8ZFJ_psCYtgs0b85sovjj5TT7t4EK1yV5YfKIavoWiJKXt9SSTkb-3zdDCmHRgSHOeGWqRrP37Os5T42QQ0kGAZgJB35wddhFT8rjxv-whYUqrF1AOU2i0Jdozo-V18m3TDwa8tGopI6rMTaU0RYi0O_GxYcxgQpwwYwo"
  },
  {
    id: 6,
    name: "Portfolio Website Theme",
    category: "website-themes",
    categoryDisplay: "Website Template",
    description: "Stunning portfolio template for designers, developers, and creatives.",
    price: 79,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCTQG9gsXSMPciye6f8WwU7c8clY2AIn8FS3VIjDe9HmTurv8qQHesNuef1VMC1hJdvA0AzGC1xlMlqpE9XZCUSPG-KNuMY5fAooEdRCHoVB71s3yNfdIJe3T-OjXXceW5n8KDx0I7Lw-PC6JqzkxhCqI8MYviyu66bh5QlHklhuR_dNwfsX-3PvOGV_W_leR3WrXof4hBz5yTtOiiBRK8niE0A3u5dfckCh0aFoWmtlw4BvWVlsUUdDRMMIFSv4_CeE6uJYlyyT0U"
  }
];

// ---- State ----
let filteredProducts = [...products];
let currentSort = 'newest';

// ---- Elements ----
const productGrid = document.getElementById('product-grid');
const productCount = document.getElementById('product-count');
const sortSelect = document.getElementById('sort-select');
const applyFiltersBtn = document.getElementById('apply-filters');
const clearFiltersBtn = document.getElementById('clear-filters');
const cartBadge = document.getElementById('cartBadge');

// ---- Render Products ----
function renderProducts() {
  if (filteredProducts.length === 0) {
    productGrid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 2rem;">
        <i class="fa-solid fa-search" style="font-size: 3rem; color: var(--muted); margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">No products found</h3>
        <p style="color: var(--muted);">Try adjusting your filters or search criteria</p>
        <button class="btn btn-primary" onclick="clearFilters()" style="margin-top: 1.5rem;">Reset Filters</button>
      </div>
    `;
    productCount.textContent = '0';
    return;
  }

  productGrid.innerHTML = filteredProducts.map(product => `
    <article class="product-card" data-id="${product.id}">
      <div class="product-image" style="background-image: url('${product.image}')">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
      </div>
      <div class="product-body">
        <div class="product-category">${product.categoryDisplay}</div>
        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <div class="product-price">$${product.price.toFixed(2)}</div>
        <div class="product-actions">
          <button class="btn-add-cart" onclick="addToCart(${product.id})">
            <i class="fa-solid fa-cart-plus"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  `).join('');

  productCount.textContent = filteredProducts.length;
}

// ---- Add to Cart ----
function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  // Get cart from localStorage
  let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Check if product already in cart
  const existingItem = cartItems.find(item => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
    alert(`${product.name} quantity updated!`);
  } else {
    cartItems.push({
      id: product.id,
      name: product.name,
      category: product.categoryDisplay,
      price: product.price,
      image: product.image,
      quantity: 1
    });
    alert(`${product.name} added to cart!`);
  }

  // Save to localStorage
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Update cart badge
  updateCartBadge();
}

// Update cart count
function updateCartBadge() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartBadgeElement = document.getElementById('cartBadge');
    if (cartBadgeElement) {
        cartBadgeElement.textContent = totalItems;
    }
}

// ---- Apply Filters ----
function applyFilters() {
  const categoryFilters = Array.from(
    document.querySelectorAll('input[data-filter="category"]:checked')
  ).map(cb => cb.value);

  const priceFilters = Array.from(
    document.querySelectorAll('input[data-filter="price"]:checked')
  ).map(cb => cb.value);

  filteredProducts = products.filter(product => {
    // Category filter
    const categoryMatch = categoryFilters.length === 0 || 
      categoryFilters.includes(product.category);

    // Price filter
    let priceMatch = priceFilters.length === 0;
    if (!priceMatch) {
      for (const range of priceFilters) {
        if (range === '0-50' && product.price < 50) priceMatch = true;
        if (range === '50-100' && product.price >= 50 && product.price <= 100) priceMatch = true;
        if (range === '100-200' && product.price > 100 && product.price <= 200) priceMatch = true;
        if (range === '200+' && product.price > 200) priceMatch = true;
      }
    }

    return categoryMatch && priceMatch;
  });

  sortProducts();
  renderProducts();
}

// ---- Clear Filters ----
function clearFilters() {
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.checked = false;
  });

  filteredProducts = [...products];
  sortProducts();
  renderProducts();
}

// ---- Sort Products ----
function sortProducts() {
  switch (currentSort) {
    case 'newest':
      filteredProducts.reverse();
      break;
    case 'popular':
      filteredProducts.sort((a, b) => (b.badge ? 1 : 0) - (a.badge ? 1 : 0));
      break;
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
  }
}

// ---- Event Listeners ----
if (applyFiltersBtn) {
  applyFiltersBtn.addEventListener('click', applyFilters);
}

if (clearFiltersBtn) {
  clearFiltersBtn.addEventListener('click', clearFilters);
}

if (sortSelect) {
  sortSelect.addEventListener('change', (e) => {
    currentSort = e.target.value;
    sortProducts();
    renderProducts();
  });
}

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartBadge();
});

// Navigation menu handlers
const menu = document.getElementById("menu");

function toggleMenu() {
    menu.classList.toggle("open");
}

function closeMenu() {
    menu.classList.remove("open");
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.querySelector('.nav');
    const menuBtn = document.querySelector('.menuBtn');
    
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

// ====================================
// ACTIVE MENU LINK HIGHLIGHTING
// ====================================

document.addEventListener('DOMContentLoaded', () => {
    // Get current page URL
    const currentPage = window.location.pathname;
    
    // Get all menu links
    const menuLinks = document.querySelectorAll('.menu a');
    
    menuLinks.forEach(link => {
        // Get the href attribute
        const linkPath = link.getAttribute('href');
        
        // Check if current page matches the link
        if (currentPage.includes(linkPath) && linkPath !== '#') {
            link.classList.add('active');
        }
        
        // Special case for homepage sections (features, pricing, etc.)
        if (currentPage.includes('homepage.html') && linkPath.startsWith('#')) {
            // Highlight based on scroll position or hash
            if (window.location.hash === linkPath) {
                link.classList.add('active');
            }
        }
    });
    
    // Handle hash changes for homepage sections
    window.addEventListener('hashchange', () => {
        menuLinks.forEach(link => {
            if (link.getAttribute('href').startsWith('#')) {
                link.classList.remove('active');
            }
        });
        
        const currentHash = window.location.hash;
        menuLinks.forEach(link => {
            if (link.getAttribute('href') === currentHash) {
                link.classList.add('active');
            }
        });
    });
});