// ====================================
// LAUNCHPOINT - MESSAGES
// ====================================

// ---- Sample Conversations Data ----
const conversationsData = [
    {
        id: 1,
        name: 'LaunchPoint Support',
        avatar: null,
        subject: 'Welcome to LaunchPoint!',
        lastMessage: "Hey there! We're thrilled to have you join our community...",
        time: '2h ago',
        unread: 2,
        online: true,
        messages: [
            {
                type: 'received',
                text: "Hey there! We're thrilled to have you join our community of creators and entrepreneurs. If you have any questions about getting started, finding the perfect digital asset, or listing your own products, don't hesitate to ask. We're here to help you succeed!",
                time: '2 hours ago'
            },
            {
                type: 'sent',
                text: "Thanks for the warm welcome! I'm excited to explore the marketplace. I was wondering where I can find the documentation for API integration?",
                time: '1 hour ago'
            }
        ]
    },
    {
        id: 2,
        name: 'SellerName123',
        avatar: null,
        subject: 'Re: Regarding your recent purchase',
        lastMessage: 'Thanks for your purchase! Let me know if you have any questions...',
        time: '1d ago',
        unread: 1,
        online: false,
        messages: [
            {
                type: 'received',
                text: "Thanks for your purchase! Let me know if you have any questions about the product. I'm here to help!",
                time: '1 day ago'
            }
        ]
    },
    {
        id: 3,
        name: 'System Notification',
        avatar: null,
        subject: 'Security Alert: New login detected',
        lastMessage: "We noticed a login from a new device. If this wasn't you...",
        time: '3d ago',
        unread: 0,
        online: false,
        messages: [
            {
                type: 'received',
                text: "We noticed a login from a new device. If this wasn't you, please secure your account immediately.",
                time: '3 days ago'
            }
        ]
    }
];

let currentConversation = null;

// ---- Load User Data ----
function loadUserData() {
    const userData = JSON.parse(localStorage.getItem('launchpoint_user') || '{}');
    
    if (userData.name) {
        document.getElementById('userName').textContent = userData.name;
    }
    
    const savedAvatar = localStorage.getItem('launchpoint_avatar');
    if (savedAvatar) {
        const img = document.createElement('img');
        img.src = savedAvatar;
        document.getElementById('userAvatar').innerHTML = '';
        document.getElementById('userAvatar').appendChild(img);
    }
}

// ---- Update Cart Badge ----
function updateCartBadge() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
    const cartBadge = document.getElementById('cartBadge');
    if (cartBadge) {
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
}

// ---- Update Unread Count ----
function updateUnreadCount() {
    const totalUnread = conversationsData.reduce((sum, conv) => sum + conv.unread, 0);
    const unreadCount = document.getElementById('unreadCount');
    if (unreadCount) {
        unreadCount.textContent = totalUnread > 0 ? `${totalUnread} unread` : 'No unread';
    }
}

// ---- Render Conversations ----
function renderConversations() {
    const list = document.getElementById('conversationsList');
    
    list.innerHTML = conversationsData.map(conv => `
        <div class="conversation-item ${currentConversation?.id === conv.id ? 'active' : ''}" onclick="selectConversation(${conv.id})">
            <div class="conversation-avatar-wrapper">
                <div class="conversation-avatar">
                    <i class="fa-solid fa-user"></i>
                </div>
                ${conv.online ? '<div class="online-badge"></div>' : ''}
                ${conv.unread > 0 ? `<div class="unread-badge">${conv.unread}</div>` : ''}
            </div>
            <div class="conversation-info">
                <div class="conversation-header">
                    <span class="conversation-name">${conv.name}</span>
                    <span class="conversation-time">${conv.time}</span>
                </div>
                <div class="conversation-subject">${conv.subject}</div>
                <div class="conversation-preview">${conv.lastMessage}</div>
            </div>
        </div>
    `).join('');
    
    updateUnreadCount();
}

// ---- Select Conversation ----
window.selectConversation = function(id) {
    const conv = conversationsData.find(c => c.id === id);
    if (!conv) return;
    
    // Mark as read
    conv.unread = 0;
    currentConversation = conv;
    
    // Update UI
    renderConversations();
    renderChatHeader(conv);
    renderMessages(conv);
    
    // Show chat input
    document.getElementById('chatInput').style.display = 'block';
};

// ---- Render Chat Header ----
function renderChatHeader(conv) {
    document.getElementById('chatName').textContent = conv.name;
    document.getElementById('chatSubject').textContent = `Subject: ${conv.subject}`;
    
    const chatAvatar = document.getElementById('chatAvatar');
    chatAvatar.innerHTML = '<i class="fa-solid fa-user"></i>';
}

// ---- Render Messages ----
function renderMessages(conv) {
    const messagesContainer = document.getElementById('chatMessages');
    
    messagesContainer.innerHTML = conv.messages.map(msg => `
        <div class="message-wrapper ${msg.type === 'sent' ? 'sent' : ''}">
            <div class="message-avatar">
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="message-content">
                <div class="message-bubble ${msg.type === 'sent' ? 'sent' : 'received'}">
                    ${msg.text}
                </div>
                <span class="message-timestamp">${msg.time}</span>
            </div>
        </div>
    `).join('');
    
    // Scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// ---- Send Message ----
document.getElementById('sendBtn')?.addEventListener('click', sendMessage);

function sendMessage() {
    if (!currentConversation) return;
    
    const input = document.getElementById('messageInput');
    const text = input.value.trim();
    
    if (!text) return;
    
    // Add message to conversation
    currentConversation.messages.push({
        type: 'sent',
        text: text,
        time: 'Just now'
    });
    
    // Update last message
    currentConversation.lastMessage = text.substring(0, 50) + '...';
    currentConversation.time = 'Just now';
    
    // Clear input and re-render
    input.value = '';
    input.style.height = 'auto';
    renderConversations();
    renderMessages(currentConversation);
}

// ---- Auto-resize Textarea ----
const messageInput = document.getElementById('messageInput');
if (messageInput) {
    messageInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
    
    // Enter to send, Shift+Enter for new line
    messageInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
}

// ---- Search Messages ----
document.getElementById('searchInput')?.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    console.log('Searching messages:', query);
    // Can implement search functionality here
});

// ---- Cart Button ----
document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', () => {
            window.location.href = '/cart.html';
        });
    }
});

// ---- Compose Button ----
document.getElementById('composeBtn')?.addEventListener('click', () => {
    alert('Compose new message feature coming soon!');
});

// ---- Filter Button ----
document.getElementById('filterBtn')?.addEventListener('click', () => {
    alert('Filter messages feature coming soon!');
});

// ---- Chat Options ----
document.getElementById('chatOptionsBtn')?.addEventListener('click', () => {
    if (currentConversation) {
        alert(`Options for ${currentConversation.name}\n\n- View Profile\n- Mute\n- Block\n- Report`);
    }
});

// ====================================
// MOBILE MENU TOGGLE
// ====================================

const menu = document.getElementById("menu");

function toggleMenu() {
    menu.classList.toggle("open");
    menu.classList.contains("open") 
        ? menu.setAttribute("aria-expanded", "true") 
        : menu.setAttribute("aria-expanded", "false");
}

function closeMenu() {
    menu.classList.remove("open");
    menu.setAttribute("aria-expanded", "false");
}

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.querySelector('.nav');
    const menuBtn = document.querySelector('.menu-btn');
    
    if (menu && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
        closeMenu();
    }
});

// Close menu on window resize
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && menu) {
        closeMenu();
    }
});

// ---- Initialize ----
document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    updateCartBadge();
    renderConversations();
    
    console.log('Messages page loaded successfully');
});