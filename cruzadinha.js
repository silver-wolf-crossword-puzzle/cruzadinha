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
var contador = 1
function proxima() {
  resultado.innerHTML = ``
  resultado.innerHTML = ``
  erro_resposta.innerHTML = ''

  if (contador == 1) {
      dica_1.style.display = 'none'
      dica_2.style.display = 'block'

      contador++
  } else if (contador == 2) {
      dica_2.style.display = 'none'
      dica_3.style.display = 'block'

      contador++
  } else if (contador == 3) {
      dica_3.style.display = 'none'
      dica_4.style.display = 'block'

      contador++
  } else if (contador == 4) {
      dica_4.style.display = 'none'
      dica_5.style.display = 'block'

      contador++
  } else if (contador == 5) {
      dica_5.style.display = 'none'
      dica_6.style.display = 'block'

      contador++
  } else if (contador == 6) {
      dica_6.style.display = 'none'
      dica_7.style.display = 'block'

      contador++
  } else if (contador == 7) {
      dica_7.style.display = 'none'
      dica_8.style.display = 'block'

      contador++
  } else if (contador == 8) {
      dica_8.style.display = 'none'
      dica_9.style.display = 'block'

      contador++
  } else if (contador == 9) {
      dica_9.style.display = 'none'
      dica_10.style.display = 'block'

      contador++
  } else if (contador == 10) {
      dica_10.style.display = 'none'
      dica_11.style.display = 'block'

      contador++
  } else if (contador == 11) {
      dica_11.style.display = 'none'
      dica_12.style.display = 'block'

      contador++
  } else if (contador == 12) {
      dica_12.style.display = 'none'
      dica_13.style.display = 'block'

      contador++
  } else if (contador == 13) {
      dica_13.style.display = 'none'
      dica_14.style.display = 'block'

      contador++
  } else if (contador == 14) {
      dica_14.style.display = 'none'
      dica_15.style.display = 'block'

      contador++
  } else if (contador == 15) {
      dica_15.style.display = 'none'
      dica_16.style.display = 'block'

      contador++
  } else if (contador == 16) {
      dica_16.style.display = 'none'
      dica_1.style.display = 'block'

      contador = 1
  }
}



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