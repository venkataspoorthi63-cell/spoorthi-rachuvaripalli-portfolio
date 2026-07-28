// ===============================
// Typing Effect
// ===============================

const words = [
  "AI & ML Student",
  "Web Developer",
  "IPS Aspirant",
  "Graphic Designer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

  const current = words[wordIndex];

  if (!isDeleting) {
    typing.textContent = current.substring(0, charIndex++);
  } else {
    typing.textContent = current.substring(0, charIndex--);
  }

  let speed = 120;

  if (!isDeleting && charIndex === current.length + 1) {
    speed = 1500;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

  if (document.documentElement.scrollTop > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }

};

topBtn.onclick = function () {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

};


// ===============================
// Navbar Active Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 150;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }

  });

});


// ===============================
// Reveal Animation
// ===============================

const revealElements = document.querySelectorAll(
".card,.project-card,.timeline-box,.about-card,.contact-box"
);

function reveal() {

  revealElements.forEach(el => {

    const windowHeight = window.innerHeight;
    const revealTop = el.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {

      el.style.opacity = "1";
      el.style.transform = "translateY(0px)";

    }

  });

}

revealElements.forEach(el => {

  el.style.opacity = "0";
  el.style.transform = "translateY(40px)";
  el.style.transition = "0.8s";

});

window.addEventListener("scroll", reveal);
reveal();


// ===============================
// Smooth Hover Glow
// ===============================

const cards = document.querySelectorAll(".card,.project-card");

cards.forEach(card => {

  card.addEventListener("mousemove", () => {

    card.style.boxShadow =
      "0 0 35px rgba(255,79,163,.6)";

  });

  card.addEventListener("mouseleave", () => {

    card.style.boxShadow = "";

  });

});
