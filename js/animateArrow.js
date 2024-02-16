const pdfImage = document.getElementById('pdfImage');
const csvImage = document.getElementById('csvImage');
const arrow = document.getElementById('animatedArrow');

const distance = csvImage.offsetLeft - (pdfImage.offsetLeft + pdfImage.offsetWidth);

arrow.style.width = `${distance - 5}px`; 

// Start the CSV image animation immediately
// Start the CSV image animation immediately with a 0.5s delay
csvImage.style.animation = 'fadeInOut 2s infinite';
csvImage.style.animationDelay = '0.5s';

arrow.addEventListener('animationiteration', () => {
  // Restart the CSV image animation every time the arrow animation repeats
  csvImage.style.animation = 'none';
  setTimeout(() => {
    csvImage.style.animation = 'fadeInOut 2s infinite';
    csvImage.style.animationDelay = '0.5s';
  }, 0);
});