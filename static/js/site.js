$(document).ready(function() {
  $("#group-title").fadeTo(800, 1).promise().done(function() {
    $("#navbar").fadeTo(800, 1).promise().done(function() {
      $("#trackr").fadeTo(800, 1);
    });
  });
});
