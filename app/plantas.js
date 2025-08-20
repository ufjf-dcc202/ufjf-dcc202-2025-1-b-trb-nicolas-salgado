// Lógica das plantas

// Seleciona uma muda do inventário
function selecionarMuda(mudaElement) {
  mudaElement.classList.add("selecionada");
  mudaSelecionada = mudaElement.dataset.tipo;
}

// Planta a muda no quadrado
function plantarMuda(quadrado, tipoMuda) {
  const fundoAtual = quadrado.style.backgroundImage;
  quadrado.style.backgroundImage = `url(../graphical-assets/plantas/${tipoMuda}/${tipoMuda}-muda.png), ${fundoAtual}`;
  quadrado.planta = tipoMuda;

  document.querySelector(".muda-inventario.selecionada").remove();
  mudaSelecionada = null;
}
