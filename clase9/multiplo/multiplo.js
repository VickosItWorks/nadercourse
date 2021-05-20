for (let i = 1; i <= 500; i++) {
  if (i % 4 === 0) {
    document.write(i + " " + "Multiplo de 4");
    document.write("<br>");
  } else if (i % 9 === 0) {
    document.write(i + " " + "Multiplo de 9");
    document.write("<br>");
  } else {
    document.write(i + "<br>");
  }

  if (i % 5 === 0) {
    document.write("<hr>");
  }
}
