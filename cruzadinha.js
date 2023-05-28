// var palavras = ["m","e","m","o","r","i","a","d","e","m","a","s","s","a"]

// function coferir(){
//   var letra = "";
//   var n = 0;
// for (var contador = 0; contador < palavras.length; contador++) {
//   n++;
//   letra = n.value;
//  if (palavras[contador].includes(letra)){
// alert(`deu certo caraio`)
//  }else {
//   alert(`errou vadia`)
//  }
// }}


var inputs = document.querySelectorAll("input.inpt");

for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function() {
    var allValues = "";
    for (var j = 1; j <= 14; j++) {
      allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
    }
    if (allValues === "MEMORIADEMASSA") {
      for (var k = 1; k <= 14; k++) {
        document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
      }
    } else {
      for (var k = 1; k <= 14; k++) {
        document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
      }
      for (var j = 1; j <= 16; j++) {
          allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
        }
        if (allValues === "EPR") {
          for (var k = 1; k <= 16; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
          }
        } else {
          for (var k = 1; k <= 16; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
          }}
        }})};
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");
const modalimg = document.querySelector("#modal-img")
const toggleModal = () => {
  modalimg.classList.toggle("hide")
  modal.classList.toggle("hide");
  fade.classList.toggle("hide");
};
[openModalButton, closeModalButton, fade, modalimg].forEach((el) => {
  el.addEventListener("click", () => toggleModal())
});