$(document).ready(function(){
  $('.nav__item--dropdown > a').on('click', function(){
    event.preventDefault();
    $(this).toggleClass('nav__item--active');
    $(this).siblings('.submenu').slideToggle(500);
  });
});
