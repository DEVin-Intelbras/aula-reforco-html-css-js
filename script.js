// Sintaxe de array

var alunos = ["Brian", "Diego", "Otavio", "Karla", "Julia"];

var stringAlunos = alunos.join(" ");
console.log(stringAlunos);

var nomeDoProfessor = "Michael Guilherme de Oliveira Nascimento";
var nomesDoProfessor = nomeDoProfessor.split(" ");
console.log(nomesDoProfessor);

// Sintaxe de objeto
var carro = {
  cor: "Prata",
  modelo: "Hatch",
  marca: "BMW",
  placa: "A1B2C3",
  ano: 2022,
  tetoSolar: true,
  motor: "v8",
};

var carro2 = {
  cor: "Preta",
  modelo: "Sedan",
  marca: "Mercedez",
  placa: "A1B2C3",
  ano: 1984,
  tetoSolar: false,
  motor: "v8",
  foiDeletado: true,
};

var listaCarros = [carro, carro2];

console.log(listaCarros);
