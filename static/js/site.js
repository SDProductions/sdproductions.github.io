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
  $("html, body").animate({'scrollTop': $("#p2").offset().top}, 1500);
  $("#scroll-icon").animate({'opacity': '0'}, 500);
}

$(window).scroll( function() {
  var winBot = $(window).scrollTop() + $(window).height();

  $(".header-bar").each( function(i) {
    var objBot = $(this).offset().top + $(this).outerHeight();

    if (winBot > objBot) {
      $(this).animate({'opacity':'1'}, 700);
      $("#scroll-icon").animate({'opacity':'0'}, 500);
    }
  });

  $(".row").each( function(i) {
    var objBot = $(this).offset().top + $(this).outerHeight() - (i%3)*+100;

    if (winBot > objBot) {
      $(this).animate({'opacity':'1', 'margin-top':'5vw'}, 700);
    }
  });

  $(".left-block").each( function(i) {
    var objBot = $(this).offset().top + $(this).outerHeight();

    if (winBot > objBot - 200) {
      $(this).animate({'opacity':'1', 'margin-left':'0'}, 700);
    }
  });

  $(".right-block").each( function(i) {
    var objBot = $(this).offset().top + $(this).outerHeight();

    if (winBot > objBot - 200) {
      $(this).animate({'opacity':'1', 'margin-right':'11vw'}, 700);
    }
  });
});
