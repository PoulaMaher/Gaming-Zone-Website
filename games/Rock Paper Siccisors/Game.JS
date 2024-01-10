var gameContainer = document.querySelector(".container");
var userResult = document.querySelector(".userResult");
var cpuResult = document.querySelector(".cpuResult");
var result = document.querySelector(".result");
var User_score = document.getElementById("User_result");
var PC_score = document.getElementById("PC_result");

var optionImages = document.querySelectorAll(".optionImages");

var lastClickedImage = null; // Variable to keep track of the last clicked image
var PC_result = 0;
var User_result = 0;

function playAudio(source) {
  var audio = new Audio(source);
  audio.play();
}
// var backgroundAudio;
// function stopAudio(audio) {
//     if (audio && audio.pause) {
//         // Pause and reset the currentTime to 0
//         audio.pause();
//         audio.currentTime = 0;
//     }
// }
// isBackgroundMusicPlaying = false;

// document.body.addEventListener("mouseenter", function () {
//     // Start playing background music on hover
//     if (isBackgroundMusicPlaying==true) {
//         playAudio("موسيقى فيلم ثقافي - موسيقى خالد حماد.mp3");
//         isBackgroundMusicPlaying = false;
//     }
// });

// var userImg ;

function imgHoverin(e) {
  e.style.cssText = "opacity: 0.5";
}

function imgHoverout(e) {
  e.style.cssText = "opacity: 1";
}
var selectedImg;

function handleImageClick(e) {
  var selectedImg = e.target.src;
  var userImg = userResult.querySelector("img");
  gameContainer.classList.add("Start");

  setTimeout(function () {
    gameContainer.classList.remove("Start");

    if (userImg) {
      userImg.src = selectedImg;

      if (selectedImg.includes("477919-200.png")) {
        userImg.style.transform = "rotate(15deg)";
      } else if (selectedImg.includes("477914-200.png")) {
        userImg.style.transform = "rotate(90deg)";
      }
    }

    var cpuImages = ["477912-200.png", "477914-200.png", "477919-200.png"];

    var randomNum = Math.floor(Math.random() * 3);
    console.log(randomNum);

    var cpuResultImg = cpuResult.querySelector("img");

    console.log("Before CPU Image Change:", cpuResultImg.src);

    cpuResultImg.src = cpuImages[randomNum];
    // rotateY(45deg)

    if (cpuResultImg.src.includes("477919-200.png")) {
      cpuResultImg.style.transform = "rotateY(200deg) ";
    }
    if (selectedImg.includes("477914-200.png")) {
      userImg.style.transform = "rotate(50deg)";
    }

    console.log("After CPU Image Change:", cpuResultImg.src);

    setTimeout(function () {
      console.log(cpuResult.src);
    }, 100);

    var GameResult;
    if (cpuResultImg.src === userImg.src) {
      GameResult = "It's a Draw!";
      console.log("It's a Draw!");

      // playAudio("موسيقى فيلم ثقافي - موسيقى خالد حماد.mp3");

      // setTimeout(function () {
      //     // Stop the audio after 2 seconds
      //     stopAudio();
      // }, 500);
    } else if (
      cpuResultImg.src.includes("477914-200.png") &&
      userImg.src.includes("477919-200.png")
    ) {
      GameResult = "PC Wins";
      PC_result += 1;
      console.log("PC Wins...");
      // audio2.play();

      playAudio(
        "احمد حلمي انا متضايق اوي _ ظرف طارق (64  kbps) (cdn.ytdl.rest).mp3"
      );
    } else if (
      cpuResultImg.src.includes("477912-200.png") &&
      userImg.src.includes("477914-200.png")
    ) {
      GameResult = "PC Wins";
      PC_result += 1;

      console.log("PC Wins...");
      // audio2.play();
      playAudio(
        "احمد حلمي انا متضايق اوي _ ظرف طارق (64  kbps) (cdn.ytdl.rest).mp3"
      );
    } else if (
      cpuResultImg.src.includes("477919-200.png") &&
      userImg.src.includes("477912-200.png")
    ) {
      GameResult = "PC Wins";
      PC_result += 1;

      console.log("PC Wins...");
      // audio2.play();
      playAudio(
        "احمد حلمي انا متضايق اوي _ ظرف طارق (64  kbps) (cdn.ytdl.rest).mp3"
      );
    } else {
      GameResult = "User Wins";
      User_result += 1;
      console.log("User Wins...");
      // audio1.play();
      playAudio("مدحت شلبي _ برافو عليك.mp3");
    }

    result.innerHTML = GameResult;
    // PC_score.innerHTML=PC_result;
    // User_score.innerHTML=userResult;
    PC_score.innerHTML = PC_result;
    User_score.innerHTML = User_result;

    if (User_result == 10) {
      GameResult = "Congrats User Wins";
      result.innerHTML = GameResult;
      User_result = 0;
      User_score.innerHTML = User_result;
      PC_result = 0;
      PC_score.innerHTML = PC_result;
    } else if (PC_result == 10) {
      GameResult = "Cry cause  PC Wins";
      result.innerHTML = GameResult;
      User_result = 0;
      User_score.innerHTML = User_result;
      PC_result = 0;
      PC_score.innerHTML = PC_result;
    }
  }, 1000);

  if (lastClickedImage) {
    imgHoverout(lastClickedImage);
    // console.log(lastClickedImage);
  }

  imgHoverin(e.target);

  lastClickedImage = e.target;
  // console.log(lastClickedImage);
}
var index;
for (index = 0; index < optionImages.length; index++) {
  optionImages[index].addEventListener("click", handleImageClick);
  // optionImages[index].addEventListener("click", handleImageClick(optionImages[index]));
}

function RemoveChoice(e) {
  // Reset variables and scores
  User_result = 0;
  PC_result = 0;
  GameResult = "Play again Loser !!";

  PC_score.innerHTML = PC_result;
  User_score.innerHTML = User_result;
  result.innerHTML = GameResult;

  if (lastClickedImage) {
    imgHoverout(lastClickedImage);
    lastClickedImage = null;
  }
}
window.onload = function () {
  window.scrollTo(918, 895);
};

var audio1 = document.getElementById("winSound");
audio1.controls = false;
var audio2 = document.getElementById("LoseSound");
audio2.controls = false;

// var scrollToX, scrollToY;

// if (window.innerWidth >= 501 && window.innerWidth <= 768) {
//     // Set scroll position for screen width between 501px and 768px
//     scrollToX = 0;
//     scrollToY = 727.400;
// } else if (window.innerWidth <= 500) {
//     // Set scroll position for screen width less than or equal to 500px
//     scrollToX = 0;
//     scrollToY = 858.667;
// }

// window.onload = function () {
//     // Scroll to the specified position when the window loads
//     window.scrollTo(scrollToX, scrollToY);
// };
