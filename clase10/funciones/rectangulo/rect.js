const b = prompt("Ingrese el size de la base");
const a = prompt("Ingrese el size de la altura");

function perim(base, altura) {
  const p = 2 * base * altura;
  return alert("El perimetro es: " + p);
}

perim(b, a);
