// Mobile Menu Toggle
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Cookie Banner Management
function setCookie(name, value, days) {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function acceptCookies() {
    setCookie('cookiesAccepted', 'true', 365);
    document.getElementById('cookieBanner').style.display = 'none';
}

// Check if cookie consent is needed
window.onload = function() {
    if (!getCookie('cookiesAccepted')) {
        document.getElementById('cookieBanner').classList.add('show');
    }
}

// Contact Form Handling
async function handleSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Basic validation
    if (!data.name || !data.email || !data.subject || !data.message) {
        alert('Lütfen tüm alanları doldurun.');
        return false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        alert('Lütfen geçerli bir email adresi girin.');
        return false;
    }

    // Simulate form submission
    try {
        // Here you would typically send the data to a server
        // For demo purposes, we'll just show a success message
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate network request
        
        alert('Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.');
        form.reset();
        return false;
    } catch (error) {
        alert('Bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        return false;
    }
}