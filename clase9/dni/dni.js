const asignar = [
  "T",
  "R",
  "W",
  "A",
  "G",
  "M",
  "Y",
  "F",
  "P",
  "D",
  "X",
  "B",
  "N",
  "J",
  "Z",
  "S",
  "Q",
  "V",
  "H",
  "L",
  "C",
  "K",
  "E",
];

const dni = prompt("Ingrese su DNI");

if (isNaN(dni) || dni > 99999999 || dni <= 0) {
  document.write("El valor ingresado no es correcto");
} else {
  document.write(
    "La letra que corresponde con su dni es: " + asignar[dni % 23]
  );
}
