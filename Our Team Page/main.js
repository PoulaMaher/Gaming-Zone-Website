var loading = document.querySelector(".loading-screen");
window.addEventListener("DOMContentLoaded", function () {
  loading.style.display = "none";
});

const sound = new Audio("../lyk-lz-m.mp3");

window.addEventListener("beforeunload", function (e) {
  e.preventDefault();

  e.returnValue = "";

  sound.play();
  return "Navigating away will lose the changes you've made to your code.";
});
