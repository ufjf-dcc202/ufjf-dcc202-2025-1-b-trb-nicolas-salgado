// Lógica das ferramentas

document.getElementById("pa").onclick = function () {
  desativarFerramentas();
  usandoPa = true;
  document.body.style.cursor = "url(../graphical-assets/pa/pa.png), auto";
};

document.getElementById("balde").onclick = function () {
  desativarFerramentas();
  usandoBalde = true;
  document.body.style.cursor =
    "url(../graphical-assets/balde/balde-de-agua.png), auto";
};
