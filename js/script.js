$(document).ready(function () {

    // 위로가기
    let gotop = $('.gotop');
    gotop.click(function () {
        $('html').animate({
            scrollTop: 0
        }, 200);
    });


    // 헤더
    let header = $('.header');
    let h_logo = $('.h-logo');
    let gnb = $('.gnb')

    // 헤더 고정
    $(window).scroll(function () {
        let temp = $(window).scrollTop();
        if (temp > 195) {
            header.addClass('header-fixed');
            h_logo.addClass('h-logo-fixed');
            gnb.addClass('gnb-fixed');
        } else {
            header.removeClass('header-fixed');
            h_logo.removeClass('h-logo-fixed');
            gnb.removeClass('gnb-fixed');
        }
    });


    // 가능성
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
                            color: 'black'
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

    // Portfolio 탭 메뉴 구현
    let p_button = $('.nav-pills .nav-link');
    let p_contents = $('.tab-pane');
    p_contents.eq(0).show();

    $.each(p_button, function (index, item) {
        $(this).click(function () {
            p_button.removeClass('active');
            p_button.eq(index).addClass('active');
            p_contents.hide();
            p_contents.eq(index).show();
        });
    });

    // Skiils Swiper
    let sw_skills = new Swiper('.sw-skills', {
        loop: true,
        slidesPerView: 4,
        slidesPerGroup: 4,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        spaceBetween: 0,
        navigation: {
            nextEl: '.sw-skills-button-next',
            prevEl: '.sw-skills-button-prev',
        },
    });
    
    
});