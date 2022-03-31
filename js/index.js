const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", (event) => {
  document.querySelector(".main-nav").classList.toggle("toggle-nav");
  navToggle.classList.toggle("toggle-ham");
});
