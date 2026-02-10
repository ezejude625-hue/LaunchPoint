//============================
// LAUNCHPOINT - ADMIN SIGNIN
//============================


// Password Toggle
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword?.addEventListener('click', function() {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    
    const icon = this.querySelector('i');
    icon.className = type === 'password' ? 'fa-solid fa-eye' : 'fa-solid fa-eye-slash';
});

// Form Submission
const loginForm = document.getElementById('loginForm');

loginForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;
    
    // Validate inputs
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate login (replace with actual API call)
    console.log('Login attempt:', { email, password, rememberMe });
    
    // Show loading state
    const submitBtn = this.querySelector('.btn-login');
    const originalContent = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Signing in...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Demo credentials
        if (email === 'admin@launchpoint.com' && password === 'admin123') {
            alert('Login successful! Redirecting to dashboard...');
            
            // Store user session
            if (rememberMe) {
                localStorage.setItem('launchpoint_admin_session', JSON.stringify({
                    email: email,
                    loginTime: new Date().toISOString()
                }));
            }
            
            // Redirect to dashboard
            window.location.href = 'dashboard-overview.html';
        } else {
            alert('Invalid credentials. Try:\nEmail: admin@launchpoint.com\nPassword: admin123');
            submitBtn.innerHTML = originalContent;
            submitBtn.disabled = false;
        }
    }, 1500);
});

// Social Login Handlers
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const provider = this.classList.contains('google') ? 'Google' : 'Microsoft';
        alert(`${provider} login coming soon!`);
    });
});

// Remember Me - Check for saved session
document.addEventListener('DOMContentLoaded', () => {
    const savedSession = localStorage.getItem('launchpoint_admin_session');
    
    if (savedSession) {
        try {
            const session = JSON.parse(savedSession);
            document.getElementById('email').value = session.email;
            document.getElementById('rememberMe').checked = true;
        } catch (e) {
            console.error('Error loading saved session:', e);
        }
    }
    
    console.log('Admin signin page initialized');
    console.log('Demo credentials: admin@launchpoint.com / admin123');
});

// Input animations
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.01)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});