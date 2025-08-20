// arquivo principal - inicializa o jogo
const c = document.getElementById("canteiro");

// usa cursor normal por padrao
let usandoPa = false;
let usandoBalde = false;
// nenhuma muda selecionada por padrao
let mudaSelecionada = null;
//setta quantidade de ouro por padrao
let ouro = 20;

function desativarFerramentas() {
  usandoPa = false;
  usandoBalde = false;
  mudaSelecionada = null;
  document.body.style.cursor = "auto";
  document
    .querySelectorAll(".muda-inventario.selecionada")
    .forEach((m) => m.classList.remove("selecionada"));
}

document.getElementById("creditos-btn").onclick = function () {
  document.getElementById("creditos-popup").style.display = "block";
};

document.querySelector("#creditos-popup .fechar").onclick = function () {
  document.getElementById("creditos-popup").style.display = "none";
};

document.getElementById("dormir").onclick = function () {
  const som = new Audio("../audio/som-de-dormir.ogg");
  som.play();
  const quadrados = document.querySelectorAll(".quadrado");
  quadrados.forEach((q) => {
    if (q.planta) {
      if (q.molhado) {
        avancarEstagio(q);
      } else {
        matarPlanta(q);
      }
      q.molhado = false; // A terra sempre seca no dia seguinte
      if (q.planta.estagio !== "morto") {
        q.style.backgroundImage = q.style.backgroundImage.replace(
          "grama-preparada-molhada.png",
          "grama-preparada.png"
        );
      }
    }
  });
};
