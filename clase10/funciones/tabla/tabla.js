const numero = prompt("Elige un numero para saber su tabla de multiplicar");

function tabla(num) {
  for (let i = 1; i <= 10; i++) {
    document.write(num + " * " + i + " = " + num * i);
    document.write("<br>");
  }
}

tabla(numero);
