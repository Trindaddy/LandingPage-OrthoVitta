document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Adiciona sombra ao header ao rolar a página
    const header = document.querySelector('.navbar');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shadow-sm');
            } else {
                header.classList.remove('shadow-sm');
            }
        });
    }

    // 2. Fecha o menu de navegação responsivo ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-link');
    const navCollapse = document.querySelector('.navbar-collapse');
    if (navCollapse) {
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navCollapse, { toggle: false });
                    bsCollapse.hide();
                }
            });
        });
    }

    // 3. Implementa a rolagem suave para links âncora
    // Rolagem suave para âncoras — ignora href="#" ou vazios
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return; // ignora links vazios ou somente '#'
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // 4. Lógica do Modo Escuro (Dark Mode)
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    const setTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeIcon.classList.remove('bi-moon-stars-fill');
            themeIcon.classList.add('bi-sun-fill');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-stars-fill');
            localStorage.setItem('theme', 'light');
        }
    };

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
        const currentTheme = localStorage.getItem('theme');
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
        });
    }

    // Define o tema inicial com base no localStorage ou no padrão 'light'
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
});
