document.addEventListener("DOMContentLoaded", function() {
  anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  }).add({
    targets: '.titlewrap span',
    height: '100%',
    opacity: 1
  })
  .add({
    targets: '.titlewrap span',
    rotate: 10
  }, '-=650')
  .add({
    targets: '.titlewrap',
    width: '42rem',
    easing: 'easeInOutQuart',
    duration: 1400
  })
  .add({
    targets: '#title',
    width: '42rem',
    easing: 'easeInOutQuart',
    duration: 1400
  }, '-=1400')
  .add({
    targets: '.titlewrap span',
    opacity: 0
  })
  .add({
    targets: '#tagline',
    opacity: 1
  }, "-=500")
  .add({
    targets: '.nav',
    width: '45rem',
    duration: 1000
  })
  .add({
    targets: '.navitem',
    opacity: 1,
    duration: 1500,
    delay: anime.stagger(300)
  })
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
    easing: 'easeOutCirc',
    height: '130vh',
    backgroundColor: '#fff',
    duration: 2500
  });
}
