var main_content = document.querySelector(".main-content");
var list = document.querySelector(".list");

var next_btn = document.querySelector(".next");
var prev_btn = document.querySelector(".prev");
var play_back_btn = document.querySelector(".play-back");
var more_info_btns = document.querySelectorAll(".more-info");
var how_to_play_btn = document.querySelectorAll(".how-to-play");
var play_now_btn = document.querySelectorAll(".play-now");
var toggle_icon = document.querySelector(".toggle");
var mini_menu = document.querySelector(".mini-menu");
var all_our_game = document.querySelector(".all_our_game");
var all_games = document.querySelectorAll(".all-games li a");
var loading = document.querySelector(".loading-screen");
// LOADING ANIMATION ==>

window.addEventListener("load", function () {
  loading.style.display = "none";
});

function random_color() {
  const num = () => Math.trunc(Math.random() * 255) + 1;
  return `rgb( ${num()},  ${num()}, ${num()})`;
}
function change_color() {
  const dynamicStyles = document.querySelector(".internal-style");

  dynamicStyles.innerHTML = `
   
  .main-content::before {
    background-image: linear-gradient(70deg, ${random_color()},${random_color()});
  
  }
       `;
}
change_color();

var next = function () {
  change_color();
  var boxes = document.querySelectorAll(".box");
  list.appendChild(boxes[0]);
  if (main_content.classList.contains("prev-animation")) {
    main_content.classList.remove("prev-animation");
  }
  main_content.classList.add("next-animation");
};

var previous = function () {
  change_color();
  var boxes = document.querySelectorAll(".box");
  var last_box = boxes.length - 1;
  list.prepend(boxes[last_box]);
  if (main_content.classList.contains("next-animation")) {
    main_content.classList.remove("next-animation");
  }
  main_content.classList.add("prev-animation");
};
next_btn.addEventListener("click", function () {
  next();
});

prev_btn.addEventListener("click", function () {
  previous();
});

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowLeft") {
    previous();
  }
  console.log(e.key);
  if (e.key == "ArrowRight") {
    next();
  }
});

more_info_btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    main_content.classList.add("show-details");
    play_back_btn.textContent = "Back";
  });
});

function open_game() {
  var active_game = document.querySelector(
    ".main-content .list .box:nth-child(2) "
  );
  if (active_game.classList.contains("snake-game")) {
    window.open("games/Snake/index.html");
  }
  if (active_game.classList.contains("tic-game")) {
    window.open("games/Tic Tac Toe/index.html");
  }
  if (active_game.classList.contains("rps-game")) {
    window.open("games/Rock Paper Siccisors/Game.html");
  }
  if (active_game.classList.contains("roll-dice-game")) {
    window.open("games/Roll dice/index.html");
  }
}
function tutorial() {
  var active_game = document.querySelector(
    ".main-content .list .box:nth-child(2) "
  );
  if (active_game.classList.contains("snake-game")) {
    window.open("how to play/Snake/index.html");
  }
  if (active_game.classList.contains("tic-game")) {
    window.open("how to play/Tic Tac Toe/index.html");
  }
  if (active_game.classList.contains("rps-game")) {
    window.open("how to play/Rock Paper Scissor/index.html");
  }
  if (active_game.classList.contains("roll-dice-game")) {
    window.open("how to play/Roll Dice/index.html");
  }
}

play_back_btn.addEventListener("click", function () {
  if (this.textContent === "Play Now") {
    open_game();
  } else {
    main_content.classList.remove("show-details");
    play_back_btn.textContent = "Play Now";
  }
});

toggle_icon.addEventListener("click", function () {
  toggle_icon.classList.toggle("active-mega-menu");
  mini_menu.classList.toggle("active-mini-menu");
  document.querySelector(".all-games").classList.remove("active-mini-menu");
  document.querySelector(".mini-menu .icon").classList.remove("active");
});

play_now_btn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    open_game();
  });
});

how_to_play_btn.forEach(function (btn) {
  btn.addEventListener("click", function () {
    tutorial();
    console.log("how to plya");
  });
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
