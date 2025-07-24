// ==============================
// Theme Toggle (Dark Mode)
// ==============================

// If theme toggle button exists, add click event
const themeToggleBtn = document.getElementById("theme-toggle");
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}

// ==============================
// Smooth Scroll Function
// ==============================

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// ==============================
// Preloader + AOS Initialization
// ==============================

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) preloader.style.display = 'none';

  AOS.init({
    duration: 1000,  // animation duration
    once: true       // animate only once
  });
});

// ==============================
// Google Sheets Form Submission
// ==============================

const scriptURL = 'https://script.google.com/macros/s/AKfycbwKkx5gHVwINeSp3p8OSMj_iDBEbUqlXiAoUyoaYEH3TddXUi1YYdYPVuofXpSkNH-j/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        msg.innerHTML = "✅ Appointment booked successfully!";
        setTimeout(() => msg.innerHTML = "", 5000);
        form.reset();
      })
      .catch(error => {
        msg.innerHTML = "❌ Submission failed. Please try again.";
        console.error("Form submission error:", error);
      });
  });
}

// ==============================
// Sticky Header Show/Hide on Scroll
// ==============================

let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop && currentScroll > 100) {
    // Scrolling down -> hide header
    header?.classList.add('hide');
  } else {
    // Scrolling up -> show header
    header?.classList.remove('hide');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

// ==============================
// Mobile Hamburger Menu Toggle
// ==============================

const toggleBtn = document.getElementById("hamburger-toggle");
const navMenu = document.querySelector("nav");

if (toggleBtn && navMenu) {
  toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}
