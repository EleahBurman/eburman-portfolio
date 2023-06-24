/*------------ Constants ------------*/
const roles = ['Software Engineer', 'Full Stack Developer', 'Problem Solver', 'Coffee-Enthusiast', 'Gamer', 'Cat Mom'];

/*------------ Variables ------------*/
let index = 0;
let deleting = false;

/*---- Cached Element References ----*/
const rolesEl = document.getElementById('roles');
const scrollEl = document.querySelectorAll('.scroll');
const menuBtn = document.querySelector('.menu-button');
const navbar = document.getElementById('navbar');

/*------------ Event Listeners ------------*/
scrollEl.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector(el.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
    closeNavbar();
  });
});

menuBtn.addEventListener('click', () => {
  toggleNavbar();
});

navbar.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    closeNavbar();
  }
});

/*------------ Functions ------------*/
function toggleNavbar() {
  navbar.classList.toggle('open');
  menuBtn.classList.toggle('open');
  if (navbar.classList.contains('open')) {
    menuBtn.innerHTML = 'X';
  } else {
    menuBtn.innerHTML = '≡';
  }
}

function closeNavbar() {
  navbar.classList.remove('open');
  menuBtn.classList.remove('open');
  menuBtn.innerHTML = '≡';
}

function init() {
  typeText();
}

function typeText() {
  const role = roles[index % roles.length];
  const currentRole = rolesEl.textContent;

  if (deleting) {
    if (currentRole.length > 0) {
      rolesEl.textContent = currentRole.slice(0, -1);
      setTimeout(typeText, 100);
    } else {
      deleting = false;
      index = (index + 1) % roles.length;
      setTimeout(typeText, 500);
    }
  } else {
    if (currentRole !== role) {
      if (currentRole.length < role.length) {
        rolesEl.textContent = role.slice(0, currentRole.length + 1);
        setTimeout(typeText, 100);
      } else {
        deleting = true;
        setTimeout(typeText, 1000);
      }
    } else {
      deleting = true;
      setTimeout(typeText, 1000);
    }
  }
}

/*------------ Initialization ------------*/
init();