const menu = document.querySelector(".header__nav__listburger");
const menuItems = document.querySelectorAll(".header__nav__listburger__items");
const hamburger = document.querySelector(".header__nav__burger");
const closeIcon = document.querySelector(".header__nav__burger__close");
const menuIcon = document.querySelector(".header__nav__burger__menu");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    menu.style.display = "none";
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    menu.style.display = "flex";
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", toggleMenu);
});
