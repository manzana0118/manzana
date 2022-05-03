$(document).ready(function () {

    AOS.init();

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
    let gnb = $('.gnb');
    let hamburger = $('.hamburger-menu');

    // 헤더 고정
    $(window).scroll(function () {
        let temp = $(window).scrollTop();
        if (temp > 195) {
            header.addClass('header-fixed');
            h_logo.addClass('h-logo-fixed');
            gnb.addClass('gnb-fixed');
            hamburger.addClass('hamburger-menu-fixed');
        } else {
            header.removeClass('header-fixed');
            h_logo.removeClass('h-logo-fixed');
            gnb.removeClass('gnb-fixed');
            hamburger.removeClass('hamburger-menu-fixed');
        }
    });

    // 헤더 반응형
    const toggleBtn = $('.hamburger-menu');
    const nav = $('.nav');
    
    toggleBtn.click(function(){
        nav.toggleClass('active');
    });


    // 가능성
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: ['책임감', '성실성', '도전정신', '전문성', '소통능력'],
            datasets: [{
                label: 'possibility',
                data: [95, 90, 89, 83, 85],
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
            responsive: false,
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
                            size: 15,
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


    // Skills 슬라이드
    $(document).ready(function () {
        slideAct();
    })
    
    function slideAct(){
        var view = 0; //보이는 슬라이드 개수
        var realInx = 0; //현재 페이지
        var swiper = undefined;
    
        //디바이스 체크
        var winWChk = '';
        $(window).on('load resize', function (){
            var winW = window.innerWidth;
            if(winWChk != 'mo' && winW <= 768){ //모바일 버전으로 전환할 때
                slideList()
                winWChk = 'mo';
            }
            if(winWChk != 'pc' && winW >= 769){ //PC 버전으로 전환할 때
                slideList()
                winWChk = 'pc';
            }
        }) 
        
        function slideList(){
            //리스트 초기화
            if ($('.slider .list').parent().hasClass('swiper-slide')){
                $('.slider .swiper-slide-duplicate').remove();
                $('.slider .list').unwrap('swiper-slide');
            }
    
            //보이는 슬라이드 개수 설정
            if (window.innerWidth > 768){ //PC 버전
                view = 8;
            }else{ //mobile 버전
                view = 2;
            }
    
            //리스트 그룹 생성 (swiper-slide element 추가)
            var num = 0;
            $('.slider').find('.list').each(function(i) {
                $(this).addClass('list'+(Math.floor((i+view)/view)));
                num = Math.floor((i+view)/view)
            }).promise().done(function(){
                for (var i = 1; i < num+1; i++) {
                    $('.slider').find('.list'+i+'').wrapAll('<div class="swiper-slide"></div>');
                    $('.slider').find('.list'+i+'').removeClass('list'+i+'');
                }
            });
    
            sliderStart()
        }
    
        //슬라이드 시작
        function sliderStart(){
            //슬라이드 초기화
            if(swiper != undefined) {
                swiper.destroy();
                swiper == undefined;
            }
    
            //슬라이드 실행
            swiper = new Swiper('.slider .inner', {
                slidesPerView: 1,
                initialSlide :Math.floor(realInx/view),
                resistanceRatio : 0,
                loop:true,
                navigation: {
                    nextEl: $('.sw-skills-button-next'),
                    prevEl: $('.sw-skills-button-prev'),
                },
                on: {
                    slideChange: function () {
                        realInx = this.realIndex*view
                    }
                },
            });
        }
    }
});