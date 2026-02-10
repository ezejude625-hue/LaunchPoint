// LAUNCHPOINT - PRODUCT DETAILS

// All Available LaunchPoint Products
const allProducts = {
    1: {
        id: 1,
        name: 'SaaS Landing Page Template',
        category: 'UI Kits & Templates',
        price: 79.00,
        status: 'published',
        seller: 'Tech Innovators Inc.',
        dateAdded: '2024-10-26',
        slug: 'saas-landing',
        screenshots: [
            { title: 'Homepage Design', description: 'Modern hero section with call-to-action', icon: '🎨' },
            { title: 'Features Section', description: 'Showcase your product features beautifully', icon: '⭐' },
            { title: 'Pricing Tables', description: 'Professional pricing comparison layouts', icon: '💰' }
        ],
        description: `
            <p>Transform your SaaS product launch with our premium landing page template. Designed specifically for modern software-as-a-service businesses, this template combines stunning visuals with conversion-optimized layouts.</p>
            
            <p>Built with the latest web technologies and best practices, this template is fully responsive and optimized for performance. Every section is carefully crafted to guide visitors toward your call-to-action.</p>
            
            <h4>What's Included:</h4>
            <ul>
                <li>7 pre-designed page layouts (Home, Features, Pricing, About, Blog, Contact, Login)</li>
                <li>50+ reusable UI components</li>
                <li>Fully responsive design for all devices</li>
                <li>Clean, well-documented HTML/CSS/JS code</li>
                <li>Free lifetime updates and premium support</li>
            </ul>
        `,
        features: [
            { icon: 'fa-bolt', title: 'Blazing Fast', description: 'Optimized for performance with 95+ PageSpeed score' },
            { icon: 'fa-mobile-screen', title: 'Fully Responsive', description: 'Perfect on desktop, tablet, and mobile devices' },
            { icon: 'fa-code', title: 'Clean Code', description: 'Well-structured, commented, and easy to customize' },
            { icon: 'fa-palette', title: 'Easy Customization', description: 'Change colors, fonts, and layouts effortlessly' }
        ],
        files: [
            { name: 'saas-landing-template.zip', type: 'Main Files', size: '12.5 MB', icon: 'fa-file-zipper' },
            { name: 'documentation.pdf', type: 'User Guide', size: '3.2 MB', icon: 'fa-file-pdf' }
        ],
        tags: [
            { name: 'UI Kits & Templates', type: 'primary' },
            { name: 'SaaS', type: 'primary' },
            { name: 'landing-page', type: 'secondary' },
            { name: 'responsive', type: 'secondary' },
            { name: 'html-css', type: 'secondary' }
        ]
    },
    5: {
        id: 5,
        name: 'AI Chatbot Script',
        category: 'Scripts & Code',
        price: 99.00,
        status: 'published',
        seller: 'Tech Innovators Inc.',
        dateAdded: '2024-08-15',
        slug: 'ai-chatbot',
        screenshots: [
            { title: 'Chat Interface', description: 'Beautiful, customizable chat window', icon: '💬' },
            { title: 'Admin Dashboard', description: 'Manage conversations and train your bot', icon: '📊' },
            { title: 'Integration Code', description: 'Easy setup with just a few lines of code', icon: '⚙️' }
        ],
        description: `
            <p>Add intelligent conversation capabilities to your website with our advanced AI Chatbot Script. Perfect for customer support, lead generation, and user engagement.</p>
            
            <p>Powered by natural language processing and machine learning, this chatbot understands context, learns from interactions, and provides human-like responses to your visitors 24/7.</p>
            
            <h4>Key Features:</h4>
            <ul>
                <li>Natural language understanding with advanced AI</li>
                <li>Easy integration with any website (PHP, Node.js, or WordPress)</li>
                <li>Customizable chat widget design and behavior</li>
                <li>Analytics dashboard to track conversations</li>
                <li>Multi-language support (10+ languages included)</li>
            </ul>
        `,
        features: [
            { icon: 'fa-brain', title: 'AI-Powered', description: 'Uses advanced NLP for intelligent responses' },
            { icon: 'fa-clock', title: '24/7 Support', description: 'Never miss a customer inquiry' },
            { icon: 'fa-chart-line', title: 'Analytics', description: 'Track engagement and conversation metrics' },
            { icon: 'fa-plug', title: 'Easy Integration', description: 'Works with any website or platform' }
        ],
        files: [
            { name: 'ai-chatbot-v2.1.zip', type: 'Script Package', size: '8.7 MB', icon: 'fa-file-zipper' },
            { name: 'setup-guide.pdf', type: 'Installation Guide', size: '2.1 MB', icon: 'fa-file-pdf' }
        ],
        tags: [
            { name: 'Scripts & Code', type: 'primary' },
            { name: 'AI', type: 'primary' },
            { name: 'chatbot', type: 'secondary' },
            { name: 'javascript', type: 'secondary' },
            { name: 'php', type: 'secondary' }
        ]
    },
    7: {
        id: 7,
        name: 'Mobile App Design Course',
        category: 'E-Learning & Courses',
        price: 129.00,
        status: 'draft',
        seller: 'Digital Marketplace Pro',
        dateAdded: '2024-11-15',
        slug: 'mobile-course',
        screenshots: [
            { title: 'Video Lessons', description: 'HD video tutorials with screen recordings', icon: '🎥' },
            { title: 'Design Projects', description: 'Real-world app design projects', icon: '📱' },
            { title: 'Certificate', description: 'Professional completion certificate', icon: '🏆' }
        ],
        description: `
            <p>Master the art of mobile app design with our comprehensive course. Learn to create stunning iOS and Android app interfaces that users love.</p>
            
            <p>This hands-on course covers everything from design fundamentals to advanced prototyping techniques. You'll work on real projects and build a professional portfolio by the end.</p>
            
            <h4>Course Includes:</h4>
            <ul>
                <li>45+ hours of video lessons and tutorials</li>
                <li>10 real-world design projects with source files</li>
                <li>Access to design resources library (icons, templates, UI kits)</li>
                <li>Private community access for networking and support</li>
                <li>Certificate of completion upon finishing the course</li>
            </ul>
        `,
        features: [
            { icon: 'fa-graduation-cap', title: 'Expert Instruction', description: 'Learn from industry professionals with 10+ years experience' },
            { icon: 'fa-laptop-code', title: 'Hands-On Projects', description: 'Build real apps from scratch with step-by-step guidance' },
            { icon: 'fa-infinity', title: 'Lifetime Access', description: 'Watch lessons anytime, anywhere, forever' },
            { icon: 'fa-users', title: 'Community', description: 'Join thousands of students and designers' }
        ],
        files: [
            { name: 'course-curriculum.pdf', type: 'Course Outline', size: '1.5 MB', icon: 'fa-file-pdf' },
            { name: 'design-resources.zip', type: 'Bonus Resources', size: '156 MB', icon: 'fa-file-zipper' }
        ],
        tags: [
            { name: 'E-Learning & Courses', type: 'primary' },
            { name: 'Design', type: 'primary' },
            { name: 'mobile-app', type: 'secondary' },
            { name: 'ui-ux', type: 'secondary' },
            { name: 'figma', type: 'secondary' }
        ]
    }
};

// Current product
let currentProduct = null;

// Get product ID from URL
function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Load product from localStorage or URL
function loadCurrentProduct() {
    const productId = getProductIdFromURL();
    
    if (productId) {
        // Try to get from allProducts first
        currentProduct = allProducts[productId];
        
        // If not found, try localStorage
        if (!currentProduct) {
            const stored = localStorage.getItem('launchpoint_current_product');
            if (stored) {
                const storedProduct = JSON.parse(stored);
                if (storedProduct.id == productId) {
                    currentProduct = storedProduct;
                }
            }
        }
    }
    
    // Fallback to default product
    if (!currentProduct) {
        currentProduct = allProducts[1];
    }
    
    return currentProduct;
}

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

// Load Product Data
function loadProductData() {
    // Update header
    document.getElementById('productTitle').textContent = currentProduct.name;
    document.getElementById('breadcrumbProduct').textContent = currentProduct.name;
    document.getElementById('productCategory').textContent = currentProduct.category;
    document.getElementById('productSeller').textContent = currentProduct.seller;
    document.getElementById('productDate').textContent = `Added ${formatDate(currentProduct.dateAdded)}`;
    document.getElementById('productPrice').textContent = formatCurrency(currentProduct.price);
    
    // Update status
    updateStatusBadge(currentProduct.status);
    
    // Render sections
    renderScreenshots();
    renderDescription();
    renderFeatures();
    renderFiles();
    renderTags();
}

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

// Format Currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

// Update Status Badge
function updateStatusBadge(status) {
    const statusBadge = document.getElementById('productStatus');
    const statusIcons = {
        'published': 'fa-circle-check',
        'draft': 'fa-file-pen',
        'archived': 'fa-box-archive'
    };
    const statusLabels = {
        'published': 'Published',
        'draft': 'Draft',
        'archived': 'Archived'
    };
    
    statusBadge.className = `status-badge status-${status}`;
    statusBadge.innerHTML = `
        <i class="fa-solid ${statusIcons[status]}"></i>
        ${statusLabels[status]}
    `;
}

// Render Screenshots
function renderScreenshots() {
    const grid = document.getElementById('screenshotsGrid');
    grid.innerHTML = currentProduct.screenshots.map(screenshot => `
        <div class="screenshot-item">
            <div class="screenshot-image">${screenshot.icon}</div>
            <div class="screenshot-info">
                <div class="screenshot-title">${screenshot.title}</div>
                <div class="screenshot-desc">${screenshot.description}</div>
            </div>
        </div>
    `).join('');
}

// Render Description
function renderDescription() {
    document.getElementById('productDescription').innerHTML = currentProduct.description;
}

// Render Features
function renderFeatures() {
    const container = document.getElementById('productFeatures');
    container.innerHTML = currentProduct.features.map(feature => `
        <div class="feature-item">
            <i class="fa-solid ${feature.icon}"></i>
            <div>
                <h5>${feature.title}</h5>
                <p>${feature.description}</p>
            </div>
        </div>
    `).join('');
}

// Render Files
function renderFiles() {
    const container = document.getElementById('productFiles');
    container.innerHTML = currentProduct.files.map(file => `
        <div class="file-item">
            <i class="fa-solid ${file.icon}"></i>
            <div class="file-info">
                <div class="file-name">${file.name}</div>
                <div class="file-meta">${file.type} • ${file.size}</div>
            </div>
            <button class="btn-icon download-file">
                <i class="fa-solid fa-download"></i>
            </button>
        </div>
    `).join('');
    
    // Add download listeners
    document.querySelectorAll('.download-file').forEach(btn => {
        btn.addEventListener('click', function() {
            const fileName = this.closest('.file-item').querySelector('.file-name').textContent;
            alert(`Download Started\n\nFile: ${fileName}\n\nDownloading...`);
        });
    });
}

// Render Tags
function renderTags() {
    const container = document.getElementById('productTags');
    container.innerHTML = currentProduct.tags.map(tag => `
        <span class="tag tag-${tag.type}">${tag.name}</span>
    `).join('');
}

// Tab Switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
        
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        this.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Edit Button
document.getElementById('editBtn')?.addEventListener('click', function() {
    alert('Edit Product\n\nOpening product editor...');
});

// View Live Button
document.getElementById('viewLiveBtn')?.addEventListener('click', function() {
    alert(`View Live Product\n\n${currentProduct.name}\n\nOpening live product page...`);
});

// Save Changes Button
document.getElementById('saveChangesBtn')?.addEventListener('click', function() {
    const newStatus = document.getElementById('statusSelect').value;
    currentProduct.status = newStatus;
    updateStatusBadge(newStatus);
    alert('Changes Saved!\n\nProduct status updated successfully.');
});

// Edit Price Button
document.getElementById('editPriceBtn')?.addEventListener('click', function() {
    const newPrice = prompt('Enter new price:', currentProduct.price);
    if (newPrice && !isNaN(newPrice)) {
        currentProduct.price = parseFloat(newPrice);
        document.getElementById('productPrice').textContent = formatCurrency(currentProduct.price);
        alert('Price updated successfully!');
    }
});

// Edit Tags Button
document.getElementById('editTagsBtn')?.addEventListener('click', function() {
    alert('Edit Tags\n\nAvailable Categories:\n- UI Kits & Templates\n- Scripts & Code\n- E-Learning & Courses');
});

// Add Link Button
document.getElementById('addLinkBtn')?.addEventListener('click', function() {
    const linkName = prompt('Enter link name (e.g., "Live Preview", "Documentation"):');
    if (linkName && linkName.trim()) {
        const linkUrl = prompt('Enter link URL:');
        if (linkUrl && linkUrl.trim()) {
            alert(`Demo Link Added!\n\nName: ${linkName}\nURL: ${linkUrl}`);
        }
    }
});

// Delete Link Buttons
document.querySelectorAll('.delete-link').forEach(btn => {
    btn.addEventListener('click', function() {
        if (confirm('Delete this demo link?\n\nThis action cannot be undone.')) {
            this.closest('.link-item').remove();
            alert('Link deleted successfully!');
        }
    });
});

// Edit Link Buttons
document.querySelectorAll('.edit-link').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Edit Link\n\nOpening link editor...');
    });
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
    loadCurrentProduct();
    loadProductData();
    console.log('Product details page initialized');
    console.log('Current Product:', currentProduct.name);
    console.log('Product ID:', currentProduct.id);
});