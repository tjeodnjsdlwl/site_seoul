$(function(){
  // slick slide
    $('#slider1 .visual-slider').slick({
      slide: 'div',
      autoplay : true,
      infinite : true,
      prevArrow : $('#slider1 .btn-prev'),
      nextArrow : $('#slider1 .btn-next'),
      dots: true,
      dotsClass: 'pagination',
      customPaging: function (slider, i) {
        return  (i + 1) + '/' + slider.slideCount;
    }
    });
    $('#slider2 .visual-slider').slick({
      slide: 'div',
      autoplay : true,
      infinite : true,
      prevArrow : $('#slider2 .btn-prev'),
      nextArrow : $('#slider2 .btn-next'),
      dots: true,
      dotsClass: 'pagination',
      customPaging: function (slider, i) {
        return  (i + 1) + '/' + slider.slideCount;
    }
    });

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


    // sc-visual tab
    $('.sc-visual .group-slide .btn-tab').click(function(e){
      e.preventDefault();
      const data = $(this).data('target');
      $(this).addClass('active').siblings().removeClass('active');
      $(`${data}`).addClass('visible').siblings().removeClass('visible');
    });

    // play button
    $('.btn-play').click(function(e) {
      e.preventDefault();
      $(this).removeClass('active').siblings('.btn-pause').addClass('active');
      $('.visual-slider, .sidebanner-slider').slick('slickPlay');
    });
    $('.btn-pause').click(function(e) {
      e.preventDefault();
      $(this).removeClass('active').siblings('.btn-play').addClass('active');
      $('.visual-slider, .sidebanner-slider').slick('slickPause');
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