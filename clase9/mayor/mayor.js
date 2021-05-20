const nombres = [];
const edades = [];

nombres[0] = prompt("Ingrese aqui el primer nombre");
nombres[1] = prompt("Ingrese aqui el segundo nombre");
nombres[2] = prompt("Ingrese aqui el tercer nombre");

edades[0] = +prompt("Ingrese aqui la primera edad");
edades[1] = +prompt("Ingrese aqui la segunda edad");
edades[2] = +prompt("Ingrese aqui la tercer edad");

maximo = edades.indexOf(Math.max(...edades));

document.write("Quien tiene mayor edad es " + nombres[maximo]);
