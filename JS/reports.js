// LAUNCHPOINT - REPORTS

// Sample Reports Data
const reportsData = [
    { 
        id: 1, 
        name: 'Q4 2024 Sales Summary', 
        type: 'Sales Report', 
        date: '2024-12-31 23:59', 
        generatedBy: 'Admin', 
        status: 'complete' 
    },
    { 
        id: 2, 
        name: 'November User Engagement', 
        type: 'User Activity', 
        date: '2024-12-01 09:00', 
        generatedBy: 'Admin', 
        status: 'complete' 
    },
    { 
        id: 3, 
        name: 'Weekly Revenue Analysis', 
        type: 'Custom', 
        date: '2024-11-28 14:30', 
        generatedBy: 'Jane Doe', 
        status: 'processing' 
    },
    { 
        id: 4, 
        name: 'October Product Performance', 
        type: 'Product Performance', 
        date: '2024-11-01 10:15', 
        generatedBy: 'Admin', 
        status: 'complete' 
    }
];

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

// Format Date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// Render Reports Table
function renderReportsTable() {
    const tbody = document.getElementById('reportsTableBody');
    
    tbody.innerHTML = reportsData.map(report => {
        const statusClass = `status-${report.status}`;
        const statusLabel = report.status.charAt(0).toUpperCase() + report.status.slice(1);
        
        return `
            <tr>
                <td class="report-name">${report.name}</td>
                <td>${report.type}</td>
                <td>${formatDate(report.date)}</td>
                <td>${report.generatedBy}</td>
                <td>
                    <span class="status-badge ${statusClass}">
                        <span class="status-dot"></span>
                        ${statusLabel}
                    </span>
                </td>
                <td class="text-center">
                    <div class="action-buttons">
                        <button class="action-btn view" onclick="viewReport(${report.id})" 
                            ${report.status === 'processing' ? 'disabled' : ''} 
                            title="View Report">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                        <button class="action-btn download" onclick="downloadReport(${report.id})" 
                            ${report.status === 'processing' ? 'disabled' : ''} 
                            title="Download">
                            <i class="fa-solid fa-download"></i>
                        </button>
                        <button class="action-btn delete" onclick="deleteReport(${report.id})" 
                            title="Delete">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// View Report
window.viewReport = function(reportId) {
    const report = reportsData.find(r => r.id === reportId);
    if (report) {
        alert(`Opening Report: ${report.name}\n\nType: ${report.type}\nGenerated: ${formatDate(report.date)}`);
    }
};

// Download Report
window.downloadReport = function(reportId) {
    const report = reportsData.find(r => r.id === reportId);
    if (report) {
        alert(`Downloading: ${report.name}\n\nFormat: PDF\nSize: 2.3 MB`);
    }
};

// Delete Report
window.deleteReport = function(reportId) {
    const report = reportsData.find(r => r.id === reportId);
    if (report && confirm(`Delete "${report.name}"?\n\nThis action cannot be undone.`)) {
        const index = reportsData.findIndex(r => r.id === reportId);
        if (index > -1) {
            reportsData.splice(index, 1);
            renderReportsTable();
            alert('Report deleted successfully!');
        }
    }
};

// Report Form Submission
const reportForm = document.getElementById('reportForm');
reportForm?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const reportType = document.getElementById('reportType').value;
    const dateRange = document.getElementById('dateRange').value;
    const format = document.getElementById('format').value;
    
    const submitBtn = this.querySelector('.btn-primary');
    const originalContent = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating...';
    submitBtn.disabled = true;
    
    // Simulate report generation
    setTimeout(() => {
        const reportTypeLabels = {
            'sales': 'Sales Report',
            'users': 'User Activity',
            'products': 'Product Performance',
            'revenue': 'Revenue Analysis',
            'custom': 'Custom Report'
        };
        
        const newReport = {
            id: reportsData.length + 1,
            name: `${reportTypeLabels[reportType]} - ${new Date().toLocaleDateString()}`,
            type: reportTypeLabels[reportType],
            date: new Date().toISOString(),
            generatedBy: 'Admin',
            status: 'complete'
        };
        
        reportsData.unshift(newReport);
        renderReportsTable();
        
        submitBtn.innerHTML = originalContent;
        submitBtn.disabled = false;
        
        alert(`Report generated successfully!\n\nName: ${newReport.name}\nFormat: ${format.toUpperCase()}\nDate Range: ${dateRange}`);
        
        this.reset();
    }, 2000);
});

// Template Cards
document.querySelectorAll('.template-card').forEach(card => {
    card.addEventListener('click', function() {
        const template = this.getAttribute('data-template');
        const reportType = document.getElementById('reportType');
        
        // Map template to report type
        const templateMap = {
            'sales': 'sales',
            'users': 'users',
            'products': 'products',
            'revenue': 'revenue'
        };
        
        reportType.value = templateMap[template];
        
        // Scroll to form
        document.querySelector('.create-section').scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
        
        // Highlight the form briefly
        const card = document.querySelector('.create-section .card');
        card.style.boxShadow = '0 0 0 3px rgba(65, 105, 225, 0.3)';
        setTimeout(() => {
            card.style.boxShadow = '';
        }, 1000);
    });
});

// Save Template
document.getElementById('saveTemplateBtn')?.addEventListener('click', function() {
    const reportType = document.getElementById('reportType').value;
    const dateRange = document.getElementById('dateRange').value;
    const format = document.getElementById('format').value;
    
    alert(`Template Saved!\n\nType: ${reportType}\nDate Range: ${dateRange}\nFormat: ${format}\n\nYou can access this template from "My Templates"`);
});

// Schedule Report
document.getElementById('scheduleReportBtn')?.addEventListener('click', function() {
    alert('Schedule Report\n\nFeatures:\n• Daily Reports\n• Weekly Summaries\n• Monthly Analytics\n• Custom Schedule\n\nComing soon!');
});

// Export All
document.getElementById('exportAllBtn')?.addEventListener('click', function() {
    const completeReports = reportsData.filter(r => r.status === 'complete');
    alert(`Export All Reports\n\nTotal Reports: ${completeReports.length}\nFormat: ZIP Archive\nEstimated Size: ${(completeReports.length * 2.3).toFixed(1)} MB`);
});

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
    renderReportsTable();
    console.log('Reports page initialized');
});
