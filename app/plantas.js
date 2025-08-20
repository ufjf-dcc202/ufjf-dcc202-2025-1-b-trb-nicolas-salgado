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
  quadrado.planta = { tipo: tipoMuda, estagio: "muda" };

  document.querySelector(".muda-inventario.selecionada").remove();
  mudaSelecionada = null;
}

function avancarEstagio(quadrado) {
  const { tipo, estagio } = quadrado.planta;
  let novoEstagio = estagio;
  let novaImagem = "";

  switch (estagio) {
    case "muda":
      novoEstagio = "crescendo";
      break;
    case "crescendo":
      novoEstagio = "crescido";
      break;
  }

  if (quadrado.planta.estagio !== novoEstagio) {
    quadrado.planta.estagio = novoEstagio;
    novaImagem = `../graphical-assets/plantas/${tipo}/${tipo}-${novoEstagio}.png`;
    quadrado.style.backgroundImage = `url(${novaImagem}), url(../graphical-assets/grama-preparada/grama-preparada.png)`;
  }
}

function matarPlanta(quadrado) {
  const { tipo } = quadrado.planta;
  quadrado.planta.estagio = "morto";
  const plantaMorta = `../graphical-assets/plantas/${tipo}/${tipo}-morto.png`;
  quadrado.style.backgroundImage = `url(${plantaMorta}), url(../graphical-assets/grama-preparada/grama-preparada.png)`;
}

function limparQuadrado(quadrado) {
  quadrado.liso = true;
  quadrado.preparado = false;
  quadrado.molhado = false;
  quadrado.planta = null;
  quadrado.style.backgroundImage =
    "url(../graphical-assets/grama-seca/grama-lisa-seca.png)";
}
