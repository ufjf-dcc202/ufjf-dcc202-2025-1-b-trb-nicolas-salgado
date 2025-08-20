// Lógica das plantas

// Seleciona uma muda do inventário
function selecionarMuda(mudaElement) {
  document
    .querySelectorAll(".muda-inventario")
    .forEach((m) => m.classList.remove("selecionada"));
  mudaElement.classList.add("selecionada");
  mudaSelecionada = mudaElement.dataset.tipo;
  usandoPa = false;
  usandoBalde = false;
  document.body.style.cursor = "auto";
}

// Planta a muda no quadrado
function plantarMuda(quadrado, tipoMuda) {
  const fundoAtual = quadrado.style.backgroundImage;
  quadrado.style.backgroundImage = `url(../graphical-assets/plantas/${tipoMuda}/${tipoMuda}-muda.png), ${fundoAtual}`;
  quadrado.planta = tipoMuda;

  document.querySelector(".muda-inventario.selecionada").remove();
  mudaSelecionada = null;
}
