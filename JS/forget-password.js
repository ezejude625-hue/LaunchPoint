// ====================================
// LAUNCHPOINT - FORGOT PASSWORD
// ====================================

// ---- Form Elements ----
const resetForm = document.getElementById('resetForm');
const emailInput = document.getElementById('email');
const successModal = document.getElementById('successModal');

// ---- Email Validation ----
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ---- Show Error Alert ----
function showError(message) {
    alert(message);
}

// ---- Show Success Modal ----
function showModal() {
    successModal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// ---- Close Modal ----
function closeModal() {
    successModal.classList.remove('show');
    document.body.style.overflow = '';
    
    // Redirect to login after closing modal
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 500);
}

// Make closeModal available globally for onclick
window.closeModal = closeModal;

// ---- Form Validation ----
function validateForm() {
    const email = emailInput.value.trim();
    
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
    
    return true;
}

// ---- Check if Email Exists ----
function checkEmailExists(email) {
    // Check if user exists in localStorage
    const userData = localStorage.getItem('launchpoint_user');
    
    if (userData) {
        const user = JSON.parse(userData);
        return user.email === email;
    }
    
    return false;
}

// ---- Form Submit Handler ----
if (resetForm) {
    resetForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        // Get form data
        const email = emailInput.value.trim();
        
        // Show loading state
        const submitBtn = resetForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Check if email exists
            const emailExists = checkEmailExists(email);
            
            if (emailExists) {
                // Store reset token (in real app, this would be server-side)
                const resetToken = 'reset_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
                const resetData = {
                    email: email,
                    token: resetToken,
                    expiresAt: Date.now() + (60 * 60 * 1000) // 1 hour
                };
                
                localStorage.setItem('launchpoint_reset_token', JSON.stringify(resetData));
                
                // Show success modal
                showModal();
                
                // Clear form
                resetForm.reset();
            } else {
                // For security, don't reveal if email exists or not
                // Show success modal anyway
                showModal();
                resetForm.reset();
            }
        }, 2000);
    });
}

// ---- Input Focus Effects ----
if (emailInput) {
    emailInput.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    emailInput.addEventListener('blur', function() {
        this.parentElement.classList.remove('focused');
    });
}

// ---- Prevent Space in Email ----
if (emailInput) {
    emailInput.addEventListener('keypress', function(e) {
        if (e.key === ' ') {
            e.preventDefault();
        }
    });
}

// ---- Real-time Email Validation ----
if (emailInput) {
    emailInput.addEventListener('blur', function() {
        const email = this.value.trim();
        
        if (email && !validateEmail(email)) {
            this.style.borderColor = '#dc2626';
            
            // Reset after 2 seconds
            setTimeout(() => {
                this.style.borderColor = '';
            }, 2000);
        }
    });
}

// ---- Keyboard Shortcuts ----
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to submit form
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        if (resetForm) {
            resetForm.dispatchEvent(new Event('submit'));
        }
    }
    
    // Escape to close modal
    if (e.key === 'Escape') {
        if (successModal && successModal.classList.contains('show')) {
            closeModal();
        }
    }
});

// ---- Close Modal on Background Click ----
if (successModal) {
    successModal.addEventListener('click', function(e) {
        if (e.target === successModal) {
            closeModal();
        }
    });
}

// ---- Auto-fill Detection ----
function checkAutofill() {
    if (emailInput && emailInput.value !== '') {
        emailInput.parentElement.classList.add('has-value');
    }
    
    if (emailInput) {
        emailInput.addEventListener('input', function() {
            if (this.value !== '') {
                this.parentElement.classList.add('has-value');
            } else {
                this.parentElement.classList.remove('has-value');
            }
        });
    }
}

// ---- Rate Limiting ----
let resetAttempts = parseInt(localStorage.getItem('launchpoint_reset_attempts') || '0');
const MAX_RESET_ATTEMPTS = 3;
const RESET_COOLDOWN = 15 * 60 * 1000; // 15 minutes

function checkResetAttempts() {
    const cooldownUntil = localStorage.getItem('launchpoint_reset_cooldown');
    
    if (cooldownUntil && Date.now() < parseInt(cooldownUntil)) {
        const remainingTime = Math.ceil((parseInt(cooldownUntil) - Date.now()) / 60000);
        showError(`Too many reset attempts.\n\nPlease try again in ${remainingTime} minutes.`);
        
        // Disable form
        if (resetForm) {
            resetForm.querySelectorAll('input, button').forEach(el => {
                el.disabled = true;
            });
        }
        
        return false;
    }
    
    // Reset if cooldown period has passed
    if (cooldownUntil && Date.now() >= parseInt(cooldownUntil)) {
        localStorage.removeItem('launchpoint_reset_cooldown');
        localStorage.setItem('launchpoint_reset_attempts', '0');
        resetAttempts = 0;
    }
    
    return true;
}

function recordResetAttempt() {
    resetAttempts++;
    localStorage.setItem('launchpoint_reset_attempts', resetAttempts.toString());
    
    if (resetAttempts >= MAX_RESET_ATTEMPTS) {
        const cooldownUntil = Date.now() + RESET_COOLDOWN;
        localStorage.setItem('launchpoint_reset_cooldown', cooldownUntil.toString());
        showError(`Too many reset attempts.\n\nPlease wait 15 minutes before trying again.`);
        
        // Disable form
        if (resetForm) {
            resetForm.querySelectorAll('input, button').forEach(el => {
                el.disabled = true;
            });
        }
    }
}

// ---- Resend Email Functionality ----
function resendEmail() {
    const email = emailInput.value.trim();
    
    if (!email || !validateEmail(email)) {
        showError('Please enter a valid email address first');
        return;
    }
    
    alert('Reset link resent!\n\nPlease check your email inbox and spam folder.');
}

// Make resendEmail available globally
window.resendEmail = resendEmail;

// ---- Console Welcome Message ----
console.log('%cLaunchPoint Password Reset', 'font-size: 20px; font-weight: bold; color: #4169E1;');
console.log('%cReset your password securely', 'font-size: 12px; color: #17A2B8;');

// ---- Initialize on DOM Load ----
document.addEventListener('DOMContentLoaded', () => {
    // Check reset attempts
    checkResetAttempts();
    
    // Check autofill
    setTimeout(checkAutofill, 500);
    
    // Focus email input
    if (emailInput) {
        emailInput.focus();
    }
    
    console.log('Forgot password page loaded successfully');
});

// ---- Prevent Multiple Submissions ----
let isSubmitting = false;

if (resetForm) {
    resetForm.addEventListener('submit', function(e) {
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

// ---- Track Form Interactions ----
function trackFormInteraction(action, field) {
    console.log(`Password reset form: ${action} on ${field}`);
}

if (emailInput) {
    emailInput.addEventListener('focus', function() {
        trackFormInteraction('focus', 'email');
    });
    
    emailInput.addEventListener('blur', function() {
        if (this.value) {
            trackFormInteraction('completed', 'email');
        }
    });
}

// ---- Email Suggestions ----
const commonDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', 'icloud.com'];

function suggestEmailDomain(email) {
    if (!email.includes('@')) return;
    
    const parts = email.split('@');
    if (parts.length !== 2) return;
    
    const [localPart, domain] = parts;
    const domainLower = domain.toLowerCase();
    
    // Check for common typos
    const suggestions = {
        'gmial.com': 'gmail.com',
        'gmai.com': 'gmail.com',
        'yahooo.com': 'yahoo.com',
        'yaho.com': 'yahoo.com',
        'outlok.com': 'outlook.com',
        'hotmial.com': 'hotmail.com'
    };
    
    if (suggestions[domainLower]) {
        const suggested = `${localPart}@${suggestions[domainLower]}`;
        const shouldCorrect = confirm(`Did you mean ${suggested}?`);
        
        if (shouldCorrect && emailInput) {
            emailInput.value = suggested;
        }
    }
}

if (emailInput) {
    emailInput.addEventListener('blur', function() {
        suggestEmailDomain(this.value);
    });
}