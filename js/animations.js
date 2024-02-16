/*---- New Project Animation ----*/
const newprojects = document.querySelectorAll(".newproject");

const newProjectsOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

const newProjectsObserver = new IntersectionObserver(handleIntersectForNewProjects, newProjectsOptions);

newprojects.forEach((newproject) => {
    newProjectsObserver.observe(newproject);
});

function handleIntersectForNewProjects(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            newProjectsObserver.unobserve(entry.target);
        }
    });
}

/*---- Titles Animation ----*/
const titles = document.querySelectorAll(".title");

const titlesOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

const titlesObserver = new IntersectionObserver(handleIntersectForTitles, titlesOptions);

titles.forEach((title) => {
    titlesObserver.observe(title);
});

function handleIntersectForTitles(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade");
            titlesObserver.unobserve(entry.target);
        }
    });
}

/*---- Resume Animation ----*/
const resumeContent = document.querySelector(".resume-content");

const resumeContentOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

const resumeContentObserver = new IntersectionObserver(handleIntersectForResumeContent, resumeContentOptions);

resumeContentObserver.observe(resumeContent);

function handleIntersectForResumeContent(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animation");
            resumeContentObserver.unobserve(entry.target);
        }
    });
}

/*---- Work Info Animation ----*/
const workInfo = document.querySelector(".work-info");

const workInfoOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

const workInfoObserver = new IntersectionObserver(handleIntersectForWorkInfo, workInfoOptions);

workInfoObserver.observe(workInfo);

function handleIntersectForWorkInfo(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animatework"); // Replace "animating" with the appropriate class name
            workInfoObserver.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}

/*---- Awards Info Animation ----*/
const awardsInfo = document.querySelector(".awards-info");

const awardsInfoOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
};

const awardsInfoObserver = new IntersectionObserver(handleIntersectForAwardsInfo, awardsInfoOptions);

awardsInfoObserver.observe(awardsInfo);

function handleIntersectForAwardsInfo(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animateawards"); // Replace "animating" with the appropriate class name
            workInfoObserver.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}

/*---- About Info Animation ----*/
const aboutInfo = document.querySelector(".about-info");

const aboutInfoOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
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
