var vp = document.getElementById("villaplatzi_1");
papel = vp.getContext("2d");
document.addEventListener("keydown", movAnimal);


var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  A: 65,
  W: 87,
  D: 68,
  S: 83,
};

var fondo = {
  url: "tile.png",
  cargaOK: false
}

var cerdo = {
  url: "cerdo.png",
  cargaOK: false
};

var vaca = {
  url: "vaca.png",
  cargaOK: false
};

var pollo = {
  url: "pollo.png",
  cargaOK: false
};

var cantidad_cerdos = 1;
var cantidad_vacas = 1;
var cantidad_pollos = aleatorio(0, 10);
var mcerdo = 10;
var mvaca = 5;
var xcerdo = 250;
var ycerdo = 250;
var xvaca = 150;
var yvaca = 150;

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollos);

function cargarFondo()
  {
  fondo.cargaOK = true;
  dibujar();
}

function cargarCerdos()
  {
  cerdo.cargaOK = true;
  dibujar();
}

function cargarVacas()
  {
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos()
  {
  pollo.cargaOK = true;
  dibujar();
}

function movAnimal(evento)
  {
    switch(evento.keyCode)
    {
      case teclas.DOWN:
      ycerdo = ycerdo + mcerdo;
      dibujar();
      break;

      case teclas.UP:
      ycerdo = ycerdo - mcerdo;
      dibujar();
      break;

      case teclas.RIGHT:
      xcerdo = xcerdo + mcerdo;
      dibujar();
      break;

      case teclas.LEFT:
      xcerdo = xcerdo - mcerdo;
      dibujar();
      break;

      case teclas.S:
      yvaca = yvaca + mvaca;
      dibujar();
      break;

      case teclas.W:
      yvaca = yvaca - mvaca;
      dibujar();
      break;

      case teclas.D:
      xvaca = xvaca + mvaca;
      dibujar();
      break;

      case teclas.A:
      xvaca = xvaca - mvaca;
      dibujar();
      break;

      default:
      console.log("otra tecla")
      break;
    }
  }

function dibujar()
  {
  if(fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
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
  if(cerdo.cargaOK)
  {
    console.log(cantidad_cerdos);
    papel.drawImage(cerdo.imagen, xcerdo, ycerdo);
  }
  if(vaca.cargaOK)
  {
    console.log(cantidad_vacas);
    papel.drawImage(vaca.imagen, xvaca, yvaca);
  }
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi-min+1)) + min;
  return resultado;
}
