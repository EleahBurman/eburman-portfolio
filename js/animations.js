// For 'newprojects' animation
const newprojects = document.querySelectorAll(".newproject");

const newProjectsOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Trigger when at least 50% of the element is visible
};

const newProjectsObserver = new IntersectionObserver(handleIntersectForNewProjects, newProjectsOptions);

newprojects.forEach((newproject) => {
    newProjectsObserver.observe(newproject);
});

function handleIntersectForNewProjects(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            newProjectsObserver.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}

// For 'titles' animation
const titles = document.querySelectorAll(".title");

const titlesOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Trigger when at least 50% of the element is visible
};

const titlesObserver = new IntersectionObserver(handleIntersectForTitles, titlesOptions);

titles.forEach((title) => {
    titlesObserver.observe(title);
});

function handleIntersectForTitles(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade");
            titlesObserver.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}

const resumeContent = document.querySelector(".resume-content");

const resumeContentOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Trigger when at least 50% of the element is visible
};

const resumeContentObserver = new IntersectionObserver(handleIntersectForResumeContent, resumeContentOptions);

resumeContentObserver.observe(resumeContent);

function handleIntersectForResumeContent(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animation"); // Replace "your-animation-class" with the appropriate class name
            resumeContentObserver.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}

const aboutInfo = document.querySelector(".about-info");

const aboutInfoOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Trigger when at least 50% of the element is visible
};

const aboutInfoObserver = new IntersectionObserver(handleIntersectForAboutInfo, aboutInfoOptions);

aboutInfoObserver.observe(aboutInfo);

function handleIntersectForAboutInfo(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animating"); // Replace "animating" with the appropriate class name
            aboutInfoObserver.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}
