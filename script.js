const navEl = document.querySelector(".nav__menu")
const hamburgerEl = document.querySelector(".hamburger")

hamburgerEl.addEventListener("click", () => {
  navEl.classList.toggle("nav--open")
  hamburgerEl.classList.toggle("hamburger--open")
})
