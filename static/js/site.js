document.addEventListener("DOMContentLoaded", function() {
  anime.timeline({
    easing: 'easeOutExpo',
    duration: 600
  }).add({
    targets: '.titlewrap span',
    easing: 'easeOutQuad',
    height: '75%',
    duration: 400,
    opacity: 1
  })
  .add({
    targets: '.titlewrap',
    width: '42rem',
    easing: 'easeInOutCubic',
    duration: 1400
  })
  .add({
    targets: '#title',
    width: '42rem',
    easing: 'easeInOutCubic',
    duration: 1400
  }, '-=1400')
  .add({
    targets: '.titlewrap span',
    opacity: 0
  })
  .add({
    targets: '.nav',
    width: '45rem',
    duration: 1000
  }, '-=400')
  .add({
    targets: '.navitem',
    opacity: 1,
    duration: 1500
  }, '-=800')
  .add({
    targets: '.navitem',
    transition: 'all 0.5s',
    duration: 100
  }, "-=600");
});

function loadSection(section) {
  document.getElementById("headertitle").innerHTML = section;
  document.getElementById("contentimage").src = "static/img/"+section+".svg";

  var overlay = document.getElementById("overlay");
  overlay.style.display = 'block';

  anime.timeline()
  .add({
    targets: overlay,
    easing: 'easeOutExpo',
    minHeight: '100vh',
    backgroundColor: '#fff',
    duration: 1500,
    complete: function() {
      overlay.style.bottom = 'unset';
    }
  })
  .add({
  });
}
