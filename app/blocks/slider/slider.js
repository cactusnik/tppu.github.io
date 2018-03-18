$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: true
      }
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
