let askString = prompt("Introduce aqui tu texto");
const mensaje = [];

while (askString != null) {
  mensaje.push(askString);
  askString = prompt("Agrega una palabra");
}

document.write(mensaje.join("-"));
