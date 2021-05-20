const filas = prompt("Ingresa el numero de filas");
const columnas = prompt("Ingresa el numero de columnas");

let mult = filas * columnas;

for (i = 0; i < filas; i++) {
  for (j = 0; j < columnas; j++) {
    document.write(mult);
    mult--;
  }
  document.write("<br>");
}
