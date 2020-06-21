//USER-BUTTON =========================================================

let user_icon = document.querySelector(".user-header__icon")
user_icon.addEventListener("click", (e) => {
  let user_menu = document.querySelector(".user-header__menu")
  user_menu.classList.toggle("_active")
  e.preventDefault()
})

document.documentElement.addEventListener("click", function(e) {
  if (!e.target.closest(".user-header")) {
    let user_menu = document.querySelector(".user-header__menu")
    user_menu.classList.remove("_active")
  }
})


//BURGER-BUTTON =========================================================

let menuButton = document.querySelector('.icon-menu');
let menuBody = document.querySelector(".menu__body")
menuButton.addEventListener('click', function (e) {
    menuButton.classList.toggle('_active');
    menuBody.classList.toggle('_active')
    e.preventDefault();
});