// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Typing effect
const typingText = document.getElementById("typing");
const roles = [
  "AI & Data Science Developer",
  "FastAPI Backend Builder",
  "Machine Learning Enthusiast",
  "Computer Vision Developer",
  "NLP & Data Analytics Learner"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const currentRole = roles[roleIndex];

  if (!deleting) {
    typingText.textContent = currentRole.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentRole.length) {
      deleting = true;
      setTimeout(typeEffect, 1200);
      return;
    }
  } else {
    typingText.textContent = currentRole.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }

  setTimeout(typeEffect, deleting ? 50 : 90);
}
typeEffect();

// Reveal on scroll
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect();

    if (rect.top < triggerBottom) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// Project details toggle
document.querySelectorAll(".toggle-details").forEach((button) => {
  button.addEventListener("click", () => {
    const details = button.nextElementSibling;
    details.classList.toggle("open");
    button.textContent = details.classList.contains("open") ? "View Less" : "View More";
  });
});

// Shuffle skills
const shuffleBtn = document.getElementById("shuffleBtn");
const skillsGrid = document.getElementById("skillsGrid");

shuffleBtn.addEventListener("click", () => {
  const cards = Array.from(skillsGrid.children);

  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px) scale(0.9)";
    setTimeout(() => {
      skillsGrid.appendChild(card);
      card.style.opacity = "1";
      card.style.transform = "translateY(0) scale(1)";
    }, index * 70);
  });
});

// 3D tilt for profile image
const imageCard = document.querySelector(".image-card");

imageCard.addEventListener("mousemove", (e) => {
  const rect = imageCard.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = ((y - centerY) / centerY) * 8;
  const rotateY = ((x - centerX) / centerX) * 8;

  imageCard.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
});

imageCard.addEventListener("mouseleave", () => {
  imageCard.style.transform = "rotateX(0) rotateY(0) scale(1)";
});