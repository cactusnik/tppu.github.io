$(document).ready(function(){
  var itemMenu = $('.nav__item');
  for(var i = 0; i < itemMenu.length; i++){
    if(itemMenu[i].children.length > 1){
        itemMenu[i].classList.add('nav__item--dropdown');
    }
  }

  $('.nav__item > a').on('click', function(){
    event.preventDefault();
    $(this).toggleClass('nav__item--active');
    $(this).siblings('.submenu').slideToggle(500);
  });
});
