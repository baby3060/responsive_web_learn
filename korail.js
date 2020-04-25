(function() {
  var subMenu = getGnbMenu();

  for( var i = 0; i < subMenu.length; i++ ) {
    (
      function(j) {
        if(subMenu[j].children[0].addEventListener) {
          subMenu[j].children[0].addEventListener('click', function() {
            if(subMenu[j].children[1].style.display === 'block') {
                subMenu[j].children[1].style.display = "none";
            } else {
                subMenu[j].children[1].style.display = "block";
            }
            noneGnb(j);
          }
        );
        } else {

        }

      }
    )(i);
  }
})();

function noneGnb(k) {
  var subMenu = getGnbMenu();
  for( var i = 0; i < subMenu.length; i++ ) {
    if( i != k ) {
      subMenu[i].children[1].style.display = "none";
    }
  }
}

function getGnbMenu() {
  var menu = document.getElementById("sidemenu");
  var subMenu = [];
  var li = menu.querySelectorAll('li');

  var limitLength = li.length;

  for(var i = 0; i < limitLength; i++ ) {
    if( li[i].className === 'gnb_menu' ) {
      subMenu.push(li[i]);
    }
  }

  return subMenu;
}
