$(function() {
  $('.top-title').hover(
    function() {
      $(this).animate({
        'font-size':'75px'
      }, 300);
    },
    function() {
      $(this).animate({
        'font-size':'50px'
      }, 300);
    }
  )

  $('.top-title-tab').hover(
    function() {
      $(this).animate({
        'font-size':'45px'
      }, 300);
    },
    function() {
      $(this).animate({
        'font-size':'30px'
      }, 300);
    }
  )

  $('.top-title-smart').hover(
    function() {
      $(this).animate({
        'font-size':'30px'
      }, 300);
    },
    function() {
      $(this).animate({
        'font-size':'20px'
      }, 300);
    }
  )

  $('.header-bars').click(function() {
    $('.modal-wrapper').fadeIn();
  })

  $('.modal-wrapper').click(function() {
    $(this).fadeOut();
  })
});
