const filterButtons = document.querySelectorAll('.filter-button');
const skillBadges = document.querySelectorAll('.badge');

function filterBadges(filter) {
  skillBadges.forEach(badge => {
    if (filter === 'all' || badge.classList.contains(filter)) {
      badge.style.display = 'inline-flex'
      badge.classList.remove('hidden')
    } else {
      badge.style.display = 'none'
      badge.classList.add('hidden')
    }
  });
}

// Initially, show all badges
filterBadges('all');

filterButtons.forEach(button => {
  button.addEventListener('click', function () {
    const selectedFilter = this.getAttribute('data-filter'); // Changed variable name
    console.log("Button clicked:", selectedFilter); // Debugging log
    filterButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    filterBadges(selectedFilter); // Use the new variable name
  });
});
