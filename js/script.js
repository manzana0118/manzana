$(document).ready(function () {
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['책임감', '성실성', '도전정신', '전문성', '소통능력'],
        datasets: [{
            label: 'possibility',
            data: [95, 90, 89, 78, 85],
            backgroundColor: [
                'rgba(252, 136, 123, 0.2)',
            ],
            borderColor: [
                'rgba(252, 136, 123, 1)',
            ],
            borderWidth: 2
        }]
    },
    options: {
            responsive: true,
            layout: {
                padding: 50,
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                r: {
                    pointLabels: {
                        font: {
                            size: 16,
                            family: 'Noto Sans KR',
                            color: 'black',
                            weight: 'bold',
                        }
                    },
                    beginAtZero: true,
                }
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 100,
                stepSize: 5, 
                maxTicksLimit: 10, 
                display: false
            }
        }
    });
});
