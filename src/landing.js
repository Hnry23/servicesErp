const translations = {
    en: {
        nav_features: "Features",
        nav_pricing: "Pricing",
        nav_login: "Login to Dashboard",
        nav_join: "Join Now",
        hero_title: "Scalable Management for",
        hero_title_accent: "Service Professionals",
        hero_subtitle: "The all-in-one platform to control your operators, schedule jobs, and automate invoicing. Built for electricians, plumbers, painters, and more.",
        hero_cta_primary: "Start Free Trial",
        hero_cta_secondary: "See How It Works",
        features_header: "Everything you need to",
        features_header_accent: "scale",
        features_subtitle: "Built by professionals, for professionals.",
        feature_1_title: "Operator Control",
        feature_1_desc: "Real-time tracking and assignment for your entire fleet of specialists.",
        feature_2_title: "Smart Scheduling",
        feature_2_desc: "AI-driven dispatching to minimize travel time and maximize daily jobs.",
        feature_3_title: "Automated Finance",
        feature_3_desc: "Generate quotes and invoices instantly. Integrated payment tracking.",
        pricing_header: "Simple,",
        pricing_header_accent: "Transparent",
        pricing_header_end: " Pricing",
        pricing_subtitle: "Choose the plan that fits your business stage.",
        plan_free: "Free",
        plan_pro: "Pro",
        plan_advanced: "Advanced",
        most_popular: "Most Popular",
        price_free: "€0",
        price_pro: "€15",
        price_advanced: "€45",
        per_month: "/mo",
        feat_operators_2: "Up to 2 Operators",
        feat_operators_10: "Up to 10 Operators",
        feat_operators_unlimited: "Unlimited Operators",
        feat_basic_jobs: "Basic Job Scheduling",
        feat_priority_dispatch: "Priority Dispatching",
        feat_support_247: "24/7 Premium Support",
        feat_invoices_5: "5 Invoices / month",
        feat_invoices_unlimited: "Unlimited Invoices",
        feat_branding: "Custom Branding",
        feat_whitelabel: "Custom White-labeling",
        feat_quotes: "Quotes & Estimates",
        feat_api: "API Access",
        feat_analytics: "Advanced Analytics",
        feat_multioffice: "Multi-office Support",
        feat_reports: "Advanced Financial Reports",
        btn_get_started: "Get Started",
        btn_go_pro: "Go Pro",
        btn_scale_now: "Scale Now",
        footer_rights: "All rights reserved.",
        reg_title: "Ready to transform your business?",
        reg_subtitle: "Join thousands of professionals who have optimized their workflow with ServicesErp.",
        reg_trust_1: "Secure Data",
        reg_trust_2: "Quick Setup",
        reg_trust_3: "24/7 Support",
        form_name: "Full Name",
        form_company: "Company Name",
        form_email: "Email Address",
        form_terms: "By joining, you agree to our Terms and Conditions."
    },
    es: {
        nav_features: "Características",
        nav_pricing: "Precios",
        nav_login: "Ir al Panel",
        nav_join: "Unirse ahora",
        hero_title: "Gestión escalable para",
        hero_title_accent: "Profesionales de Servicios",
        hero_subtitle: "La plataforma todo en uno para controlar a tus operarios, programar trabajos y automatizar la facturación. Hecha para electricistas, fontaneros, pintores y más.",
        hero_cta_primary: "Prueba Gratis",
        hero_cta_secondary: "Cómo funciona",
        features_header: "Todo lo que necesitas para",
        features_header_accent: "crecer",
        features_subtitle: "Creado por profesionales, para profesionales.",
        feature_1_title: "Control de Operarios",
        feature_1_desc: "Seguimiento y asignación en tiempo real para toda tu flota de especialistas.",
        feature_2_title: "Agenda Inteligente",
        feature_2_desc: "Despacho impulsado por IA para minimizar el tiempo de viaje y maximizar trabajos diarios.",
        feature_3_title: "Finanzas Automáticas",
        feature_3_desc: "Genera presupuestos y facturas al instante. Seguimiento de pagos integrado.",
        pricing_header: "Precios",
        pricing_header_accent: "Simples y Transparentes",
        pricing_header_end: " ",
        pricing_subtitle: "Elige el plan que mejor se adapte a tu etapa de negocio.",
        plan_free: "Gratis",
        plan_pro: "Pro",
        plan_advanced: "Avanzado",
        most_popular: "Más Popular",
        price_free: "€0",
        price_pro: "€15",
        price_advanced: "€45",
        per_month: "/mes",
        feat_operators_2: "Hasta 2 Operarios",
        feat_operators_10: "Hasta 10 Operarios",
        feat_operators_unlimited: "Operarios Ilimitados",
        feat_basic_jobs: "Agenda Básica",
        feat_priority_dispatch: "Despacho Prioritario",
        feat_support_247: "Soporte Premium 24/7",
        feat_invoices_5: "5 Facturas / mes",
        feat_invoices_unlimited: "Facturas Ilimitadas",
        feat_branding: "Marca Personalizada",
        feat_whitelabel: "Marca Blanca",
        feat_quotes: "Presupuestos y Estimaciones",
        feat_api: "Acceso a API",
        feat_analytics: "Analítica Avanzada",
        feat_multioffice: "Soporte Multi-oficina",
        feat_reports: "Informes Financieros Avanzados",
        btn_get_started: "Empezar",
        btn_go_pro: "Hazte Pro",
        btn_scale_now: "Crecer Ahora",
        footer_rights: "Todos los derechos reservados.",
        reg_title: "¿Listo para transformar tu negocio?",
        reg_subtitle: "Únete a miles de profesionales que han optimizado su flujo de trabajo con ServicesErp.",
        reg_trust_1: "Datos Seguros",
        reg_trust_2: "Configuración Rápida",
        reg_trust_3: "Soporte 24/7",
        form_name: "Nombre Completo",
        form_company: "Nombre de la Empresa",
        form_email: "Correo Electrónico",
        form_terms: "Al unirse, acepta nuestros Términos y Condiciones."
    }
};

let currentLang = localStorage.getItem('site_lang') || 'en';

function t(key) {
    return translations[currentLang][key] || key;
}

function updateTranslations() {
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

    // Handle elements with nested spans or specific HTML structures
    if (currentLang === 'es') {
        // Specific tweaks for Spanish grammar if needed
    }
}

window.setLanguage = (lang) => {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    updateTranslations();

    // Update toggle buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });
};

// Carousel logic
function initHeroCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;

    let currentSlide = 0;

    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    updateTranslations();
    initHeroCarousel();
});
