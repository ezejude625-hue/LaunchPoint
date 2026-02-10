// ====================================
// LAUNCHPOINT - LOGIN
// ====================================

// ---- Form Elements ----
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const rememberCheckbox = document.getElementById('remember');

// ---- Password Toggle Functionality ----
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

// ---- Email Validation ----
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ---- Form Validation ----
function validateForm() {
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    
    // Check if email is filled
    if (!email) {
        showError('Please enter your email address');
        emailInput.focus();
        return false;
    }
    
    // Validate email format
    if (!validateEmail(email)) {
        showError('Please enter a valid email address');
        emailInput.focus();
        return false;
    }
    
    // Check if password is filled
    if (!password) {
        showError('Please enter your password');
        passwordInput.focus();
        return false;
    }
    
    // Minimum password length
    if (password.length < 6) {
        showError('Password must be at least 6 characters long');
        passwordInput.focus();
        return false;
    }
    
    return true;
}

// ---- Show Error Alert ----
function showError(message) {
    alert(message);
}

// ---- Show Success Alert ----
function showSuccess(message) {
    alert(message);
}

// ---- Check for Saved Credentials ----
function loadSavedCredentials() {
    const savedEmail = localStorage.getItem('launchpoint_remember_email');
    
    if (savedEmail) {
        emailInput.value = savedEmail;
        rememberCheckbox.checked = true;
    }
}

// ---- Save Credentials if Remember Me is checked ----
function saveCredentials(email) {
    if (rememberCheckbox.checked) {
        localStorage.setItem('launchpoint_remember_email', email);
    } else {
        localStorage.removeItem('launchpoint_remember_email');
    }
}

// ---- Check if User is Already Logged In ----
function checkLoggedInUser() {
    const userData = localStorage.getItem('launchpoint_user');
    const sessionToken = sessionStorage.getItem('launchpoint_session');
    
    if (userData && sessionToken) {
        const user = JSON.parse(userData);
        const confirmRedirect = confirm(`Welcome back, ${user.name}!\n\nYou're already logged in. Would you like to go to your dashboard?`);
        
        if (confirmRedirect) {
            window.location.href = '/user/dashboard.html';
        } else {
            // Log out current user
            sessionStorage.removeItem('launchpoint_session');
        }
    }
}

// ---- Form Submit Handler ----
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        // Get form data
        const formData = {
            email: emailInput.value.trim(),
            password: passwordInput.value
        };
        
        // Show loading state
        const submitBtn = loginForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Signing In...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Check if user exists in signup data
            const signupUser = localStorage.getItem('launchpoint_user');
            
            if (signupUser) {
                const user = JSON.parse(signupUser);
                
                // Simple validation (in real app, this would be server-side)
                if (user.email === formData.email) {
                    // Success - Create session
                    const sessionToken = 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                    sessionStorage.setItem('launchpoint_session', sessionToken);
                    
                    // Save credentials if remember me is checked
                    saveCredentials(formData.email);
                    
                    // Show success message
                    showSuccess(`Welcome back, ${user.name}!\n\nRedirecting to your Homepage...`);
                    
                    // Clear form
                    loginForm.reset();
                    
                    // Redirect to dashboard
                    setTimeout(() => {
                        window.location.href = '/homepage.html';
                    }, 1500);
                } else {
                    showError('Invalid email or password. Please try again.');
                }
            } else {
                // No user found - suggest signup
                const shouldSignup = confirm('No account found with this email.\n\nWould you like to create a new account?');
                
                if (shouldSignup) {
                    window.location.href = 'signup.html';
                }
            }
        }, 2000);
    });
}

// ---- Social Login Buttons ----
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const provider = this.classList.contains('google-btn') ? 'Google' : 'GitHub';
        
        // Show loading state
        const originalText = this.innerHTML;
        this.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> Connecting to ${provider}...`;
        this.disabled = true;
        
        setTimeout(() => {
            // Reset button
            this.innerHTML = originalText;
            this.disabled = false;
            
            alert(`Sign in with ${provider}\n\nThis would redirect to ${provider}'s OAuth flow.`);
        }, 1500);
    });
});

// ---- Input Focus Effects ----
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
});

// ---- Prevent Space in Email ----
emailInput.addEventListener('keypress', function(e) {
    if (e.key === ' ') {
        e.preventDefault();
    }
});

// ---- Real-time Email Validation ----
emailInput.addEventListener('blur', function() {
    const email = this.value.trim();
    
    if (email && !validateEmail(email)) {
        this.style.borderColor = 'var(--danger, #dc2626)';
        
        // Reset after 2 seconds
        setTimeout(() => {
            this.style.borderColor = '';
        }, 2000);
    }
});

// ---- Keyboard Shortcuts ----
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to submit form
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        if (loginForm) {
            loginForm.dispatchEvent(new Event('submit'));
        }
    }
    
    // Escape to clear form
    if (e.key === 'Escape') {
        if (loginForm) {
            const shouldClear = confirm('Clear the form?');
            if (shouldClear) {
                loginForm.reset();
                emailInput.focus();
            }
        }
    }
});

// ---- Demo Credentials Helper ----
function showDemoCredentials() {
    const demoEmail = 'demo@launchpoint.com';
    const demoPassword = 'demo123456';
    
    const useDemoAccount = confirm('Would you like to use demo credentials?\n\nEmail: ' + demoEmail + '\nPassword: ' + demoPassword);
    
    if (useDemoAccount) {
        emailInput.value = demoEmail;
        passwordInput.value = demoPassword;
        emailInput.focus();
    }
}

// ---- Track Login Attempts (Security Feature) ----
let loginAttempts = parseInt(localStorage.getItem('launchpoint_login_attempts') || '0');
const MAX_ATTEMPTS = 5;
const LOCKOUT_TIME = 15 * 60 * 1000; // 15 minutes

function checkLoginAttempts() {
    const lockoutUntil = localStorage.getItem('launchpoint_lockout_until');
    
    if (lockoutUntil && Date.now() < parseInt(lockoutUntil)) {
        const remainingTime = Math.ceil((parseInt(lockoutUntil) - Date.now()) / 60000);
        showError(`Too many failed login attempts.\n\nPlease try again in ${remainingTime} minutes.`);
        
        // Disable form
        loginForm.querySelectorAll('input, button').forEach(el => {
            el.disabled = true;
        });
        
        return false;
    }
    
    // Reset if lockout period has passed
    if (lockoutUntil && Date.now() >= parseInt(lockoutUntil)) {
        localStorage.removeItem('launchpoint_lockout_until');
        localStorage.setItem('launchpoint_login_attempts', '0');
        loginAttempts = 0;
    }
    
    return true;
}

function recordFailedAttempt() {
    loginAttempts++;
    localStorage.setItem('launchpoint_login_attempts', loginAttempts.toString());
    
    if (loginAttempts >= MAX_ATTEMPTS) {
        const lockoutUntil = Date.now() + LOCKOUT_TIME;
        localStorage.setItem('launchpoint_lockout_until', lockoutUntil.toString());
        showError(`Too many failed login attempts.\n\nYour account has been temporarily locked for 15 minutes.`);
        
        // Disable form
        loginForm.querySelectorAll('input, button').forEach(el => {
            el.disabled = true;
        });
    } else {
        const remaining = MAX_ATTEMPTS - loginAttempts;
        showError(`Invalid credentials.\n\nYou have ${remaining} attempt(s) remaining.`);
    }
}

function resetLoginAttempts() {
    localStorage.setItem('launchpoint_login_attempts', '0');
    loginAttempts = 0;
}

// ---- Auto-fill Detection ----
function checkAutofill() {
    const inputs = document.querySelectorAll('.form-input');
    
    inputs.forEach(input => {
        if (input.value !== '') {
            input.parentElement.classList.add('has-value');
        }
        
        input.addEventListener('input', function() {
            if (this.value !== '') {
                this.parentElement.classList.add('has-value');
            } else {
                this.parentElement.classList.remove('has-value');
            }
        });
    });
}

// ---- Console Welcome Message ----
console.log('%cLaunchPoint Login', 'font-size: 20px; font-weight: bold; color: #4169E1;');
console.log('%cSign in to access your dashboard and projects', 'font-size: 12px; color: #17A2B8;');
console.log('%cTip: Use Ctrl+Enter to submit the form', 'font-size: 11px; color: #6b7280;');

// ---- Initialize on DOM Load ----
document.addEventListener('DOMContentLoaded', () => {
    // Check if user is already logged in
    checkLoggedInUser();
    
    // Load saved credentials
    loadSavedCredentials();
    
    // Check login attempts
    checkLoginAttempts();
    
    // Check autofill
    setTimeout(checkAutofill, 500);
    
    // Focus email input
    if (emailInput && !emailInput.value) {
        emailInput.focus();
    } else if (passwordInput) {
        passwordInput.focus();
    }
    
    // Add demo credentials button for development (remove in production)
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        const demoBtn = document.createElement('button');
        demoBtn.textContent = 'Use Demo Account';
        demoBtn.className = 'btn btn-ghost';
        demoBtn.style.cssText = 'position: fixed; bottom: 20px; right: 20px; z-index: 9999; font-size: 0.75rem; padding: 0.5rem 1rem;';
        demoBtn.onclick = showDemoCredentials;
        document.body.appendChild(demoBtn);
    }
    
    console.log('Login page loaded successfully');
});

// ---- Form Analytics (Optional) ----
function trackFormInteraction(action, field) {
    // In production, send to analytics service
    console.log(`Login form interaction: ${action} on ${field}`);
}

// Track form field interactions
document.querySelectorAll('.form-input').forEach(input => {
    input.addEventListener('focus', function() {
        trackFormInteraction('focus', this.name);
    });
    
    input.addEventListener('blur', function() {
        if (this.value) {
            trackFormInteraction('completed', this.name);
        }
    });
});

// ---- Prevent Multiple Submissions ----
let isSubmitting = false;

if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        if (isSubmitting) {
            e.preventDefault();
            return false;
        }
        isSubmitting = true;
        
        // Reset after 3 seconds
        setTimeout(() => {
            isSubmitting = false;
        }, 3000);
    });
}

// ---- Session Management ----
function createSession(userData) {
    const sessionData = {
        token: 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
        user: userData,
        loginTime: new Date().toISOString(),
        expiresIn: 24 * 60 * 60 * 1000 // 24 hours
    };
    
    sessionStorage.setItem('launchpoint_session', JSON.stringify(sessionData));
    
    // Set session expiry
    const expiryTime = Date.now() + sessionData.expiresIn;
    localStorage.setItem('launchpoint_session_expiry', expiryTime.toString());
}

function checkSessionExpiry() {
    const expiryTime = localStorage.getItem('launchpoint_session_expiry');
    
    if (expiryTime && Date.now() > parseInt(expiryTime)) {
        // Session expired
        sessionStorage.removeItem('launchpoint_session');
        localStorage.removeItem('launchpoint_session_expiry');
        
        alert('Your session has expired.\n\nPlease sign in again to continue.');
        return false;
    }
    
    return true;
}

// ---- Remember Me Checkbox Toggle ----
if (rememberCheckbox) {
    rememberCheckbox.addEventListener('change', function() {
        if (this.checked) {
            console.log('Remember me enabled');
        } else {
            console.log('Remember me disabled');
            localStorage.removeItem('launchpoint_remember_email');
        }
    });
}

// ---- Copy/Paste Security for Password ----
passwordInput.addEventListener('paste', function(e) {
    // Allow paste but track it
    trackFormInteraction('paste', 'password');
});

// ---- Caps Lock Detection ----
document.addEventListener('keydown', function(e) {
    if (e.getModifierState && e.getModifierState('CapsLock')) {
        if (document.activeElement === passwordInput) {
            // Show caps lock warning
            let capsWarning = document.getElementById('caps-warning');
            if (!capsWarning) {
                capsWarning = document.createElement('p');
                capsWarning.id = 'caps-warning';
                capsWarning.style.cssText = 'color: #f59e0b; font-size: 0.75rem; margin-top: 0.25rem;';
                capsWarning.innerHTML = '<i class="fa-solid fa-exclamation-triangle"></i> Caps Lock is ON';
                passwordInput.parentElement.parentElement.appendChild(capsWarning);
            }
        }
    } else {
        const capsWarning = document.getElementById('caps-warning');
        if (capsWarning) {
            capsWarning.remove();
        }
    }
});