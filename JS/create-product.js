// ====================================
// LAUNCHPOINT - CREATE PRODUCT
// ====================================

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

// ---- Product File Upload ----
const productFileInput = document.getElementById('productFile');
const filePreview = document.getElementById('filePreview');

productFileInput?.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const fileSizeMB = (file.size / (1024 * 1024)).toFixed(2);
        
        filePreview.innerHTML = `
            <div class="file-item">
                <i class="fa-solid fa-file-zipper"></i>
                <div style="flex: 1;">
                    <div style="font-weight: 600;">${file.name}</div>
                    <div style="font-size: 0.8125rem; color: var(--muted);">${fileSizeMB} MB</div>
                </div>
            </div>
        `;
        
        console.log('Product file selected:', file.name);
    }
});

// ---- Product Images Upload ----
const productImagesInput = document.getElementById('productImages');
const imagesPreview = document.getElementById('imagesPreview');

productImagesInput?.addEventListener('change', function(e) {
    const files = Array.from(e.target.files);
    
    if (files.length > 0) {
        imagesPreview.innerHTML = '<div class="images-grid"></div>';
        const grid = imagesPreview.querySelector('.images-grid');
        
        files.forEach(file => {
            const reader = new FileReader();
            
            reader.onload = function(event) {
                const imageItem = document.createElement('div');
                imageItem.className = 'image-item';
                imageItem.innerHTML = `<img src="${event.target.result}" alt="${file.name}" />`;
                grid.appendChild(imageItem);
            };
            
            reader.readAsDataURL(file);
        });
        
        console.log('Gallery images selected:', files.length, 'files');
    }
});

// ---- Form Validation ----
function validateForm() {
    const productName = document.getElementById('productName').value.trim();
    const description = document.getElementById('productDescription').value.trim();
    const productType = document.getElementById('productType').value;
    const category = document.getElementById('category').value;
    const price = document.getElementById('price').value;
    const license = document.getElementById('license').value;
    
    if (!productName) {
        alert('Please enter a product name');
        return false;
    }
    
    if (!description) {
        alert('Please enter a product description');
        return false;
    }
    
    if (!productType) {
        alert('Please select a product type');
        return false;
    }
    
    if (!category) {
        alert('Please select a category');
        return false;
    }
    
    if (!price || parseFloat(price) <= 0) {
        alert('Please enter a valid price');
        return false;
    }
    
    if (!license) {
        alert('Please select a license type');
        return false;
    }
    
    return true;
}

// ---- Form Submit ----
document.getElementById('productForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!validateForm()) {
        return;
    }
    
    const productData = {
        name: document.getElementById('productName').value,
        description: document.getElementById('productDescription').value,
        type: document.getElementById('productType').value,
        category: document.getElementById('category').value,
        price: parseFloat(document.getElementById('price').value),
        license: document.getElementById('license').value,
        demoUrl: document.getElementById('demoUrl').value,
        docsUrl: document.getElementById('docsUrl').value,
        published: document.getElementById('publishToggle').checked,
        featured: document.getElementById('featuredToggle').checked,
        createdAt: new Date().toISOString()
    };
    
    const submitBtn = document.getElementById('addProductBtn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Adding...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        console.log('Product added:', productData);
        
        alert(`Product Added Successfully!\n\n${productData.name}\n$${productData.price}\n\nStatus: ${productData.published ? 'Published' : 'Draft'}`);
        
        // Reset form
        document.getElementById('productForm').reset();
        filePreview.innerHTML = '';
        imagesPreview.innerHTML = '';
        
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 1500);
});

// ---- Save Draft ----
document.getElementById('saveDraftBtn')?.addEventListener('click', function() {
    const productName = document.getElementById('productName').value.trim();
    
    if (!productName) {
        alert('Please enter at least a product name to save as draft');
        return;
    }
    
    const draftData = {
        name: productName,
        description: document.getElementById('productDescription').value,
        type: document.getElementById('productType').value,
        category: document.getElementById('category').value,
        price: document.getElementById('price').value,
        status: 'draft',
        savedAt: new Date().toISOString()
    };
    
    console.log('Draft saved:', draftData);
    alert('Draft saved successfully!');
});

// ---- Cancel ----
document.getElementById('cancelBtn')?.addEventListener('click', function() {
    if (confirm('Discard changes and return to products?')) {
        window.location.href = 'dashboard.html';
    }
});

// ---- Preview ----
document.getElementById('previewBtn')?.addEventListener('click', function() {
    alert('Product preview feature coming soon!');
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
    
    console.log('Create product form initialized');
});