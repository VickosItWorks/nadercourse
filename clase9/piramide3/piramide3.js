const picknumb = prompt("Elige un numero para la piramide no superior a 50");

if (
  picknumb > 50 ||
  isNaN(picknumb) ||
  picknumb < 1 ||
  !Number.isInteger(+picknumb)
) {
  document.write("El valor ingresado no es valido");
} else {
  for (let i = 1; i <= picknumb; i++) {
    let acc = 0;
    while (acc != i) {
      document.write(i);
      acc++;
    }
    document.write("<br>");
  }
}
