$(document).ready(function() {
  $("#title-icon").fadeTo(600, 1).promise().done(function () {
    $("#title").fadeTo(800, 1).promise().done(function () {
      $("#title-caption").fadeTo(600, 1).promise().done(function () {
        $("#scroll-icon").animate({'opacity':'1', 'margin-top':'42vh'}, 600);
      });
    });
  });
});
