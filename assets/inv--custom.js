$(document).ready(function() {
  
//   Footer Menu 
  setTimeout(function() {
    $('.inv--footer-main .inv--logo-section').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 6,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll:2
          }
        }
      ]
    });
  }, 200);
  
//   Footer 767 DropDown Menu JS
  
  $('.inv--linklist h4').click(function(){
    if ($(window).width() <= 767) {
      $('.inv--linklist-col ul').hide();
      $('.inv--linklist h4').unbind().click(function(){
        $('.inv--linklist h4').not($(this)).removeClass('active');
        $('.inv--linklist-col ul').not($(this).siblings('.inv--linklist-col ul')).slideUp();
        $(this).siblings('.inv--linklist-col ul').slideToggle();
        $(this).toggleClass('active');
      });
    }
  });
  
//   Latest Blog News
  
    setTimeout(function() {
    $('.inno-latest-news section.inv-latest-news div#inv-blog').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      prevArrow: '<button class="slide-arrow prev-arrow"><svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.64301 4.99988L6.00901 8.36588L5.04749 9.3274L0.719971 4.99988L5.04749 0.672363L6.00901 1.63388L2.64301 4.99988Z" fill="#777777"/></svg></button>',
      nextArrow: '<button class="slide-arrow next-arrow"></button>',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll:2
          }
        }
      ]
    });
  }, 200);

});