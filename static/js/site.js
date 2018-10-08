$(document).ready(function() {
  $("#title-icon").fadeTo(600, 1).promise().done(function () {
    $("#title").fadeTo(800, 1).promise().done(function () {
      $("#title-caption").fadeTo(600, 1).promise().done(function () {
        $("#scroll-icon").animate({'opacity':'1', 'margin-top':'42vh'}, 600);
      });
    });
  });
});

function scrollFromMainPage() {
  $("html, body").animate({'scrollTop': $("#p2").offset().top}, 1000);
  $("#scroll-icon").animate({'opacity': '0'}, 500);
}

$(window).scroll( function() {
  var winBot = $(window).scrollTop() + $(window).height();

  $(".header-bar").each( function(i) {
    var objBot = $(this).offset().top + $(this).outerHeight();

    if (winBot > objBot ) {
      $(this).animate({'opacity':'1'}, 700);
      $("#scroll-icon").animate({'opacity':'0'}, 500);
    }
  });
  $(".row").each( function(i) {
    var objBot = $(this).offset().top + $(this).outerHeight() + i*100 - 100;

    if (winBot > objBot ) {
      $(this).animate({'opacity':'1', 'margin-top':'5vw'}, 700);
    }
  });
});
