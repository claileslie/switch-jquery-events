$(function() {
  $('.switch>button').click(function() {
    $('body').toggleClass('dark light');
    $(this).toggleClass('off on');
      if ( $(this).hasClass('on') ) {
        $('.status').text("It's so bright in here");
      } else {
        $('.status').text('Hey, who turned off the lights?');
  }
});
});
