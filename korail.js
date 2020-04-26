(function() {
  var subMenu = getGnbMenu();

  for( var i = 0; i < subMenu.length; i++ ) {
    (
      function(j) {
        var sMenu = subMenu[j];
        if(sMenu.children[0].addEventListener) {
          sMenu.children[0].addEventListener('click', function() {
            visibleUL(sMenu, j);
          });
        } else {
          sMenu.children[0].attachEvent('click', function() {
            visibleUL(sMenu, j);
          });
        }
      }
    )(i);
  }
})();

function visibleUL(sMenu, j) {
  // 비활성화되어 있으면 비활성화 제거 아니면 추가
  sMenu.children[1].classList.toggle('accordion_unactive');
  // 활성화되어 있으면 활성화 제거 아니면 추가
  sMenu.children[1].classList.toggle('accordion_active');

  noneGnb(j);
}

function noneGnb(k) {
  var subMenu = getGnbMenu();
  for( var i = 0; i < subMenu.length; i++ ) {
    if( i != k ) {
      subMenu[i].children[1].classList.remove('accordion_active');
      subMenu[i].children[1].classList.add('accordion_unactive');
    }
  }
}

function getGnbMenu() {
  var menu = document.getElementById("sidemenu");
  var subMenu = [];
  var li = menu.querySelectorAll('li');

  var limitLength = li.length;

  for(var i = 0; i < limitLength; i++ ) {
    if( li[i].classList.contains('gnb_menu') ) {
      subMenu.push(li[i]);
    }
  }

  return subMenu;
}
