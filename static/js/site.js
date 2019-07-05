function scrollToEl(id) {
    var el = document.getElementById(id);
    var top = el.getBoundingClientRect().top;

    scroll(0, top - 40);
}