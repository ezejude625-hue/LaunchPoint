// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll animation observer
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Add hover effect to buttons
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)";
  });
  btn.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Mobile menu toggle
 const menu = document.getElementById("menu");

function toggleMenu() {
  menu.classList.toggle("open");
  menu.classList.contains("open") ?
    menu.setAttribute("aria-expanded", "true") :
    menu.setAttribute("aria-expanded", "false");
}
function closeMenu() {
  menu.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
}

// ----btn Login and Signup Handlers (FIXED)----
document.addEventListener('DOMContentLoaded', () => {
  const btnLogin = document.getElementById("btnLogin");
  const btnSignup = document.getElementById("btnSignup");
  
  if (btnLogin) {
    btnLogin.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent event bubbling
      closeMenu();
      window.location.href = "/auth/login.html";
    });
  }
  
  if (btnSignup) {
    btnSignup.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent event bubbling
      closeMenu();
      window.location.href = "/auth/signup.html";
    });
  }
});