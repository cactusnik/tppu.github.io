window.onload=function(){
var menuElem = document.getElementById('dropdown-languages'),
    titleElem = menuElem.querySelector('.dropdown-languages__title');
    document.onclick = function(event) {
    var target = elem = event.target;
    while (target != this) {
          if (target == menuElem) {
          if(elem.tagName == 'A') {
            titleElem.innerHTML = elem.textContent;
          }

          $('.languages--mobile').slideToggle();
              return;
          }
          target = target.parentNode;
      }
    //menuElem.classList.remove('open');
}
}
