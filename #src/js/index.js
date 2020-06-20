//USER-BUTTON =========================================================

let user_icon = document.querySelector(".user-header__icon")
user_icon.addEventListener("click", (e) => {
  let user_menu = document.querySelector(".user-header__menu")
  user_menu.classList.toggle("_active")
  e.preventDefault()
})


//BURGER-BUTTON =========================================================

let menuButton = document.querySelector('.icon-menu');
menuButton.addEventListener('click', function (e) {
    menuButton.classList.toggle('_active');
    e.preventDefault();
});