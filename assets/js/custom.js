$(document).ready(function () {
  $("#achieveSlider").owlCarousel({
    loop: true,
    Infinity: true,
    margin: 20,
    center: true,
    nav: false,
    dots: true,
    items: 3,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: 'linear',
    autoplayTimeout:1500,
    autoplayHoverPause:true,
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
  if (window.pageYOffset > 10) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};


AOS.init();
