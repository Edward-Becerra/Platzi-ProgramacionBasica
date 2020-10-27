var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

console.log(teclas);

document.addEventListener("keyup", dibujarTeclado);
var c = document.getElementById("area_de_dibujo");
var papel = c.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("red", 149, 149, 151, 151, papel);

function dibujarLinea(Color,X_inicial, Y_inicial, X_final, Y_final, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = Color;
  lienzo.lineWidth = 3;
  lienzo.moveTo(X_inicial, Y_inicial);
  lienzo.lineTo(X_final, Y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujarTeclado(evento)
{
  var colorcito = "blue";
  var movimiento = 10;

  switch (evento.keyCode)
  {
    case teclas.UP:
       dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
       y = y - movimiento;
    break;
    case teclas.DOWN:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
    break;
    case teclas.LEFT:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel );
      x = x - movimiento;
    break;
    case teclas.RIGHT:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel );
      x = x + movimiento;
    break;
    default:
      console.log("otra tecla");
  }
}
