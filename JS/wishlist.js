// ====================================
// LAUNCHPOINT - WISHLIST
// ====================================

// ---- Sample Wishlist Data ----
const wishlistData = [
    {
        id: 1,
        name: 'Professional Branding Kit',
        category: 'Branding',
        price: 149,
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=450&fit=crop'
    },
    {
        id: 2,
        name: 'E-Commerce Website Theme',
        category: 'Website',
        price: 199,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop'
    },
    {
        id: 3,
        name: 'SaaS Landing Page Bundle',
        category: 'Landing Page',
        price: 89,
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop'
    },
    {
        id: 4,
        name: 'React UI Component Library',
        category: 'UI Kit',
        price: 120,
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop'
    },
    {
        id: 5,
        name: 'Marketing Integration Pack',
        category: 'Marketing',
        price: 49,
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=450&fit=crop'
    }
];

let wishlistItems = [...wishlistData];

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

// ---- Update Badges ----
function updateBadges() {
    // Update cart badge
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const totalCartItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartBadge = document.getElementById('cartBadge');
    if (cartBadge) {
        cartBadge.textContent = totalCartItems;
        cartBadge.style.display = totalCartItems > 0 ? 'flex' : 'none';
    }
    
    // Update wishlist badge
    const wishlistBadge = document.getElementById('wishlistBadge');
    if (wishlistBadge) {
        wishlistBadge.textContent = wishlistItems.length;
        wishlistBadge.style.display = wishlistItems.length > 0 ? 'flex' : 'none';
    }
    
    // Update wishlist count
    const wishlistCount = document.getElementById('wishlistCount');
    if (wishlistCount) {
        wishlistCount.textContent = wishlistItems.length;
    }
}

// ---- Render Wishlist ----
function renderWishlist() {
    const grid = document.getElementById('productsGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (wishlistItems.length === 0) {
        grid.style.display = 'none';
        emptyState.style.display = 'flex';
        return;
    }
    
    grid.style.display = 'grid';
    emptyState.style.display = 'none';
    
    grid.innerHTML = wishlistItems.map(item => `
        <div class="product-card" data-id="${item.id}">
            <div class="product-image-wrapper">
                <div class="product-image" style="background-image: url('${item.image}')"></div>
                <button class="remove-btn" onclick="removeFromWishlist(${item.id})">
                    <i class="fa-solid fa-heart-circle-xmark"></i>
                </button>
            </div>
            <div class="product-info">
                <span class="product-category">${item.category}</span>
                <h3 class="product-name">${item.name}</h3>
                <div class="product-footer">
                    <span class="product-price">$${item.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                        <i class="fa-solid fa-cart-plus"></i>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    updateBadges();
}

// ---- Remove from Wishlist ----
window.removeFromWishlist = function(itemId) {
    const item = wishlistItems.find(i => i.id === itemId);
    
    if (confirm(`Remove "${item.name}" from wishlist?`)) {
        const card = document.querySelector(`[data-id="${itemId}"]`);
        card.classList.add('removing');
        
        setTimeout(() => {
            wishlistItems = wishlistItems.filter(i => i.id !== itemId);
            renderWishlist();
        }, 300);
    }
};

// ---- Add to Cart ----
window.addToCart = function(itemId) {
    const item = wishlistItems.find(i => i.id === itemId);
    
    // Get existing cart
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    
    // Check if item already in cart
    const existingItem = cartItems.find(i => i.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: 1
        });
    }
    
    // Save to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Show success message
    alert(`Added "${item.name}" to cart!`);
    
    updateBadges();
};

// ---- Move All to Cart ----
document.getElementById('moveAllBtn')?.addEventListener('click', () => {
    if (wishlistItems.length === 0) {
        alert('Your wishlist is empty!');
        return;
    }
    
    if (confirm(`Move all ${wishlistItems.length} items to cart?`)) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        
        wishlistItems.forEach(item => {
            const existingItem = cartItems.find(i => i.id === item.id);
            
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartItems.push({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    image: item.image,
                    quantity: 1
                });
            }
        });
        
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        
        // Animate cards
        const cards = document.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('removing');
            }, index * 100);
        });
        
        setTimeout(() => {
            wishlistItems = [];
            renderWishlist();
            alert(`All items moved to cart!`);
        }, cards.length * 100 + 300);
    }
});

// ---- Clear All ----
document.getElementById('clearAllBtn')?.addEventListener('click', () => {
    if (wishlistItems.length === 0) {
        alert('Your wishlist is already empty!');
        return;
    }
    
    if (confirm(`Remove all ${wishlistItems.length} items from wishlist?`)) {
        const cards = document.querySelectorAll('.product-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('removing');
            }, index * 50);
        });
        
        setTimeout(() => {
            wishlistItems = [];
            renderWishlist();
        }, cards.length * 50 + 300);
    }
});

// ---- Search Wishlist ----
document.getElementById('searchInput')?.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    
    const filtered = wishlistData.filter(item =>
        item.name.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
    );
    
    wishlistItems = filtered;
    renderWishlist();
});

// ---- Cart Button ----
document.getElementById('cartBtn')?.addEventListener('click', () => {
    window.location.href = '/cart.html';
});

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    renderWishlist();
    
    console.log('Wishlist page loaded successfully');
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
