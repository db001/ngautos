$(document).ready(function() {

  $('.more-about').on('click', function() {
    $('#services').fadeOut("fast");
    $('#find').fadeOut("fast");
    $('#about').fadeIn("fast");
  });

  $('.more-services').on('click', function() {
    $('#about').fadeOut("fast");
    $('#find').fadeOut("fast");
    $('#services').fadeIn("fast");
  });

  $('.more-find').on('click', function() {
    $('#about').fadeOut("fast");
    $('#services').fadeOut("fast");
    $('#find').fadeIn("fast");
  });

});
