const picknumb = prompt("Elige un numero para la piramide no superior a 50");

if (
  picknumb > 50 ||
  isNaN(picknumb) ||
  picknumb < 1 ||
  !Number.isInteger(+picknumb)
) {
  document.write("El valor ingresado no es valido");
} else {
  for (let i = picknumb; i > 0; i--) {
    let acc = i;
    while (acc != 0) {
      document.write(i);
      acc--;
    }
    document.write("<br>");
  }
}
