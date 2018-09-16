$(document).ready(function() {
  $("#title-icon").fadeTo(1000, 1).promise().done(function () {
    $("#title").fadeTo(1000, 1).promise().done(function () {
      $("#title-caption").fadeTo(1000, 1).promise().done(function () {
        $("#msg").fadeTo(1000, 1);
      });
    });
  });
});
