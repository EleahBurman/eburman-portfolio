// Optional: You can use JavaScript to dynamically set the width of the arrow based on the distance between the two images.

const pdfImage = document.getElementById('pdfImage');
const csvImage = document.getElementById('csvImage');
const arrow = document.getElementById('animatedArrow');

const distance = csvImage.offsetLeft - (pdfImage.offsetLeft + pdfImage.offsetWidth);

arrow.style.width = `${distance - 5}px`; 
