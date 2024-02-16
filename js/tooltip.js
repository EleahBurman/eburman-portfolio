if (window.matchMedia('(hover: hover)').matches) {
  tippy('.github-project-img', { 
  content: "Click to open GitHub!", 
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
        instance.setContent('Click to read more!');
      } else if (instance.reference.innerHTML.includes('Less')) {
        // If it contains 'Less', set the tooltip content to 'Click to Read Less'
        instance.setContent('Click to read less!');
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
    content: "Click to see all projects",
    placement: "top",
    animation: "perspective-extreme",
    theme: "translucent",
    onShow(instance) {
      // Get the .projects-dropdown-content element
      const dropdownContent = document.querySelector('.projects-dropdown-content');

      // Check the display property of the .projects-dropdown-content element
      if (window.getComputedStyle(dropdownContent).display === 'block') {
        // If it's 'block', set the tooltip content to 'Click to Hide All Projects'
        instance.setContent('Click to hide all projects!');
      } else {
        // Otherwise, set the tooltip content to 'Click to See All Projects'
        instance.setContent('Click to see all projects!');
      }
    },
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
    onShow(instance) {
      // Check the innerHTML of the tooltip reference element
      const innerHTML = instance.reference.innerHTML;
      if (innerHTML.includes('Home')) {
        instance.setContent('Click to scroll to top!');
      } else if (innerHTML.includes('Skills')) {
        instance.setContent('Click to scroll to skills!');
      } else if (innerHTML.includes('Work')) {
        instance.setContent('Click to scroll to work!');
      } else if (innerHTML.includes('Awards')) {
        instance.setContent('Click to scroll to awards!');
      } else if (innerHTML.includes('Resume')) {
        instance.setContent('Click to scroll to resume!');
      } else if (innerHTML.includes('About')) {
        instance.setContent('Click to scroll to about!');
      }
    },
  });
  tippy('.scroll-to-projects', { 
    content: "Click to scroll to projects!", 
    placement: "top",
    animation: "perspective-extreme",
    theme: "translucent",
  });
  tippy('.linkedin', { 
    content: "Click to open LinkedIn!", 
    placement: "top",
    animation: "perspective-extreme",
    theme: "translucent",
  });

  tippy('.github', { 
    content: "Click to open GitHub!", 
    placement: "top",
    animation: "perspective-extreme",
    theme: "translucent",
  });

  tippy('.email', { 
    content: "Click to email Eleah!", 
    placement: "top",
    animation: "perspective-extreme",
    theme: "translucent",
  });
  tippy('.clear-button', { 
    content: "Click to clear!", 
    placement: "top",
    animation: "perspective-extreme",
    theme: "translucent",
  });
} else {
  console.log("Device does not support hover. Tooltips not initialized.");
}