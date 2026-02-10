//==========================
//  LAUNCHPOINT - SETTINGS
//==========================


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

// Tab Switching
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tab = this.getAttribute('data-tab');
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        this.classList.add('active');
        document.getElementById(tab).classList.add('active');
    });
});

// File Upload
const uploadArea = document.getElementById('uploadArea');
const logoInput = document.getElementById('logoInput');
const uploadPreview = document.getElementById('uploadPreview');
const previewImage = document.getElementById('previewImage');
const removeFile = document.getElementById('removeFile');

function handleFileSelect(file) {
    if (!file) return;
    const validTypes = ['image/png', 'image/jpeg', 'image/svg+xml'];
    if (!validTypes.includes(file.type)) {
        alert('Please select a valid image file (PNG, JPG, or SVG)');
        return;
    }
    if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
    }
    const reader = new FileReader();
    reader.onload = function(e) {
        previewImage.src = e.target.result;
        uploadArea.style.display = 'none';
        uploadPreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
}

logoInput?.addEventListener('change', function(e) {
    if (e.target.files.length > 0) handleFileSelect(e.target.files[0]);
});

uploadArea?.addEventListener('dragover', function(e) {
    e.preventDefault();
    this.style.borderColor = 'var(--primary)';
});

uploadArea?.addEventListener('dragleave', function(e) {
    e.preventDefault();
    this.style.borderColor = '';
});

uploadArea?.addEventListener('drop', function(e) {
    e.preventDefault();
    this.style.borderColor = '';
    if (e.dataTransfer.files.length > 0) handleFileSelect(e.dataTransfer.files[0]);
});

removeFile?.addEventListener('click', function() {
    logoInput.value = '';
    uploadArea.style.display = 'flex';
    uploadPreview.style.display = 'none';
    previewImage.src = '';
});

// Password Toggle
document.querySelectorAll('.toggle-password').forEach(btn => {
    btn.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const input = document.getElementById(targetId);
        const icon = this.querySelector('i');
        if (input.type === 'password') {
            input.type = 'text';
            icon.className = 'fa-solid fa-eye-slash';
        } else {
            input.type = 'password';
            icon.className = 'fa-solid fa-eye';
        }
    });
});

// Save General Settings
document.getElementById('saveGeneral')?.addEventListener('click', function() {
    const siteName = document.getElementById('siteName').value;
    const siteUrl = document.getElementById('siteUrl').value;
    const siteDescription = document.getElementById('siteDescription').value;
    console.log('General settings saved:', { siteName, siteUrl, siteDescription });
    alert('General settings saved successfully!');
});

document.getElementById('cancelGeneral')?.addEventListener('click', function() {
    if (confirm('Are you sure you want to cancel? Any unsaved changes will be lost.')) {
        document.getElementById('generalForm').reset();
        logoInput.value = '';
        uploadArea.style.display = 'flex';
        uploadPreview.style.display = 'none';
    }
});

// Save Payment Settings
document.getElementById('savePayment')?.addEventListener('click', function() {
    const stripePublic = document.getElementById('stripePublic').value;
    const stripeSecret = document.getElementById('stripeSecret').value;
    const paystackKey = document.getElementById('paystackKey').value;
    const cryptoKey = document.getElementById('cryptoKey').value;
    console.log('Payment settings saved');
    alert('Payment gateway settings saved successfully!');
});

document.getElementById('cancelPayment')?.addEventListener('click', function() {
    if (confirm('Are you sure you want to cancel?')) {
        document.getElementById('paymentForm').reset();
    }
});

// Save Email Settings
document.getElementById('saveEmail')?.addEventListener('click', function() {
    const smtpHost = document.getElementById('smtpHost').value;
    const smtpPort = document.getElementById('smtpPort').value;
    const smtpUsername = document.getElementById('smtpUsername').value;
    console.log('Email settings saved:', { smtpHost, smtpPort, smtpUsername });
    alert('Email configuration saved successfully!');
});

document.getElementById('cancelEmail')?.addEventListener('click', function() {
    if (confirm('Are you sure you want to cancel?')) {
        document.getElementById('emailForm').reset();
    }
});

// Save Notification Settings
document.getElementById('saveNotifications')?.addEventListener('click', function() {
    const toggles = document.querySelectorAll('#notifications input[type="checkbox"]');
    const notifications = {};
    toggles.forEach((toggle, index) => {
        notifications[`setting_${index}`] = toggle.checked;
    });
    console.log('Notification settings saved:', notifications);
    alert('Notification preferences saved successfully!');
});

document.getElementById('cancelNotifications')?.addEventListener('click', function() {
    if (confirm('Are you sure you want to cancel?')) {
        location.reload();
    }
});

// Logout
document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Logout from admin panel?')) window.location.href = 'login.html';
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
    console.log('Settings page initialized');
});