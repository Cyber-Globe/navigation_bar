let headerEl = document.querySelector(".header");
let btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
