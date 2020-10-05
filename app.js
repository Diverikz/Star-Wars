// Popup Function
document.querySelector("#card").addEventListener("click", function () {
  document.querySelector(".bg__popup").style.display = "flex";
  document.body.style.overflow = "hidden";
});

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".bg__popup").style.display = "none";
  document.body.style.overflow = "visible";
});
