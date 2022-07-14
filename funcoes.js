function imprimirSaudacao(nome, fnImpressao) {
  var texto = "Seja muito bem vindo, " + nome;
  fnImpressao(texto);
}

imprimirSaudacao("Michael", console.log);
