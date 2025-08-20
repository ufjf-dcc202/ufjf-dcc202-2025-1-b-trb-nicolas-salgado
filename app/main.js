const c = document.getElementById("canteiro");

// faz o canteiro 12x12
// loop das linhas
for (let i = 0; i < 12; i++) {
  // loop das colunas
  for (let j = 0; j < 12; j++) {
    const q = document.createElement("div");
    q.className = "quadrado";
    c.appendChild(q);
  }
}

// abre loja
document.getElementById("vendedor").onclick = function () {
  document.getElementById("loja").style.display = "block";
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
