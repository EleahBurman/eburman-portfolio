const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.nav-mobile');

// Toggle the menu on button click
menu_btn.addEventListener('click', function () {
  toggleMenu();
});

// Function to open/close the mobile menu with slide-in and slide-out effects
function toggleMenu() {
  if (mobile_menu.classList.contains('is-active')) {
    // If the menu is active, start sliding it out
    mobile_menu.classList.remove('is-active');
    mobile_menu.classList.add('is-deactivating');

    // After the slide-out animation, hide the menu
    setTimeout(() => {
      mobile_menu.classList.remove('is-deactivating');
      mobile_menu.style.display = 'none'; // Ensure the menu is hidden
    }, 400); // Duration matches the CSS animation time (0.4s)
  } else {
    // If the menu is not active, make it visible and start sliding it in
    mobile_menu.style.display = 'block'; // Ensure the menu is visible
    mobile_menu.classList.add('is-active');
  }

  // Toggle the hamburger button active state
  menu_btn.classList.toggle('is-active');
}

// Close the menu when a link is clicked
const links = document.querySelectorAll('.nav-mobile a');
links.forEach(link => {
  link.addEventListener('click', function () {
    toggleMenu(); // Close the menu after clicking a link
  });
});
