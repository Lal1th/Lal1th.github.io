document.addEventListener("DOMContentLoaded", function() {

    // --- 1. Scroll-Based Section Animation (The Wix Effect) ---
    
    const sections = document.querySelectorAll('.data-section');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3 
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            const navLink = document.querySelector(`#navbar a[href="#${entry.target.id}"]`);
            
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active-link'));
                if (navLink) {
                    navLink.classList.add('active-link');
                }
            }
        });
    };

    const sectionObserver = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- 2. Headshot Fade Effect on Scroll ---
    const headshot = document.getElementById('headshot-fade');
    const heroSection = document.getElementById('hero');

    if (headshot && heroSection) {
        window.addEventListener('scroll', () => {
            // Get the scroll position relative to the hero section top
            const scrollPos = window.scrollY;
            
            // Define the fade distance (e.g., fade over the first 300px of scrolling)
            const fadeDistance = 400; 

            // Calculate opacity: 1 - (scroll position / fade distance)
            let opacity = 1 - (scrollPos / fadeDistance);

            // Clamp opacity between 0 and 1
            opacity = Math.max(0, Math.min(1, opacity));
            
            headshot.style.opacity = opacity;
        });
    }

    // --- 3. Confetti Effect (Now targeting Keyera Hackathon) ---
    // The ID is now simply 'confetti-trigger' from the new HTML
    const confettiTrigger = document.getElementById('confetti-trigger');

    if (confettiTrigger) {
        confettiTrigger.addEventListener('mouseover', function() {
            // Trigger confetti 
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
