document.addEventListener("DOMContentLoaded", function() {
  
});

function scrollToProducts() {
    var el = document.getElementById("products");
    var top = el.getBoundingClientRect().top;

    scroll(0, top - 40);
}