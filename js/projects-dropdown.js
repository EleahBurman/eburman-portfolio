document.addEventListener("DOMContentLoaded", function() {
  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function(event) {
    const dropdown = document.querySelector(".projects-dropdown");
    if (dropdown && !dropdown.contains(event.target)) {
      const dropdownContent = dropdown.querySelector(".projects-dropdown-content");
      dropdownContent.style.display = "none";
    }
  });

  // Add a class to control the dropdown's opacity
  const projectsDropdown = document.querySelector(".projects-dropdown");
  const dropdownContent = document.querySelector(".projects-dropdown-content");

  projectsDropdown.addEventListener("mouseover", function() {
    dropdownContent.classList.add("show-dropdown");
  });

  projectsDropdown.addEventListener("mouseout", function() {
    dropdownContent.classList.remove("show-dropdown");
  });
});
