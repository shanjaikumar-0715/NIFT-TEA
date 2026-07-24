/* ==========================================================================
   NIFT-TEA CARE Division - Premium Custom JavaScript & Animations
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
    console.log("NIFT-TEA CARE Division website loaded successfully.");

    // Enable smooth scrolling for all internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for Reveal / Fade-In Animations
    const observerOptions = {
        threshold: 0.15
    };

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(element => {
        observer.observe(element);
    });
});