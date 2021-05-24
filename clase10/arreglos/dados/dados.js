const rtdo = [];

for (let i = 0; i < 50; i++) {
  const dado1 = Math.floor(Math.random() * 6) + 1;
  const dado2 = Math.floor(Math.random() * 6) + 1;
  rtdo.push(dado1 + dado2);
}

console.log(rtdo);
alert(rtdo);

const sumatoria = (acc, valor) => acc + valor;
const numsuma = rtdo.reduce(sumatoria);
alert("La suma de los elementos del array es " + numsuma);
alert("El promedio del array es: " + numsuma / 50);

for (let i = 0; i < rtdo.length; i++) {
  let j = rtdo[i];
  const arraydup = rtdo.filter((num) => num === j);
  document.write(
    "El numero de ocurrencias de " + j + " es: " + arraydup.length
  );
  document.write("<br>");
}
