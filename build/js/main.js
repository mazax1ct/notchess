$(document).ready(function() {
  const swiper = new Swiper('.js-slider', {
    loop: true,
    navigation: {
      nextEl: '.js-next',
      prevEl: '.js-prev'
    },
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 2,
        slidesPerGroup: 1
      },
      1024: {
        slidesPerView: 3,
        slidesPerGroup: 1
      },
      1600: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 40
      }
    },
  });
});
