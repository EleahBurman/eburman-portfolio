function toggleLightbox(image) {
  const overlay = document.getElementById('overlay');

  if (overlay.style.display === 'none') {
    openLightbox(image);
  }
}

function openLightbox(image) {
  const lightboxImage = document.getElementById('lightbox-image');
  const overlay = document.getElementById('overlay');
  const body = document.body;

  lightboxImage.src = image.src;

  // Start with a small scale
  lightboxImage.style.transform = 'scale(0)';

  overlay.style.display = 'block';
  body.classList.add('no-scroll');

  // Use a setTimeout to allow the rendering engine to apply the initial transform
  setTimeout(() => {
    // Gradually zoom in to full size
    lightboxImage.style.transform = 'scale(1)';
  }, 0); // You can adjust the delay if needed
  
}


function closeLightbox() {
  const overlay = document.getElementById('overlay');
  const body = document.body; // Get the body element

  overlay.style.display = 'none';
  body.classList.remove('no-scroll'); // Remove the 'no-scroll' class from the body
}
