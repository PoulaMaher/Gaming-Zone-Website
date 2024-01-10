var toggle_icon = document.querySelector(".toggle");
var mini_menu = document.querySelector(".mini-menu");
var all_our_game = document.querySelector(".all_our_game");
var all_games = document.querySelectorAll(".all-games li a");
var play_now = document.querySelector(".play-now-btn");
var loading = document.querySelector(".loading-screen");
window.addEventListener("DOMContentLoaded", function () {
  loading.style.display = "none";
});
play_now.addEventListener("click", function () {
  window.open("../../games/Tic Tac Toe/index.html", "_self");
});

var header = document.querySelector("header");
var all_sections = document.querySelectorAll(".section");
// console.log(all_sections);
toggle_icon.addEventListener("click", function () {
  toggle_icon.classList.toggle("active-mega-menu");
  mini_menu.classList.toggle("active-mini-menu");
  document.querySelector(".all-games").classList.remove("active-mini-menu");
  document.querySelector(".mini-menu .icon").classList.remove("active");
});
all_our_game.addEventListener("click", function () {
  document.querySelector(".all-games").classList.toggle("active-mini-menu");
  document.querySelector(".mini-menu .icon").classList.toggle("active");
});

var our_game = document
  .querySelector(".games")
  .addEventListener("click", function () {
    document.querySelector(".all-games").classList.toggle("active-mini-menu-2");
    document.querySelector(".mini-menu .icon").classList.toggle("active");
  });

var section_callback = function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) {
      e.target.classList.add("in-view");
      var section_elements = e.target.querySelectorAll(".fade-delay");
      section_elements[0].style.transitionDelay = "0s";
      for (var i = 1; i < section_elements.length; i++) {
        section_elements[i].style.transitionDelay = `${i * 0.2}s`;
      }
    }
  });
};

var section_option = {
  root: null,
  threshold: 0,
  rootMargin: "-100px",
};

var section_observer = new IntersectionObserver(
  section_callback,
  section_option
);
all_sections.forEach(function (section) {
  section_observer.observe(section);
});
