const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-mobile');

menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
});

function closeNavbar() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
}
