function cadena(str) {
  if (str === str.toUpperCase()) {
    return "Solo Mayusculas";
  } else if (str === str.toLowerCase()) {
    return "Solo Minusculas";
  } else {
    return "Es un Mix";
  }
}

alert(cadena("Vicko"));
alert(cadena("TOTI"));
alert(cadena("nader"));
