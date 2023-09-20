$(document).ready(function() {
  $('.read-more-button').click(function() {
    const projectDescriptionContainer = $(this).closest('.newproject').find('.project-description');
    const buttonText = projectDescriptionContainer.hasClass('expanded') ? 'Read More' : 'Read Less';

    // Toggle the "expanded" class on the project description container
    projectDescriptionContainer.toggleClass('expanded');

    // Toggle the visibility of the collapsed and expanded text
    projectDescriptionContainer.find('.collapsed-text').toggle();
    projectDescriptionContainer.find('.expanded-text').toggle();

    $(this).text(buttonText);
  });
});
