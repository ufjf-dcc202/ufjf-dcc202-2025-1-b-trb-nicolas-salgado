const c = document.getElementById("canteiro");
// usa cursor normal por padrao
let usandoPa = false;
// nenhuma muda selecionada por padrao
let mudaSelecionada = null;
//setta quantidade de ouro por padrao
let ouro = 20;

// faz o canteiro 12x12
// loop das linhas
for (let i = 0; i < 12; i++) {
  // loop das colunas
  for (let j = 0; j < 12; j++) {
    const q = document.createElement("div");
    q.className = "quadrado";

    // nenhum quadrado liso, nem preparado, nem com planta por padrao
    q.liso = false;
    q.preparado = false;
    q.planta = null;

    // setta primeira grama como relevo ou flor (mais ou menos 50% de chance de cada)
    q.style.backgroundImage =
      "url(../graphical-assets/grama-seca/" +
      (Math.random() < 0.5 ? "grama-relevo-seca.png" : "grama-flor-seca.png") +
      ")";

    //função que define o que vai acontecer com o quadrado quando clicar nele (se tiver uma muda selecionada, planta ela)
    q.onclick = function () {
      if (mudaSelecionada && this.preparado && !this.planta) {
        plantarMuda(this, mudaSelecionada);
        return;
      }
      if (!usandoPa) return;
      if (!this.liso) {
        this.style.backgroundImage =
          "url(../graphical-assets/grama-seca/grama-lisa-seca.png)";
        this.liso = true;
      } else {
        this.style.backgroundImage =
          "url(../graphical-assets/grama-preparada/grama-preparada.png)";
        this.preparado = true;
      }
    };
    c.appendChild(q);
  }
}

// eventos de interface
document.getElementById("pa").onclick = function () {
  usandoPa = true;
  document.body.style.cursor = "url(../graphical-assets/pa/pa.png), auto";
};

document.getElementById("vendedor").onclick = function () {
  document.getElementById("loja").style.display = "block";
};

document.querySelector(".fechar").onclick = function () {
  document.getElementById("loja").style.display = "none";
};

// compra muda
function comprar(tipo) {
  if (ouro >= 5) {
    ouro -= 5;
    document.getElementById("ouro").textContent = ouro;
    document.getElementById("ouro2").textContent = ouro;

    // cria a muda no inventario (seleciona ela e planta ela)
    const mudaImg = document.createElement("img");
    mudaImg.src = `../graphical-assets/plantas/${tipo}/${tipo}-muda.png`;
    mudaImg.height = 24;
    mudaImg.className = "muda-inventario";
    mudaImg.dataset.tipo = tipo;
    mudaImg.onclick = function () {
      selecionarMuda(this);
    };

    document.getElementById("itens").appendChild(mudaImg);
  }
}

// seleciona muda
function selecionarMuda(mudaElement) {
  document
    .querySelectorAll(".muda-inventario")
    .forEach((m) => m.classList.remove("selecionada"));
  mudaElement.classList.add("selecionada");
  mudaSelecionada = mudaElement.dataset.tipo;
  usandoPa = false;
  document.body.style.cursor = "auto";
}

// planta muda
function plantarMuda(quadrado, tipoMuda) {
  const fundoAtual = quadrado.style.backgroundImage;
  quadrado.style.backgroundImage = `url(../graphical-assets/plantas/${tipoMuda}/${tipoMuda}-muda.png), ${fundoAtual}`;
  quadrado.planta = tipoMuda;

  document.querySelector(".muda-inventario.selecionada").remove();
  mudaSelecionada = null;
}
