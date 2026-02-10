// ====================================
// LAUNCHPOINT - HOMEPAGE
// ====================================

// ---- Smooth Scroll for Navigation Links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            const menuCheckbox = document.getElementById('menu');
            if (menuCheckbox) {
                menuCheckbox.checked = false;
            }
        }
    });
});

// ================== //
// MOBILE MENU TOGGLE //
// ================== //

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


// ---- Scroll Animation Observer ----
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ---- Button Hover Effects ----
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        if (!this.disabled) {
            this.style.transform = 'translateY(-2px)';
        }
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ---- Update Cart Badge ----
function updateCartBadge() {
    const cartBadge = document.getElementById('cart-badge');
    if (cartBadge) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
        
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
}

// ---- Pricing Plan Selection ----
document.querySelectorAll('.pricing-card .btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const planName = this.closest('.pricing-card').querySelector('.plan-header h3').textContent;
        const planPrice = this.closest('.pricing-card').querySelector('.price').textContent;
        
        // Show alert with plan selection
        if (this.textContent.includes('Contact')) {
            alert(`Thank you for your interest in the ${planName} plan!\n\nOur sales team will contact you shortly to discuss your needs.`);
        } else {
            alert(`Starting your ${planName} plan trial!\n\nPrice: ${planPrice}/month\n\nYou'll get 14 days free access to all features.`);
        }
    });
});

// ---- CTA Button Actions ----
document.querySelectorAll('.cta .btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent.includes('Start Building')) {
            alert('Welcome to LaunchPoint!\n\nRedirecting you to get started...');
            // In production: window.location.href = 'signup.html';
        } else if (this.textContent.includes('Demo')) {
            alert('Schedule a Demo\n\nOur team will reach out to schedule a personalized demo for you!');
            // In production: window.location.href = 'schedule-demo.html';
        }
    });
});

// ---- Hero CTA Buttons ----
document.querySelectorAll('.hero .btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (this.textContent.includes('Start Building')) {
            alert('Let\'s get you started!\n\nRedirecting to sign up...');
            // In production: window.location.href = 'signup.html';
        } else if (this.textContent.includes('Watch Demo')) {
            alert('Demo Video\n\nThis would play a product demo video.');
            // In production: Open video modal or redirect to demo page
        }
    });
});

// ---- Testimonial Carousel (Optional Enhancement) ----
// You can add a simple auto-scroll feature for testimonials
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
    if (testimonials.length > 0 && window.innerWidth < 768) {
        // Only rotate on mobile
        testimonials.forEach((testimonial, index) => {
            testimonial.style.display = index === currentTestimonial ? 'block' : 'none';
        });
        
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    } else {
        // Show all on desktop
        testimonials.forEach(testimonial => {
            testimonial.style.display = 'block';
        });
    }
}

// ---- Header Scroll Effect ----
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Add shadow when scrolled
    if (currentScroll > 0) {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
    
    lastScroll = currentScroll;
});

// ---- Stats Counter Animation ----
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = formatNumber(target);
            clearInterval(timer);
        } else {
            element.textContent = formatNumber(Math.floor(current));
        }
    }, 16);
}

function formatNumber(num) {
    if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'k+';
    }
    return num + '%';
}

// Trigger counter animation when stats section is visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            
            statNumbers.forEach(stat => {
                const text = stat.textContent;
                let target;
                
                if (text.includes('k')) {
                    target = parseFloat(text) * 1000;
                } else if (text.includes('%')) {
                    target = parseFloat(text);
                } else {
                    target = parseFloat(text);
                }
                
                stat.textContent = '0';
                setTimeout(() => animateCounter(stat, target), 200);
            });
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ---- Floating Badges Animation Enhancement ----
document.querySelectorAll('.floating-badge').forEach((badge, index) => {
    badge.style.animationDelay = `${index * 0.5}s`;
});

// ---- Form Validation (if you add a newsletter signup) ----
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ---- Mobile Menu Close on Resize ----
window.addEventListener('resize', () => {
    if (window.innerWidth > 838) {
        const menuCheckbox = document.getElementById('menu');
        if (menuCheckbox) {
            menuCheckbox.checked = false;
        }
    }
});

// ---- Prevent Horizontal Scroll ----
document.body.style.overflowX = 'hidden';

// ---- Performance: Lazy Load Images ----
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ---- Easter Egg: Konami Code ----
let konamiCode = [];
const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiPattern.join(',')) {
        // Easter egg activated!
        alert('KONAMI CODE ACTIVATED!\n\nYou found the secret! Enjoy 50% off your first month with code: KONAMI50');
        konamiCode = [];
    }
});

// ---- Console Welcome Message ----
console.log('%cWelcome to LaunchPoint!', 'font-size: 20px; font-weight: bold; color: #4169E1;');
console.log('%cBuilt using modern web technologies', 'font-size: 12px; color: #17A2B8;');
console.log('%cInterested in joining our team? Email us at careers@launchpoint.com', 'font-size: 12px; color: #6b7280;');

// ---- Initialize Everything on DOM Load ----
document.addEventListener('DOMContentLoaded', () => {
    // Update cart badge if exists
    updateCartBadge();
    
    // Initialize testimonial rotation on mobile
    if (window.innerWidth < 768) {
        setInterval(rotateTestimonials, 5000);
    }
    
    // Add loaded class to body for CSS animations
    document.body.classList.add('loaded');
    
    console.log('LaunchPoint Homepage Loaded Successfully!');
});

// ---- Page Load Performance Tracking ----
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`Page loaded in ${(loadTime / 1000).toFixed(2)} seconds`);
});



// ========================
// PRODUCT NAVIGATION
// ========================

// ====================================
// LAUNCHPOINT - HOMEPAGE TO PRODUCT DETAIL INTEGRATION
// ====================================

// Product data matching the 6 features on homepage
const homepageProducts = {
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

// Navigate to product detail page
function viewProduct(productId) {
    if (homepageProducts[productId]) {
        // Store complete product data in localStorage
        localStorage.setItem('launchpoint_user_product', JSON.stringify(homepageProducts[productId]));
        // Navigate to product detail page
        window.location.href = `product-detail.html?id=${productId}`;
    }
}

// Add this to your existing homepage.js or include it separately
console.log('Homepage products integration loaded - 6 products ready');

// logout button
document.getElementById('logoutBtn')?.addEventListener('click', function() {
    if (confirm('Logout from LaunchPoint?')) {
        localStorage.removeItem('launchpoint_user');
        alert('You have been logged out.');
        window.location.href = '/index.html';
    }
});