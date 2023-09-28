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
  'Git',
  'Docker',
  'Azure',
  'Visual Studio Code',
  'VSCode',
  'Vite',
  'JWT',
  'MUI',
  'HTML',
  'PostgreSQL',
  'Django',
  'Amazon Web Services',
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
  const input = inputBox.value.toUpperCase();
  const matchingKeywords = availableKeywords.filter((keyword) =>
  keyword.toUpperCase().indexOf(input) !== -1
  );
  display(matchingKeywords);

  if (!input) {
    resetHighlights();
    clearHighlightedWords();
    clearButton.style.display = "none";
  } else {
    clearButton.style.display = "inline-block";
  }
});

clearButton.addEventListener("click", function () {
  inputBox.value = "";
  resultsBox.innerHTML = "";
  resetHighlights();
  clearHighlightedWords();
  clearButton.style.display = "none";
  inputBox.focus();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Handle search result selection and scrolling
function selectInput(list, keyword) {
  inputBox.value = keyword ? keyword : list.textContent;
  resultsBox.innerHTML = '';
  search();
}

// Perform the search, scroll, and apply highlighting
function scrollToElement(element) {
  const parentSection = element.closest(".section");
  if (parentSection) {
    parentSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    element.classList.add("brighten");
  }
}

function search() {
  const keyword = inputBox.value.trim().toUpperCase();
  if (keyword.length) {
    searchImage(keyword);
    searchText(keyword);
  } else {
    resetHighlights();
    clearHighlightedWords();
  }
}

// Perform the search and apply highlighting for images
function searchImage(keyword) {
  const elementsToSearch = document.querySelectorAll(".scroll, .badge, .languages, .screenshot");

  elementsToSearch.forEach((element) => {
    const altContent = element.getAttribute("alt") ? element.getAttribute("alt").toUpperCase() : "";

    if (altContent.includes(keyword)) {
      element.classList.add("brighten")
      scrollToElement(element);
    } else {
      element.classList.remove("brighten");
    }
  });
}

// Perform the search and apply highlighting for text
function searchText(keyword) {
  const elementsToSearch = document.querySelectorAll(".about-text, .new-project-description");

  elementsToSearch.forEach((element) => {
    const content = element.textContent;
    const words = content.split(' '); // Split text into words

    const highlightedWords = words.map((word) => {
      if (word.toUpperCase().includes(keyword)) {
        return `<span class="yellowbackground">${word}</span>`;
      } else {
        return word;
      }
    });

    element.innerHTML = highlightedWords.join(' ');
  });
}

// Reset all highlights
function resetHighlights() {
  const highlightedElements = document.querySelectorAll(".brighten");
  highlightedElements.forEach((element) => {
    element.classList.remove("brighten");
  });
}

// Function to clear highlighted words in text content
function clearHighlightedWords() {
  const highlightedTextElements = document.querySelectorAll(".about-text");

  highlightedTextElements.forEach((element) => {
    const words = element.querySelectorAll('.yellowbackground');
    words.forEach((word) => {
      word.classList.remove("yellowbackground");
    });
  });
}

// Display matching keywords in results box
function display(matchingKeywords) {
  const content = matchingKeywords.map((list) => {
    return `<li onclick="selectInput(this, '${list}')">${list}</li>`;
  });

  resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}

