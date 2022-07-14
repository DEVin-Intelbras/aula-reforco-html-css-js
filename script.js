var carro = {
  ano: 2022,
  modelo: null,
  motor: "110cc",
  portas: null,
};

var novoArray = Object.keys(carro);

console.log(novoArray);
novoArray[2] = "cavalo";
console.log(novoArray);

console.log(carro);
