document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[class*="-section"]');

    // Smooth scroll on click
    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('data-section');
            const target = document.querySelector(`.${id}`);
            target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Observe sections to set active state
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            const id = Array.from(entry.target.classList).find(c => c.endsWith('-section'));
            const link = document.querySelector(`.nav-link[data-section="${id}"]`);
            if (entry.isIntersecting) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link?.classList.add('active');
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.5 });

    sections.forEach((section) => observer.observe(section));

    // Mobile nav toggle (shared across pages)
    const toggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.navbar ul');
    toggle?.addEventListener('click', () => {
        const expanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!expanded));
        navList?.classList.toggle('show');
    });
});
