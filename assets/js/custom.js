$(function(){

    $('#teee').keydown(function(){
        console.log($(this).val());
    })

    $('.link-go').click(function(e){
        e.preventDefault();
        const link = $('#selectLang').val();
        window.open(link);
    })

    const slide1 = $('.slide1 .visual-slider');
    const slide2 = $('.slide2 .visual-slider');

    $('.sc-visual .title').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');

        if($(this).parent().hasClass('slide1')){
            // 주요뉴스
            
            slide2.slick('slickPause') //2번정지

            if($('.slide1 .btn-control').hasClass('pause')){
                //자동재생
                slide1.slick('slickPlay') 
            }else{
                //일시정지
                slide1.slick('slickPause') 
            }
            
        }else{
            // 시민참여
            slide1.slick('slickPause') //1번지

            if($('.slide2 .btn-control').hasClass('pause')){
                //자동재생
                slide2.slick('slickPlay') 
            }else{
                //일시정지
                slide2.slick('slickPause') 
            }
        }
    })

    





  // slick slide
  slide1.slick({
      slide: 'div',
      autoplay : true,
      infinite : true,
      prevArrow : $('.slide1 .prev'),
      nextArrow : $('.slide1 .next'),
      dots: true,
      dotsClass: 'pagination',
      customPaging: function (slider, i) {
            return  (i + 1) + '/' + slider.slideCount;
        }
    });

    slide2.slick({
      slide: 'div',
      autoplay : true,
      infinite : true,
      prevArrow : $('.slide2 .prev'),
      nextArrow : $('.slide2 .next'),
      dots: true,
      dotsClass: 'pagination',
      customPaging: function (slider, i) {
            return  (i + 1) + '/' + slider.slideCount;
        }
    });
    slide2.slick('slickPause')


    $('.slide1 .btn-control').click(function(e){
        e.preventDefault();
        if($(this).hasClass('pause')){
            // 자동재생중 상태를 클릭하는경우
            $(this).text('자동재생 적용').removeClass('pause')
            slide1.slick('slickPause')
        }else{
            // 정지 상태를 클릭하는경우
            $(this).text('자동재생 정지').addClass('pause')
            slide1.slick('slickPlay')
        }
    })
    $('.slide2 .btn-control').click(function(e){
        e.preventDefault();
        if($(this).hasClass('pause')){
            // 자동재생중 상태를 클릭하는경우
            $(this).text('자동재생 적용').removeClass('pause')
            slide2.slick('slickPause')
        }else{
            // 정지 상태를 클릭하는경우
            $(this).text('자동재생 정지').addClass('pause')
            slide2.slick('slickPlay')
        }
    })





    /**
     * 접근성 & UX 개선 (키보드 사용할때만 포커스 나오게)
     *
     * @version 1.0.0
     * @since 2022-01-16
     * @author 이사님 (Nico)
     */

    $('.sidebanner-slider').slick({
      slide: 'div',
      autoplay : true,
      infinite : true,
      slidesToShow: 3,
      prevArrow : $('.sc-sidebanner .btn-prev'),
      nextArrow : $('.sc-sidebanner .btn-next'),
      dots: true,
      dotsClass: 'pagination',
      customPaging: function (slider, i) {
        return  (i + 1) + '/' + slider.slideCount;
    }
    });








    

    // sc-site button tab
    $('.sc-site .btn-tab').click(function(e){
      e.preventDefault();
      const sub = $(this).siblings('.site-list-area');
      $(this).parent().toggleClass('active').siblings().removeClass('active');


      if (sub.css('display') === 'none') {
        $('.site-list-area').stop().slideUp();
        $(sub).stop().slideToggle();
      } else {
        $(sub).stop().slideUp();
      }
    });


    $('.site-list-area .site-item:first-child a').keydown(function(e){
        if(e.keyCode === 9 && e.shiftKey){
            $('.site-list-area').stop().slideUp();
        }
    })

    $('.site-list-area .site-item:last-child a').keydown(function(e){
        if(e.keyCode === 9 && !e.shiftKey){
            $('.site-list-area').stop().slideUp();
        }

    })






    // btn-top
    let lastScroll = 0;
    $(window).scroll(function() {
      const curr = $(this).scrollTop();

      if(curr > lastScroll) {
        $('#btn-top').addClass('visible');
      } else {
        $('#btn-top').removeClass('visible');
      }
      lastScroll = curr;
    });
    $('#btn-top').click(function() {
      $('html, body').animate({scrollTop: '0'}, 500);
    });
})