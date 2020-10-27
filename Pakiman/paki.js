var imagenes = [];
imagenes ["Cauchin"] = "vaca.png";
imagenes ["Pokacho"] = "pollo.png";
imagenes ["Tocinauro"] = "cerdo.png";
imagenes ["Pandamon"] = "panda.png";
imagenes ["Abird"] = "ab.png";
imagenes ["Birdcho"] = "b.png";

var coleccion = [];
coleccion.push(new Pakiman("Cauchin", 100, 30));
coleccion.push(new Pakiman("Pokacho", 80, 50));
coleccion.push(new Pakiman("Tocinauro", 80, 50));
coleccion.push(new Pakiman("Pandamon", 150, 100));
coleccion.push(new Pakiman("Abird", 50, 20));
coleccion.push(new Pakiman("Birdcho", 20, 20));

for( var ed of coleccion)
{
  ed.mostrar(ed);
}
