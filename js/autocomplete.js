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
    resetBrighten();
    clearButton.style.display = "none";
  } else {
    clearButton.style.display = "inline-block";
  }
});

clearButton.addEventListener("click", function () {
  inputBox.value = "";
  resultsBox.innerHTML = "";
  resetHighlights();
  resetBrighten();
  clearButton.style.display = "none";
  inputBox.focus();
});

// Handle search result selection and scrolling
function selectInput(list, keyword) {
  inputBox.value = keyword ? keyword : list.textContent;
  resultsBox.innerHTML = '';
  search();
}

function search() {
  const searchWord = inputBox.value.trim()
  const keyword = inputBox.value.trim().toUpperCase();
  if (keyword.length) {
    searchImage(keyword);
    searchText(keyword);

  const numResults = getNumResults(keyword);

  resultsBox.innerHTML = `Found ${numResults} results for "${searchWord}"`;
      // Make the .result-box visible
      resultsBox.style.display = "inline-block";
    } else {
      resetHighlights();
      resetBrighten();
      resultsBox.style.display = "none"; // Hide the .result-box when no keyword is entered
  }
}

// Function to count the number of results
function getNumResults(keyword) {
  const elementsToSearch = document.querySelectorAll(".about-text, .new-project-description");
  const imageElementsToSearch = document.querySelectorAll(".scroll, .badge, .languages, .screenshot, .column-icon");

  let count = 0;

  elementsToSearch.forEach((element) => {
    const content = element.textContent;
    const words = content.split(' ');

    words.forEach((word) => {
      if (word.toUpperCase().includes(keyword)) {
        count++;
      }
    });

  });

  imageElementsToSearch.forEach((element) => {
    const altContent = element.getAttribute("alt") ? element.getAttribute("alt").toUpperCase() : "";

    if (altContent.includes(keyword)) {
      count++;
    }
  });

  return count;
}


// Perform the search and apply highlighting for images
function searchImage(keyword) {
  const elementsToSearch = document.querySelectorAll(".scroll, .badge, .languages, .screenshot, .column-icon");

  let firstMatchedElement = null;

  elementsToSearch.forEach((element) => {
    const altContent = element.getAttribute("alt") ? element.getAttribute("alt").toUpperCase() : "";

    if (altContent.includes(keyword) && !firstMatchedElement) {
      firstMatchedElement = element;
    }

    if (altContent.includes(keyword)) {
      element.classList.add("brighten");
    } else {
      element.classList.remove("brighten");
    }
  });

  if (firstMatchedElement) {
    firstMatchedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

}
// Reset the 'brighten' class from previously highlighted elements
  function resetBrighten() {
  const elementsToReset = document.querySelectorAll(".brighten");

  elementsToReset.forEach((element) => {
    element.classList.remove("brighten");
  });
}

// Perform the search and apply highlighting for text
function searchText(keyword) {
  const elementsToSearch = document.querySelectorAll(".partial-description, .full-description, .about-text");

  elementsToSearch.forEach((element) => {
    const content = element.textContent;
    const words = content.split(' '); // Split text into words

    const highlightedWords = words.map((word) => {
      if (word.toUpperCase().includes(keyword.toUpperCase())) {
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
  const highlightedElements = document.querySelectorAll(".yellowbackground");
  highlightedElements.forEach((element) => {
    element.outerHTML = element.textContent; // Remove the span and keep the original text
  });
}

// Display matching keywords in results box
function display(matchingKeywords) {
  const content = matchingKeywords.map((list) => {
    // Add the icon before each keyword
    const listItem = `<li onclick="selectInput(this, '${list}')"><i class="fa-solid fa-search" style="font-size: 12px;"></i> ${list}</li>`;
    return listItem;
  });

  resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";
}


function openSearchBox() {
  const searchBox = document.querySelector('.search-box');
  const searchButtonInit = document.querySelector('.search-button-init');
  searchBox.classList.add('open');
  searchButtonInit.classList.add('hide');
}


