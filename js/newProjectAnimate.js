const newprojects = document.querySelectorAll(".newproject");

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5, // Trigger when at least 50% of the element is visible
};

const observer = new IntersectionObserver(handleIntersect, options);

newprojects.forEach((newproject) => {
    observer.observe(newproject);
});

function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}
