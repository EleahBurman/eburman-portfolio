const availableKeywords = [
  'Python',
  'AWS',
  'JavaScript',
  'Express',
  'React',
  'CSS',
  'Resume',
  'Project',
  'Projects',
  'MongoDB',
  'Node.JS',
  'Github',
  'Docker',
  'Azure',
  'VSCode',
  'Vite',
  'JWT',
  'MUI',
  'HTML',
  'PostgreSQL',
  'Django'
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input-box");
const clearButton = document.querySelector(".clear-button");
const searchButton = document.querySelector(".search-button");

inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    search();
  }
});

searchButton.addEventListener("click", function () {
  search();
});

inputBox.addEventListener("input", function () {
  const input = inputBox.value.toLowerCase();
  const matchingKeywords = availableKeywords.filter((keyword) =>
  keyword.toLowerCase().indexOf(input) !== -1
  );
  display(matchingKeywords);

  if (!input) {
    resetHighlights();
    clearButton.style.display = "none";
  } else {
    clearButton.style.display = "inline-block";
  }
});

clearButton.addEventListener("click", function () {
  inputBox.value = "";
  resultsBox.innerHTML = "";
  resetHighlights();
  clearButton.style.display = "none";
  inputBox.focus();
});

// Handle search result selection and scrolling
function selectInput(list, keyword) {
  inputBox.value = keyword ? keyword : list.textContent;
  resultsBox.innerHTML = '';
  search();
}

// Perform the search, scroll, and apply highlighting
function search() {
  const keyword = inputBox.value.trim().toLowerCase();

  if (keyword.length) {
    const elementsToSearch = document.querySelectorAll(".scroll, .badge.languages, .screenshot");

    elementsToSearch.forEach((element) => {
      const content = element.textContent.toLowerCase();
      const altContent = element.getAttribute("alt") ? element.getAttribute("alt").toLowerCase() : "";

      if (content.includes(keyword) || altContent.includes(keyword) || (keyword.length === 3 && content.indexOf(keyword) !== -1)) {
        const parentSection = element.closest(".section");
        if (parentSection) {
          parentSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
          element.classList.add("brighten");
        }
      } else {
        element.classList.remove("brighten");
      }
    });
  } else {
    resetHighlights();
  }
}

// Reset all highlights
function resetHighlights() {
  const highlightedElements = document.querySelectorAll(".brighten");
  highlightedElements.forEach((element) => {
    element.classList.remove("brighten");
  });
}

// Display matching keywords in results box
function display(matchingKeywords) {
  const content = matchingKeywords.map((list) => {
    return `<li onclick="selectInput(this, '${list}')">${list}</li>`;
  });

  resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
  console.log(matchingKeywords, 'matchingkeywords');
}

