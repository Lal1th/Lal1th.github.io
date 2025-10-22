// Wait for the entire page to load before running scripts
document.addEventListener("DOMContentLoaded", function() {

    // --- 1. Dynamic Chart Logic (using Chart.js) ---
    
    // Get the 'canvas' element from the HTML
    const ctx = document.getElementById('skillChart');

    if (ctx) {
        // Function to generate simulated data
        function generateChartData() {
            let dataCloud = [];
            let dataML = [];
            let dataAnalytics = [];
            let cumulativeCloud = 1;
            let cumulativeML = 3;
            let cumulativeAnalytics = 2;

            // Generate 20 data points
            for (let i = 0; i < 20; i++) {
                cumulativeCloud += Math.random() * 0.5 + 0.1;
                cumulativeML += Math.random() * 0.5 + 0.2;
                cumulativeAnalytics += Math.random() * 0.5 + 0.15;
                dataCloud.push(cumulativeCloud);
                dataML.push(cumulativeML);
                dataAnalytics.push(cumulativeAnalytics);
            }

            return {
                labels: new Array(20).fill('').map((_, i) => `Day ${i + 1}`), // Simple labels
                datasets: [
                    {
                        label: 'Cloud',
                        data: dataCloud,
                        borderColor: '#3b82f6', // Blue
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        fill: true,
                        tension: 0.3
                    },
                    {
                        label: 'ML/AI',
                        data: dataML,
                        borderColor: '#10b981', // Green
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        fill: true,
                        tension: 0.3
                    },
                    {
                        label: 'Analytics',
                        data: dataAnalytics,
                        borderColor: '#f97316', // Orange
                        backgroundColor: 'rgba(249, 115, 22, 0.1)',
                        fill: true,
                        tension: 0.3
                    }
                ]
            };
        }

        // Create the chart
        new Chart(ctx, {
            type: 'line',
            data: generateChartData(),
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            color: '#f0f6fc' // Light legend text
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: '#8b949e' // Light axis labels
                        },
                        grid: {
                            color: '#30363d' // Dim grid lines
                        }
                    },
                    y: {
                        ticks: {
                            color: '#8b949e' // Light axis labels
                        },
                        grid: {
                            color: '#30363d' // Dim grid lines
                        }
                    }
                }
            }
        });
    }

    // --- 2. Confetti Effect Logic (using canvas-confetti) ---
    
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
