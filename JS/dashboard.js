// ====================================
// LAUNCHPOINT - DASHBOARD
// ====================================

// ---- Load User Data ----
function loadUserData() {
    const userData = JSON.parse(localStorage.getItem('launchpoint_user') || '{}');
    
    if (userData.name) {
        document.getElementById('userName').textContent = userData.name;
        document.getElementById('profileName').textContent = `Welcome, ${userData.name.split(' ')[0]}!`;
    }
    
    // Load avatar
    const savedAvatar = localStorage.getItem('launchpoint_avatar');
    if (savedAvatar) {
        const img1 = document.createElement('img');
        img1.src = savedAvatar;
        document.getElementById('userAvatar').innerHTML = '';
        document.getElementById('userAvatar').appendChild(img1);
        
        const img2 = document.createElement('img');
        img2.src = savedAvatar;
        document.getElementById('profileAvatar').innerHTML = '';
        document.getElementById('profileAvatar').appendChild(img2);
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

// ---- Search Functionality ----
const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        console.log('Searching for:', query);
        // Add your search logic here
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

// ---- Notifications Button ----
document.getElementById('notificationsBtn')?.addEventListener('click', () => {
    alert('Notifications\n\nYou have 3 new notifications:\n\n1. Your order has been shipped\n2. New template available\n3. Welcome to LaunchPoint!');
});

// ---- User Menu ----
document.getElementById('userMenu')?.addEventListener('click', () => {
    const options = [
        'View Profile',
        'Account Settings',
        'My Orders',
        'Log Out'
    ];
    
    // In a real implementation, this would show a dropdown menu
    alert('User Menu\n\n' + options.join('\n'));
});

// ---- Smooth Scroll ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ---- Button Ripple Effect ----
document.querySelectorAll('.btn, .icon-button').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;

        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ---- Initialize Dashboard ----
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    updateCartBadge();
    
    console.log('Dashboard loaded successfully');
});

// ---- Check Authentication ----
function checkAuth() {
    const session = sessionStorage.getItem('launchpoint_session');
    
    if (!session) {
        // User not logged in, redirect to login
        // Uncomment in production:
        // window.location.href = 'login.html';
    }
}

// Uncomment to enable auth check
// checkAuth();

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