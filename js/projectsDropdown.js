document.addEventListener("DOMContentLoaded", function() {
  const projectsDropdown = document.querySelector(".projects-dropdown");
  const dropdownContent = document.querySelector(".projects-dropdown-content");
  const arrow = document.querySelector(".arrow");

  // Toggle the dropdown on click
  projectsDropdown.addEventListener("click", function(event) {
    event.stopPropagation();

    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display = "block";
      arrow.classList.remove("fa-chevron-down");
      arrow.classList.add("fa-chevron-up");
    } else {
      dropdownContent.style.display = "none";
      arrow.classList.remove("fa-chevron-up");
      arrow.classList.add("fa-chevron-down");
    }
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function(event) {
    if (dropdownContent.style.display === "block" && !projectsDropdown.contains(event.target)) {
      dropdownContent.style.display = "none";
      arrow.classList.remove("fa-chevron-up");
      arrow.classList.add("fa-chevron-down");
    }
  });

  // Prevent clicks inside the dropdown from closing it
  dropdownContent.addEventListener("click", function(event) {
    event.stopPropagation();
  });
});