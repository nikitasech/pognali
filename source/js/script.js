let header = document.querySelector('.main-header');
let toggleMenu = document.querySelector('.main-header__toggle');
let whiteLogo = document.querySelector('.main-header__logo--white');
let blueLogo = document.querySelector('.main-header__logo--blue');
let menu = document.querySelector('.main-header__menu');

toggleMenu.addEventListener('click', function() {
  if (menu.classList.contains('main-header__menu--opened')) {
    header.classList.remove('main-header--white');
    menu.classList.remove('main-header__menu--opened');
    whiteLogo.classList.add('main-header__logo--selected');
    blueLogo.classList.remove('main-header__logo--selected');

    if (toggleMenu.classList.contains('main-header__toggle--opened')) {
      toggleMenu.classList.remove('main-header__toggle--opened');
    }
  } else {
    header.classList.add('main-header--white');
    menu.classList.add('main-header__menu--opened');
    toggleMenu.classList.add('main-header__toggle--opened');
    whiteLogo.classList.remove('main-header__logo--selected');
    blueLogo.classList.add('main-header__logo--selected');
  }
});