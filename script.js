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
});
