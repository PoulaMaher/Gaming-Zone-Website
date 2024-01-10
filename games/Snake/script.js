//--------------------------------------------=> Global variable <=--------------------------------------------
var current_score = document.querySelector(".score");
var high_score = document.querySelector(".high_score");
var canvas = document.querySelector("canvas");
var play_gain = document.querySelector(".play_again");
var arrow = document.querySelector(".arrow");
var all_arrows = document.querySelectorAll(".arrow img");
var container = document.querySelector(".container");
var game_over_message = document.querySelector(".game_over .text");
var ctx = canvas.getContext("2d");
var snake_color = "rgba(255,255,255,.7 )";
var snake_head_color = "rgba(225,225,225,1)";
var FPS;
var audio = new Audio("Audio/audio.mp3");
var start_again_audio = new Audio(
  "Audio/gta-san-andreas-ah-shit-here-we-go-again_BWv0Gvc.mp3"
);
var loos_audio = new Audio("Audio/game_over.mp3");
var high_score_audio = new Audio("Audio/______I6418kK.mp3");
var x, y, loop, score;

var color_list = [
  "rgb(255, 0, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 0, 255)",
  "rgb(255, 255, 0)",
  "rgb(255, 0, 255)",
  "rgb(0, 255, 255)",
  "rgb(255, 165, 0)",
  "rgb(128, 0, 128)",
  "rgb(255, 192, 203)",
  "rgb(255, 215, 0)",
  "rgb(0, 128, 0)",
  "rgb(21, 15,255)",
  "rgb(0, 255, 255)",
];

var square_size = 20;
var size = 25;
var particles = [];
var direction;

canvas.width = square_size * size;
canvas.height = square_size * size;

var snake = [{ x: 10, y: 10 }];

var food = { x: random_number(), y: random_number(), color: random_color() };

current_score.textContent = "0";
score = 0;

var initial_high_score = parseInt(sessionStorage.getItem("High Score"), 10);
if (isNaN(initial_high_score)) {
  initial_high_score = 0;
  sessionStorage.setItem("High Score", "0");
}
high_score.textContent = initial_high_score;

// FUNCTIONS -->
function draw_board() {
  ctx.fillStyle = "#ffff00";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}
function update_score() {
  current_score.textContent = score.toString();
}
function draw_snake() {
  snake.forEach(function (element, index) {
    if (index === snake.length - 1) {
      ctx.fillStyle = snake_head_color;
      ctx.shadowBlur = 20;

      ctx.shadowColor = snake_head_color;
    } else {
      ctx.fillStyle = snake_color;
      ctx.shadowBlur = 0;
    }

    ctx.fillRect(
      element.x * square_size,
      element.y * square_size,
      square_size,
      square_size
    );
  });

  ctx.shadowBlur = 0;
}
function draw_background() {
  document.addEventListener("DOMContentLoaded", () => {
    // Draw grid
    ctx.fillStyle = "white";
    for (var row = 0; row < size; row++) {
      for (var col = 0; col < size; col++) {
        ctx.strokeRect(
          col * square_size,
          row * square_size,
          square_size,
          square_size
        );
      }
    }
  });
}
function random_number() {
  return Math.trunc(Math.random() * size);
}
function random_color() {
  // var i = Math.floor(Math.random() * color_list.length);
  // return color_list[i];

  // *===>
  function num() {
    return Math.trunc(Math.random() * 255) + 1;
  }
  return `rgb(${num()},${num()},${num()})`;
}
random_color();
function draw_food() {
  ctx.fillStyle = food.color;

  ctx.shadowBlur = 25;
  ctx.shadowColor = food.color;

  ctx.fillRect(
    food.x * square_size,
    food.y * square_size,
    square_size,
    square_size
  );

  ctx.shadowBlur = 0;
}
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp" && direction != "down") {
    direction = "up";
  }
  if (e.key === "ArrowDown" && direction != "up") {
    direction = "down";
  }
  if (e.key === "ArrowLeft" && direction != "right") {
    direction = "left";
  }
  if (e.key === "ArrowRight" && direction != "left") {
    direction = "right";
  }
});
all_arrows.forEach((btn) => {
  btn.addEventListener("touchstart", function () {
    if (this.classList.contains("up_arrow") && direction != "down") {
      direction = "up";
    }
    if (this.classList.contains("down_arrow") && direction != "up") {
      direction = "down";
    }
    if (this.classList.contains("left_arrow") && direction != "right") {
      direction = "left";
    }
    if (this.classList.contains("right_arrow") && direction != "left") {
      direction = "right";
    }
  });
});
function move_snake() {
  if (!direction) return;

  var snake_head = snake.at(-1);
  if (direction === "left") {
    snake.push({ x: snake_head.x - 1, y: snake_head.y });
  }
  if (direction === "right") {
    snake.push({ x: snake_head.x + 1, y: snake_head.y });
  }
  if (direction === "up") {
    snake.push({ x: snake_head.x, y: snake_head.y - 1 });
  }
  if (direction === "down") {
    snake.push({ x: snake_head.x, y: snake_head.y + 1 });
  }
  // For cross the wall
  // if (snake.at(-1).x < 0) snake.at(-1).x = size;
  // if (snake.at(-1).x > size) snake.at(-1).x = 0;
  // if (snake.at(-1).y < 0) snake.at(-1).y = size;
  // if (snake.at(-1).y > size) snake.at(-1).y = 0;

  snake.shift();
}
function create_food_position() {
  var x = random_number();
  var y = random_number();
  while (snake.some((element) => element.x === x && element.y === y)) {
    x = random_number();
    y = random_number();
  }
  food.x = x;
  food.y = y;
  food.color = random_color();
}
function createParticle(x, y, color) {
  return {
    x: x,
    y: y,
    color: color,
    size: Math.random() * 3 + 3, // Random size
    life: 0,
    maxLife: 13, // Shorter lifespan for quick disappearance
    velX: Math.random() * 6, // Horizontal velocity
    velY: Math.random() * 6, // Vertical velocity
    gravity: -0.2,
  };
}
function updateParticles() {
  particles.forEach((p) => {
    p.x += p.velX;
    p.y += p.velY;
    p.velY -= p.gravity; // Apply gravity
    p.size *= 0.85; // Reduce size
    p.life++;
  });
  particles = particles.filter((p) => p.life < p.maxLife);
}
function drawParticles(ctx) {
  particles.forEach((p) => {
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 3);
    ctx.fill();
  });
}
function eat() {
  if (snake.at(-1).x === food.x && snake.at(-1).y === food.y) {
    var particleCount = 20; // Number of particles
    for (var i = 0; i < particleCount; i++) {
      particles.push(
        createParticle(
          food.x * square_size + square_size / 2,
          food.y * square_size + square_size / 2,
          food.color
        )
      );
    }
    snake.push(snake.at(-1));
    score++;
    audio.play();
    create_food_position();
  }
}
function valid_collision() {
  var head = snake.at(-1);
  for (var i = 0; i < snake.length - 1; i++) {
    if (head.x === snake[i].x && head.y === snake[i].y) {
      return true;
    }
  }

  if (head.x < 0 || head.x > size || head.y < 0 || head.y > size) {
    return true;
  }

  return false;
}
function store_score() {
  var current_high_score = parseInt(sessionStorage.getItem("High Score"), 10);
  if (score > current_high_score) {
    sessionStorage.setItem("High Score", score.toString());
    high_score.textContent = score;
    high_score_audio.play();
    start_again_audio.pause();
    start_again_audio.currentTime = 0;
    game_over_message.textContent = "New High Score 🥳";
  } else {
    game_over_message.textContent = "Game Over 💔";

    loos_audio.play();

    start_again_audio.pause();
    start_again_audio.currentTime = 0;
  }
}
function change_speed(score) {
  switch (score) {
    case 0:
      FPS = 1000 / 3;
      break;
    case score:
      FPS = 1000 / (score + 2);
      break;
  }
}
function game_loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  change_speed(score);

  move_snake();
  draw_snake();
  draw_food();
  updateParticles();
  drawParticles(ctx);
  if (valid_collision()) {
    game_over();
    // console.log("game over");
    return;
  }
  eat();
  update_score();
  // console.log(FPS);

  loop = setTimeout(() => {
    game_loop(FPS);
  }, FPS);
}
game_loop();

function game_over() {
  container.style.justifyContent = "center";
  arrow.style.display = "none";
  document.querySelector(".game_over").style.display = "flex";
  play_gain.style.display = "block";
  canvas.style.filter = "blur(7px)";
  clearTimeout(loop);
  direction = null;
  create_food_position();
  store_score();
}

play_gain.addEventListener("click", function () {
  initial_high_score = parseInt(sessionStorage.getItem("High Score"), 10);
  high_score.textContent = isNaN(initial_high_score) ? "0" : initial_high_score;

  loos_audio.pause();
  loos_audio.currentTime = 0;
  high_score_audio.pause();
  high_score_audio.currentTime = 0;

  start_again_audio.play();
  document.querySelector(".game_over").style.display = "none";
  container.style.justifyContent = "flex";
  if (window.matchMedia("(max-width: 768px) ").matches) {
    play_gain.style.display = "none";
    arrow.style.display = "flex";
  }

  canvas.style.filter = "none";
  snake.length = 1;
  snake[0] = { x: 10, y: 10 };
  score = 0;
  clearTimeout(loop);
  direction = null;
  create_food_position();
  game_loop(FPS);
});
