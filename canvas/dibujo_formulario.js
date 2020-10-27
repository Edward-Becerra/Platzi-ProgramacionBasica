
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoporClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(Color,X_inicial, Y_inicial, X_final, Y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = Color;
  lienzo.moveTo(X_inicial, Y_inicial);
  lienzo.lineTo(X_final, Y_final);
  lienzo.stroke();
  lienzo.closePath();
}
function dibujoporClick()
{
  var l = 0;
  var yi, xf;
  var x_fin, x_in;
  var lineas = parseInt(texto.value);
  var espacio = ancho / lineas;
  var colorcito = "yellow"
  var colorcito_2 = "blue"
  var colorcito_3 = "red"
  var colorcito_4 = "green"

  dibujarLinea(colorcito, 1, 1, 1, 299);
  dibujarLinea(colorcito, 1, 299, 299, 299);
  dibujarLinea(colorcito_2, 299, 299, 299, 1);
  dibujarLinea(colorcito_2,299, 1, 1, 1);
  dibujarLinea("white", 150, 0, 150, 300);
  dibujarLinea("white", 0, 150, 300, 150);

  for (l = 0; l < lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    x_fin = ancho - (espacio * (l + 1));
    x_in = ancho - (espacio * l);
    dibujarLinea(colorcito, 0, yi, xf, ancho);
    dibujarLinea(colorcito_2, yi, 0,ancho, xf);
    dibujarLinea(colorcito_3, ancho, yi, x_fin, ancho);
    dibujarLinea(colorcito_4, x_in, 0, 0, yi);
  }
}
