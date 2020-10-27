var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var x_fin, x_in;
var colorcito = "yellow"
var colorcito_2 = "blue"
var colorcito_3 = "red"
var colorcito_4 = "green"

for (l = 0; l < lineas ; l++)
{
  yi = 10 * l;
  xf = 10 * (l + 1);
  x_fin = 300 - (10 * (l + 1));
  x_in = 300 - (10 * l);
  dibujarLinea(colorcito, 0, yi, xf, 300);
  dibujarLinea(colorcito_2, yi, 0,300, xf);
  dibujarLinea(colorcito_3, 300, yi, x_fin, 300);
  dibujarLinea(colorcito_4, x_in, 0, 0, yi);
  console.log("lineas " + l);
}

dibujarLinea(colorcito, 1, 1, 1, 299);
dibujarLinea(colorcito, 1, 299, 299, 299);
dibujarLinea(colorcito_2, 299, 299, 299, 1);
dibujarLinea(colorcito_2,299, 1, 1, 1);
dibujarLinea("white", 150, 0, 150, 300);
dibujarLinea("white", 0, 150, 300, 150);

function dibujarLinea(Color,X_inicial, Y_inicial, X_final, Y_final)
{
  lienzo.beginPath();
  lienzo.strokeStyle = Color;
  lienzo.moveTo(X_inicial, Y_inicial);
  lienzo.lineTo(X_final, Y_final);
  lienzo.stroke();
  lienzo.closePath();
}
