var peso = prompt("Por favor ingrese su peso:");
var altura = prompt("Por favor ingrese su altura:");
var finalmsg = "Su IMC Es: ";

var imc = (peso / (altura * altura)).toFixed(2);

if (isNaN(imc)) {
  finalmsg =
    "Alguno de los valores ingresados no es valido, por favor vuelva a intentarlo.";
} else if (imc < 19) {
  finalmsg = "La persona esta demasiado flaca. " + finalmsg + imc;
} else if (imc >= 19 && imc < 25) {
  finalmsg =
    "La persona esta equilibrada en cuanto a su indice de masa corporal. " +
    finalmsg +
    imc;
} else {
  finalmsg = "Esta persona ya se encuentra fuertecita. " + finalmsg + imc;
}

document.write(finalmsg);
