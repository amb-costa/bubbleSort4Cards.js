$(document).ready(function() {
    function generarCarta() {
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
      var naipes = [];
      for (var i = 0; i < cantidad; i++) {
        naipes.push(generarCarta());
      }
      return naipes;
    }
  
    function bubbleSortNaipes(naipes) {
      var n = naipes.length;
      for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - i - 1; j++) {
          if (naipes[j].numero > naipes[j + 1].numero) {
            var temp = naipes[j];
            naipes[j] = naipes[j + 1];
            naipes[j + 1] = temp;
          }
        }
      }
      return naipes;
    }
  
    $("#dibujar").click(function() {
      var cantidad = parseInt($("#cantidad").val());
      if (isNaN(cantidad) || cantidad < 3 || cantidad > 10) {
        alert("Por favor, introduce un número entre 3 y 10.");
        return;
      }
  
      var naipes = dibujarNaipes(cantidad);
      $("#espacioDibujo").empty(); 
  
      $.each(naipes, function(index, carta) {
        var cartaHtml =
          '<div class="carta">' +
          "<span>" +
          carta.numero +
          "</span>" +
          "<span>" +
          carta.pinta +
          "</span>" +
          "</div>";
        $("#espacioDibujo").append(cartaHtml);
      });
    });
  
    $("#ordenar").click(function() {
      var naipes = [];
      var cartas = $("#espacioDibujo .carta");
  
      $.each(cartas, function(index, cartaDiv) {
        var numero = parseInt(
          $(cartaDiv)
            .find("span:first")
            .text()
        );
        naipes.push({ numero: numero });
      });
  
      var naipesOrdenados = bubbleSortNaipes(naipes);
      $("#espacioResultado").empty(); 
  
      $.each(naipesOrdenados, function(index, carta) {
        var cartaHtml =
          '<div class="carta">' + "<span>" + carta.numero + "</span>" + "</div>";
        $("#espacioResultado").append(cartaHtml);
      });
    });
  });
  