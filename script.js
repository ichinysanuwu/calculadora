let chart;

function calculateVolume() {
    const length = document.getElementById('length').value;
    const width = document.getElementById('width').value;
    const height = document.getElementById('height').value;
    
    if(length && width && height) {
        const volume = length * width * height;
        updateChart(length, width, height, volume);
    } else {
        alert('Por favor, ingrese todos los valores.');
    }
}

function resetForm() {
    document.getElementById('length').value = '';
    document.getElementById('width').value = '';
    document.getElementById('height').value = '';
    if (chart) {
        chart.destroy();
    }
}

function updateChart(length, width, height, volume) {
    const ctx = document.getElementById('volumeChart').getContext('2d');
    
    if (chart) {
        chart.destroy();
    }
    
    chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Largo (L)', 'Ancho (A)', 'Altura (H)', 'Volumen'],
            datasets: [{
                label: 'Medidas (km)',
                data: [length, width, height, volume],
                backgroundColor: ['#2E7D32', '#66BB6A', '#A5D6A7', '#C8E6C9']
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Include Chart.js Library
document.addEventListener('DOMContentLoaded', (event) => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/chart.js';
    script.onload = () => console.log('Chart.js library loaded.');
    document.head.appendChild(script);
});
