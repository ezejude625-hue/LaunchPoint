// ====================================== //
// LAUNCHPOINT - USER PRODUCT DETAIL PAGE //
// ====================================== //

// All Available Products (matching homepage features)
const allProducts = {
    1: {
        id: 1,
        name: 'Landing Page Templates',
        category: 'UI Kits & Templates',
        price: 79.00,
        seller: 'Tech Innovators Inc.',
        sellerInitials: 'TI',
        rating: 4.8,
        reviews: 24,
        sales: 487,
        dateAdded: '2024-10-26',
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
        category: 'UI Kits & Templates',
        price: 149.00,
        seller: 'Creative Scripts Co.',
        sellerInitials: 'CS',
        rating: 4.9,
        reviews: 31,
        sales: 298,
        dateAdded: '2024-09-15',
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
        price: 99.00,
        seller: 'AI Solutions Hub',
        sellerInitials: 'AS',
        rating: 4.7,
        reviews: 45,
        sales: 521,
        dateAdded: '2024-08-20',
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
        category: 'UI Kits & Templates',
        price: 89.00,
        seller: 'Web Wizards',
        sellerInitials: 'WW',
        rating: 4.8,
        reviews: 67,
        sales: 634,
        dateAdded: '2024-07-10',
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
        category: 'Scripts & Code',
        price: 129.00,
        seller: 'Code Masters Studio',
        sellerInitials: 'CM',
        rating: 4.9,
        reviews: 89,
        sales: 743,
        dateAdded: '2024-06-05',
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
        category: 'UI Kits & Templates',
        price: 199.00,
        seller: 'Digital Marketplace Pro',
        sellerInitials: 'DM',
        rating: 4.8,
        reviews: 52,
        sales: 412,
        dateAdded: '2024-05-15',
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
let cart = JSON.parse(localStorage.getItem('launchpoint_cart') || '[]');
let selectedLicense = 'regular';

// Get product ID from URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load product
function loadProduct() {
    const productId = getProductIdFromURL();
    
    if (productId && allProducts[productId]) {
        currentProduct = allProducts[productId];
    } else {
        // Check localStorage
        const stored = localStorage.getItem('launchpoint_user_product');
        if (stored) {
            const storedProduct = JSON.parse(stored);
            currentProduct = allProducts[storedProduct.id] || allProducts[1];
        } else {
            currentProduct = allProducts[1];
        }
    }
    
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
    document.getElementById('reviewRatingScore').textContent = currentProduct.rating;
    document.getElementById('reviewTotalCount').textContent = currentProduct.reviews;
    
    // Update license select options
    const licenseSelect = document.getElementById('licenseSelect');
    if (licenseSelect) {
        licenseSelect.innerHTML = `
            <option value="regular">Regular License - ${formatCurrency(currentProduct.price)}</option>
            <option value="extended">Extended License - ${formatCurrency(currentProduct.price * 3)}</option>
        `;
    }
    
    // Update document title
    document.title = `${currentProduct.name} - LaunchPoint`;
}

// Render screenshots with Font Awesome icons
function renderScreenshots() {
    const mainImage = document.getElementById('mainImage');
    const thumbnailsContainer = document.getElementById('thumbnails');
    
    // Set first screenshot icon as main
    mainImage.innerHTML = `<i class="fa-solid ${currentProduct.screenshots[0].icon}" style="font-size: 5rem; color: white;"></i>`;
    
    // Render thumbnails with icons
    thumbnailsContainer.innerHTML = currentProduct.screenshots.map((screenshot, index) => `
        <div class="thumbnail ${index === 0 ? 'active' : ''}" data-index="${index}">
            <i class="fa-solid ${screenshot.icon}"></i>
        </div>
    `).join('');
    
    // Add click listeners
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.addEventListener('click', function() {
            const index = parseInt(this.getAttribute('data-index'));
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            mainImage.innerHTML = `<i class="fa-solid ${currentProduct.screenshots[index].icon}" style="font-size: 5rem; color: white;"></i>`;
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

// Update cart count
function updateCartCount() {
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
    }
}

// Get current price based on license
function getCurrentPrice() {
    return selectedLicense === 'extended' ? currentProduct.price * 3 : currentProduct.price;
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
        
        // Update license info text
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

// Buy now - Navigate to checkout
const buyNowBtn = document.getElementById('buyNowBtn');
if (buyNowBtn) {
    buyNowBtn.addEventListener('click', function() {
        // Create cart item with current license
        const cartItem = {
            id: currentProduct.id,
            name: currentProduct.name,
            price: getCurrentPrice(),
            category: currentProduct.category,
            license: selectedLicense,
            icon: currentProduct.icon
        };
        
        // Clear cart and add this item
        cart = [cartItem];
        localStorage.setItem('launchpoint_cart', JSON.stringify(cart));
        
        // Show success message with animation
        const originalText = this.innerHTML;
        this.innerHTML = '<i class="fa-solid fa-check"></i> Redirecting to Checkout...';
        this.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        
        // Redirect after short delay
        setTimeout(() => {
            window.location.href = 'checkout.html';
        }, 800);
    });
}

// Add to cart
const addToCartBtn = document.getElementById('addToCartBtn');
if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function() {
        // Check if item already exists
        const existingIndex = cart.findIndex(item => 
            item.id === currentProduct.id && item.license === selectedLicense
        );
        
        if (existingIndex !== -1) {
            // Item already in cart
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fa-solid fa-check"></i> Already in Cart!';
            this.style.borderColor = '#f59e0b';
            this.style.color = '#f59e0b';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.borderColor = '';
                this.style.color = '';
            }, 2000);
        } else {
            // Add to cart
            const cartItem = {
                id: currentProduct.id,
                name: currentProduct.name,
                price: getCurrentPrice(),
                category: currentProduct.category,
                license: selectedLicense,
                icon: currentProduct.icon
            };
            
            cart.push(cartItem);
            localStorage.setItem('launchpoint_cart', JSON.stringify(cart));
            updateCartCount();
            
            // Success feedback with animation
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fa-solid fa-check"></i> Added to Cart!';
            this.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            this.style.color = 'white';
            this.style.borderColor = '#10b981';
            
            setTimeout(() => {
                this.innerHTML = originalText;
                this.style.background = '';
                this.style.color = '';
                this.style.borderColor = '';
            }, 2000);
        }
    });
}

// Cart button
const cartBtn = document.getElementById('cartBtn');
if (cartBtn) {
    cartBtn.addEventListener('click', function() {
        window.location.href = 'cart.html';
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
    
    console.log('Product detail page initialized');
    console.log('Current Product:', currentProduct.name);
    console.log('Cart Items:', cart.length);
});