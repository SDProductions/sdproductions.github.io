document.addEventListener("DOMContentLoaded", function() {
  anime.timeline({
    easing: 'easeOutExpo',
    duration: 700
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

function loadSection(el) {
  document.getElementById("overlay").style.display = 'block';

  anime({
    targets: '#overlay',
    easing: 'easeOutExpo',
    height: '100vh',
    backgroundColor: '#fdfeff',
    duration: 1000
  });
}
