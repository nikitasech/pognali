const header = document.querySelector('.main-header');
const toggleMenu = document.querySelector('.main-header__toggle');
const whiteLogo = document.querySelector('.main-header__logo--white');
const blueLogo = document.querySelector('.main-header__logo--blue');
const menu = document.querySelector('.main-header__menu');

const coutriesFilter = document.querySelector('.countries-filters');
const groupCoutriesFilter = document.querySelector('.countries-filters__group-list');
const bodyCountriesFilter = document.querySelector('.countries-filters__body');
const coutriesToggle = document.querySelector('.countries-filters__open-filters');
const countriesToggleText = document.querySelector('.countries-filters__open-text');
const coutriesIcon = document.querySelector('.countries-filters__open-icon');
const coutriesIconUse = document.querySelector('.countries-filters__open-icon use');
const coutriesButtonClose = document.querySelector('.coutries-filters__close');

const filtersToggleText = document.querySelectorAll('.filters__title-text');
const toggleFilters = document.querySelectorAll('.filters__title-button');
const filtersContent = document.querySelectorAll('.filters__content');
const filtersIcon = document.querySelectorAll('.filters__title-icon');

header.classList.remove('main-header--no-js');
header.classList.remove('main-header--white');
menu.classList.remove('main-header__menu--no-js');
whiteLogo.classList.add('main-header__logo--selected');
blueLogo.classList.remove('main-header__logo--selected');

toggleMenu.addEventListener('click', function () {
  if (menu.classList.contains('main-header__menu--opened')) {
    header.classList.remove('main-header--white');
    menu.classList.remove('main-header__menu--opened');
    whiteLogo.classList.add('main-header__logo--selected');
    blueLogo.classList.remove('main-header__logo--selected');

    toggleMenu.classList.add('main-header__toggle--close-animation');
    setTimeout(function () {
      toggleMenu.classList.remove('main-header__toggle--opened');
      toggleMenu.classList.add('main-header__toggle--closed');
      toggleMenu.classList.remove('main-header__toggle--close-animation');
    }, 450);
  } else {
    header.classList.add('main-header--white');
    menu.classList.add('main-header__menu--opened');
    whiteLogo.classList.remove('main-header__logo--selected');
    blueLogo.classList.add('main-header__logo--selected');

    toggleMenu.classList.add('main-header__toggle--open-animation');
    setTimeout(function () {
      toggleMenu.classList.remove('main-header__toggle--closed');
      toggleMenu.classList.add('main-header__toggle--opened');
      toggleMenu.classList.remove('main-header__toggle--open-animation');
    }, 450);
  }
});


coutriesToggle.addEventListener('click', function() {
  if (coutriesFilter.classList.contains('countries-filters--opened')) {
    coutriesFilter.classList.remove('countries-filters--opened');
    groupCoutriesFilter.classList.remove('countries-filters__group-list--visible');
    bodyCountriesFilter.classList.remove('countries-filters__body--opened');

    coutriesIconUse.setAttribute("xlink:href", "#icon-dots");
    countriesToggleText.textContent = 'Показать все';
  } else {
    coutriesFilter.classList.add('countries-filters--opened');
    groupCoutriesFilter.classList.add('countries-filters__group-list--visible');
    bodyCountriesFilter.classList.add('countries-filters__body--opened');

    coutriesIconUse.setAttribute("xlink:href", "#icon-filters-close");
    countriesToggleText.textContent = 'Свернуть';
  }
});

coutriesButtonClose.addEventListener('click', function() {
  coutriesFilter.classList.remove('countries-filters--opened');
  groupCoutriesFilter.classList.remove('countries-filters__group-list--visible');
  bodyCountriesFilter.classList.remove('countries-filters__body--opened');

  coutriesIconUse.setAttribute("xlink:href", "#icon-dots");
  countriesToggleText.textContent = 'Показать все';
});

for(let i = 0; i < filtersContent.length; i++) {
  toggleFilters[i].addEventListener('click', function () {
    if (filtersContent[i].classList.contains('filters__content--closed')) {
      filtersContent[i].classList.remove('filters__content--closed');
      filtersToggleText[i].textContent = 'Закрыть группу';

      if (filtersIcon[i].classList.contains('filters__title-icon--closed')) {
        filtersIcon[i].classList.remove('filters__title-icon--closed');
      }
    } else {
      filtersContent[i].classList.add('filters__content--closed');
      filtersIcon[i].classList.add('filters__title-icon--closed');
      filtersToggleText[i].textContent = 'Открыть группу';
    }
  });
}
