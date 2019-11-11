var cuadro = document.getElementById("area_de_dibujo");
var papel = cuadro.getContext("2d"); console.log(document, cuadro)
var objTeclas = {
  ARRIBA: 38,
  ABAJO: 40,
  IZQUIERDA: 37,
  DERECHA: 39
}
document.addEventListener("mousedown", pruebaEventos);
var x = 150;
var y = 150;
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
function pruebaEventos(los_eventos)
{
console.log(los_eventos);
  var colorcito = "blue"
  var movimiento = 10;
  switch (los_eventos.keyCode)
  {
    case objTeclas.ARRIBA:
      dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento
      break;
    case objTeclas.ABAJO:
      dibujarLinea(colorcito, x, y, x, y + movimiento, papel)
      y = y + movimiento
      break;
    case objTeclas.IZQUIERDA:
      dibujarLinea(colorcito, x, y, x - movimiento, y, papel)
      x = x - movimiento
      break;
    case objTeclas.DERECHA:
      dibujarLinea(colorcito, x, y, x + movimiento, y, papel)
      x = x + movimiento
      break;
    default:
      break;
  }
}
