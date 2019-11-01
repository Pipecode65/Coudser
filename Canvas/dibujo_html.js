var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
var yf, xi;
while (l < lineas)
{
yi = 10 * l
xf = 10 * (l + 1)
dibujarLinea("#AFA", 0, yi, xf, 300)
yf = 
xi =
dibujarLinea("#AFF",0, 0, 300, 300)
l = l + 1
}

dibujarLinea("#AFA", 1, 1, 1, 299)
dibujarLinea("#AFA", 1, 299, 299, 299)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
