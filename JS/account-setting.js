// ====================================
// LAUNCHPOINT - ACCOUNT SETTINGS
// ====================================

// ---- Load User Data ----
function loadUserData() {
    const userData = JSON.parse(localStorage.getItem('launchpoint_user') || '{}');
    
    if (userData.name) {
        document.getElementById('userName').textContent = userData.name;
        document.getElementById('fullName').value = userData.name;
    }
    
    if (userData.email) {
        document.getElementById('userEmail').textContent = userData.email;
        document.getElementById('emailAddress').value = userData.email;
    }
    
    // Load bio if exists
    if (userData.bio) {
        document.getElementById('userBio').value = userData.bio;
    }
}

// ---- Navigation ----
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all items
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        
        // Hide all sections
        document.querySelectorAll('.settings-section').forEach(section => section.classList.remove('active'));
        
        // Show selected section
        const sectionId = this.getAttribute('data-section') + '-section';
        document.getElementById(sectionId).classList.add('active');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// ---- Avatar Upload ----
const avatarInput = document.getElementById('avatarInput');
const uploadAvatarBtn = document.getElementById('uploadAvatarBtn');
const removeAvatarBtn = document.getElementById('removeAvatarBtn');
const avatarPreview = document.getElementById('avatarPreview');
const userAvatar = document.getElementById('userAvatar');

uploadAvatarBtn.addEventListener('click', () => {
    avatarInput.click();
});

avatarInput.addEventListener('change', function() {
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            avatarPreview.innerHTML = '';
            avatarPreview.appendChild(img);
            
            userAvatar.innerHTML = '';
            const userImg = document.createElement('img');
            userImg.src = e.target.result;
            userImg.style.width = '100%';
            userImg.style.height = '100%';
            userImg.style.objectFit = 'cover';
            userAvatar.appendChild(userImg);
            
            // Save to localStorage
            localStorage.setItem('launchpoint_avatar', e.target.result);
            
            alert('Profile picture updated!');
        };
        
        reader.readAsDataURL(this.files[0]);
    }
});

removeAvatarBtn.addEventListener('click', () => {
    if (confirm('Remove your profile picture?')) {
        avatarPreview.innerHTML = '<i class="fa-solid fa-user"></i>';
        userAvatar.innerHTML = '<i class="fa-solid fa-user"></i>';
        localStorage.removeItem('launchpoint_avatar');
        alert('Profile picture removed');
    }
});

// ---- Save Profile ----
document.getElementById('saveProfileBtn').addEventListener('click', () => {
    const userData = {
        name: document.getElementById('fullName').value,
        email: document.getElementById('emailAddress').value,
        bio: document.getElementById('userBio').value
    };
    
    localStorage.setItem('launchpoint_user', JSON.stringify(userData));
    
    document.getElementById('userName').textContent = userData.name;
    document.getElementById('userEmail').textContent = userData.email;
    
    alert('Profile updated successfully!');
});

document.getElementById('cancelProfileBtn').addEventListener('click', () => {
    if (confirm('Discard changes?')) {
        loadUserData();
    }
});

// ---- Password Toggle ----
document.querySelectorAll('.password-toggle').forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetInput = document.getElementById(targetId);
        const icon = this.querySelector('i');
        
        if (targetInput.type === 'password') {
            targetInput.type = 'text';
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
        } else {
            targetInput.type = 'password';
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
        }
    });
});

// ---- Change Password ----
document.getElementById('changePasswordBtn').addEventListener('click', () => {
    const current = document.getElementById('currentPassword').value;
    const newPass = document.getElementById('newPassword').value;
    const confirm = document.getElementById('confirmPassword').value;
    
    if (!current || !newPass || !confirm) {
        alert('Please fill in all password fields');
        return;
    }
    
    if (newPass !== confirm) {
        alert('New passwords do not match');
        return;
    }
    
    if (newPass.length < 8) {
        alert('Password must be at least 8 characters');
        return;
    }
    
    alert('Password changed successfully!');
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
});

// ---- 2FA Toggle ----
let twoFAEnabled = false;

document.getElementById('enable2FABtn').addEventListener('click', function() {
    if (!twoFAEnabled) {
        alert('2FA Setup\n\n1. Download an authenticator app\n2. Scan the QR code\n3. Enter the 6-digit code\n\nFor demo purposes, 2FA is now enabled!');
        twoFAEnabled = true;
        document.getElementById('twoFAStatus').textContent = '2FA is enabled';
        this.textContent = 'Disable 2FA';
        this.classList.remove('btn-primary');
        this.classList.add('btn-danger');
    } else {
        if (confirm('Disable two-factor authentication?')) {
            twoFAEnabled = false;
            document.getElementById('twoFAStatus').textContent = '2FA is currently disabled';
            this.textContent = 'Enable 2FA';
            this.classList.remove('btn-danger');
            this.classList.add('btn-primary');
            alert('2FA disabled');
        }
    }
});

// ---- Render Active Sessions ----
function renderSessions() {
    const sessions = [
        {
            device: 'Chrome on Windows',
            location: 'San Francisco, CA',
            lastActive: 'Active now',
            current: true,
            icon: 'fa-desktop'
        },
        {
            device: 'Safari on iPhone',
            location: 'San Francisco, CA',
            lastActive: '2 hours ago',
            current: false,
            icon: 'fa-mobile-screen'
        },
        {
            device: 'Chrome on MacBook',
            location: 'New York, NY',
            lastActive: '1 day ago',
            current: false,
            icon: 'fa-laptop'
        }
    ];
    
    const sessionsList = document.getElementById('sessionsList');
    sessionsList.innerHTML = sessions.map((session, index) => `
        <div class="session-item">
            <div class="session-info">
                <i class="fa-solid ${session.icon} session-icon"></i>
                <div class="session-details">
                    <h4>${session.device}</h4>
                    <p>${session.location} • ${session.lastActive}</p>
                </div>
            </div>
            ${session.current ? 
                '<span class="session-current">Current Session</span>' : 
                `<button class="btn btn-ghost btn-sm" onclick="logoutSession(${index})">Log Out</button>`
            }
        </div>
    `).join('');
}

window.logoutSession = function(index) {
    if (confirm('Log out from this device?')) {
        alert('Logged out from device');
        renderSessions();
    }
};

// ---- Log Out All Devices ----
document.getElementById('logoutAllBtn').addEventListener('click', () => {
    if (confirm('Log out from all devices except this one?')) {
        alert('Logged out from all other devices');
        renderSessions();
    }
});

// ---- Save Notifications ----
document.getElementById('saveNotificationsBtn').addEventListener('click', () => {
    const prefs = {
        updates: document.getElementById('emailUpdates').checked,
        receipts: document.getElementById('emailReceipts').checked,
        marketing: document.getElementById('emailMarketing').checked
    };
    
    localStorage.setItem('launchpoint_notif_prefs', JSON.stringify(prefs));
    alert('Notification preferences saved!');
});

// ---- Save Preferences ----
document.getElementById('savePreferencesBtn').addEventListener('click', () => {
    const language = document.getElementById('languageSelect').value;
    const theme = document.querySelector('input[name="theme"]:checked').value;
    
    localStorage.setItem('launchpoint_language', language);
    localStorage.setItem('launchpoint_theme', theme);
    
    alert('Preferences saved!');
});

// ---- Logout ----
document.getElementById('logoutBtn').addEventListener('click', () => {
    if (confirm('Are you sure you want to log out?')) {
        sessionStorage.removeItem('launchpoint_session');
        alert('You have been logged out');
        window.location.href = '/index.html';
    }
});

// ---- Load Saved Avatar ----
function loadSavedAvatar() {
    const savedAvatar = localStorage.getItem('launchpoint_avatar');
    
    if (savedAvatar) {
        const img = document.createElement('img');
        img.src = savedAvatar;
        avatarPreview.innerHTML = '';
        avatarPreview.appendChild(img);
        
        const userImg = document.createElement('img');
        userImg.src = savedAvatar;
        userImg.style.width = '100%';
        userImg.style.height = '100%';
        userImg.style.objectFit = 'cover';
        userAvatar.innerHTML = '';
        userAvatar.appendChild(userImg);
    }
}

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    loadSavedAvatar();
    renderSessions();
    
    // Load saved preferences
    const savedLang = localStorage.getItem('launchpoint_language');
    if (savedLang) {
        document.getElementById('languageSelect').value = savedLang;
    }
    
    const savedTheme = localStorage.getItem('launchpoint_theme');
    if (savedTheme) {
        document.querySelector(`input[name="theme"][value="${savedTheme}"]`).checked = true;
    }
    
    const savedNotifs = JSON.parse(localStorage.getItem('launchpoint_notif_prefs') || '{}');
    if (savedNotifs.updates !== undefined) document.getElementById('emailUpdates').checked = savedNotifs.updates;
    if (savedNotifs.receipts !== undefined) document.getElementById('emailReceipts').checked = savedNotifs.receipts;
    if (savedNotifs.marketing !== undefined) document.getElementById('emailMarketing').checked = savedNotifs.marketing;
    
    console.log('Account settings loaded');
});