//main slider
let mainSlider = new Swiper('#js-main-slider', {
  navigation: {
    nextEl: '#js-main-slider-next',
    prevEl: '#js-main-slider-prev',
  },
});

//storys
let stories = new Swiper('#js-stories', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  freeMode: true,
});

