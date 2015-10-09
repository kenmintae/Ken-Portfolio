$(document).ready(function() {
  var $menu = $('.three-stripes');
  var $line = $('.three-stripes span');

  $menu.click(function() {
    $line.toggleClass('open');
    $menu.toggleClass('rotate');
    setTimeout(function() {
      $('.wrapper').toggleClass('open');
      $('.side-menu').toggleClass('open');
    }, 500);
  });
});
