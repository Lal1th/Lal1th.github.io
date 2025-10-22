document.addEventListener("DOMContentLoaded", function() {

    // --- 1. Scroll-Based Section Animation (The Wix Effect) ---
    
    // Select all sections to be observed
    const sections = document.querySelectorAll('.data-section');

    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.3 // Trigger when 30% of the section is visible
    };

    // The callback function executed when intersection occurs
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            const navLink = document.querySelector(`#navbar a[href="#${entry.target.id}"]`);
            
            if (entry.isIntersecting) {
                // Section is now visible, apply active class for animation
                entry.target.classList.add('active');

                // Highlight the active link in the navbar
                document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active-link'));
                if (navLink) {
                    navLink.classList.add('active-link');
                }
            } else {
                // Section has scrolled out of view (optional: remove active class)
                // entry.target.classList.remove('active'); 
            }
        });
    };

    // Create the observer and start observing each section
    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        sectionObserver.observe(section);
    });


    // --- 2. Confetti Effect for Hackathon Win ---
    const confettiTrigger = document.getElementById('confetti-trigger-hackathon');

    if (confettiTrigger) {
        confettiTrigger.addEventListener('mouseover', function() {
            // Trigger confetti with a spread from the top of the element
            confetti({
                particleCount: 100,
                spread: 90,
                origin: { 
                    x: (confettiTrigger.getBoundingClientRect().left + confettiTrigger.offsetWidth / 2) / window.innerWidth, 
                    y: confettiTrigger.getBoundingClientRect().top / window.innerHeight 
                }
            });
        });
    }
    
});
