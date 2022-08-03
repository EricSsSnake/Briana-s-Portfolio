const body = document.querySelector("body");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const nav = document.getElementById("index-nav");
const menuCard = document.getElementById("menu-card");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const contactForm = document.getElementById("contact-form");
const overlay = document.getElementById("overlay");
const header = document.getElementById("index-header");
const backToTop = document.getElementById("back-to-top");
const arrowDown = document.getElementsByClassName("arrow-container")[0];

const openCard = () => {
  contactForm.style.display = "block";
  overlay.style.display = "block";
};

const closeCard = () => {
  contactForm.style.display = "none";
  overlay.style.display = "none";
};

const openMenu = () => {
  menuCard.style.display = "block";
  menuIcon.style.display = "none";
  main.style.display = "none";
  footer.style.display = "none";
  closeIcon.style.display = "block";
  body.style.overflowY = "hidden";
  if (nav) {
    nav.style.background = "#000942";
  }
};

const closeMenu = () => {
  menuCard.style.display = "none";
  menuIcon.style.display = "block";
  main.style.display = "block";
  footer.style.display = "flex";
  closeIcon.style.display = "none";
  body.style.overflowY = "scroll";
  if (nav) {
    nav.style.background = "rgba(0, 0, 0, 0.25)";
  }
};

const navColorandbackToTop = () => {
  if (nav) {
    if (window.scrollY > nav.offsetHeight + 1100 && window.innerWidth > 768) {
      nav.classList.add("active");
      backToTop.style.display = "block";
    } else if (
      window.scrollY > nav.offsetHeight + 470 &&
      window.innerWidth < 768
    ) {
      backToTop.style.display = "block";
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
      backToTop.style.display = "none";
    }
  }
};

const goUp = () => {
  document.documentElement.scrollTop = 0;
};

const goDown = () => {
  main.scrollIntoView();
};

if (document.getElementById("reach-out")) {
  document.getElementById("reach-out").addEventListener("click", openCard);
  document.getElementById("close-btn").addEventListener("click", closeCard);
}

if (menuIcon) {
  menuIcon.addEventListener("click", openMenu);
  closeIcon.addEventListener("click", closeMenu);
}

window.addEventListener("scroll", navColorandbackToTop);

if (backToTop) {
  backToTop.addEventListener("click", goUp);
}

if (arrowDown) {
  arrowDown.addEventListener("click", goDown);
}
