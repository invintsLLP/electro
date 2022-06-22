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

});