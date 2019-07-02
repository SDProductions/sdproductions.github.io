var overlay, closeButton;

document.addEventListener("DOMContentLoaded", function() {
  overlay = document.getElementById("overlay");
  closeButton = document.getElementById("close");

  closeButton.onclick = closeSection;
  closeButton.onmouseover = function() {
    document.body.style.cursor = "pointer";
  }
  closeButton.onmouseleave = function() {
    document.body.style.cursor = "auto";
  }

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
    transition: 'all 0.4s',
    duration: 100
  }, "-=600");
});

function loadSection(section) {
  document.getElementById("headertitle").innerHTML = section;
  document.getElementById("contentimage").src = "static/img/"+section+".svg";

  overlay.style.display = 'block';

  anime({
    targets: overlay,
    easing: 'easeOutExpo',
    minHeight: '100vh',
    backgroundColor: '#fff',
    duration: 1400,
    complete: function() {
      overlay.style.bottom = 'unset';
    }
  })
  anime({
    targets: closeButton,
    easing: 'easeOutExpo',
    rotate: 360,
    duration: 2000
  });
}

function closeSection() {
  anime({
    targets: overlay,
    easing: 'easeOutSine',
    minHeight: '0',
    bottom: 0,
    backgroundColor: '#f2f2f2',
    duration: 350,
    complete: function() {
      overlay.style.display = 'none';
    }
  });
  anime({
    targets: closeButton,
    easing: 'easeOutExpo',
    rotate: 0,
    duration: 2000
  })
}