var c = document.getElementById("canteiro");
// faz o canteiro 12x12
// loop das linhas
for (var i = 0; i < 12; i++) {
  // loop das colunas
  for (var j = 0; j < 12; j++) {
    var q = document.createElement("div");
    q.className = "quadrado";
    c.appendChild(q);
  }
}
