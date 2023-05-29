
// validação

function resultado(input) {
  var valor = input.value.toLowerCase();
  var id = input.id;

  if (valor == id) {
      input.value = `${input.value}`;
      input.style = `background-color: #a4df66; color:black; border: 1px solid #FFF`;
  } else {
      input.style = `background-color: #c51e1c; border: 1px solid #FFF`;
      input.value = ``;
  }
}


// fim da validação 


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