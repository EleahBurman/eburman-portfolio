const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-mobile');

menu_btn.addEventListener('click', function () {
  toggleMenu();
});

// Function to open/close the mobile menu
function toggleMenu() {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
}

// Add event listeners to close the menu when a link is clicked
const links = document.querySelectorAll('.nav-mobile a');
links.forEach(link => {
  link.addEventListener('click', function () {
    toggleMenu(); // Close the menu when a link is clicked
  });
});
