var edad = prompt("Por favor ingrese su edad:");
var resultado;

if (edad < 1 || isNaN(edad) || !Number.isInteger(+edad)) {
  resultado = "El valor ingresado no esta permitido";
} else if (edad >= 18) {
  resultado = "Ud esta habilitado para sacar su licencia de conducir";
} else {
  resultado = "Ud no puede sacar su licencia de conducir aun";
}

document.write(resultado);
