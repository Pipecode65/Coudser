var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo ={
  url:"tile.png",
  cargaOK: false
};
var vaca = {
  url: "vaca.png",
  cargaOK: false
};


fondo.imagen = new Image();
fondo.imagen.src = fondo.url
fondo.imagen.addEventListener("load", cargarImagenes);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url
vaca.imagen.addEventListener("load", cargarImagenes);

function cargarImagenes()
{
  fondo.cargaOK = true;
  dibujar();
  vaca.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if (fondo.cargaOK)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }
  if (vaca.cargaOK)
  {
    var cantidad = aleatorio(1, 50);
    for (var i = 0; i < cantidad; i++)
    {
      var x = aleatorio(0, 7);
      var y = aleatorio(0, 7);
      var x = x * 60;
      var y = y * 60;
      papel.drawImage(vaca.imagen, x, y);
    }
  }
}


function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}
