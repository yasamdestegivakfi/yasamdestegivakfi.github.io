document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.getElementById('primary-nav');

    if (!navToggle || !navLinks) {
        return;
    }

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        navToggle.innerHTML = navLinks.classList.contains('open')
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

    // Language persistence across pages
    const switchers = document.querySelectorAll('.lang-switch');
    const mains = document.querySelectorAll('main[data-lang]');
    const i18nNodes = document.querySelectorAll('[data-i18n][data-lang]');

    function applyLang(lang) {
        // toggle mains
        mains.forEach((m) => {
            m.style.display = (m.getAttribute('data-lang') === lang) ? '' : 'none';
        });
        // toggle footer/links texts
        i18nNodes.forEach((el) => {
            el.style.display = (el.getAttribute('data-lang') === lang) ? '' : 'none';
        });
        // set html lang
        document.documentElement.setAttribute('lang', lang);
        // active state on all switchers
        switchers.forEach((sw) => {
            sw.querySelectorAll('a').forEach((a) => {
                a.classList.toggle('active', a.getAttribute('data-lang') === lang);
            });
        });
    }

    const storedLang = localStorage.getItem('lang') || 'tr';
    applyLang(storedLang);

    switchers.forEach((sw) => {
        sw.addEventListener('click', (e) => {
            const t = e.target;
            if (t.tagName !== 'A') return;
            e.preventDefault();
            const lang = t.getAttribute('data-lang');
            localStorage.setItem('lang', lang);
            applyLang(lang);
        });
    });
});
