// Lógica da loja

// Abre a loja
document.getElementById("vendedor").onclick = function () {
  document.getElementById("loja").style.display = "block";
};

// Fecha a loja
document.querySelector(".fechar").onclick = function () {
  document.getElementById("loja").style.display = "none";
};

// Compra uma muda
function comprar(tipo) {
  if (ouro >= 5) {
    ouro -= 5;
    document.getElementById("ouro").textContent = ouro;
    document.getElementById("ouro2").textContent = ouro;

    // Cria a muda no inventário
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
