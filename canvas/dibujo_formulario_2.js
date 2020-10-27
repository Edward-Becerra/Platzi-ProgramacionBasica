
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoporClick);

var texto_1 = document.getElementById("texto_lineas_1");
var boton_1 = document.getElementById("botoncito_1");
boton_1.addEventListener("click", dibujoporClick_1);

var texto_2 = document.getElementById("texto_lineas_2");
var boton_2 = document.getElementById("botoncito_2");
boton_2.addEventListener("click", dibujoporClick_2);

var texto_3 = document.getElementById("texto_lineas_3");
var boton_3 = document.getElementById("botoncito_3");
boton_3.addEventListener("click", dibujoporClick_3);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

var l = 0;
var yi, xf;
var x_fin, x_in;
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
  var lineas = parseInt(texto.value);
  var espacio = ancho / lineas;

  for (l = 0; l < lineas; l++)
  {

    yi = espacio * l;
    xf = espacio * (l + 1);
    x_fin = ancho - (espacio * (l + 1));
    x_in = ancho - (espacio * l);
    dibujarLinea(colorcito, 0, yi, xf, ancho);
    console.log(lineas);

  }
}

function dibujoporClick_1()
{
  var lineas_1 = parseInt(texto_1.value);
  var espacio_1 = ancho / lineas_1;

  for (l = 0; l < lineas_1; l++)
  {
    yi = espacio_1 * l;
    xf = espacio_1 * (l + 1);
    x_fin = ancho - (espacio_1 * (l + 1));
    x_in = ancho - (espacio_1 * l);
    dibujarLinea(colorcito_2, yi, 0,ancho, xf);
  }
}

function dibujoporClick_2()
{
  var lineas_2 = parseInt(texto_2.value);
  var espacio_2 = ancho / lineas_2;

  for (l = 0; l < lineas_2; l++)
  {
    yi = espacio_2 * l;
    xf = espacio_2 * (l + 1);
    x_fin = ancho - (espacio_2 * (l + 1));
    x_in = ancho - (espacio_2 * l);
    dibujarLinea(colorcito_3, ancho, yi, x_fin, ancho);
  }
}

function dibujoporClick_3()
{
  var lineas_3 = parseInt(texto_3.value);
  var espacio_3 = ancho / lineas_3;

  for (l = 0; l < lineas_3; l++)
  {
    yi = espacio_3 * l;
    xf = espacio_3 * (l + 1);
    x_fin = ancho - (espacio_3 * (l + 1));
    x_in = ancho - (espacio_3 * l);
    dibujarLinea(colorcito_4, x_in, 0, 0, yi);
  }
}
