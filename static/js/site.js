$(document).ready(function() {
  $("#group-title").fadeTo(800, 1).promise().done(function() {
    $("#navbar").fadeTo(800, 1).promise().done(function() {
      $("#trackr").fadeTo(800, 1);
    });
  });
});

function trackr() {
  $("#webventures").fadeTo(300, 0);
  document.getElementById("webventures").style.display = "none";
  $("#cynobroad").fadeTo(300, 0);
  document.getElementById("cynobroad").style.display = "none";
  $("#networkvisualizer").fadeTo(300, 0);
  document.getElementById("networkvisualizer").style.display = "none";
  $("#trackr").fadeTo(400, 1);
  return false;
}

function cynobroad() {
  $("#trackr").fadeTo(300, 0);
  document.getElementById("trackr").style.display = "none";
  $("#webventures").fadeTo(300, 0);
  document.getElementById("webventures").style.display = "none";
  $("#networkvisualizer").fadeTo(300, 0);
  document.getElementById("networkvisualizer").style.display = "none";
  $("#cynobroad").fadeTo(400, 1);
  return false;
}

function networkvisualizer() {
  $("#trackr").fadeTo(300, 0);
  document.getElementById("trackr").style.display = "none";
  $("#webventures").fadeTo(300, 0);
  document.getElementById("webventures").style.display = "none";
  $("#cynobroad").fadeTo(300, 0);
  document.getElementById("cynobroad").style.display = "none";
  $("#networkvisualizer").fadeTo(400, 1);
  return false;
}

function webventures() {
  $("#trackr").fadeTo(300, 0);
  document.getElementById("trackr").style.display = "none";
  $("#cynobroad").fadeTo(300, 0);
  document.getElementById("cynobroad").style.display = "none";
  $("#networkvisualizer").fadeTo(300, 0);
  document.getElementById("networkvisualizer").style.display = "none";
  $("#webventures").fadeTo(400, 1);
  return false;
}
