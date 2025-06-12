const nombres = [1, 5, 12, 8, 130, 44];

nombres.forEach(function(nombre) {
    console.log("Le nombre est:" + nombre);
});

const grandNombres = nombres.filter(function(nombre) {
  return nombre > 10;
});

console.log("Voici les nombres du tableau supperieur a 10:" + grandNombres);

const doubled = nombres.map(function(nombre) {
  return nombre * 2;
});

console.log("le double de chaque nombres est:" + doubled)



