/* import $ from "jquery";
window.jQuery = $;
window.$ = $; */

$(document).ready(function() {
  function generarCartaAleatoria() {
    var numero = Math.floor(Math.random() * 13) + 1;
    var pinta =
      Math.random() < 0.25
        ? "corazones"
        : Math.random() < 0.5
        ? "diamantes"
        : Math.random() < 0.75
        ? "espadas"
        : "tréboles";
    return { numero: numero, pinta: pinta };
  }

  function dibujarNaipes(cantidad) {
    var cartas = [];
    for (var i = 0; i < cantidad; i++) {
      cartas.push(generarCartaAleatoria());
    }
    return cartas;
  }

  function mostrarCartas(cartas, destino) {
    var html = "";
    $.each(cartas, function(index, carta) {
      html += `<div class="carta" style="content: '${carta.numero} de ${carta.pinta}';">${carta.numero} de ${carta.pinta}</div>`;
    });
    $(`#${destino}`).html(html);
  }

  function bubbleSort(cartas) {
    var len = cartas.length;
    for (var i = 0; i < len - 1; i++) {
      for (var j = 0; j < len - i - 1; j++) {
        if (cartas[j].numero > cartas[j + 1].numero) {
          var temp = cartas[j];
          cartas[j] = cartas[j + 1];
          cartas[j + 1] = temp;
        }
      }
    }
    return cartas;
  }

  $("#dibujar").click(function() {
    var cantidad = parseInt($("#cantidad").val());
    if (!isNaN(cantidad) && cantidad >= 3 && cantidad <= 10) {
      var cartas = dibujarNaipes(cantidad);
      mostrarCartas(cartas, "espacioDibujo");
    } else {
      alert("Por favor, introduce un número entre 3 y 10.");
    }
  });

  $("#ordenar").click(function() {
    var cartas = [];
    $(".carta").each(function() {
      var numero = parseInt(
        $(this)
          .text()
          .split(" ")[0]
      );
      cartas.push({
        numero: numero,
        pinta: $(this)
          .text()
          .split(" ")[2]
      });
    });

    var cartasOrdenadas = bubbleSort(cartas);
    mostrarCartas(cartasOrdenadas, "espacioResultado");
  });
});
