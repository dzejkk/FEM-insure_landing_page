/* nav bar */

const hamburgerBtn = document.getElementById("hamburger");
const closeBtn = document.getElementById("close");
const mobileMenu = document.getElementById("mobile-nav");

hamburgerBtn.addEventListener("click", () => {
  closeBtn.classList.toggle("hidden");
  hamburgerBtn.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
});

closeBtn.addEventListener("click", () => {
  closeBtn.classList.toggle("hidden");
  hamburgerBtn.classList.toggle("hidden");
  mobileMenu.classList.toggle("hidden");
});
