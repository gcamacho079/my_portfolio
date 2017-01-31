$(document).ready(function() {
  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();

    var target = this.hash; // Stores hash as target
    var $target = $(target); // Turns target dest. into a jQuery object

    $('html, body').animate({
      'scrollTop': $target.offset().top
    }, 1200, 'swing', function() { 
      window.location.hash = target;
    });


  });
});
