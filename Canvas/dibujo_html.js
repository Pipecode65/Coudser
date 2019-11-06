var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick()
{
  var xxx = parseInt(texto.value);
  var lineas = xxx;
  var espacio = ancho / lineas;
  var l = 0;
  var yi, xf;
  var yf, xi;
  var yf_2;
  var yi_2;
  var xf_2;
  var colorcito = "black";
  for ( l = 0; l < lineas; l++)
  {
  yi = espacio * l
  xf = espacio * (l + 1)
  yf = espacio * (l + 1)
  xi = espacio * l
  yf_2 = espacio * (lineas - l)
  yi_2 = espacio * ( lineas - l)
  xf_2 = espacio * (l + 1)
  dibujarLinea("#5A43A4", 0, yi_2, xf_2, 0)
  dibujarLinea("#FF9F33", xi, 300, 300, yf_2)
  dibujarLinea("#AFA", 0, yi, xf, 300)
  dibujarLinea("#AFF", xi, 0, 300, yf)
  dibujarLinea(colorcito, 1, 1, 1, 299)
  dibujarLinea(colorcito, 1, 299, 299, 299)
  dibujarLinea(colorcito, 299, 299, 299, 1)
  dibujarLinea(colorcito, 299, 1, 1, 1)
  }
}
