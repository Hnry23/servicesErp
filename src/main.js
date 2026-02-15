const contentArea = document.getElementById('content');
let currentLang = 'en';
let currentClientType = 'final';
let currentView = 'dashboard';
let selectedOperatorId = null;
let selectedInvoiceId = null;

window.viewOperatorDetails = (id) => {
  selectedOperatorId = id;
  switchView('operator_details');
};

window.viewInvoiceDetails = (id) => {
  selectedInvoiceId = id;
  switchView('invoice_details');
};

const priceListData = [
  {
    category: "cat_electrical",
    service: "srv_panel",
    prices: {
      final: "$450.00",
      insurance: "$380.00",
      property: "$410.00"
    },
    multiplier: "1.5x"
  },
  {
    category: "cat_plumbing",
    service: "srv_leak",
    prices: {
      final: "$120.00",
      insurance: "$95.00",
      property: "$105.00"
    },
    multiplier: "1.2x"
  },
  {
    category: "cat_carpentry",
    service: "srv_shelving",
    prices: {
      final: "$300.00",
      insurance: "$250.00",
      property: "$275.00"
    },
    multiplier: "1.0x"
  }
];

const operatorsData = [
  { id: 1, name: "Marcus Chen", role: "Electrician", status: "Active", img: "electrician.png", email: "marcus@serviceserp.com", phone: "+1 555-0101", rating: 4.8, jobsCompleted: 156, experience: "8 years", skills: ["Wiring", "Panel Upgrades", "Residential"], recentJobs: ["452 Oak St", "128 Maple Ave"] },
  { id: 2, name: "Sarah Johnson", role: "Plumber", status: "Active", img: "plumbing.png", email: "sarah@serviceserp.com", phone: "+1 555-0102", rating: 4.9, jobsCompleted: 203, experience: "10 years", skills: ["Leak Detection", "Pipe Installation", "Gas Fitting"], recentJobs: ["33 Bay Side", "89 Forest Rd"] },
  { id: 3, name: "David Miller", role: "Roofer", status: "Active", img: "painting.png", email: "david@serviceserp.com", phone: "+1 555-0105", rating: 4.6, jobsCompleted: 120, experience: "7 years", skills: ["Roof Repair", "Emergency Sealing", "Gutter Maintenance"], recentJobs: ["89 Forest Rd", "12 Forest Rd"] },
  { id: 4, name: "Alex Rivera", role: "Painter", status: "Active", img: "painting.png", email: "alex@serviceserp.com", phone: "+1 555-0103", rating: 4.7, jobsCompleted: 98, experience: "5 years", skills: ["Interior Painting", "Wall Textures", "Color Matching"], recentJobs: ["12 Forest Rd", "452 Oak St"] },
  { id: 5, name: "Elena Gilbert", role: "Carpenter", status: "Busy", img: "electrician.png", email: "elena@serviceserp.com", phone: "+1 555-0104", rating: 5.0, jobsCompleted: 45, experience: "12 years", skills: ["Custom Shelving", "Cabinetry", "Roofing"], recentJobs: ["67 Pine Dr"] },
];

const scheduleData = [
  { id: 1, task: "task_roof_insp", operatorId: 3, start: 0, duration: 2, dependencies: [] },
  { id: 2, task: "task_leak_det", operatorId: 2, start: 2, duration: 3, dependencies: [1] },
  { id: 3, task: "task_panel_upg", operatorId: 1, start: 0, duration: 4, dependencies: [] },
  { id: 4, task: "task_rewiring", operatorId: 1, start: 4, duration: 4, dependencies: [3] },
  { id: 5, task: "task_painting", operatorId: 4, start: 8, duration: 3, dependencies: [2, 4] },
  { id: 6, task: "task_shelving", operatorId: 5, start: 5, duration: 2, dependencies: [] },
];

const invoicesData = [
  {
    id: "INV-8821",
    client: "Green Valley Estates",
    email: "billing@greenvalley.com",
    address: "123 Green Lane, CA 90210",
    date: "Feb 12, 2026",
    dueDate: "Feb 26, 2026",
    amount: 1240.00,
    status: "paid",
    items: [
      { desc: "Electrical Panel Upgrade", qty: 1, price: 850.00 },
      { desc: "Emergency Wiring Repair", qty: 3, price: 130.00 }
    ]
  },
  {
    id: "INV-8822",
    client: "Harbor Bay Condos",
    email: "accounting@harborbay.net",
    address: "456 Bay View Dr, CA 90211",
    date: "Feb 15, 2026",
    dueDate: "Mar 01, 2026",
    amount: 3500.00,
    status: "pending",
    items: [
      { desc: "Full Building Water Inspection", qty: 1, price: 1500.00 },
      { desc: "Main Pipe Replacement", qty: 1, price: 2000.00 }
    ]
  }
];

const translations = {
  en: {
    nav_dashboard: "Dashboard",
    nav_operators: "Operators",
    nav_schedule: "Schedule",
    nav_services: "Services",
    nav_price_lists: "Price Lists",
    nav_all_services: "Service Catalog",
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
    pending: "Pending",
    client_type: "Client Type",
    type_final: "Final Client",
    type_insurance: "Insurance Company",
    type_property: "Property Admin",
    cat_electrical: "Electrical",
    cat_plumbing: "Plumbing",
    cat_carpentry: "Carpentry",
    srv_panel: "Panel Upgrade / Rewiring",
    srv_leak: "Leak Detection & Repair",
    srv_shelving: "Custom Shelving Installation",
    operator_details: "Operator Details",
    contact_info: "Contact Information",
    performance: "Performance",
    experience: "Experience",
    skills: "Specialized Skills",
    recent_jobs: "Recent Jobs",
    jobs_completed: "Jobs Completed",
    years_exp: "Years Experience",
    back_to_list: "Back to List",
    send_message: "Send Message",
    assign_job: "Assign Job",
    task_roof_insp: "Roof Inspection",
    task_leak_det: "Leak Detection",
    task_panel_upg: "Panel Upgrade",
    task_rewiring: "Full Rewiring",
    task_painting: "Interior Painting",
    task_shelving: "Custom Shelving",
    mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri",
    invoice_details: "Invoice Details",
    bill_to: "Bill To",
    invoice_date: "Invoice Date",
    item_desc: "Description",
    item_qty: "Qty",
    item_price: "Price",
    item_total: "Total",
    subtotal: "Subtotal",
    tax: "Tax (10%)",
    total_amount: "Total Amount",
    print_invoice: "Print / PDF",
    download: "Download"
  },
  es: {
    nav_dashboard: "Panel de Control",
    nav_operators: "Operarios",
    nav_schedule: "Agenda",
    nav_services: "Servicios",
    nav_price_lists: "Listas de Precios",
    nav_all_services: "Catálogo de Servicios",
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
    pending: "Pendiente",
    client_type: "Tipo de Cliente",
    type_final: "Cliente Final",
    type_insurance: "Cía. de Seguros",
    type_property: "Admin. de Fincas",
    cat_electrical: "Electricidad",
    cat_plumbing: "Fontanería",
    cat_carpentry: "Carpintería",
    srv_panel: "Mejora de Panel / Cableado",
    srv_leak: "Detección y Reparación de Fugas",
    srv_shelving: "Instalación de Estanterías",
    operator_details: "Detalles del Operario",
    contact_info: "Información de Contacto",
    performance: "Rendimiento",
    experience: "Experiencia",
    skills: "Habilidades Especializadas",
    recent_jobs: "Trabajos Recientes",
    jobs_completed: "Trabajos Completados",
    years_exp: "Años de Experiencia",
    back_to_list: "Volver a la Lista",
    send_message: "Enviar Mensaje",
    assign_job: "Asignar Trabajo",
    task_roof_insp: "Inspección de Tejado",
    task_leak_det: "Detección de Fugas",
    task_panel_upg: "Mejora de Panel",
    task_rewiring: "Cableado Completo",
    task_painting: "Pintura Interior",
    task_shelving: "Estantería a Medida",
    mon: "Lun", tue: "Mar", wed: "Mié", thu: "Jue", fri: "Vie",
    invoice_details: "Detalles de la Factura",
    bill_to: "Facturar a",
    invoice_date: "Fecha de Factura",
    item_desc: "Descripción",
    item_qty: "Cant.",
    item_price: "Precio",
    item_total: "Total",
    subtotal: "SubTotal",
    tax: "IVA (10%)",
    total_amount: "Total",
    print_invoice: "Imprimir / PDF",
    download: "Descargar"
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
            <th>${t('invoice_id')}</th>
            <th>${t('client')}</th>
            <th>${t('location')}</th>
            <th>${t('status')}</th>
            <th>${t('time')}</th>
          </tr>
        </thead>
        <tbody>
          ${invoicesData.map(inv => `
            <tr class="clickable-row" onclick="viewInvoiceDetails('${inv.id}')" style="cursor: pointer;">
              <td>#${inv.id}</td>
              <td class="clickable-name">${inv.client}</td>
              <td>${inv.address.split(',')[0]}</td>
              <td><span class="badge badge-${inv.status === 'paid' ? 'active' : 'pending'}">${t(inv.status)}</span></td>
              <td>${inv.date.split(',')[0]}</td>
            </tr>
          `).join('')}
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
      ${operatorsData.map(op => renderOperatorCard(op)).join('')}
    </div>
  `,
  operator_details: () => {
    const op = operatorsData.find(o => o.id === selectedOperatorId) || operatorsData[0];
    return `
      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
        <button onclick="switchView('operators')" style="background: transparent; border: 1px solid var(--glass-border); color: var(--text-primary); padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer;">
          <i class="fas fa-arrow-left"></i> ${t('back_to_list')}
        </button>
        <h2>${t('operator_details')}</h2>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 2rem;">
        <div class="stat-card" style="text-align: center; padding: 2rem;">
          <div style="width: 120px; height: 120px; border-radius: 30px; overflow: hidden; border: 4px solid var(--accent-primary); margin: 0 auto 1.5rem; background: var(--bg-primary); display: flex; align-items: center; justify-content: center;">
            <img src="${op.img}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" style="width: 100%; height: 100%; object-fit: cover;" />
            <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; font-weight: bold; color: var(--accent-primary); font-size: 3rem;">${op.name[0]}</div>
          </div>
          <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">${op.name}</h3>
          <p style="color: var(--text-secondary); margin-bottom: 1rem;">${op.role}</p>
          <span class="badge badge-${op.status.toLowerCase()}">${t(op.status.toLowerCase())}</span>
          
          <div style="margin-top: 2rem; display: flex; flex-direction: column; gap: 1rem;">
            <button style="background: var(--accent-primary); color: white; border: none; padding: 0.8rem; border-radius: 10px; cursor: pointer; font-weight: 600;">${t('assign_job')}</button>
            <button style="background: transparent; border: 1px solid var(--accent-primary); color: var(--accent-primary); padding: 0.8rem; border-radius: 10px; cursor: pointer; font-weight: 600;">${t('send_message')}</button>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 2rem;">
          <div class="data-card" style="padding: 1.5rem;">
            <h4 style="margin-bottom: 1.5rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 0.5rem;">${t('contact_info')}</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;">
              <div>
                <p style="color: var(--text-secondary); font-size: 0.8rem;">Email</p>
                <p style="font-weight: 500;">${op.email}</p>
              </div>
              <div>
                <p style="color: var(--text-secondary); font-size: 0.8rem;">Phone</p>
                <p style="font-weight: 500;">${op.phone}</p>
              </div>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
            <div class="stat-card" style="padding: 1.2rem;">
              <p style="color: var(--text-secondary); font-size: 0.8rem;">${t('avg_rating')}</p>
              <p style="font-size: 1.4rem; font-weight: 700; color: #facc15;"><i class="fas fa-star"></i> ${op.rating}</p>
            </div>
            <div class="stat-card" style="padding: 1.2rem;">
              <p style="color: var(--text-secondary); font-size: 0.8rem;">${t('jobs_completed')}</p>
              <p style="font-size: 1.4rem; font-weight: 700; color: var(--accent-primary);">${op.jobsCompleted}</p>
            </div>
            <div class="stat-card" style="padding: 1.2rem;">
              <p style="color: var(--text-secondary); font-size: 0.8rem;">${t('experience')}</p>
              <p style="font-size: 1.4rem; font-weight: 700;">${op.experience}</p>
            </div>
          </div>

          <div class="data-card" style="padding: 1.5rem;">
            <h4 style="margin-bottom: 1rem;">${t('skills')}</h4>
            <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
              ${op.skills.map(skill => `<span style="background: var(--bg-primary); padding: 0.4rem 0.8rem; border-radius: 6px; font-size: 0.85rem; border: 1px solid var(--glass-border);">${skill}</span>`).join('')}
            </div>
          </div>

          <div class="data-card" style="padding: 1.5rem;">
            <h4 style="margin-bottom: 1rem;">${t('recent_jobs')}</h4>
            <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.8rem;">
              ${op.recentJobs.map(job => `
                <li style="display: flex; align-items: center; gap: 0.8rem;">
                  <i class="fas fa-check-circle" style="color: #4ade80;"></i>
                  <span>${job}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  },
  schedule: () => {
    const timeLabels = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

    return `
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
        <h2>${t('service_schedule')}</h2>
        <div style="display: flex; gap: 1rem;">
           <span class="badge badge-active">${t('mon')} 16</span>
           <span class="badge" style="background: rgba(255,255,255,0.05); color: var(--text-secondary);">${t('tue')} 17</span>
           <span class="badge" style="background: rgba(255,255,255,0.05); color: var(--text-secondary);">${t('wed')} 18</span>
        </div>
      </div>

      <div class="gantt-wrapper">
        <div class="gantt-header">
          <div style="color: var(--text-secondary); font-size: 0.8rem; font-weight: 600;">Service / Job</div>
          ${timeLabels.map(label => `<div class="gantt-time-label">${label}</div>`).join('')}
        </div>
        
        <div class="gantt-body">
          ${scheduleData.map(item => {
      const op = operatorsData.find(o => o.id === item.operatorId);
      const startPct = (item.start / 12) * 100;
      const widthPct = (item.duration / 12) * 100;
      const hasDep = item.dependencies.length > 0;

      return `
              <div class="gantt-row">
                <div class="task-info">
                  <span>${t(item.task)}</span>
                  <span class="task-operator" style="cursor: pointer; color: var(--accent-primary);" onclick="viewOperatorDetails(${op.id})">${op.name}</span>
                </div>
                <div class="gantt-bar-container">
                  <div class="gantt-bar ${hasDep ? 'has-dependency' : ''}" 
                       style="left: ${startPct}%; width: ${widthPct}%;"
                       title="${t(item.task)} - ${op.name}">
                    ${t(item.task)}
                  </div>
                </div>
              </div>
            `;
    }).join('')}
        </div>
      </div>
    `;
  },
  price_lists: () => `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
      <h2>${t('nav_price_lists')}</h2>
      <div class="language-switcher price-tabs" style="margin: 0;">
        <button class="lang-btn ${currentClientType === 'final' ? 'active' : ''}" onclick="setClientType('final')">${t('type_final')}</button>
        <button class="lang-btn ${currentClientType === 'insurance' ? 'active' : ''}" onclick="setClientType('insurance')">${t('type_insurance')}</button>
        <button class="lang-btn ${currentClientType === 'property' ? 'active' : ''}" onclick="setClientType('property')">${t('type_property')}</button>
      </div>
    </div>
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
          ${priceListData.map(item => `
            <tr>
              <td>${t(item.category)}</td>
              <td>${t(item.service)}</td>
              <td style="font-weight: 600; color: var(--accent-primary);">${item.prices[currentClientType]}</td>
              <td>${item.multiplier}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `,
  all_services: () => `
    <h2>${t('nav_all_services')}</h2>
    <div class="data-card">
       <div style="padding: 2rem; text-align: center; color: var(--text-secondary);">
         <i class="fas fa-toolbox" style="font-size: 3rem; margin-bottom: 1rem;"></i>
         <p>Full service catalog management would be displayed here.</p>
       </div>
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
          ${invoicesData.map(inv => `
            <tr class="clickable-row" onclick="viewInvoiceDetails('${inv.id}')" style="cursor: pointer;">
              <td style="color: var(--accent-primary); font-weight: 600;">#${inv.id}</td>
              <td>${inv.client}</td>
              <td>$${inv.amount.toLocaleString()}</td>
              <td><span class="badge badge-${inv.status === 'paid' ? 'active' : 'pending'}">${t(inv.status)}</span></td>
              <td>${inv.dueDate}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `,
  invoice_details: () => {
    const inv = invoicesData.find(i => i.id === selectedInvoiceId) || invoicesData[0];
    const subtotal = inv.items.reduce((sum, item) => sum + (item.qty * item.price), 0);
    const tax = subtotal * 0.1;
    const total = subtotal + tax;

    return `
      <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 2rem;">
        <button onclick="switchView('finance')" style="background: transparent; border: 1px solid var(--glass-border); color: var(--text-primary); padding: 0.5rem 1rem; border-radius: 8px; cursor: pointer;">
          <i class="fas fa-arrow-left"></i> ${t('back_to_list')}
        </button>
        <h2>${t('invoice_details')} - #${inv.id}</h2>
      </div>

      <div class="data-card" style="padding: 3rem; max-width: 900px; margin: 0 auto; background: var(--bg-secondary); border: 1px solid var(--glass-border);">
        <div style="display: flex; justify-content: space-between; margin-bottom: 3rem; border-bottom: 1px solid var(--glass-border); padding-bottom: 2rem;">
          <div>
            <div class="logo" style="margin-bottom: 1rem;">
              <i class="fas fa-bolt"></i>
              <span style="color: var(--text-primary); -webkit-text-fill-color: var(--text-primary);">ServicesErp</span>
            </div>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">123 Business Way, Suite 100<br>Modern City, MC 12345</p>
          </div>
          <div style="text-align: right;">
            <h1 style="font-size: 2.5rem; margin-bottom: 0.5rem; color: var(--accent-primary);">INVOICE</h1>
            <p style="font-weight: 600;">#${inv.id}</p>
            <span class="badge badge-${inv.status === 'paid' ? 'active' : 'pending'}">${t(inv.status).toUpperCase()}</span>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; margin-bottom: 3rem;">
          <div>
            <p style="color: var(--text-secondary); font-size: 0.8rem; text-transform: uppercase; margin-bottom: 0.8rem; letter-spacing: 1px;">${t('bill_to')}</p>
            <h4 style="font-size: 1.2rem; margin-bottom: 0.5rem;">${inv.client}</h4>
            <p style="color: var(--text-secondary); line-height: 1.5;">${inv.address}<br>${inv.email}</p>
          </div>
          <div style="text-align: right;">
            <p style="color: var(--text-secondary); font-size: 0.8rem; text-transform: uppercase; margin-bottom: 0.8rem; letter-spacing: 1px;">${t('invoice_date')}</p>
            <p style="font-weight: 500; margin-bottom: 1rem;">${inv.date}</p>
            <p style="color: var(--text-secondary); font-size: 0.8rem; text-transform: uppercase; margin-bottom: 0.8rem; letter-spacing: 1px;">${t('due_date')}</p>
            <p style="font-weight: 500; color: #f87171;">${inv.dueDate}</p>
          </div>
        </div>

        <table style="margin-bottom: 3rem;">
          <thead>
            <tr>
              <th style="background: rgba(255,255,255,0.02); padding: 1.2rem;">${t('item_desc')}</th>
              <th style="background: rgba(255,255,255,0.02); padding: 1.2rem; text-align: center;">${t('item_qty')}</th>
              <th style="background: rgba(255,255,255,0.02); padding: 1.2rem; text-align: right;">${t('item_price')}</th>
              <th style="background: rgba(255,255,255,0.02); padding: 1.2rem; text-align: right;">${t('item_total')}</th>
            </tr>
          </thead>
          <tbody>
            ${inv.items.map(item => `
              <tr>
                <td style="padding: 1.2rem; font-weight: 500;">${item.desc}</td>
                <td style="padding: 1.2rem; text-align: center;">${item.qty}</td>
                <td style="padding: 1.2rem; text-align: right;">$${item.price.toFixed(2)}</td>
                <td style="padding: 1.2rem; text-align: right; font-weight: 600;">$${(item.qty * item.price).toFixed(2)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>

        <div style="display: flex; justify-content: flex-end; border-top: 1px solid var(--glass-border); padding-top: 2rem;">
          <div style="width: 300px; display: flex; flex-direction: column; gap: 1rem;">
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-secondary);">${t('subtotal')}</span>
              <span style="font-weight: 500;">$${subtotal.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-secondary);">${t('tax')}</span>
              <span style="font-weight: 500;">$${tax.toFixed(2)}</span>
            </div>
            <div style="display: flex; justify-content: space-between; padding-top: 1rem; border-top: 1px solid var(--glass-border); margin-top: 0.5rem;">
              <span style="font-weight: 700; font-size: 1.2rem;">${t('total_amount')}</span>
              <span style="font-weight: 800; font-size: 1.4rem; color: var(--accent-primary);">$${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
            </div>
          </div>
        </div>

        <div style="margin-top: 4rem; display: flex; gap: 1rem; justify-content: center;">
          <button style="background: var(--accent-primary); color: white; border: none; padding: 1rem 2rem; border-radius: 12px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 0.8rem; box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);">
             <i class="fas fa-print"></i> ${t('print_invoice')}
          </button>
          <button style="background: transparent; border: 1px solid var(--glass-border); color: var(--text-primary); padding: 1rem 2rem; border-radius: 12px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 0.8rem;">
             <i class="fas fa-download"></i> ${t('download')}
          </button>
        </div>
      </div>
    `;
  },
};

function renderOperatorCard(op) {
  const { id, name, role, status, img } = op;
  const statusKey = status.toLowerCase();
  return `
    <div class="stat-card" style="display: flex; align-items: center; gap: 1.5rem; cursor: pointer; transition: transform 0.2s;" onclick="viewOperatorDetails(${id})">
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

window.switchView = function (viewName) {
  if (views[viewName]) {
    currentView = viewName;
    contentArea.innerHTML = views[viewName]();

    // Update active state in sidebar
    document.querySelectorAll('.nav-item, .sub-nav-item').forEach(item => {
      item.classList.remove('active');
      let viewToHighlight = viewName;
      if (viewName === 'operator_details') viewToHighlight = 'operators';
      if (viewName === 'invoice_details') viewToHighlight = 'finance';

      if (item.dataset.view === viewToHighlight) {
        item.classList.add('active');

        // If it's a sub-item, also make the parent active/expanded
        const parentNavItem = item.closest('.nav-item-wrapper')?.querySelector('.nav-item');
        if (parentNavItem) {
          parentNavItem.classList.add('active');
          item.closest('.nav-item-wrapper').classList.add('expanded');
        }
      }
    });
  }
};

function updateStaticTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);

    // Preserve everything that isn't a text node (icons, chevrons, etc.)
    let hasIcons = el.querySelector('i');
    if (hasIcons) {
      // Find and remove existing text nodes
      Array.from(el.childNodes).forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          el.removeChild(node);
        }
      });
      // Add the new translated text at the appropriate position
      // For nav items, we usually want text AFTER the first icon but BEFORE the chevron
      const firstIcon = el.querySelector('i');
      if (firstIcon && firstIcon.nextSibling) {
        el.insertBefore(document.createTextNode(' ' + translation + ' '), firstIcon.nextSibling);
      } else {
        el.appendChild(document.createTextNode(' ' + translation + ' '));
      }
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
  switchView(currentView);

  // Update language toggle buttons in the header/navbar only
  document.querySelectorAll('.language-switcher:not(.price-tabs) .lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
};

// Initial View
switchView('dashboard');
updateStaticTranslations();

// Global setters
window.setClientType = (type) => {
  currentClientType = type;
  switchView('price_lists');
};

// Event Listeners for Nav
document.querySelectorAll('.nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    const wrapper = item.closest('.nav-item-wrapper');
    if (wrapper && wrapper.querySelector('.sub-nav')) {
      wrapper.classList.toggle('expanded');
    } else if (item.dataset.view) {
      switchView(item.dataset.view);
    }
  });
});

document.querySelectorAll('.sub-nav-item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    switchView(item.dataset.view);
  });
});
