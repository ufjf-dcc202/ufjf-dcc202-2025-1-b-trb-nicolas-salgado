const c = document.getElementById("canteiro");
let usandoPa = false;

// faz o canteiro 12x12
// loop das linhas
for (let i = 0; i < 12; i++) {
  // loop das colunas
  for (let j = 0; j < 12; j++) {
    const q = document.createElement("div");
    q.className = "quadrado";
    // setta primeira grama como relevo ou flor (mais ou menos 50% de chance de cada)
    q.style.backgroundImage =
      "url(../graphical-assets/grama-seca/" +
      (Math.random() < 0.5 ? "grama-relevo-seca.png" : "grama-flor-seca.png") +
      ")";

    q.liso = false;
    //clica: precisa da pá; primeiro deixa liso, depois prepara
    q.onclick = function () {
      if (!usandoPa) return;
      if (!this.liso) {
        this.style.backgroundImage =
          "url(../graphical-assets/grama-seca/grama-lisa-seca.png)";
        this.liso = true;
      } else {
        this.style.backgroundImage =
          "url(../graphical-assets/grama-preparada/grama-preparada.png)";
      }
    };
    c.appendChild(q);
  }
}

// abre loja
document.getElementById("vendedor").onclick = function () {
  document.getElementById("loja").style.display = "block";
};

document.getElementById("pa").onclick = function () {
  usandoPa = true;
  document.body.style.cursor = "url(../graphical-assets/pa/pa.png), auto";
};

let ouro = 20;

// compra muda
function comprar(tipo) {
  if (ouro >= 5) {
    ouro -= 5;
    document.getElementById("ouro").textContent = ouro;
    document.getElementById("ouro2").textContent = ouro;
    document.getElementById("itens").innerHTML +=
      ' <img src="../graphical-assets/plantas/' +
      tipo +
      "/" +
      tipo +
      '-muda.png" height="24">';
  }
}

// fecha loja
document.querySelector(".fechar").onclick = function () {
  document.getElementById("loja").style.display = "none";
};
