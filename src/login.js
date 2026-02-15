import { config } from './config.js';

const translations = {
    en: {
        login_title: "Welcome Back",
        login_subtitle: "Please enter your details to login.",
        nav_login: "Login to Dashboard",
        form_email: "Email Address",
        form_password: "Password",
        back_to_home: "← Back to Homepage",
        login_error: "Invalid credentials. Please try again.",
        api_error: "Connection error. Please check your config."
    },
    es: {
        login_title: "Bienvenido de nuevo",
        login_subtitle: "Por favor, introduce tus datos para iniciar sesión.",
        nav_login: "Entrar al Panel",
        form_email: "Correo Electrónico",
        form_password: "Contraseña",
        back_to_home: "← Volver al inicio",
        login_error: "Credenciales inválidas. Inténtelo de nuevo.",
        api_error: "Error de conexión. Verifique su configuración."
    }
};

let currentLang = localStorage.getItem('site_lang') || 'en';

function t(key) {
    return translations[currentLang][key] || key;
}

function updateTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.innerText = t(key);
    });
}

const loginForm = document.getElementById('login-form');
const errorDiv = document.getElementById('login-error');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    errorDiv.style.display = 'none';

    try {
        console.log(`Attempting login at: ${config.apiUrl}/login`);
        const response = await fetch(`${config.apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            // Store token and redirect
            localStorage.setItem('auth_token', data.token || 'mock-token');
            window.location.href = 'dashboard.html';
        } else {
            errorDiv.innerText = t('login_error');
            errorDiv.style.display = 'block';
        }
    } catch (error) {
        console.error('Login error:', error);
        errorDiv.innerText = t('api_error');
        errorDiv.style.display = 'block';
    }
});

document.addEventListener('DOMContentLoaded', updateTranslations);
