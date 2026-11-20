
/* ==============================
   ORBIT - INTERACTIONS
================================ */

// MOBILE MENU
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  menuToggle.textContent = navLinks.classList.contains("active")
    ? "✕"
    : "☰";
});

// CLOSE MENU AFTER CLICK
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});

// SCROLL REVEAL
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach(element => {
  observer.observe(element);
});

// NAVBAR SCROLL EFFECT
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(5, 6, 17, 0.88)";
    navbar.style.backdropFilter = "blur(20px)";
  } else {
    navbar.style.background = "transparent";
    navbar.style.backdropFilter = "blur(15px)";
  }
});

// PLANET CARD HOVER EFFECT
document.querySelectorAll(".planet-card").forEach(card => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});

// HERO PLANET MOUSE MOVEMENT
const heroVisual = document.querySelector(".hero-visual");
const mainPlanet = document.querySelector(".planet");

heroVisual.addEventListener("mousemove", (event) => {
  if (window.innerWidth < 700) return;

  const rect = heroVisual.getBoundingClientRect();

  const x = (event.clientX - rect.width / 2) / 35;
  const y = (event.clientY - rect.height / 2) / 35;

  mainPlanet.style.transform =
    `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
});

heroVisual.addEventListener("mouseleave", () => {
  mainPlanet.style.transform = "translate(-50%, -50%)";
});

console.log("ORBIT Space Project loaded successfully 🚀");
