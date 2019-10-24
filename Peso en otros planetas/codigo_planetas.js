var usuario = prompt("Cual es tu peso?");
var planeta = parseFloat(prompt(" Por favor dijita el numero de planeta que quieres :)\n1) Mercurio 2) Venus 3) luna\n4) Marte   5) Jupiter 6) Saturno\n7) Urano 8) Neptuno 9) Pluton "))
var peso = parseFloat(usuario);
var g_marte = 3.71;
var g_tierra = 9.6;
var g_mercurio = 3.7;
var g_venus = 8.87;
var g_jupiter = 23.12;
var g_saturno = 8.96;
var g_urano = 8.69;
var g_neptuno = 11;
var g_pluton = 0.81;
var g_luna = 1.62;
var peso_final;
var nombre;
if ( planeta == 1 )
{
  peso_final = peso * g_mercurio / g_tierra;
  nombre = "Mercurio";
  peso_final = parseFloat(peso_final).toFixed(2);
  document.write("Tu peso en " + nombre + " es de <strong> " + peso_final + " kilos </strong> ")
}
else if ( planeta == 2 )
{
  peso_final = peso * g_venus / g_tierra;
  nombre = "Venus";
  peso_final = parseFloat(peso_final).toFixed(2);
  document.write("Tu peso en " + nombre + " es de <strong> " + peso_final + " kilos </strong> ")
}
else if ( planeta == 3 )
{
  peso_final = peso * g_luna / g_tierra;
  nombre = "la Luna";
  peso_final = parseFloat(peso_final).toFixed(2);
  document.write("Tu peso en " + nombre + " es de <strong> " + peso_final + " kilos </strong> ")
}
else if ( planeta == 4 )
{
  peso_final = peso * g_marte / g_tierra;
  nombre = "Marte";
  peso_final = parseFloat(peso_final).toFixed(2);
  document.write("Tu peso en " + nombre + " es de <strong> " + peso_final + " kilos </strong> ")
}
else if ( planeta == 5 )
{
  peso_final = peso * g_jupiter / g_tierra;
  nombre = "Jupiter";
  peso_final = parseFloat(peso_final).toFixed(2);
  document.write("Tu peso en " + nombre + " es de <strong> " + peso_final + " kilos </strong> ")
}
else if ( planeta == 6 )
{
  peso_final = peso * g_saturno / g_tierra;
  nombre = "Saturno";
  peso_final = parseFloat(peso_final).toFixed(2);
  document.write("Tu peso en " + nombre + " es de <strong> " + peso_final + " kilos </strong> ")
}
else if ( planeta == 7 )
{
  peso_final = peso * g_urano / g_tierra;
  nombre = "Urano";
  peso_final = parseFloat(peso_final).toFixed(2);
  document.write("Tu peso en " + nombre + " es de <strong> " + peso_final + " kilos </strong> ")
}
else if ( planeta == 8 )
{
  peso_final = peso * g_neptuno / g_tierra;
  nombre = "Neptuno";
  peso_final = parseFloat(peso_final).toFixed(2);
  document.write("Tu peso en " + nombre + " es de <strong> " + peso_final + " kilos </strong> ")
}
else if ( planeta == 9 )
{
  peso_final = peso * g_pluton / g_tierra;
  nombre = "Pluton";
  peso_final = parseFloat(peso_final).toFixed(2);
  document.write("Tu peso en " + nombre + " es de <strong> " + peso_final + " kilos </strong> ")
}
else
{
  alert(" Elije una opcion valida")
  document.write("Por favor refresca la pagina y elije una opcion correcta :)")
}
