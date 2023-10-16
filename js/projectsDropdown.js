document.addEventListener("DOMContentLoaded", function() {
  const projectsDropdown = document.querySelector(".projects-dropdown");
  const dropdownContent = document.querySelector(".projects-dropdown-content");
  const arrow = document.querySelector(".arrow");
  let isUp = false; // Track the current state

  // Function to toggle the arrow icon and dropdown content
  function toggleDropdown() {
    if (isUp) {
      dropdownContent.style.display = "none";
      arrow.classList.remove("up");
      arrow.classList.add("down");
    } else {
      dropdownContent.style.display = "block";
      arrow.classList.remove("down");
      arrow.classList.add("up");
    }
    isUp = !isUp; // Toggle the state
  }

  // Toggle the dropdown on click
  projectsDropdown.addEventListener("click", function(event) {
    event.stopPropagation();
    toggleDropdown();
  });

  // Close the dropdown if the user clicks outside of it
  window.addEventListener("click", function(event) {
    if (dropdownContent.style.display === "block" && !projectsDropdown.contains(event.target)) {
      toggleDropdown();
    }
  });

  // Prevent clicks inside the dropdown from closing it
  dropdownContent.addEventListener("click", function(event) {
    event.stopPropagation();
  });
});
