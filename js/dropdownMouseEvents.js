/*---- Cached Element References ----*/
const dropdownEl = document.querySelector('.dropdown-link');

/*------------ Event Listeners ------------*/
dropdownEl.addEventListener('click', (e) => {
  dropdownEl.style.backgroundColor = 'white';
  dropdownEl.style.color = 'var(--teal)';
});

dropdownEl.addEventListener('mouseenter', (e) => {
  dropdownEl.style.backgroundColor = 'white';
  dropdownEl.style.color = 'var(--navy)';
});

dropdownEl.addEventListener('mouseleave', (e) => {
  dropdownEl.style.backgroundColor = 'transparent';
  dropdownEl.style.color = 'white';
});

dropdownEl.addEventListener('blur', (e) => {
  dropdownEl.style.backgroundColor = 'transparent';
  dropdownEl.style.color = 'rgb(255, 255, 255)';
});
