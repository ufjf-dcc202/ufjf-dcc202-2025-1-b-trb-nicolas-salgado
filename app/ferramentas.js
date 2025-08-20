// Lógica das ferramentas

document.getElementById("pa").onclick = function () {
  usandoPa = true;
  usandoBalde = false;
  document.body.style.cursor = "url(../graphical-assets/pa/pa.png), auto";
};

document.getElementById("balde").onclick = function () {
  usandoBalde = true;
  usandoPa = false;
  mudaSelecionada = null;
  document.body.style.cursor =
    "url(../graphical-assets/balde/balde-de-agua.png), auto";
};
