const modal = document.getElementById("modal_details");
const fade = document.getElementById("fade");
const botaoFecharModalDetails = document.getElementById("botaoFecharModalDetails");

// selecionando os elementos depois de um tempo de 2 segundos
setTimeout(() => {
  const itensLista = document.querySelectorAll("li.pokemon");

  itensLista.forEach((itemLista) => {
    itemLista.addEventListener("click", abrirModalDetails);
  });

  function abrirModalDetails() {
    modal.classList.remove("hidden");
    fade.classList.remove("hidden");
  }
}, 2000);

botaoFecharModalDetails.addEventListener("click", fecharModalDetails);
fade.addEventListener("click", fecharModalDetails);


function fecharModalDetails() {
  modal.classList.add("hidden");
  fade.classList.add("hidden");
}
