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

// ====================================
// LAUNCHPOINT - PRODUCT DETAIL
// ====================================

// Products Database (MATCHING HOMEPAGE FEATURES EXACTLY)
const productsDatabase = {
    1: {
        id: 1,
        name: 'Landing Page Templates',
        category: 'UI Kits & Templates',
        price: 79,
        seller: 'Tech Innovators Inc.',
        sellerInitials: 'TI',
        rating: 4.8,
        reviews: 24,
        sales: 487,
        dateAdded: '2024-10-26',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=450&fit=crop',
        icon: 'fa-file-lines',
        screenshots: [
            { id: 1, title: 'Homepage Design', icon: 'fa-house' },
            { id: 2, title: 'Features Section', icon: 'fa-star' },
            { id: 3, title: 'Contact Page', icon: 'fa-envelope' }
        ],
        description: `
            <p>Professionally designed landing page layouts you can customize in minutes, not hours. Perfect for startups, businesses, and creators who want to launch fast without compromising on quality.</p>
            
            <p>Our templates are built with modern web standards, fully responsive, and optimized for conversions. Each template includes multiple page variants, reusable components, and comprehensive documentation.</p>
            
            <h4>What's Included:</h4>
            <ul>
                <li>10+ professionally designed landing page templates</li>
                <li>50+ reusable UI components and sections</li>
                <li>Fully responsive design for all devices</li>
                <li>Clean, well-documented HTML/CSS/JS code</li>
                <li>Lifetime updates and premium support</li>
            </ul>
        `,
        features: [
            { icon: 'fa-bolt', title: 'Lightning Fast', description: 'Optimized for speed with 95+ PageSpeed scores' },
            { icon: 'fa-mobile-screen', title: 'Fully Responsive', description: 'Beautiful on desktop, tablet, and mobile' },
            { icon: 'fa-code', title: 'Clean Code', description: 'Well-structured and easy to customize' },
            { icon: 'fa-paintbrush', title: 'Easy Customization', description: 'Change colors, fonts, and content easily' }
        ],
        files: [
            { name: 'landing-templates.zip', type: 'Template Pack', size: '24.5 MB', icon: 'fa-file-zipper' },
            { name: 'documentation.pdf', type: 'User Guide', size: '4.2 MB', icon: 'fa-file-pdf' }
        ]
    },
    2: {
        id: 2,
        name: 'Branding Tools',
        category: 'Design & Branding',
        price: 149,
        seller: 'Creative Scripts Co.',
        sellerInitials: 'CS',
        rating: 4.9,
        reviews: 31,
        sales: 298,
        dateAdded: '2024-09-15',
        image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=450&fit=crop',
        icon: 'fa-palette',
        screenshots: [
            { id: 1, title: 'Logo Builder', icon: 'fa-copyright' },
            { id: 2, title: 'Color Palettes', icon: 'fa-palette' },
            { id: 3, title: 'Brand Guide', icon: 'fa-book' }
        ],
        description: `
            <p>Create a consistent brand identity with our comprehensive branding toolkit. Includes everything you need to establish a professional and memorable brand presence across all platforms.</p>
            
            <p>From logo design to color palettes, typography systems, and brand guidelines - everything is included to help you build a cohesive visual identity that resonates with your audience.</p>
            
            <h4>Toolkit Includes:</h4>
            <ul>
                <li>Logo creator with 100+ customizable templates</li>
                <li>50+ professional color palette combinations</li>
                <li>Typography pairing guide with web-safe fonts</li>
                <li>Brand style guide templates</li>
                <li>Social media branding kit (covers, banners, posts)</li>
            </ul>
        `,
        features: [
            { icon: 'fa-swatchbook', title: 'Color Systems', description: 'Pre-designed professional color palettes' },
            { icon: 'fa-font', title: 'Typography', description: 'Perfect font pairings and hierarchies' },
            { icon: 'fa-image', title: 'Visual Assets', description: 'Icons, patterns, and design elements' },
            { icon: 'fa-book-open', title: 'Brand Guidelines', description: 'Complete brand documentation templates' }
        ],
        files: [
            { name: 'branding-toolkit.zip', type: 'Complete Kit', size: '156 MB', icon: 'fa-file-zipper' },
            { name: 'brand-guide-template.pdf', type: 'Template', size: '8.3 MB', icon: 'fa-file-pdf' }
        ]
    },
    3: {
        id: 3,
        name: 'Marketing Integrations',
        category: 'Scripts & Code',
        price: 99,
        seller: 'AI Solutions Hub',
        sellerInitials: 'AS',
        rating: 4.7,
        reviews: 45,
        sales: 521,
        dateAdded: '2024-08-20',
        image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&h=450&fit=crop',
        icon: 'fa-plug',
        screenshots: [
            { id: 1, title: 'Email Integration', icon: 'fa-envelope' },
            { id: 2, title: 'Analytics Setup', icon: 'fa-chart-line' },
            { id: 3, title: 'CRM Connect', icon: 'fa-users' }
        ],
        description: `
            <p>Connect your website with all your favorite marketing tools seamlessly. Our integration scripts make it easy to connect email marketing platforms, analytics tools, CRM systems, and more.</p>
            
            <p>No coding experience required - simple copy-paste integration code with visual documentation. Works with all major platforms and services out of the box.</p>
            
            <h4>Supported Integrations:</h4>
            <ul>
                <li>Email Marketing: Mailchimp, ConvertKit, ActiveCampaign</li>
                <li>Analytics: Google Analytics, Mixpanel, Plausible</li>
                <li>CRM: HubSpot, Salesforce, Pipedrive</li>
                <li>Social Media: Facebook Pixel, Twitter Ads, LinkedIn</li>
                <li>Live Chat: Intercom, Drift, Crisp</li>
            </ul>
        `,
        features: [
            { icon: 'fa-link', title: 'Easy Connection', description: 'One-click setup for popular platforms' },
            { icon: 'fa-shield-halved', title: 'Secure', description: 'Enterprise-grade security and encryption' },
            { icon: 'fa-gauge-high', title: 'Fast Performance', description: 'Optimized code that doesn\'t slow down your site' },
            { icon: 'fa-headset', title: 'Support Included', description: 'Premium support for all integrations' }
        ],
        files: [
            { name: 'integration-scripts.zip', type: 'Scripts Pack', size: '12.8 MB', icon: 'fa-file-zipper' },
            { name: 'integration-guide.pdf', type: 'Setup Guide', size: '5.1 MB', icon: 'fa-file-pdf' }
        ]
    },
    4: {
        id: 4,
        name: 'Lead Generation',
        category: 'Marketing Tools',
        price: 89,
        seller: 'Web Wizards',
        sellerInitials: 'WW',
        rating: 4.8,
        reviews: 67,
        sales: 634,
        dateAdded: '2024-07-10',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
        icon: 'fa-bullseye',
        screenshots: [
            { id: 1, title: 'Form Builder', icon: 'fa-file-lines' },
            { id: 2, title: 'Pop-up Designer', icon: 'fa-window-restore' },
            { id: 3, title: 'CTA Templates', icon: 'fa-hand-pointer' }
        ],
        description: `
            <p>Capture more customers with our comprehensive lead generation toolkit. Includes high-converting forms, strategic pop-ups, compelling CTAs, and landing page sections designed to maximize conversions.</p>
            
            <p>Every element is tested and optimized for conversion rates. Includes A/B testing templates, analytics integration, and best practices documentation.</p>
            
            <h4>Lead Gen Tools:</h4>
            <ul>
                <li>30+ customizable form templates (contact, newsletter, quiz)</li>
                <li>20+ pop-up designs (exit-intent, time-based, scroll-based)</li>
                <li>50+ CTA button styles and placements</li>
                <li>Lead magnet templates (ebooks, checklists, webinars)</li>
                <li>Email autoresponder templates</li>
            </ul>
        `,
        features: [
            { icon: 'fa-chart-line', title: 'High Converting', description: 'Tested designs with proven conversion rates' },
            { icon: 'fa-sliders', title: 'Customizable', description: 'Fully editable to match your brand' },
            { icon: 'fa-mobile', title: 'Mobile Optimized', description: 'Perfect on all screen sizes' },
            { icon: 'fa-envelope-open-text', title: 'Email Ready', description: 'Integrates with all email platforms' }
        ],
        files: [
            { name: 'lead-gen-kit.zip', type: 'Complete Toolkit', size: '18.4 MB', icon: 'fa-file-zipper' },
            { name: 'conversion-guide.pdf', type: 'Best Practices', size: '6.7 MB', icon: 'fa-file-pdf' }
        ]
    },
    5: {
        id: 5,
        name: 'SEO & Performance',
        category: 'Optimization Tools',
        price: 129,
        seller: 'Code Masters Studio',
        sellerInitials: 'CM',
        rating: 4.9,
        reviews: 89,
        sales: 743,
        dateAdded: '2024-06-05',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
        icon: 'fa-bolt',
        screenshots: [
            { id: 1, title: 'SEO Optimizer', icon: 'fa-magnifying-glass' },
            { id: 2, title: 'Speed Tools', icon: 'fa-gauge-high' },
            { id: 3, title: 'Analytics', icon: 'fa-chart-bar' }
        ],
        description: `
            <p>Supercharge your website's search rankings and loading speed with our comprehensive SEO and performance optimization toolkit. Get found on Google and keep visitors engaged with lightning-fast page loads.</p>
            
            <p>Includes automated SEO optimization scripts, performance monitoring tools, image compression utilities, and comprehensive guides to rank higher in search results.</p>
            
            <h4>Optimization Tools:</h4>
            <ul>
                <li>Automated meta tag optimization and generation</li>
                <li>Structured data (Schema.org) implementation</li>
                <li>Image optimization and lazy loading scripts</li>
                <li>Code minification and bundling tools</li>
                <li>Performance monitoring dashboard</li>
            </ul>
        `,
        features: [
            { icon: 'fa-rocket', title: 'Lightning Fast', description: '95+ PageSpeed scores guaranteed' },
            { icon: 'fa-ranking-star', title: 'SEO Optimized', description: 'Rank higher in search results' },
            { icon: 'fa-compress', title: 'Auto Compression', description: 'Optimize images and code automatically' },
            { icon: 'fa-chart-simple', title: 'Analytics', description: 'Track performance and SEO metrics' }
        ],
        files: [
            { name: 'seo-performance-kit.zip', type: 'Scripts & Tools', size: '8.9 MB', icon: 'fa-file-zipper' },
            { name: 'seo-checklist.pdf', type: 'Optimization Guide', size: '3.4 MB', icon: 'fa-file-pdf' }
        ]
    },
    6: {
        id: 6,
        name: 'E-Commerce Ready',
        category: 'E-Commerce Solutions',
        price: 199,
        seller: 'Digital Marketplace Pro',
        sellerInitials: 'DM',
        rating: 4.8,
        reviews: 52,
        sales: 412,
        dateAdded: '2024-05-15',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=450&fit=crop',
        icon: 'fa-bag-shopping',
        screenshots: [
            { id: 1, title: 'Product Pages', icon: 'fa-box' },
            { id: 2, title: 'Shopping Cart', icon: 'fa-cart-shopping' },
            { id: 3, title: 'Checkout Flow', icon: 'fa-credit-card' }
        ],
        description: `
            <p>Launch your online store with our complete e-commerce template package. Includes beautiful product pages, smooth checkout experiences, shopping cart functionality, and everything you need to sell online.</p>
            
            <p>Fully integrated with major payment gateways (Stripe, PayPal, Square) and shipping providers. Mobile-optimized for maximum conversions on all devices.</p>
            
            <h4>E-Commerce Features:</h4>
            <ul>
                <li>Complete product catalog and detail pages</li>
                <li>Shopping cart with real-time updates</li>
                <li>Secure checkout flow (1-page and multi-step)</li>
                <li>Payment gateway integration scripts</li>
                <li>Order management dashboard</li>
                <li>Inventory tracking system</li>
            </ul>
        `,
        features: [
            { icon: 'fa-credit-card', title: 'Payment Ready', description: 'Stripe, PayPal, Square integrated' },
            { icon: 'fa-lock', title: 'Secure', description: 'SSL and PCI compliant checkout' },
            { icon: 'fa-mobile-screen-button', title: 'Mobile First', description: 'Optimized for mobile shopping' },
            { icon: 'fa-box-open', title: 'Inventory System', description: 'Track stock and manage orders' }
        ],
        files: [
            { name: 'ecommerce-complete.zip', type: 'Full Package', size: '45.2 MB', icon: 'fa-file-zipper' },
            { name: 'setup-guide.pdf', type: 'Installation Guide', size: '12.8 MB', icon: 'fa-file-pdf' }
        ]
    }
};

// Current product
let currentProduct = null;
let selectedLicense = 'regular';

// Get product ID from URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id') || '1';
}

// Load product
function loadProduct() {
    const productId = getProductIdFromURL();
    currentProduct = productsDatabase[productId] || productsDatabase[1];
    return currentProduct;
}

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Get current price based on license
function getCurrentPrice() {
    return selectedLicense === 'extended' ? currentProduct.price * 3 : currentProduct.price;
}

// Update page content
function updatePageContent() {
    document.getElementById('productTitle').textContent = currentProduct.name;
    document.getElementById('breadcrumbCategory').textContent = currentProduct.category;
    document.getElementById('breadcrumbProduct').textContent = currentProduct.name;
    document.getElementById('sellerName').textContent = currentProduct.seller;
    document.getElementById('productRating').textContent = currentProduct.rating;
    document.getElementById('reviewCount').textContent = currentProduct.reviews;
    document.getElementById('downloadCount').textContent = currentProduct.sales;
    document.getElementById('productPrice').textContent = formatCurrency(currentProduct.price);
    document.getElementById('productCategoryInfo').textContent = currentProduct.category;
    document.getElementById('productDate').textContent = formatDate(currentProduct.dateAdded);
    document.getElementById('sellerNameCard').textContent = currentProduct.seller;
    document.getElementById('sellerAvatar').textContent = currentProduct.sellerInitials;
    
    // Update license select options
    const licenseSelect = document.getElementById('licenseSelect');
    if (licenseSelect) {
        licenseSelect.innerHTML = `
            <option value="regular">Regular License - ${formatCurrency(currentProduct.price)}</option>
            <option value="extended">Extended License - ${formatCurrency(currentProduct.price * 3)}</option>
        `;
    }
    
    document.title = `${currentProduct.name} - LaunchPoint`;
}

// Render screenshots
function renderScreenshots() {
    const mainImage = document.getElementById('mainImage');
    const thumbnailsContainer = document.getElementById('thumbnails');
    
    mainImage.innerHTML = `<i class="fa-solid ${currentProduct.screenshots[0].icon}" style="font-size: 4rem;"></i>`;
    
    thumbnailsContainer.innerHTML = currentProduct.screenshots.map((screenshot, index) => `
        <div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
            <i class="fa-solid ${screenshot.icon}"></i>
        </div>
    `).join('');
    
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            mainImage.innerHTML = `<i class="fa-solid ${currentProduct.screenshots[index].icon}" style="font-size: 4rem;"></i>`;
        });
    });
}

// Render description
function renderDescription() {
    document.getElementById('productDescription').innerHTML = currentProduct.description;
}

// Render features
function renderFeatures() {
    const container = document.getElementById('productFeatures');
    container.innerHTML = currentProduct.features.map(feature => `
        <div class="feature-card">
            <div class="feature-icon">
                <i class="fa-solid ${feature.icon}"></i>
            </div>
            <div class="feature-content">
                <h5>${feature.title}</h5>
                <p>${feature.description}</p>
            </div>
        </div>
    `).join('');
}

// Render files
function renderFiles() {
    const container = document.getElementById('productFiles');
    container.innerHTML = currentProduct.files.map(file => `
        <div class="file-card">
            <i class="fa-solid ${file.icon} file-icon"></i>
            <div class="file-content">
                <div class="file-name">${file.name}</div>
                <div class="file-meta">${file.type} • ${file.size}</div>
            </div>
        </div>
    `).join('');
}

// Tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        
        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// License selector
const licenseSelect = document.getElementById('licenseSelect');
if (licenseSelect) {
    licenseSelect.addEventListener('change', function() {
        selectedLicense = this.value;
        const price = getCurrentPrice();
        document.getElementById('productPrice').textContent = formatCurrency(price);
        
        const licenseInfo = document.querySelector('.license-info');
        if (licenseInfo) {
            if (selectedLicense === 'extended') {
                licenseInfo.innerHTML = '<i class="fa-solid fa-circle-info"></i> Extended license for unlimited projects';
            } else {
                licenseInfo.innerHTML = '<i class="fa-solid fa-circle-info"></i> Regular license for single project';
            }
        }
    });
}

// ====================================
// CART 
// ====================================

// Update cart count
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Buy now
const buyNowBtn = document.getElementById('buyNowBtn');
if (buyNowBtn) {
    buyNowBtn.addEventListener('click', function() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        
        const existingItem = cartItems.find(item => 
            item.id === currentProduct.id && item.license === selectedLicense
        );
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cartItems.push({
                id: currentProduct.id,
                name: currentProduct.name,
                price: getCurrentPrice(),
                image: currentProduct.image,
                category: currentProduct.category,
                license: selectedLicense,
                quantity: 1
            });
        }
        
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fa-solid fa-check"></i> Redirecting...';
        this.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        setTimeout(() => {
            window.location.href = '/checkout.html';
        }, 800);
    });
}

// Add to cart
const addToCartBtn = document.getElementById('addToCartBtn');
if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function() {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        
        const existingItem = cartItems.find(item => 
            item.id === currentProduct.id && item.license === selectedLicense
        );
        
        if (existingItem) {
            existingItem.quantity += 1;
            
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fa-solid fa-check"></i> Quantity Updated!';
            this.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            this.style.color = 'white';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '';
                this.style.color = '';
            }, 2000);
        } else {
            cartItems.push({
                id: currentProduct.id,
                name: currentProduct.name,
                price: getCurrentPrice(),
                image: currentProduct.image,
                category: currentProduct.category,
                license: selectedLicense,
                quantity: 1
            });
            
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fa-solid fa-check"></i> Added to Cart!';
            this.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            this.style.color = 'white';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '';
                this.style.color = '';
            }, 2000);
        }
        
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        updateCartCount();
        alert(`Added "${currentProduct.name}" to cart!`);
    });
}

// Cart button
const cartBtn = document.getElementById('cartBtn');
if (cartBtn) {
    cartBtn.addEventListener('click', function() {
        window.location.href = '/cart.html';
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProduct();
    updatePageContent();
    renderScreenshots();
    renderDescription();
    renderFeatures();
    renderFiles();
    updateCartCount();
    
    console.log('Product detail page loaded');
    console.log('Current Product:', currentProduct.name);
});