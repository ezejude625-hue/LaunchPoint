# Perfect Prompt for LaunchPoint Landing Page

Create a modern, professional landing page for "LaunchPoint" - a SaaS platform that helps businesses launch their online presence quickly. The design should be clean, conversion-focused, and feature-rich with the following specifications:
Design System & Branding

# Color Palette:

Primary: Royal Blue (#4169E1)
Accent: Teal/Cyan (#17A2B8)
Background: White (#ffffff)
Foreground/Text: Dark Navy (#1a1a2e)
Muted Text: Gray (#6b7280)
Card Background: Light Gray (#f9fafb)


Typography: Plus Jakarta Sans font family (weights: 400, 500, 600, 700, 800)
Visual Style: Gradient accents, soft shadows, rounded corners (0.5-1rem), floating badges with animations

# Layout Structure
1. Sticky Header (Glassmorphism)

Logo with rocket icon + "LaunchPoint" text (gradient effect)
Navigation: Home, Features, How it Works, Testimonials
Responsive hamburger menu for mobile
Background: Semi-transparent white with backdrop blur
Slide-down animation on load

2. Hero Section

Two-column grid layout (content left, image right)
Badge: "Launch Your Business in Minutes" with magic wand icon
Headline: "Launch Your Online Presence Fast & Beautiful" (gradient text on keywords)
Subheadline: Professional value proposition
Two CTAs: Primary "Start Building Free →" and secondary "Watch Demo"
Social proof stats: 10k+ Active Users, 50k+ Sites Launched, 99% Satisfaction
Hero image with floating badges ("Fast Launch", "Beautiful Design")
Background: Subtle gradient overlay (blue/teal at 5% opacity)
Animations: Fade in from left (content), fade in from right (image)

3. Features Section

Section header: "Everything You Need to Launch & Grow" (centered)
7 feature cards in responsive grid (3-4 columns on desktop, 1-2 on mobile)
Each card includes: Icon with colored background, title, description
Features:

Landing Page Templates
Branding Tools
Marketing Integrations
Lead Generation
SEO & Performance
E-Commerce Ready
Analytics & Growth


Hover effect: Lift card with shadow
Background: Light gray (#f9fafb)

4. How It Works Section

Section header: "Launch in 5 Simple Steps"
5-column layout (responsive to single column on mobile)
Horizontal progress line connecting all steps
Each step: Large circular icon with gradient background, step number badge, title, description
Steps: Choose → Customize → Integrate → Launch → Track
Hover effect: Scale icon slightly
Background: White

5. Testimonials Section

Section header: "Loved by Businesses Worldwide"
3 testimonial cards in grid layout
Each card: 5-star rating, testimonial quote, avatar (initials), name, title
Testimonials from: Sarah Chen (TechStart), Marcus Rodriguez (Marketing Director), Emily Thompson (E-commerce Owner)
Hover effect: Add shadow
Background: Light gray (#f9fafb)

6. Call-to-Action Section

Full-width gradient background (blue to teal)
Centered content with decorative blur circles
Headline: "Ready to Launch Your Success?"
Subheadline about transformation
Two CTAs: "Start Building Free →" (white background) and "Schedule a Demo" (outline)
Benefits grid: 4 checkmarks (No credit card, 14-day trial, Cancel anytime, Full feature access)
Rounded corners with shadow

7. Footer

Dark background (#1a1a2e), white text
4-column grid: Brand/description, Product links, Company links, Legal links
Logo with gradient effect
Bottom bar: Copyright notice
Links with hover effect (opacity change)

# Interactive Elements & Animations

Smooth scroll for anchor links
Intersection Observer for fade-in animations on scroll
Floating badges with continuous float animation (3s cycle)
Button hover effects (lift, shadow increase)
Card hover effects (lift, shadow)
Icon scale on hover
Glassmorphic sticky header

# Responsive Breakpoints

Mobile (<768px): Single column layouts, hamburger menu, stacked CTAs
Tablet (768px-1024px): 2-column grids
Desktop (>1024px): Full multi-column layouts

# Key Features to Implement

Font Awesome icons throughout
Bootstrap 5.3.8 grid system
CSS custom properties for theming
Prevent horizontal scroll/overflow
Accessibility considerations
Fast loading with optimized assets
SEO-friendly structure

# Technical Requirements

HTML5 semantic markup
Modern CSS with Grid and Flexbox
Vanilla JavaScript for interactions
Mobile-first responsive design
Cross-browser compatibility
Smooth scrolling behavior

<!-- ============================================ -->
# Prompt for the ai (claude)

PROJECT CONTEXT PROMPT - LaunchPoint E-Commerce Website (UPDATED)
Project Overview
User created a complete e-commerce website called "LaunchPoint" by taking an existing e-commerce template, redesigning it completely with new styles/colors/layout. The HTML/CSS/JS structure is done, BUT the text content is still from the original template and doesn't match the new LaunchPoint brand.
Task: User will upload pages one by one (or all at once). I need to rewrite ALL text content to align with LaunchPoint's vision and the landing page they created.
What LaunchPoint Is & Sells
Business Model: Digital marketplace selling tools for building online presence
Products LaunchPoint Sells:

Landing Page Templates ($29-$99) - Professional, conversion-focused website templates
Branding Kits ($49-$149) - Complete brand identity packages (logos, colors, fonts, style guides)
Website Themes ($79-$199) - Full-site templates for different industries
UI Component Packs ($19-$59) - Reusable design elements, sections, and blocks
Setup Services ($199-$499) - Professional installation and customization services
Custom Branding ($299-$999) - Personalized brand identity creation
LaunchPoint Pro Subscription ($19/month or $149/year) - Unlimited access to all templates, priority support, lifetime updates

LaunchPoint's Vision & Mission
Vision: "Empower every business to launch a professional online presence in minutes, not months"
Mission: "Provide beautiful, easy-to-use templates and tools that help creators, startups, and businesses build, brand, and grow online without technical skills or huge budgets"
Target Audience: Creators, startups, small businesses, entrepreneurs, solopreneurs, agencies
Landing Page Core Messaging (User's Creation)

Main Tagline: "Launch Your Online Presence Fast & Beautiful"
Value Prop: "Professional landing pages, powerful branding tools, and seamless integrations. Everything you need to build, launch, and grow your business online."
Social Proof: 10k+ Active Users, 50k+ Sites Launched, 99% Satisfaction
Key Features Promoted:

Landing Page Templates
Branding Tools
Marketing Integrations
Lead Generation
SEO & Performance
E-Commerce Ready
Analytics & Growth


5-Step Process: Choose → Customize → Integrate → Launch → Track

Brand Voice & Messaging Guidelines
Tone:

Empowering and encouraging
Professional but approachable
Action-oriented and solution-focused
Clear, direct, no jargon
Emphasizes speed, ease, and beauty

Key Phrases to Use Consistently:

"Launch faster" / "Launch in minutes"
"Build your online presence"
"Start growing today"
"Professional and beautiful"
"No coding required"
"Get started in minutes"
"Transform your business"
"Everything you need"

Brand Messaging Pillars:

Speed - Launch quickly, save time
Beauty - Professional, stunning designs
Simplicity - Easy to use, no technical skills needed
Growth - Built to scale, analytics, optimization
Affordability - Professional results without agency prices

Trust Elements (Use Throughout)

🔒 Secure payment processing
✓ 30-day money-back guarantee
✓ Instant digital delivery
✓ Lifetime updates included
✓ 10,000+ active users
✓ 24/7 support
✓ No credit card required (for free accounts)
✓ Cancel anytime

Design System (For Context)

Primary Color: Royal Blue (#4169E1)
Accent Color: Teal/Cyan (#17A2B8)
Font Family: Plus Jakarta Sans
Visual Style: Modern, clean, gradient accents, soft shadows, rounded corners

Pages User Will Upload

Marketplace - Browse and purchase templates/tools
Cart - Review items before checkout
Checkout - Complete purchase
Login - Existing user authentication
Signup - New user registration

My Job When User Uploads Pages
For each page uploaded:

Extract all current text content (headlines, descriptions, CTAs, labels, placeholders, error messages)
Identify what doesn't match LaunchPoint's vision
Rewrite ALL text to:

Match LaunchPoint's brand voice
Sell the correct products (templates, branding kits, themes, etc.)
Use consistent messaging from landing page
Maintain the 5 brand pillars (Speed, Beauty, Simplicity, Growth, Affordability)
Include trust elements where appropriate
Keep CTAs action-oriented


Organize the rewritten content clearly by section/element
Present it in an easy-to-implement format

Content Strategy Per Page
MARKETPLACE:

Hero: "Discover Templates & Tools to Launch Faster"
Categories: Landing Pages, Themes, Branding Kits, UI Components, Services
Product descriptions emphasize: Professional quality, easy customization, fast results
Filters: Price, Category, Popularity, Free vs Paid

CART:

Headline: "Your Launch Kit"
Empty state: Encourage browsing marketplace
Trust badges: Secure payment, instant delivery, money-back guarantee, lifetime updates
Upsell: "Complete Your Launch Kit" with related products

CHECKOUT:

Headline: "Complete Your Purchase"
Subhead: "You're minutes away from launching your online presence"
Progress indicators: Cart → Checkout → Confirmation
Trust messages: Encrypted payment, secure, satisfaction guaranteed
Final CTA: "Complete Purchase & Launch"

LOGIN:

Headline: "Welcome Back to LaunchPoint"
Subhead: "Continue building and growing your online presence"
Social login options
Bottom: Link to signup
Side panel: Mini testimonial + stats

SIGNUP:

Headline: "Start Launching Today"
Subhead: "Join thousands of businesses building their online presence"
Benefits sidebar: What you get (free templates, builder, trial, integrations, analytics, support)
Trust: No credit card, free plan, cancel anytime
Bottom: Link to login

Important Notes

User designed the landing page themselves - it's their reference point
All other pages had copied text from another site - needs complete rewrite
Focus on text/copy only, NOT HTML/CSS structure
Maintain consistency across all pages
Every page should feel like part of the LaunchPoint brand story


When user uploads files: Read current content → Rewrite to match this vision → Present organized by page section.

<!-- ==================================================== -->



<!-- THE BEFORE CARTJS -->
<!-- 

/*
// ---- Cart Data ----
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [
  {
    id: 1,
    name: "AI Chatbot Script",
    category: "AI Tool",
    price: 49.0,
    quantity: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSf9gLxrO9XbF8VkCZNNBSJslfFmnRd0xin2T3ksFxItWuvUeFTR4jV-TMIzQ8ZAIEiHhFSsM_0IxZFPhHv-MTXr-Au37um2AFU7eAXeSXHyA8UBR8kILQtMS94bCdvHdUsrcyDXn6TeFu9tIGzop3xlOzVBLbFgjMijEFbWSOyJdUWIr2NVjJPTIJarTNtq2aj-oxviFCHD09wBDn1B7-u1OrfLSLQiIV7kDJZP4rs3ln2TrVNZpAFJPZ-4abOn_nu6sgEEcRyvE",
  },
  {
    id: 2,
    name: "Modern Portfolio Website",
    category: "Website Template",
    price: 99.0,
    quantity: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCnak9JjqSNvl_9U2IDo8kX89Z0kUXZ4ZIkl-xbxaIz1BlCgig9dksmeUZvbVzecoikPYI4IIVVx_WrFcqGh5FPrvYkNTV7rULFg0UBeiO8a2XcBN88YMWb0NfG3pJ75CKLsjDlQFOmt8xF2z8u_zvng88FPBKa8-KnvLqyM_30kGsaysNPNXun36qsf6hHTccRv7XkaENjarZk06YlrrxpR4i961FN7skOziYFDWwM0Vd1HrJZL70M1ZJENQetXJzhn93ocGlnKFU",
  },
  {
    id: 3,
    name: "E-learning Course on Python",
    category: "E-learning Resource",
    price: 129.0,
    quantity: 1,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAwJVdBXrw6iFFnavbHrR-Zj5h05SX7L-EbBrttjpv6e_AJNYs_NY3tySK0rmFtbhRAQlXWFOMyu_ohrsk1si7vBfmVuK4S0_Qjvlag96Rke9VBZ2thrwc57VydyOujlM17fjopfFwJNYp1SPlsPsk1zb6L_m1i2XpNZ39JmNF6byyEB4Dn6zaw63DfIBi2Bi6ItF4iOAJfR2oWXtGW3dx-cCzkhZyH4vSTRY2fR4fUoWbppnUmuQSJXB4LXhvhgxjejnPTfItlzns",
  },
];

// ---- Recommended Products ----
const recommendedProducts = [
  {
    id: 101,
    name: "UI/UX Design Masterclass",
    category: "E-learning Course",
    price: 199.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhuJnjBZ1QAX_lFhhNpQQsh7pzzHeLlU9emz5tEWgzWoX0g4X6eqZLCcimbs6GGMIFGLTAKtWzBhuh1bG2NwU7SOWnGvqHefgabIDe8jN8McuTvIe-H8HGQWWW2pM5p2TRwVfzOAFze6Ne9rhVlW0-ABuahIF3w-YHWaIUX4b0c9nOPEIpqVsA9qLwq8S1Wl3QNGVckidmRBGGE-C4KJ1kaiqvzWcIXlTT9LoP49PXeUIPS9ANLcd2DMRy0CrZzdzeHU9DJ_qybdw",
  },
  {
    id: 102,
    name: "SaaS Boilerplate Kit",
    category: "Script",
    price: 249.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBS5wAVFqwzXR9Vko6Crzo-NUZRbu_rKK0yhCiIgvt74ormkv5GZK4uK3qsuZ_KgKBzRTcCzJ0qoi01b9uoQqfWzEE-ZpWU6vubhBuGAKEa5CfcFjX90Fsujd1xIyNuX_nIg8p6v6wWXDZQa87ksNtm5SJvXgpc3Q6VN80C0OH3YlSNiLIHwkVgRI5OZ4ATw39avb9OOT1r_B2Gwm-hlM9wV9IFJmQMAio0mAaF3TPXHxbyYE3QQegtcZEcAvYDD-t8u0Zm8Gfa2fY",
  },
  {
    id: 103,
    name: "Mobile App UI Kit",
    category: "App Template",
    price: 79.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBrUqX1FgVKJRnWoej_cYDwuzUj65ToYEZPK0TTOdd4stiLHeXsqY6SDS5xGpIjq8gaSpcWcKAUvMUWjxkN_yotjWxNZaJ1Hsv4ck9kDoR_FuHfm271KsMk6u_AuJhyCQ8xAzDwx8nChgQglohDdChGS7Hj7GD1VC9EDx3-4emxxoRTq3NiuQVwEYYwBumnX2gkvPpLN_uWNwMxGEUv7hxVRsZ850Qt1IYDwI7-Wz0-WK0l23WBCZrKVqhRKd6YuJGaxbn_n5ITcSo",
  },
  {
    id: 104,
    name: "Weather Data API",
    category: "API",
    price: 15.0,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC9A3GMLiN6Dnth_pDmNz3xen3yMj07yKbFTZA5fC3uxv-Iycrr3eQpNXBLjc84hMGRdtd86dprKrP_ItkKrZhr16KjwaIUaZOCPmLSlITYr777yd85ijRfNJra2NHYxGqm4uIa5V7tVs7f4S5yPouBDBL4oJjJU3ZmsRkTdeynssv0lwSpovtBi3ECSFu7W6Q6pXpuUvDIREMQuLVQ8ylTpcRdteATIhAgCcfIVaB0lZF6AJKCMa9OCVcxu6tf8UJ5iYw4nXAvJxc",
  },
];

// ---- Render Cart Items ----
function renderCartItems() {
  const container = document.getElementById("cart-items");
  if (!container) return;

  container.innerHTML = cartItems
    .map(
      (item) => `
        <div class="cart-item">
            <div class="item-image" style='background-image: url("${item.image}");'></div>
            <div class="item-info">
                <p class="item-name">${item.name}</p>
                <p class="item-category">${item.category}</p>
            </div>
            <div class="item-actions">
                <div class="quantity-control">
                    <button onclick="updateQuantity(${item.id}, -1)" class="quantity-btn">-</button>
                    <input class="quantity-input" type="number" value="${item.quantity}" readonly/>
                    <button onclick="updateQuantity(${item.id}, 1)" class="quantity-btn">+</button>
                </div>
                <p class="item-price">$${(Number(item.price) * Number(item.quantity)).toFixed(2)}</p>
                <button onclick="removeItem(${item.id})" class="delete-btn">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>
        </div>
    `
    )
    .join("");

  updateSummary();
}

// ---- Update Quantity ----
function updateQuantity(itemId, change) {
  const item = cartItems.find((i) => i.id === itemId);
  if (!item) return;
  item.quantity = Math.max(1, Number(item.quantity) + Number(change));
  renderCartItems();
  updateLocalStorage();
}

// ---- Remove Item ----
function removeItem(itemId) {
  if (!confirm("Are you sure you want to delete this item?")) return;
  cartItems = cartItems.filter((i) => i.id !== itemId);
  renderCartItems();
  updateCartBadge();
  updateLocalStorage();
}

// ---- Cart Badge ----
function updateCartBadge() {
  const badge = document.getElementById("cart-badge");
  if (!badge) return;
  badge.textContent = cartItems.length;
  badge.style.display = cartItems.length ? "inline-block" : "none";
}

// ---- Add to Cart ----
function addToCart(productId) {
  const product = recommendedProducts.find((p) => p.id === productId);
  if (!product) return;
  const existing = cartItems.find((i) => i.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }
  renderCartItems();
  updateCartBadge();
  updateLocalStorage();

  // Alert for user feedback
  alert(`${product.name} has been added to your cart!`);

  // Highlight newly added
  const itemElement = Array.from(document.querySelectorAll(".cart-item")).find(
    (el) => el.querySelector(".item-name").textContent === product.name
  );
  if (itemElement) {
    itemElement.classList.add("newly-added");
    setTimeout(() => itemElement.classList.remove("newly-added"), 1000);
  }
}

// ---- Apply Coupon ----
function applyCoupon() {
  const couponInput = document.getElementById("coupon-input");
  if (!couponInput) return;

  const code = couponInput.value.trim().toUpperCase();

  if (code === "SAVE10") {
    appliedCoupon = code; // save coupon
    alert("Coupon applied! 10% discount will be applied at checkout.");
    updateSummary(); // recalc totals
  } else if (code) {
    alert("Invalid coupon code. Try SAVE10 for a discount!");
  }
}

// ---- Update Summary ----
function updateSummary() {
  let subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0
  );
  let discount = appliedCoupon === "SAVE10" ? subtotal * 0.1 : 0;
  let total = subtotal - discount;

  document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
  document.getElementById("discount").textContent = "-$" + discount.toFixed(2);
  document.getElementById("total").textContent = "$" + total.toFixed(2);

  // Save cart + coupon
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  localStorage.setItem("appliedCoupon", appliedCoupon);
}

// Highlight newly added
const itemElement = Array.from(document.querySelectorAll(".cart-item")).find(
  (el) => el.querySelector(".item-name").textContent === product.name
);
if (itemElement) {
  itemElement.classList.add("newly-added");
  setTimeout(() => itemElement.classList.remove("newly-added"), 1000);
}

// ---- Render Recommendations ----
function renderRecommendations() {
  const container = document.querySelector(".recommendations-grid");
  if (!container) return;

  container.innerHTML = recommendedProducts
    .map(
      (product) => `
        <div class="product-card">
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <p class="product-name">${product.name}</p>
                <p class="product-category">${product.category}</p>
                <div class="product-footer">
                    <span class="product-price">$${Number(product.price).toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <span class="material-symbols-outlined">shopping_cart</span> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}

// ---- Local Storage ----
function updateLocalStorage() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// ---- Initialize ----
document.addEventListener("DOMContentLoaded", function () {
  renderCartItems();
  renderRecommendations();
  updateCartBadge();
});
*/

/*
// ---- Add to Cart ----
function addToCart(productId) {
  const product = recommendedProducts.find((p) => p.id === productId);
  if (!product) return;
  const existing = cartItems.find((i) => i.id === product.id);
  if (existing) {
    existing.quantity++;
  } else {
    cartItems.push({ ...product, quantity: 1 });
  }
  renderCartItems();
  updateCartBadge();
  updateLocalStorage();

  // **Alert for user feedback**
  alert(`${product.name} has been added to your cart!`);

  //   apply coupon
  function applyCoupon() {
    const couponInput = document.getElementById("coupon-input");
    if (!couponInput) return;

    const code = couponInput.value.trim().toUpperCase();

    if (code === "SAVE10") {
      appliedCoupon = code; // save coupon
      alert("Coupon applied! 10% discount will be applied at checkout.");
      updateSummary(); // recalc totals
    } else if (code) {
      alert("Invalid coupon code. Try SAVE10 for a discount!");
    }
  }
//======== update summary to include discount ========

function updateSummary() {
  let subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity),
    0
  );
  let discount = appliedCoupon === "SAVE10" ? subtotal * 0.1 : 0;
  let total = subtotal - discount;

  document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
  document.getElementById("discount").textContent = "-$" + discount.toFixed(2);
  document.getElementById("total").textContent = "$" + total.toFixed(2);

  updateLocalStorage(); // save cart + coupon
}


// ---- Update Summary ----
function updateSummary() {
  const subtotal = cartItems.reduce(
    (sum, i) => sum + Number(i.price) * Number(i.quantity),
    0
  );
  const subtotalEl = document.getElementById("subtotal");
  const totalEl = document.getElementById("total");
  if (subtotalEl) subtotalEl.textContent = "$" + subtotal.toFixed(2);
  if (totalEl) totalEl.textContent = "$" + subtotal.toFixed(2);
  updateLocalStorage();
}


*/

/*
// Cart data
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [
    {
        id: 1,
        name: "AI Chatbot Script",
        category: "AI Tool",
        price: 49.00,
        quantity: 1,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSf9gLxrO9XbF8VkCZNNBSJslfFmnRd0xin2T3ksFxItWuvUeFTR4jV-TMIzQ8ZAIEiHhFSsM_0IxZFPhHv-MTXr-Au37um2AFU7eAXeSXHyA8UBR8kILQtMS94bCdvHdUsrcyDXn6TeFu9tIGzop3xlOzVBLbFgjMijEFbWSOyJdUWIr2NVjJPTIJarTNtq2aj-oxviFCHD09wBDn1B7-u1OrfLSLQiIV7kDJZP4rs3ln2TrVNZpAFJPZ-4abOn_nu6sgEEcRyvE"
    },
    {
        id: 2,
        name: "Modern Portfolio Website",
        category: "Website Template",
        price: 99.00,
        quantity: 1,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnak9JjqSNvl_9U2IDo8kX89Z0kUXZ4ZIkl-xbxaIz1BlCgig9dksmeUZvbVzecoikPYI4IIVVx_WrFcqGh5FPrvYkNTV7rULFg0UBeiO8a2XcBN88YMWb0NfG3pJ75CKLsjDlQFOmt8xF2z8u_zvng88FPBKa8-KnvLqyM_30kGsaysNPNXun36qsf6hHTccRv7XkaENjarZk06YlrrxpR4i961FN7skOziYFDWwM0Vd1HrJZL70M1ZJENQetXJzhn93ocGlnKFU"
    },
    {
        id: 3,
        name: "E-learning Course on Python",
        category: "E-learning Resource",
        price: 129.00,
        quantity: 1,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwJVdBXrw6iFFnavbHrR-Zj5h05SX7L-EbBrttjpv6e_AJNYs_NY3tySK0rmFtbhRAQlXWFOMyu_ohrsk1si7vBfmVuK4S0_Qjvlag96Rke9VBZ2thrwc57VydyOujlM17fjopfFwJNYp1SPlsPsk1zb6L_m1i2XpNZ39JmNF6byyEB4Dn6zaw63DfIBi2Bi6ItF4iOAJfR2oWXtGW3dx-cCzkhZyH4vSTRY2fR4fUoWbppnUmuQSJXB4LXhvhgxjejnPTfItlzns"
    }
];

// Recommended products (could be different from cart items)
const recommendedProducts = [
    {
        id: 101,
        name: "UI/UX Design Masterclass",
        category: "E-learning Course",
        price: 199.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhuJnjBZ1QAX_lFhhNpQQsh7pzzHeLlU9emz5tEWgzWoX0g4X6eqZLCcimbs6GGMIFGLTAKtWzBhuh1bG2NwU7SOWnGvqHefgabIDe8jN8McuTvIe-H8HGQWWW2pM5p2TRwVfzOAFze6Ne9rhVlW0-ABuahIF3w-YHWaIUX4b0c9nOPEIpqVsA9qLwq8S1Wl3QNGVckidmRBGGE-C4KJ1kaiqvzWcIXlTT9LoP49PXeUIPS9ANLcd2DMRy0CrZzdzeHU9DJ_qybdw"
    },
    {
        id: 102,
        name: "SaaS Boilerplate Kit",
        category: "Script",
        price: 249.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS5wAVFqwzXR9Vko6Crzo-NUZRbu_rKK0yhCiIgvt74ormkv5GZK4uK3qsuZ_KgKBzRTcCzJ0qoi01b9uoQqfWzEE-ZpWU6vubhBuGAKEa5CfcFjX90Fsujd1xIyNuX_nIg8p6v6wWXDZQa87ksNtm5SJvXgpc3Q6VN80C0OH3YlSNiLIHwkVgRI5OZ4ATw39avb9OOT1r_B2Gwm-hlM9wV9IFJmQMAio0mAaF3TPXHxbyYE3QQegtcZEcAvYDD-t8u0Zm8Gfa2fY"
    },
    {
        id: 103,
        name: "Mobile App UI Kit",
        category: "App Template",
        price: 79.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrUqX1FgVKJRnWoej_cYDwuzUj65ToYEZPK0TTOdd4stiLHeXsqY6SDS5xGpIjq8gaSpcWcKAUvMUWjxkN_yotjWxNZaJ1Hsv4ck9kDoR_FuHfm271KsMk6u_AuJhyCQ8xAzDwx8nChgQglohDdChGS7Hj7GD1VC9EDx3-4emxxoRTq3NiuQVwEYYwBumnX2gkvPpLN_uWNwMxGEUv7hxVRsZ850Qt1IYDwI7-Wz0-WK0l23WBCZrKVqhRKd6YuJGaxbn_n5ITcSo"
    },
    {
        id: 104,
        name: "Weather Data API",
        category: "API",
        price: 15.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9A3GMLiN6Dnth_pDmNz3xen3yMj07yKbFTZA5fC3uxv-Iycrr3eQpNXBLjc84hMGRdtd86dprKrP_ItkKrZhr16KjwaIUaZOCPmLSlITYr777yd85ijRfNJra2NHYxGqm4uIa5V7tVs7f4S5yPouBDBL4oJjJU3ZmsRkTdeynssv0lwSpovtBi3ECSFu7W6Q6pXpuUvDIREMQuLVQ8ylTpcRdteATIhAgCcfIVaB0lZF6AJKCMa9OCVcxu6tf8UJ5iYw4nXAvJxc"
    }
];

// Render cart items
function renderCartItems() {
    const container = document.getElementById('cart-items');
    container.innerHTML = cartItems.map(item => `
        <div class="cart-item">
            <div class="item-image" style='background-image: url("${item.image}");'></div>
            <div class="item-info">
                <p class="item-name">${item.name}</p>
                <p class="item-category">${item.category}</p>
            </div>
            <div class="item-actions">
                <div class="quantity-control">
                    <button onclick="updateQuantity(${item.id}, -1)" class="quantity-btn">-</button>
                    <input class="quantity-input" type="number" value="${item.quantity}" readonly/>
                    <button onclick="updateQuantity(${item.id}, 1)" class="quantity-btn">+</button>
                </div>
                <p class="item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeItem(${item.id})" class="delete-btn">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>
        </div>
    `).join('');
    
    updateSummary();
}

// Update quantity
function updateQuantity(itemId, change) {
    const item = cartItems.find(i => i.id === itemId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        renderCartItems();
    }
}

// Remove item with confirmation
function removeItem(itemId) {
    const agree = confirm("Are you sure that you want to delete item?");
    if (!agree) return;
    cartItems = cartItems.filter(i => i.id !== itemId);
    renderCartItems();
    updateCartBadge();
}

// Update summary
function updateSummary() {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('total').textContent = '$' + subtotal.toFixed(2);
}

// Update cart badge
function updateCartBadge() {
    const totalItems = cartItems.length;
    const badge = document.getElementById('cart-badge');
    if (badge) {
        badge.textContent = totalItems;
        badge.style.display = totalItems ? 'inline-block' : 'none';
    }
}

// Apply coupon
function applyCoupon() {
    const couponInput = document.getElementById('coupon-input');
    const code = couponInput.value.trim().toUpperCase();
    if (code === 'SAVE10') {
        alert('Coupon applied! 10% discount will be applied at checkout.');
    } else if (code) {
        alert('Invalid coupon code. Try SAVE10 for a discount!');
    }
}

// Render recommended products
function renderRecommendations() {
    const container = document.querySelector('.recommendations-grid');
    container.innerHTML = recommendedProducts.map(product => `
        <div class="product-card">
            <div class="product-image" style="background-image: url('${product.image}')"></div>
            <div class="product-info">
                <p class="product-name">${product.name}</p>
                <p class="product-category">${product.category}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        <span class="material-symbols-outlined">shopping_cart</span> Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Add recommended product to cart
function addToCart(productId) {
    const product = recommendedProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cartItems.find(i => i.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ ...product, quantity: 1 });
    }
    renderCartItems();
    updateCartBadge();
    alert(`${product.name} has been added to your cart!`);
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    renderCartItems();
    renderRecommendations();
});

// highlight

function addToCart(productId) {
    const product = recommendedProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cartItems.find(i => i.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ ...product, quantity: 1 });
    }

    renderCartItems();
    updateCartBadge();

    // Highlight the newly added item
    const itemElement = Array.from(document.querySelectorAll('.cart-item'))
        .find(el => el.querySelector('.item-name').textContent === product.name);

    if (itemElement) {
        itemElement.classList.add('newly-added');
        setTimeout(() => {
            itemElement.classList.remove('newly-added');
        }, 1000); // remove after animation
    }

    alert(`${product.name} has been added to your cart!`);
}

// checkout

document.addEventListener('DOMContentLoaded', function () {
    renderCartItems();

    // Proceed to Checkout
    const checkoutBtn = document.querySelector('.btn-checkout');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function () {
            if (cartItems.length === 0) {
                alert("Your cart is empty. Add items before checking out!");
                return;
            }

            let total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
            if (discount > 0) total = total * (1 - discount / 100);

            let summary = "Order Summary:\n\n";
            cartItems.forEach(item => {
                summary += `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
            });
            summary += `\nTotal: $${total.toFixed(2)}\n`;
            if (discount > 0) summary += `(Including ${discount}% discount)\n`;

            summary += "\nThank you for shopping with LaunchPoint!";

            alert(summary);

            // Optional: Clear cart after checkout
            cartItems = [];
            discount = 0;
            renderCartItems();
            updateCartBadge();
        });
    }
});

// local storage for cart items
function updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
// Call this whenever cart changes
updateLocalStorage();


// modify functions to include local storage updates
function updateQuantity(itemId, change) {
    const item = cartItems.find(i => i.id === itemId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        renderCartItems();
        updateLocalStorage(); // save
    }
}

function removeItem(itemId) {
    const agree = confirm("Are you sure you want to delete this item?");
    if (!agree) return;
    cartItems = cartItems.filter(i => i.id !== itemId);
    renderCartItems();
    updateCartBadge();
    updateLocalStorage(); // save
}

function addToCart(item) {
    const existing = cartItems.find(i => i.id === item.id);
    if (existing) {
        existing.quantity++;
    } else {
        cartItems.push({...item, quantity:1});
    }
    renderCartItems();
    updateCartBadge();
    updateLocalStorage(); // save
}

// Update summary and save cart to localStorage
function updateSummary() {
    const subtotal = cartItems.reduce((sum, item) => 
        sum + Number(item.price) * Number(item.quantity), 0
    );
    document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('total').textContent = '$' + subtotal.toFixed(2);
    localStorage.setItem('cartItems', JSON.stringify(cartItems)); // save changes
}













// Get cart from localStorage if available
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let discount = 0; // Default discount

// Save cart to localStorage
function updateLocalStorage() {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('cartDiscount', discount);
}

// Render cart items
function renderCartItems() {
    const container = document.getElementById('cart-items');
    if (!container) return;
    container.innerHTML = cartItems.map(item => `
        <div class="cart-item">
            <div class="item-image" style='background-image: url("${item.image}");'></div>
            <div class="item-info">
                <p class="item-name">${item.name}</p>
                <p class="item-category">${item.category}</p>
            </div>
            <div class="item-actions">
                <div class="quantity-control">
                    <button onclick="updateQuantity(${item.id}, -1)" class="quantity-btn">-</button>
                    <input class="quantity-input" type="number" value="${item.quantity}" readonly/>
                    <button onclick="updateQuantity(${item.id}, 1)" class="quantity-btn">+</button>
                </div>
                <p class="item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeItem(${item.id})" class="delete-btn">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>
        </div>
    `).join('');

    updateSummary();
}

// Update quantity
function updateQuantity(itemId, change) {
    const item = cartItems.find(i => i.id === itemId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        renderCartItems();
        updateLocalStorage();
    }
}

// Remove item
function removeItem(itemId) {
    if (!confirm("Are you sure you want to remove this item?")) return;
    cartItems = cartItems.filter(i => i.id !== itemId);
    renderCartItems();
    updateCartBadge();
    updateLocalStorage();
}

// Add item to cart
function addToCart(item) {
    const existing = cartItems.find(i => i.id === item.id);
    if (existing) {
        existing.quantity++;
    } else {
        cartItems.push({ ...item, quantity: 1 });
    }
    renderCartItems();
    updateCartBadge();
    updateLocalStorage();
    alert(`${item.name} added to cart!`);
}

// Update cart badge
function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    if (badge) {
        const totalItems = cartItems.reduce((sum, i) => sum + i.quantity, 0);
        badge.textContent = totalItems;
        badge.style.display = totalItems ? 'inline-block' : 'none';
    }
}

// Update summary
function updateSummary() {
    const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal * (1 - discount / 100);
    document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('total').textContent = '$' + total.toFixed(2);
}

// Apply coupon
function applyCoupon() {
    const input = document.getElementById('coupon-input');
    const code = input.value.trim().toUpperCase();
    if (code === 'SAVE10') {
        discount = 10;
        alert('Coupon applied! 10% discount will be applied.');
    } else {
        discount = 0;
        alert('Invalid coupon code.');
    }
    updateSummary();
    updateLocalStorage();
}

// Checkout button
const checkoutBtn = document.querySelector('.btn-checkout');
if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function () {
        if (cartItems.length === 0) {
            alert("Cart is empty!");
            return;
        }

        let subtotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
        let total = subtotal * (1 - discount / 100);

        let summary = "Order Summary:\n\n";
        cartItems.forEach(item => {
            summary += `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
        });
        summary += `\nTotal: $${total.toFixed(2)}\n`;
        if (discount > 0) summary += `(Including ${discount}% discount)\n`;
        summary += "\nThank you!";

        alert(summary);

        // Clear cart
        cartItems = [];
        discount = 0;
        renderCartItems();
        updateCartBadge();
        updateLocalStorage();
    });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', function () {
    renderCartItems();
    updateCartBadge();
});




















// checkout

document.querySelector('.btn-checkout').addEventListener('click', function() {
    if (cartItems.length === 0) {
        alert("Your cart is empty. Add items before checking out!");
        return;
    }

    let total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (discount > 0) total = total * (1 - discount / 100);

    let summary = "Order Summary:\n\n";
    cartItems.forEach(item => {
        summary += `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    summary += `\nTotal: $${total.toFixed(2)}\n`;
    if (discount > 0) summary += `(Including ${discount}% discount)\n`;

    summary += "\nThank you for shopping with LaunchPoint!";

    alert(summary);

    // Optional: Clear cart after checkout
    cartItems = [];
    discount = 0;
    renderCartItems();
    updateCartBadge();
});


// Product data (from recommendations)
const products = [
    {
        id: 101,
        name: "UI/UX Design Masterclass",
        category: "E-learning Course",
        price: 199.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBhuJnjBZ1QAX_lFhhNpQQsh7pzzHeLlU9emz5tEWgzWoX0g4X6eqZLCcimbs6GGMIFGLTAKtWzBhuh1bG2NwU7SOWnGvqHefgabIDe8jN8McuTvIe-H8HGQWWW2pM5p2TRwVfzOAFze6Ne9rhVlW0-ABuahIF3w-YHWaIUX4b0c9nOPEIpqVsA9qLwq8S1Wl3QNGVckidmRBGGE-C4KJ1kaiqvzWcIXlTT9LoP49PXeUIPS9ANLcd2DMRy0CrZzdzeHU9DJ_qybdw"
    },
    {
        id: 102,
        name: "SaaS Boilerplate Kit",
        category: "Script",
        price: 249.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBS5wAVFqwzXR9Vko6Crzo-NUZRbu_rKK0yhCiIgvt74ormkv5GZK4uK3qsuZ_KgKBzRTcCzJ0qoi01b9uoQqfWzEE-ZpWU6vubhBuGAKEa5CfcFjX90Fsujd1xIyNuX_nIg8p6v6wWXDZQa87ksNtm5SJvXgpc3Q6VN80C0OH3YlSNiLIHwkVgRI5OZ4ATw39avb9OOT1r_B2Gwm-hlM9wV9IFJmQMAio0mAaF3TPXHxbyYE3QQegtcZEcAvYDD-t8u0Zm8Gfa2fY"
    },
    {
        id: 103,
        name: "Mobile App UI Kit",
        category: "App Template",
        price: 79.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBrUqX1FgVKJRnWoej_cYDwuzUj65ToYEZPK0TTOdd4stiLHeXsqY6SDS5xGpIjq8gaSpcWcKAUvMUWjxkN_yotjWxNZaJ1Hsv4ck9kDoR_FuHfm271KsMk6u_AuJhyCQ8xAzDwx8nChgQglohDdChGS7Hj7GD1VC9EDx3-4emxxoRTq3NiuQVwEYYwBumnX2gkvPpLN_uWNwMxGEUv7hxVRsZ850Qt1IYDwI7-Wz0-WK0l23WBCZrKVqhRKd6YuJGaxbn_n5ITcSo"
    },
    {
        id: 104,
        name: "Weather Data API",
        category: "API",
        price: 15.00,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9A3GMLiN6Dnth_pDmNz3xen3yMj07yKbFTZA5fC3uxv-Iycrr3eQpNXBLjc84hMGRdtd86dprKrP_ItkKrZhr16KjwaIUaZOCPmLSlITYr777yd85ijRfNJra2NHYxGqm4uIa5V7tVs7f4S5yPouBDBL4oJjJU3ZmsRkTdeynssv0lwSpovtBi3ECSFu7W6Q6pXpuUvDIREMQuLVQ8ylTpcRdteATIhAgCcfIVaB0lZF6AJKCMa9OCVcxu6tf8UJ5iYw4nXAvJxc"
    }
];

// Cart data
let cartItems = [];

// Render cart items
function renderCartItems() {
    const container = document.getElementById('cart-items');
    container.innerHTML = cartItems.length === 0
        ? '<p style="padding:1rem;">Your cart is empty.</p>'
        : cartItems.map(item => `
        <div class="cart-item">
            <div class="item-image" style='background-image: url("${item.image}");'></div>
            <div class="item-info">
                <p class="item-name">${item.name}</p>
                <p class="item-category">${item.category}</p>
            </div>
            <div class="item-actions">
                <div class="quantity-control">
                    <button onclick="updateQuantity(${item.id}, -1)" class="quantity-btn">-</button>
                    <input class="quantity-input" type="number" value="${item.quantity}" readonly/>
                    <button onclick="updateQuantity(${item.id}, 1)" class="quantity-btn">+</button>
                </div>
                <p class="item-price">$${(item.price * item.quantity).toFixed(2)}</p>
                <button onclick="removeItem(${item.id})" class="delete-btn">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>
        </div>
    `).join('');

    updateSummary();
    updateCartBadge();
}

// Add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({...product, quantity: 1});
    }

    renderCartItems();
}

// Update quantity
function updateQuantity(itemId, change) {
    const item = cartItems.find(i => i.id === itemId);
    if (item) {
        item.quantity = Math.max(1, item.quantity + change);
        renderCartItems();
    }
}

// Remove item with confirmation
function removeItem(itemId) {
    const agree = confirm("Are you sure you want to delete this item?");
    if (!agree) return;

    cartItems = cartItems.filter(i => i.id !== itemId);
    renderCartItems();
}

// Update subtotal & total
function updateSummary() {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.getElementById('subtotal').textContent = '$' + subtotal.toFixed(2);
    document.getElementById('total').textContent = '$' + subtotal.toFixed(2);
}

// Update cart badge
function updateCartBadge() {
    let badge = document.getElementById('cart-badge');
    if (!badge) {
        // Create badge if it doesn't exist
        const header = document.querySelector('header .header-content');
        badge = document.createElement('span');
        badge.id = 'cart-badge';
        badge.style.cssText = `
            display: inline-block;
            background: var(--primary);
            color: white;
            border-radius: 50%;
            padding: 2px 8px;
            font-size: 0.75rem;
            margin-left: 0.5rem;
        `;
        // Insert after logo
        header.querySelector('.logo').appendChild(badge);
    }

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
    badge.style.display = totalItems > 0 ? 'inline-block' : 'none';
}

// Apply coupon
function applyCoupon() {
    const couponInput = document.getElementById('coupon-input');
    const code = couponInput.value.trim().toUpperCase();
    
    if (code === 'SAVE10') {
        alert('Coupon applied! 10% discount will be applied at checkout.');
    } else if (code) {
        alert('Invalid coupon code. Try SAVE10 for a discount!');
    }
}

// Attach add-to-cart buttons
function attachAddToCartButtons() {
    const buttons = document.querySelectorAll('.add-to-cart-btn');
    buttons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const productId = products[index].id;
            addToCart(productId);
        });
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function () {
    renderCartItems();
    attachAddToCartButtons();
});

*/

 -->

 <!-- ========================= -->
 <!-- THE FORMER CHECKOUTJS -->

<!-- 
/*
// Payment method selection
const paymentOptions = document.querySelectorAll(".payment-option");
const radioInputs = document.querySelectorAll('input[name="payment-method"]');

radioInputs.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    paymentOptions.forEach((option) => option.classList.remove("selected"));
    paymentOptions[index].classList.add("selected");
  });
});

// Click on label also selects the option
paymentOptions.forEach((option, index) => {
  option.addEventListener("click", () => {
    radioInputs[index].checked = true;
    paymentOptions.forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");
  });
});

// Assuming cartItems is available (from cart.js)
const productList = document.querySelector(".product-list");
const subtotalEl = document.querySelector(".summary-row span:nth-child(2)");
const discountEl = document.querySelector(".discount-amount");
const totalEl = document.querySelector(".summary-row.total span");
const payButton = document.querySelector(".pay-button");

function renderCheckout() {
  if (!cartItems || cartItems.length === 0) {
    productList.innerHTML = "<p>Your cart is empty.</p>";
    subtotalEl.textContent = "$0.00";
    totalEl.textContent = "$0.00";
    payButton.textContent = "Pay Now - $0.00";
    return;
  }

  productList.innerHTML = cartItems
    .map(
      (item) => `
                    <div class="product-item">
                        <img src="${item.image}" alt="${item.name} Thumbnail" class="product-thumbnail">
                            <div class="product-info">
                                <p class="product-name">${item.name}</p>
                                <p class="product-category">${item.category}</p>
                            </div>
                            <p class="product-price">$${(item.price * item.quantity).toFixed(2)}</p>
                    </div>
                `,
    )
    .join("");

  let subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  let discount = 0;
  // Apply coupon if needed
  const savedCoupon = localStorage.getItem("appliedCoupon");
  if (savedCoupon === "SAVE10") {
    discount = subtotal * 0.1;
  }

  subtotalEl.textContent = "$" + subtotal.toFixed(2);
  discountEl.textContent = "-$" + discount.toFixed(2);
  totalEl.textContent = "$" + (subtotal - discount).toFixed(2);
  payButton.textContent = "Pay Now - $" + (subtotal - discount).toFixed(2);
}

// On page load
document.addEventListener("DOMContentLoaded", () => {
  renderCheckout();
});

// Optional: clicking pay button
payButton.addEventListener("click", () => {
  alert("Payment processed for " + totalEl.textContent);
  // Here you could redirect to a payment gateway
});

// Ensure you have a cart array and appliedCoupon variable
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
let appliedCoupon = localStorage.getItem("appliedCoupon") || null;

// Function to update cart totals on cart page (optional)
function updateCartTotals() {
  const subtotalEl = document.querySelector("#cart-subtotal");
  const discountEl = document.querySelector("#cart-discount");
  const totalEl = document.querySelector("#cart-total");

  let subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  let discount = appliedCoupon === "SAVE10" ? subtotal * 0.1 : 0;
  let total = subtotal - discount;

  if (subtotalEl) subtotalEl.textContent = "$" + subtotal.toFixed(2);
  if (discountEl) discountEl.textContent = "-$" + discount.toFixed(2);
  if (totalEl) totalEl.textContent = "$" + total.toFixed(2);
}

// Save cart & coupon to localStorage
function saveCartData() {
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  if (appliedCoupon) localStorage.setItem("appliedCoupon", appliedCoupon);
}

// Proceed to checkout button
const checkoutBtn = document.querySelector("#proceed-checkout");
if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    saveCartData();
    window.location.href = "checkout.html"; // Redirect to checkout
  });
}

// Run this on page load
document.addEventListener("DOMContentLoaded", updateCartTotals);

// checkout.js
let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

function renderCheckout() {
  const container = document.getElementById("checkout-items");
  container.innerHTML = cartItems
    .map(
      (item) => `
                <div class="product-item">
                    <img src="${item.image}" alt="${item.name}" class="product-thumbnail">
                    <div class="product-info">
                        <p class="product-name">${item.name}</p>
                        <p class="product-category">${item.category}</p>
                    </div>
                    <p class="product-price">$${(item.price * item.quantity).toFixed(2)}</p>
                </div>
                `,
    )
    .join("");

  // update totals
  const subtotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
  document.querySelector(".summary-row span:nth-child(2)").textContent =
    "$" + subtotal.toFixed(2);
}

document.addEventListener("DOMContentLoaded", renderCheckout);

*/

 -->
 <!-- ================================= -->

 <!-- MARKETPLACEJS FULL -->

 <!-- 
 // // Minimal JS to enhance UX:
// (function () {
//   // show search box on large screens (mimic original which had a large search visible on lg)
//   function renderLargeSearch() {
//     const w = window.innerWidth;
//     let md = document.getElementById("search-md");
//     if (!md) return;
//     if (w >= 1024) {
//       // inject search html once
//       if (!md.innerHTML.trim()) {
//         md.innerHTML =
//           '<div class=\"search-box\" style=\"width:420px\"><div class=\"search-left\"><span class=\"material-symbols-outlined\">search</span></div><input class=\"search-input\" placeholder=\"Search for scripts, apps, AI tools...\" /></div>';
//       }
//       md.style.display = "block";
//     } else {
//       md.style.display = "none";
//     }
//   }
//   window.addEventListener("resize", renderLargeSearch);
//   renderLargeSearch();

//   // Simple keyboard toggle for dark mode (press "D")
//   window.addEventListener("keydown", function (e) {
//     if (e.key === "d" || e.key === "D") {
//       document.body.classList.toggle("dark");
//     }
//   });

//   // Accessibility: clicking WhatsApp opens a new WhatsApp chat (or whatsapp web)
//   document.querySelector(".whatsapp").addEventListener("click", function () {
//     window.open(
//       "https://wa.me/?text=Hi%20LaunchPoint!%20I%20need%20help",
//       "_blank",
//     );
//   });

//   // Make <details> accessible on keyboard enter/space for older browsers (native generally ok)
//   document.querySelectorAll("details > summary").forEach((s) => {
//     s.addEventListener("keydown", (ev) => {
//       if (ev.key === "Enter" || ev.key === " ") {
//         ev.preventDefault();
//         const d = s.parentElement;
//         d.open = !d.open;
//       }
//     });
//   });

//   // simple "Add to Cart" behavior: bump cart badge number
//   document.querySelectorAll(".btn-add").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const badge = document.querySelector(".badge");
//       if (!badge) return;
//       let n = parseInt(badge.textContent || "0", 10);
//       badge.textContent = String(n + 1);
//       // tiny feedback
//       btn.animate(
//         [
//           { transform: "scale(1)" },
//           { transform: "scale(0.98)" },
//           { transform: "scale(1)" },
//         ],
//         { duration: 220 },
//       );
//     });
//   });

//   // improve focus outlines for keyboard users
//   window.addEventListener("keyup", function (e) {
//     if (e.key === "Tab") {
//       document.documentElement.style.scrollBehavior = "smooth";
//     }
//   });
// })();

/* 
<article
  class="card"
  data-category="scripts"
  data-type="python"
  data-price="49.99"
>
*
works with this html
(function () {
  const cards = Array.from(document.querySelectorAll(".cards .card"));
  const applyBtn = document.querySelector(".btn-apply");
  const clearBtn = document.querySelector(".btn-clear");

  function getCheckedValues(sectionText) {
    return Array.from(
      document.querySelectorAll(
        `details summary div:contains("${sectionText}")`,
      ),
    );
  }

  function getChecked(selector) {
    return Array.from(document.querySelectorAll(selector))
      .filter((cb) => cb.checked)
      .map((cb) => cb.nextElementSibling.textContent.trim().toLowerCase());
  }

  function applyFilters() {
    const categories = getChecked("details:nth-of-type(1) input");
    const types = getChecked("details:nth-of-type(3) input");

    const minPrice = 50;
    const maxPrice = 750;

    cards.forEach((card) => {
      const price = parseFloat(card.dataset.price || 0);
      const category = card.dataset.category;
      const type = card.dataset.type;

      const matchCategory =
        categories.length === 0 || categories.includes(category);
      const matchType = types.length === 0 || types.includes(type);
      const matchPrice = price >= minPrice && price <= maxPrice;

      card.style.display =
        matchCategory && matchType && matchPrice ? "flex" : "none";
    });
  }

  function resetFilters() {
    document
      .querySelectorAll(".sidebar input[type='checkbox']")
      .forEach((cb) => (cb.checked = false));

    cards.forEach((card) => (card.style.display = "flex"));
  }

  applyBtn.addEventListener("click", applyFilters);
  clearBtn.addEventListener("click", resetFilters);
})();
*/
  -->

<!-- 

/**
 // ---- Pay Button Handler ----
if (payButton) {
  payButton.addEventListener("click", () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Please add items before checking out!");
      return;
    }

    const selectedPayment = document.querySelector(
      'input[name="payment-method"]:checked',
    );
    const paymentMethod = selectedPayment ? selectedPayment.value : "card";

    const total = totalEl.textContent;

    // Show processing message
    payButton.textContent = "Processing...";
    payButton.disabled = true;

    // Simulate payment processing
    setTimeout(() => {
      alert(
        `Payment successful! Thank you for your purchase.\n\nTotal: ${total}\nPayment Method: ${paymentMethod}\n\nYour templates are ready for download!`,
      );

      // Clear cart and discount data
      cartItems = [];
      appliedDiscount = 0;
      appliedCouponCode = "";
      localStorage.removeItem("cartItems");
      localStorage.removeItem("appliedDiscount");
      localStorage.removeItem("appliedCouponCode");

      // Redirect to success page (or marketplace)
      window.location.href = "marketplace.html";
    }, 1500);
  });
}
 */
 -->