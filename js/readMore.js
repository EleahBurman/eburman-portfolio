// Get all "Read More" buttons and their associated descriptions
const readMoreButtons = document.querySelectorAll('.read-more');
const partialDescriptions = document.querySelectorAll('.partial-description');
const fullDescriptions = document.querySelectorAll('.full-description');

// Initialize the descriptions' visibility for each pair
for (let i = 0; i < readMoreButtons.length; i++) {
  partialDescriptions[i].style.display = 'block';
  fullDescriptions[i].style.display = 'none';

  // Add an event listener to each "Read More" button
  readMoreButtons[i].addEventListener('click', () => {
    if (partialDescriptions[i].style.display === 'block') {
      partialDescriptions[i].style.display = 'none';
      fullDescriptions[i].style.display = 'block';
      readMoreButtons[i].textContent = 'Read Less ▲';
    } else {
      partialDescriptions[i].style.display = 'block';
      fullDescriptions[i].style.display = 'none';
      readMoreButtons[i].textContent = 'Read More ▼';
    }
  });
}
