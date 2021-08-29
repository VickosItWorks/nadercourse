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

let dni = prompt("Ingrese su DNI");

while (dni != null) {
  if (isNaN(dni)) {
    alert("Lo introducido no es un numero");
  } else if (dni > 99999999 || dni <= 0) {
    alert("El valor ingresado no es correcto");
  } else {
    alert("La letra que corresponde con su dni es: " + asignar[dni % 23]);
  }
  dni = prompt("Ingrese su DNI");
}

// if (isNaN(dni) || dni > 99999999 || dni <= 0) {
//   document.write("El valor ingresado no es correcto");
// } else {
//   document.write(
//     "La letra que corresponde con su dni es: " + asignar[dni % 23]
//   );
// }
