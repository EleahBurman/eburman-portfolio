tippy('.github-project-img', { 
  content: "Github Link", 
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
});
tippy('.new-project-card-title', { 
  content: "Click to open project!", 
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
});
tippy('.resume-icon', { 
  content: "Click to download resume!", 
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
});
tippy('.read-more', {
  content: "Click to read more!",
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
  onShow(instance) {
    // Check the innerHTML of the tooltip reference element
    if (instance.reference.innerHTML.includes('More')) {
      // If it contains 'More', set the tooltip content to 'Click to Read More'
      instance.setContent('Click to Read More');
    } else if (instance.reference.innerHTML.includes('Less')) {
      // If it contains 'Less', set the tooltip content to 'Click to Read Less'
      instance.setContent('Click to Read Less');
    }
  },
});
tippy('.new-screenshot', { 
  content: "Click to expand!", 
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
});
tippy('.close-lightbox', { 
  content: "Click to close!", 
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
});
tippy('.lightbox-image', { 
  content: "Click or press ESC to close!", 
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
});

tippy('.linkedin-post', { 
  content: "Click here for LinkedIn post!", 
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
});
tippy('.search-button-init', { 
  content: "Click to search!", 
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
});
tippy('.search-button', { 
  content: "Click to search!", 
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
});
tippy('#top', { 
  content: "Scroll to top!", 
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
});
tippy('#microphone-button', { 
  content: "Use voice to search!", 
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
});
tippy('.filter-button', { 
  content: "Click to filter skills!", 
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
});

tippy('.dropdown-link', { 
  content: "Click to see all projects!", 
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
});
tippy('.projects-dropdown-content', { 
  content: "Click to open project!", 
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
});
tippy('.nav-link', { 
  content: "Click to scroll!", 
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
});
tippy('.scroll-to-projects', { 
  content: "Click to scroll to projects!", 
  placement: "top",
  animation: "perspective-extreme",
  theme: "translucent",
});
