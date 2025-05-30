const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
});

$('#next').click(function() {
    swiper.slideNext();
});

$('#prev').click(function() {
    swiper.slidePrev();
});