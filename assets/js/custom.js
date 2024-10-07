$(document).ready(function () {
  $("#achieveSlider").owlCarousel({
    loop: true,
    Infinity: true,
    margin: 20,
    center: true,
    nav: false,
    // slideTransition: 'linear',
    dots: true,
    items: 3,
    autoplay: false,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 3,
      },
    },
  });
});



const header = document.getElementById('fixheader');
window.onscroll = function () {
  if (window.pageYOffset > 50) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};


AOS.init();
