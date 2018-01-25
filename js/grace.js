$(window).scroll(function(){
  var fixed = $("div.toggle");
  
  var fixed_position = $("div.toggle").offset().top;
  var fixed_height = $("div.toggle").height();

  var toCross_position = $(".slide-2").offset().top;
  var toCross_height = $(".slide-2").height();

  if (fixed_position + fixed_height  < toCross_position) {
    fixed.removeClass('green');
  } else if (fixed_position > toCross_position + toCross_height) {
    //fixed.removeClass('greden');
  } else {
    fixed.addClass('green');
  }

});

(function($) {
  $('.toggle button').click(function(e) {
    $('.navigation').addClass('visible');
  });

  $('.navigation button').click(function(e) {
    $('.navigation').removeClass('visible');
  });

  $('.navigation li a').click(function(e) {
    $('.navigation').removeClass('visible');
  });

  $('.grace a').click(function(e) {
    $('.navigation').removeClass('visible');
  });
})(jQuery)