// AOS.init();

var preloader = document.getElementById('load_icon');
function load__() {
  preloader.style.display = 'none';
}

var swiper = new Swiper(".slider_logo", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
      clickable: true,
    },
    breakpoints: {
        300: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          400: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
  });