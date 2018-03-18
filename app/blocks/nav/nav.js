$(document).ready(function(){
  $('.nav__item--dropdown').on('click', function(){
    event.preventDefault();
    $(this).toggleClass('nav__item--active');
    $(this).children('.submenu').slideToggle(500);
  });
});
