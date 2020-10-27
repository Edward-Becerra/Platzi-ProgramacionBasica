var j = require("johnny-five");
var circuito = new j.Board();
var led, motor, celda;
var turno = 0;


circuito.on("ready", prender);

function prender()
{
    var configuracion = {
        pin:"A0",
        freq: 50
      };
    celda = new j.Celda(configuracion);

    led = new j.Led(13);
    led.on();

    motor = new j.Servo(9);
    motor.to(180);

    ondear();
}

function ondear()
{
  console.log("Luz: " + celda.value);
  var luz = celda.value;

  if(luz > 800)
  {
    if (turno == 1)
    {
      turno = 0;
      motor.to(70);
    }
    else
    {
      turno = 1;
      motor.to(110);
    }
  }

  setTimeout(ondear, 1000);
}
