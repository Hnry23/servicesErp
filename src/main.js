const contentArea = document.getElementById('content');
let currentLang = 'en';

const translations = {
  en: {
    nav_dashboard: "Dashboard",
    nav_operators: "Operators",
    nav_schedule: "Schedule",
    nav_services: "Services",
    nav_finance: "Quotes & Invoices",
    search_placeholder: "Search for jobs, operators...",
    admin_role: "Administrator",
    monthly_revenue: "Monthly Revenue",
    active_jobs: "Active Jobs",
    online_operators: "Online Operators",
    avg_rating: "Avg. Service Rating",
    revenue_diff: "12% from last month",
    urgent_priority: "4 urgent priority",
    onsite_now: "8 on-site now",
    based_on_reviews: "Based on 240 reviews",
    live_activity: "Live Activity Feed",
    view_all: "View All",
    service_type: "Service Type",
    operator: "Operator",
    location: "Location",
    status: "Status",
    time: "Time",
    onsite: "On-site",
    transit: "Transit",
    high_priority: "High Priority",
    operator_management: "Operator Management",
    add_operator: "+ Add New Operator",
    busy: "Busy",
    active: "Active",
    service_schedule: "Service Schedule",
    calendar_placeholder: "Interactive Calendar View would be loaded here.",
    services_pricing: "Services & Pricing",
    category: "Category",
    service_details: "Service Details",
    base_price: "Base Price",
    multiplier: "Priority Multiplier",
    quotes_invoices: "Quotes & Invoices",
    invoice_id: "Invoice ID",
    client: "Client",
    amount: "Amount",
    due_date: "Due Date",
    paid: "Paid",
    pending: "Pending"
  },
  es: {
    nav_dashboard: "Panel de Control",
    nav_operators: "Operarios",
    nav_schedule: "Agenda",
    nav_services: "Servicios",
    nav_finance: "Cotizaciones y Facturas",
    search_placeholder: "Buscar trabajos, operarios...",
    admin_role: "Administrador",
    monthly_revenue: "Ingresos Mensuales",
    active_jobs: "Trabajos Activos",
    online_operators: "Operarios Online",
    avg_rating: "Calificación Promedio",
    revenue_diff: "12% desde el mes pasado",
    urgent_priority: "4 prioridades urgentes",
    onsite_now: "8 en el sitio ahora",
    based_on_reviews: "Basado en 240 reseñas",
    live_activity: "Actividad en Vivo",
    view_all: "Ver Todo",
    service_type: "Tipo de Servicio",
    operator: "Operario",
    location: "Ubicación",
    status: "Estado",
    time: "Hora",
    onsite: "En sitio",
    transit: "En tránsito",
    high_priority: "Alta Prioridad",
    operator_management: "Gestión de Operarios",
    add_operator: "+ Añadir Operario",
    busy: "Ocupado",
    active: "Activo",
    service_schedule: "Agenda de Servicios",
    calendar_placeholder: "La vista de calendario interactivo se cargaría aquí.",
    services_pricing: "Servicios y Precios",
    category: "Categoría",
    service_details: "Detalles del Servicio",
    base_price: "Precio Base",
    multiplier: "Multiplicador Prioridad",
    quotes_invoices: "Cotizaciones y Facturas",
    invoice_id: "ID de Factura",
    client: "Cliente",
    amount: "Monto",
    due_date: "Fecha de Vencimiento",
    paid: "Pagado",
    pending: "Pendiente"
  }
};

function t(key) {
  return translations[currentLang][key] || key;
}

const views = {
  dashboard: () => `
    <div class="stats-grid">
      <div class="stat-card">
        <p class="stat-label">${t('monthly_revenue')}</p>
        <p class="stat-value">$24,500</p>
        <p style="color: #4ade80; font-size: 0.8rem;"><i class="fas fa-arrow-up"></i> ${t('revenue_diff')}</p>
      </div>
      <div class="stat-card">
        <p class="stat-label">${t('active_jobs')}</p>
        <p class="stat-value">18</p>
        <p style="color: var(--accent-primary); font-size: 0.8rem;">${t('urgent_priority')}</p>
      </div>
      <div class="stat-card">
        <p class="stat-label">${t('online_operators')}</p>
        <p class="stat-value">12 / 15</p>
        <p style="color: #4ade80; font-size: 0.8rem;">${t('onsite_now')}</p>
      </div>
      <div class="stat-card">
        <p class="stat-label">${t('avg_rating')}</p>
        <p class="stat-value">4.9</p>
        <p style="color: #facc15; font-size: 0.8rem;"><i class="fas fa-star"></i> ${t('based_on_reviews')}</p>
      </div>
    </div>

    <div class="data-card">
      <div class="card-header">
        <h3>${t('live_activity')}_</h3>
        <button style="background: transparent; border: 1px solid var(--glass-border); color: var(--text-primary); padding: 0.5rem 1rem; border-radius: 8px;">${t('view_all')}</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>${t('service_type')}</th>
            <th>${t('operator')}</th>
            <th>${t('location')}</th>
            <th>${t('status')}</th>
            <th>${t('time')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Electrical Repair</td>
            <td>Marcus Chen</td>
            <td>452 Oak St</td>
            <td><span class="badge badge-active">${t('onsite')}</span></td>
            <td>10:30 AM</td>
          </tr>
          <tr>
            <td>Pipe Installation</td>
            <td>Sarah Johnson</td>
            <td>128 Maple Ave</td>
            <td><span class="badge badge-pending">${t('transit')}</span></td>
            <td>11:15 AM</td>
          </tr>
          <tr>
            <td>Emergency Roof Fix</td>
            <td>David Miller</td>
            <td>89 Forest Rd</td>
            <td><span class="badge badge-alert">${t('high_priority')}</span></td>
            <td>11:45 AM</td>
          </tr>
          <tr>
            <td>Interior Painting</td>
            <td>Alex Rivera</td>
            <td>33 Bay Side</td>
            <td><span class="badge badge-active">${t('onsite')}</span></td>
            <td>09:00 AM</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  operators: () => `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
      <h2>${t('operator_management')}</h2>
      <button style="background: var(--accent-primary); border: none; color: white; padding: 0.75rem 1.5rem; border-radius: 10px; cursor: pointer; font-weight: 600;">${t('add_operator')}</button>
    </div>
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
      ${renderOperatorCard("Marcus Chen", "Electrician", "Active", "electrician.png")}
      ${renderOperatorCard("Sarah Johnson", "Plumber", "Active", "plumbing.png")}
      ${renderOperatorCard("Alex Rivera", "Painter", "Active", "painting.png")}
      ${renderOperatorCard("Elena Gilbert", "Carpenter", "Busy", "electrician.png")}
    </div>
  `,
  schedule: () => `
    <h2>${t('service_schedule')}</h2>
    <div class="data-card" style="height: 500px; display: flex; align-items: center; justify-content: center; color: var(--text-secondary); flex-direction: column;">
      <i class="fas fa-calendar-days" style="font-size: 4rem; margin-bottom: 1rem; color: var(--accent-primary);"></i>
      <p>${t('calendar_placeholder')}</p>
    </div>
  `,
  services: () => `
    <h2>${t('services_pricing')}</h2>
    <div class="data-card">
      <table>
        <thead>
          <tr>
            <th>${t('category')}</th>
            <th>${t('service_details')}</th>
            <th>${t('base_price')}</th>
            <th>${t('multiplier')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Electrical</td>
            <td>Panel Upgrade / Rewiring</td>
            <td>$450.00</td>
            <td>1.5x</td>
          </tr>
          <tr>
            <td>Plumbing</td>
            <td>Leak Detection & Repair</td>
            <td>$120.00</td>
            <td>1.2x</td>
          </tr>
          <tr>
            <td>Carpentry</td>
            <td>Custom Shelving Installation</td>
            <td>$300.00</td>
            <td>1.0x</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
  finance: () => `
    <h2>${t('quotes_invoices')}</h2>
    <div class="data-card">
       <table>
        <thead>
          <tr>
            <th>${t('invoice_id')}</th>
            <th>${t('client')}</th>
            <th>${t('amount')}</th>
            <th>${t('status')}</th>
            <th>${t('due_date')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>#INV-8821</td>
            <td>Green Valley Estates</td>
            <td>$1,240.00</td>
            <td><span class="badge badge-active">${t('paid')}</span></td>
            <td>Feb 12, 2026</td>
          </tr>
           <tr>
            <td>#INV-8822</td>
            <td>Harbor Bay Condos</td>
            <td>$3,500.00</td>
            <td><span class="badge badge-pending">${t('pending')}</span></td>
            <td>Feb 20, 2026</td>
          </tr>
        </tbody>
      </table>
    </div>
  `
};

function renderOperatorCard(name, role, status, img) {
  const statusKey = status.toLowerCase();
  return `
    <div class="stat-card" style="display: flex; align-items: center; gap: 1.5rem;">
      <div style="width: 60px; height: 60px; border-radius: 15px; overflow: hidden; border: 2px solid var(--accent-primary); background: var(--bg-primary); display: flex; align-items: center; justify-content: center;">
        <img src="${img}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" style="width: 100%; height: 100%; object-fit: cover;" />
        <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; font-weight: bold; color: var(--accent-primary); font-size: 1.2rem;">${name[0]}</div>
      </div>
      <div>
        <h4 style="margin-bottom: 0.25rem;">${name}</h4>
        <p style="color: var(--text-secondary); font-size: 0.85rem; margin-bottom: 0.5rem;">${role}</p>
        <span class="badge badge-${statusKey}">${t(statusKey)}</span>
      </div>
    </div>
  `;
}

function switchView(viewName) {
  if (views[viewName]) {
    contentArea.innerHTML = views[viewName]();

    // Update active state in sidebar
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
      if (item.dataset.view === viewName) {
        item.classList.add('active');
      }
    });
  }
}

function updateStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);

    // Preserve icon if it exists
    const icon = el.querySelector('i');
    if (icon) {
      // Clear all text nodes but keep the icon
      Array.from(el.childNodes).forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          el.removeChild(node);
        }
      });
      el.appendChild(document.createTextNode(' ' + translation));
    } else {
      el.innerText = translation;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    el.placeholder = t(key);
  });
}

// Language Toggle Logic
window.setLanguage = (lang) => {
  currentLang = lang;
  updateStaticTranslations();
  const currentView = document.querySelector('.nav-item.active').dataset.view;
  switchView(currentView);

  // Update toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
};

// Initial View
switchView('dashboard');
updateStaticTranslations();

// Event Listeners for Nav
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', () => {
    switchView(item.dataset.view);
  });
});
