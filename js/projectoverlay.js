const projectContainers = document.querySelectorAll('.new-projects-container');

projectContainers.forEach((container) => {
  const overlay = container.querySelector('.new-overlay');
  const screenshot = container.querySelector('.new-screenshot');
  
  container.addEventListener('mouseenter', () => {
    overlay.style.opacity = 1; // Show the overlay by setting opacity to 1
    screenshot.style.opacity = 0.5; // Reduce the opacity of the screenshot (adjust opacity value as needed)
    overlay.style.width === screenshot.style.width
    overlay.style.height === screenshot.style.height
  });

  container.addEventListener('mouseleave', () => {
    overlay.style.opacity = 0; // Hide the overlay by setting opacity to 0
    screenshot.style.opacity = 1; // Restore the full opacity of the screenshot
    overlay.style.width === screenshot.style.width
    overlay.style.height === screenshot.style.height
  });
});
