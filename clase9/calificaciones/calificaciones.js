const nota = prompt("Ingrese la nota del alumno:");
let calificacion = "Su calificacion es equivalente a: ";

if (nota < 0 || nota > 10) {
  calificacion = "Número erroneo";
} else if (isNaN(nota)) {
  calificacion = "Introduce un número válido";
} else if (nota >= 0 && nota <= 3) {
  calificacion = calificacion + "Muy Deficiente";
} else if (nota > 3 && nota <= 5) {
  calificacion = calificacion + "Insuficiente";
} else if (nota > 5 && nota <= 6) {
  calificacion = calificacion + "Suficiente";
} else if (nota > 6 && nota <= 7) {
  calificacion = calificacion + "Bien";
} else if (nota > 7 && nota <= 9) {
  calificacion = calificacion + "Notable";
} else {
  calificacion = calificacion + "Sobresaliente";
}

document.write(calificacion);
