var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var yf, xi;
var yf_2;
var yi_2;
var xf_2;
for ( l = 0; l < lineas; l++)
{
yi = 10 * l
xf = 10 * (l + 1)
yf = 10 * (l + 1)
xi = 10 * l
yf_2 = 10 * (29 - l)
yi_2 = 10 * ( 30 - l)
xf_2 = 10 * (l + 1)
dibujarLinea("#5A43A4", 0, yi_2, xf_2, 0)
dibujarLinea("#FF9F33", xi, 300, 300, yf_2)
dibujarLinea("#AFA", 0, yi, xf, 300)
dibujarLinea("#AFF", xi, 0, 300, yf)
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
