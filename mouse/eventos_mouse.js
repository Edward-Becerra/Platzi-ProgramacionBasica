
var cuadro = document.getElementById("area_de_dibujo_mouse");
var cd = document.getElementById("area_de_dibujo_mouse");
var papel = cuadro.getContext("2d");
var paper = cd.getContext("2d");

cuadro.addEventListener("mouseup",dibujarMouse);
cd.addEventListener("mousedown",soltarMouse);

var colorcito = "red";

dibujarLinea("white", 1, 1, 1, 299, papel);
dibujarLinea("white", 1, 299, 299, 299, papel);
dibujarLinea("white", 299, 299, 299, 1, papel);
dibujarLinea("white",299, 1, 1, 1, papel);

function dibujarMouse(evt)
 {
  yin = evt.offsetY;
  xin = evt.offsetX;
  dibujarLinea(colorcito, xin, yin, xfn, yfn, papel);
  console.log(evt);
 }

 function soltarMouse(evento)
 {
   yfn = evento.offsetY;
   xfn = evento.offsetX;
   dibujarLinea(colorcito,xfn - 1, yfn - 1, xfn, yfn, paper);
   console.log(evento);
 }
 
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
