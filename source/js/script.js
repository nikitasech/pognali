let header = document.querySelector('.main-header');
let toggleMenu = document.querySelector('.main-header__toggle');
let menu = document.querySelector('.main-header__menu');

toggleMenu.addEventListener('click', function() {
  if (menu.classList.contains('main-header__menu--opened')) {
    header.classList.remove('main-header--white');
    menu.classList.remove('main-header__menu--opened');

    if (toggleMenu.classList.contains('main-header__toggle--opened')) {
      toggleMenu.classList.remove('main-header__toggle--opened');
    }
  } else {
    header.classList.add('main-header--white');
    menu.classList.add('main-header__menu--opened');
    toggleMenu.classList.add('main-header__toggle--opened');
  }
});
