const ciudades = [];
let acc = prompt("Ingrese el nombre de una ciudad");

while (acc != null && acc != "0") {
  ciudades.push(acc);
  acc = prompt("Ingrese el nombre de una ciudad");
}

alert("El array es " + ciudades);
alert("La longitud del arreglo es: " + ciudades.length);

document.write(
  "Estos son los elementos en el primer, tercer y ultimo lugar: " +
    ciudades[0] +
    " " +
    ciudades[2] +
    " " +
    ciudades[ciudades.length - 1]
);

document.write("<br>");
ciudades.push("Paris");
alert("El array ahora se ve asi: " + ciudades);
document.write("EL elemento que ocupa el segundo lugar es: " + ciudades[1]);
document.write("<br>");
ciudades[1] = "Barcelona";
//si la linea de abajo la pongo en un alert, este alert se ejecuta antes
document.write("El array ahora se ve asi: " + ciudades);
