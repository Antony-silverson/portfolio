let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('fa-times'); // toggle menu icon
  navbar.classList.toggle('active');     // show/hide menu
};

// Close menu when clicking a link
document.querySelectorAll('.navbar a').forEach(link => {
  link.onclick = () => {
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
  };
});

// Smooth scroll
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Active section highlight
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let scrollY = window.pageYOffset;
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    const navLink = document.querySelector(".navbar a[href*=" + sectionId + "]");
    if (!navLink) return;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLink.classList.add("active");
    } else {
      navLink.classList.remove("active");
    }
  });
});






