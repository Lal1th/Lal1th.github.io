// Wait for the entire page to load before running scripts
document.addEventListener("DOMContentLoaded", function() {

    // --- Confetti Effect Logic (using canvas-confetti) ---
    
    // Get the 'p' tag element from the HTML
    const confettiTrigger = document.getElementById('confetti-trigger');

    if (confettiTrigger) {
        // Add a 'mouseover' event listener
        confettiTrigger.addEventListener('mouseover', function() {
            // Trigger the confetti!
            confetti({
                particleCount: 150,
                spread: 180,
                origin: { y: 0.6 }
            });
        });
    }

});
