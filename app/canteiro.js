// Lógica do Canteiro
function inicializarCanteiro() {
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
      q.molhado = false;
      q.planta = null;

      // setta primeira grama como relevo ou flor (mais ou menos 50% de chance de cada)
      q.style.backgroundImage =
        "url(../graphical-assets/grama-seca/" +
        (Math.random() < 0.5
          ? "grama-relevo-seca.png"
          : "grama-flor-seca.png") +
        ")";

      //função que define o que vai acontecer com o quadrado quando clicar nele (se tiver uma muda selecionada, planta ela)
      q.onclick = function () {
        if (this.planta && this.planta.estagio === "crescido") {
          colherPlanta(this);
          return;
        }

        if (usandoPa && this.planta && this.planta.estagio === "morto") {
          limparQuadrado(this);
          return;
        }
        if (mudaSelecionada && this.preparado && !this.planta) {
          plantarMuda(this, mudaSelecionada);
          return;
        }
        if (
          usandoBalde &&
          this.planta &&
          this.planta.estagio !== "morto" &&
          !this.molhado
        ) {
          this.style.backgroundImage = this.style.backgroundImage.replace(
            "grama-preparada.png",
            "grama-preparada-molhada.png"
          );
          this.molhado = true;
          const som = new Audio("../audio/molhar-grama.ogg");
          som.play();
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
}

inicializarCanteiro();
