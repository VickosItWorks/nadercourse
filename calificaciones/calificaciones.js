var nota = prompt("Ingrese la nota del alumno:");
var calificacion = "Su calificacion es equivalente a: ";

console.log(typeof nota);

if (nota < 0 || nota > 10 || isNaN(nota)) {
  calificacion = "La calificacion no es valida";
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
