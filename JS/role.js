//============================ //
// LAUNCHPOINT - ROLE MANAGEMENT
//============================ //

// Roles Data
const rolesData = [
    {
        id: 1,
        name: 'Super Administrator',
        icon: 'fa-user-shield',
        users: 2,
        permissions: {
            'Content Management': ['Manage Products', 'Moderate Reviews', 'Manage Categories'],
            'User Management': ['Create/Edit/Delete Users', 'Manage Roles & Permissions'],
            'Finance & Analytics': ['View Financial Reports', 'Access Analytics Dashboard', 'Manage Payments']
        },
        assignedUsers: [
            { name: 'Eleanor Vance', email: 'eleanor@launchpoint.com' },
            { name: 'Marcus Thorne', email: 'marcus@launchpoint.com' }
        ]
    },
    {
        id: 2,
        name: 'Editor',
        icon: 'fa-pen-to-square',
        users: 3,
        permissions: {
            'Content Management': ['Manage Products', 'Moderate Reviews'],
            'User Management': [],
            'Finance & Analytics': []
        },
        assignedUsers: [
            { name: 'Sarah Johnson', email: 'sarah@launchpoint.com' },
            { name: 'David Chen', email: 'david@launchpoint.com' },
            { name: 'Maria Garcia', email: 'maria@launchpoint.com' }
        ]
    },
    {
        id: 3,
        name: 'Moderator',
        icon: 'fa-gavel',
        users: 2,
        permissions: {
            'Content Management': ['Moderate Reviews'],
            'User Management': [],
            'Finance & Analytics': []
        },
        assignedUsers: [
            { name: 'Alex Thompson', email: 'alex@launchpoint.com' },
            { name: 'Rachel Kim', email: 'rachel@launchpoint.com' }
        ]
    },
    {
        id: 4,
        name: 'Finance Manager',
        icon: 'fa-dollar-sign',
        users: 1,
        permissions: {
            'Content Management': [],
            'User Management': [],
            'Finance & Analytics': ['View Financial Reports', 'Access Analytics Dashboard', 'Manage Payments']
        },
        assignedUsers: [
            { name: 'Robert Martinez', email: 'robert@launchpoint.com' }
        ]
    }
];

let currentRoleId = 1;

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

// Render Roles List
function renderRolesList() {
    const rolesList = document.getElementById('rolesList');
    
    rolesList.innerHTML = rolesData.map(role => `
        <div class="role-item ${role.id === currentRoleId ? 'active' : ''}" onclick="selectRole(${role.id})">
            <div class="role-icon">
                <i class="fa-solid ${role.icon}"></i>
            </div>
            <div class="role-info">
                <div class="role-name">${role.name}</div>
                <div class="role-count">${role.users} user${role.users !== 1 ? 's' : ''}</div>
            </div>
        </div>
    `).join('');
}

// Select Role
window.selectRole = function(roleId) {
    currentRoleId = roleId;
    renderRolesList();
    renderRoleDetails();
};

// Render Role Details
function renderRoleDetails() {
    const role = rolesData.find(r => r.id === currentRoleId);
    if (!role) return;
    
    // Update title
    document.getElementById('roleTitle').innerHTML = `
        <i class="fa-solid ${role.icon}"></i>
        ${role.name}
    `;
    
    // Render permissions
    const permissionsGrid = document.getElementById('permissionsGrid');
    permissionsGrid.innerHTML = Object.entries(role.permissions).map(([group, perms]) => `
        <div class="permission-group">
            <div class="permission-group-title">${group}</div>
            ${perms.length > 0 ? perms.map(perm => `
                <div class="permission-item">
                    <input type="checkbox" id="${perm.replace(/\s+/g, '-')}" class="permission-checkbox" checked />
                    <label for="${perm.replace(/\s+/g, '-')}" class="permission-label">${perm}</label>
                </div>
            `).join('') : '<p style="font-size: 0.875rem; color: var(--muted);">No permissions</p>'}
        </div>
    `).join('');
    
    // Render assigned users
    renderAssignedUsers();
}

// Render Assigned Users
function renderAssignedUsers() {
    const role = rolesData.find(r => r.id === currentRoleId);
    if (!role) return;
    
    const tbody = document.getElementById('adminsTableBody');
    
    tbody.innerHTML = role.assignedUsers.map((user, index) => `
        <tr>
            <td class="admin-name">${user.name}</td>
            <td class="admin-email">${user.email}</td>
            <td class="text-center">
                <div class="action-buttons">
                    <button class="action-btn unassign" onclick="unassignUser(${index})" title="Unassign">
                        <i class="fa-solid fa-user-minus"></i>
                    </button>
                </div>
            </td>
        </tr>
    `).join('');
}

// Search Roles
document.getElementById('roleSearch')?.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const roleItems = document.querySelectorAll('.role-item');
    
    roleItems.forEach(item => {
        const name = item.querySelector('.role-name').textContent.toLowerCase();
        item.style.display = name.includes(query) ? 'flex' : 'none';
    });
});

// Create New Role
document.getElementById('createRoleBtn')?.addEventListener('click', function() {
    const roleName = prompt('Enter new role name:');
    if (roleName && roleName.trim()) {
        const newRole = {
            id: rolesData.length + 1,
            name: roleName.trim(),
            icon: 'fa-user',
            users: 0,
            permissions: {
                'Content Management': [],
                'User Management': [],
                'Finance & Analytics': []
            },
            assignedUsers: []
        };
        
        rolesData.push(newRole);
        currentRoleId = newRole.id;
        renderRolesList();
        renderRoleDetails();
        
        alert(`Role "${roleName}" created successfully!`);
    }
});

// Delete Role
document.getElementById('deleteRoleBtn')?.addEventListener('click', function() {
    const role = rolesData.find(r => r.id === currentRoleId);
    if (!role) return;
    
    if (role.id === 1) {
        alert('Cannot delete Super Administrator role!');
        return;
    }
    
    if (confirm(`Delete "${role.name}"?\n\nThis will unassign all users from this role. This action cannot be undone.`)) {
        const index = rolesData.findIndex(r => r.id === currentRoleId);
        if (index > -1) {
            rolesData.splice(index, 1);
            currentRoleId = 1;
            renderRolesList();
            renderRoleDetails();
            alert('Role deleted successfully!');
        }
    }
});

// Assign User
document.getElementById('assignUserBtn')?.addEventListener('click', function() {
    const role = rolesData.find(r => r.id === currentRoleId);
    if (!role) return;
    
    const userName = prompt('Enter user name:');
    if (!userName || !userName.trim()) return;
    
    const userEmail = prompt('Enter user email:');
    if (!userEmail || !userEmail.trim()) return;
    
    role.assignedUsers.push({
        name: userName.trim(),
        email: userEmail.trim()
    });
    
    role.users = role.assignedUsers.length;
    renderRolesList();
    renderAssignedUsers();
    
    alert(`User "${userName}" assigned to "${role.name}"!`);
});

// Unassign User
window.unassignUser = function(index) {
    const role = rolesData.find(r => r.id === currentRoleId);
    if (!role) return;
    
    const user = role.assignedUsers[index];
    if (confirm(`Unassign "${user.name}" from this role?`)) {
        role.assignedUsers.splice(index, 1);
        role.users = role.assignedUsers.length;
        renderRolesList();
        renderAssignedUsers();
        alert(`User unassigned successfully!`);
    }
};

// Logout
document.getElementById('logoutBtn')?.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm('Logout from admin panel?')) {
        window.location.href = 'login.html';
    }
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
    renderRolesList();
    renderRoleDetails();
    console.log('Role management page initialized');
});