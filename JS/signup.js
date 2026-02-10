// ====================================
// LAUNCHPOINT - SIGNUP
// ====================================

// ---- Form Elements ----
const signupForm = document.getElementById('signupForm');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordStrength = document.getElementById('password-strength');
const strengthFill = document.querySelector('.strength-fill');
const strengthLabel = document.getElementById('strength-label');
const passwordMatch = document.getElementById('password-match');

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

// ---- Password Strength Checker ----
function checkPasswordStrength(password) {
    let strength = 0;
    
    // Length check
    if (password.length >= 8) strength++;
    if (password.length >= 12) strength++;
    
    // Contains lowercase and uppercase
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    
    // Contains numbers
    if (/\d/.test(password)) strength++;
    
    // Contains special characters
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength++;
    
    return strength;
}

function updatePasswordStrength(password) {
    const strength = checkPasswordStrength(password);
    
    // Remove all strength classes
    strengthFill.classList.remove('weak', 'medium', 'strong');
    
    if (password.length === 0) {
        strengthFill.style.width = '0%';
        strengthLabel.textContent = 'Enter password';
        strengthLabel.style.color = 'var(--muted)';
    } else if (strength <= 2) {
        strengthFill.classList.add('weak');
        strengthLabel.textContent = 'Weak';
        strengthLabel.style.color = 'var(--danger)';
    } else if (strength <= 4) {
        strengthFill.classList.add('medium');
        strengthLabel.textContent = 'Medium';
        strengthLabel.style.color = '#f59e0b';
    } else {
        strengthFill.classList.add('strong');
        strengthLabel.textContent = 'Strong';
        strengthLabel.style.color = 'var(--success)';
    }
}

// Listen for password input
if (passwordInput) {
    passwordInput.addEventListener('input', function() {
        updatePasswordStrength(this.value);
        checkPasswordMatch();
    });
}

// ---- Password Match Checker ----
function checkPasswordMatch() {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    
    if (confirmPassword.length === 0) {
        passwordMatch.textContent = '';
        passwordMatch.classList.remove('match', 'no-match');
        return;
    }
    
    if (password === confirmPassword) {
        passwordMatch.textContent = 'Passwords match';
        passwordMatch.classList.remove('no-match');
        passwordMatch.classList.add('match');
    } else {
        passwordMatch.textContent = 'Passwords do not match';
        passwordMatch.classList.remove('match');
        passwordMatch.classList.add('no-match');
    }
}

// Listen for confirm password input
if (confirmPasswordInput) {
    confirmPasswordInput.addEventListener('input', checkPasswordMatch);
}

// ---- Email Validation ----
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ---- Form Validation ----
function validateForm() {
    const fullName = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    const termsChecked = document.getElementById('terms').checked;
    
    // Check if all fields are filled
    if (!fullName) {
        showError('Please enter your full name');
        return false;
    }
    
    if (!email) {
        showError('Please enter your email address');
        return false;
    }
    
    if (!validateEmail(email)) {
        showError('Please enter a valid email address');
        return false;
    }
    
    if (!password) {
        showError('Please enter a password');
        return false;
    }
    
    if (password.length < 8) {
        showError('Password must be at least 8 characters long');
        return false;
    }
    
    if (password !== confirmPassword) {
        showError('Passwords do not match');
        return false;
    }
    
    if (!termsChecked) {
        showError('Please accept the Terms of Service and Privacy Policy');
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

// ---- Form Submit Handler ----
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!validateForm()) {
            return;
        }
        
        // Get form data
        const formData = {
            fullName: document.getElementById('full-name').value.trim(),
            email: document.getElementById('email').value.trim(),
            password: passwordInput.value
        };
        
        // Show loading state
        const submitBtn = signupForm.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating Account...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            showSuccess(`Welcome to LaunchPoint, ${formData.fullName}!\n\nYour account has been created successfully. Redirecting to Homepage...`);
            
            // Store user data in localStorage (for demo purposes)
            localStorage.setItem('launchpoint_user', JSON.stringify({
                name: formData.fullName,
                email: formData.email,
                joined: new Date().toISOString()
            }));
            
            // Clear form
            signupForm.reset();
            updatePasswordStrength('');
            passwordMatch.textContent = '';
            
            // Redirect to dashboard (or login page)
            setTimeout(() => {
                window.location.href = '../../homepage.html'; // or 'login.html'
            }, 1500);
        }, 2000);
    });
}

// ---- Social Sign Up Buttons ----
document.querySelectorAll('.social-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const provider = this.classList.contains('google-btn') ? 'Google' : 'GitHub';
        alert(`Sign up with ${provider}\n\nThis would redirect to ${provider}'s OAuth flow.`);
    });
});

// ---- Auto-fill Detection (for better UX) ----
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
document.getElementById('email').addEventListener('keypress', function(e) {
    if (e.key === ' ') {
        e.preventDefault();
    }
});

// ---- Real-time Email Validation ----
document.getElementById('email').addEventListener('blur', function() {
    const email = this.value.trim();
    
    if (email && !validateEmail(email)) {
        this.style.borderColor = 'var(--danger)';
        
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
        if (signupForm) {
            signupForm.dispatchEvent(new Event('submit'));
        }
    }
});

document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const existingUser = localStorage.getItem("launchpoint_user");

    // Check if user already exists
    if (existingUser) {
        const user = JSON.parse(existingUser);

        if (user.email === email && user.name === name) {
            alert("You already have an account. Please sign in instead.");
            return;
        }
    }

    // Save new user
    const newUser = {
        name: name,
        email: email,
        password: password
    };

    localStorage.setItem("launchpoint_user", JSON.stringify(newUser));

    alert("Account created successfully!");
    window.location.href = "/homepage.html";
});


// ---- Name Input - Allow only letters and spaces ----
document.getElementById('full-name').addEventListener('input', function(e) {
    // Remove numbers and special characters
    this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
});

// ---- Password Requirements Tooltip (Optional Enhancement) ----
function showPasswordRequirements() {
    const requirements = document.createElement('div');
    requirements.className = 'password-requirements';
    requirements.innerHTML = `
        <p><strong>Password must contain:</strong></p>
        <ul>
            <li>At least 8 characters</li>
            <li>Uppercase and lowercase letters</li>
            <li>At least one number</li>
            <li>At least one special character</li>
        </ul>
    `;
    
    return requirements;
}

// ---- Console Welcome Message ----
console.log('%cWelcome to LaunchPoint!', 'font-size: 20px; font-weight: bold; color: #4169E1;');
console.log('%cJoin thousands of creators building amazing online experiences', 'font-size: 12px; color: #17A2B8;');

// ---- Initialize on DOM Load ----
document.addEventListener('DOMContentLoaded', () => {
    // Check for existing user
    checkExistingUser();
    
    // Check autofill
    setTimeout(checkAutofill, 500);
    
    // Focus first input
    const firstInput = document.getElementById('full-name');
    if (firstInput) {
        firstInput.focus();
    }
    
    console.log('Signup page loaded successfully');
});

// ---- Form Analytics (Optional) ----
function trackFormInteraction(action, field) {
    // In production, send to analytics service
    console.log(`Form interaction: ${action} on ${field}`);
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

if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
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

// ---- Copy Prevention for Security ----
document.querySelectorAll('.password-input').forEach(input => {
    input.addEventListener('copy', function(e) {
        e.preventDefault();
        alert('For security reasons, copying passwords is disabled.');
    });
    
    input.addEventListener('cut', function(e) {
        e.preventDefault();
        alert('For security reasons, cutting passwords is disabled.');
    });
});

// ---- Paste Password Match (UX Enhancement) ----
confirmPasswordInput.addEventListener('paste', function(e) {
    setTimeout(() => {
        checkPasswordMatch();
    }, 10);
});