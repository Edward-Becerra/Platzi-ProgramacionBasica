var vp = document.getElementById("villaplatzi");
papel = vp.getContext("2d");
var mapa = "tile.png";

var fondo = {
  url: "tile.png",
  cargaOK: false
}
var vaca ={
  url: "vaca.png",
  cargaOK: false
}
var cerdo ={
  url: "cerdo.png",
  cargaOK: false
}
var pollo = {
  url: "pollo.png",
  cargaOK: false
}

var cantidad_vacas = aleatorio(1, 30);
var cantidad_cerdos = aleatorio(1, 10);
var cantidad_pollos = aleatorio(1, 20);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function dibujar(evento)
{
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad_vacas);
    for(var v=0; v<cantidad_vacas; v++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
  if(cerdo.cargaOK)
    {
      console.log(cantidad_cerdos);
      for(var c=0; c<cantidad_cerdos; c++)
      {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 7);
        var x = x * 60;
        var y = y * 60;
        papel.drawImage(cerdo.imagen, x, y);
      }
  if(pollo.cargaOK)
  {
    console.log(cantidad_pollos);
    for(var p=0; p<cantidad_pollos; p++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(pollo.imagen, x, y);
    }
  }
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado= Math.floor(Math.random() * (maxi-min+1)) + min;
  return resultado;
}
