let askNumber = prompt("Ingrese su numero por aqui");
let acc = 0;

while (askNumber != null) {
  if (isNaN(askNumber)) {
    alert("Esto no es un numero");
  } else {
    acc += Number(askNumber);
  }
  askNumber = prompt("Ingrese su numero por aqui");
}

document.write(acc);
