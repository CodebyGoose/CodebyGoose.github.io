document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[class*="-section"]');
    let isScrolling = false;
    let currentSectionIndex = 0;

    function scrollToSection(index) {
        if (index >= 0 && index < sections.length) {
            isScrolling = true;
            currentSectionIndex = index;
            
            // Remove active class from all sections
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to target section
            sections[index].classList.add('active');
            sections[index].scrollIntoView({ behavior: 'smooth' });
            
            navLinks.forEach(link => link.classList.remove('active'));
            navLinks[index].classList.add('active');

            setTimeout(() => isScrolling = false, 800);
        }
    }

    // Handle mouse wheel
    window.addEventListener('wheel', (e) => {
        e.preventDefault();
        if (!isScrolling) {
            if (e.deltaY > 0) {
                scrollToSection(currentSectionIndex + 1);
            } else {
                scrollToSection(currentSectionIndex - 1);
            }
        }
    }, { passive: false });

    // Handle click navigation
    navLinks.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToSection(index);
        });
    });

    // Initial active section
    scrollToSection(0);

    // Make first section active on load
    sections[0].classList.add('active');
});
