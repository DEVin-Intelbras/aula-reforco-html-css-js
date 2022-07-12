var lista = document.getElementById("lista");
var campoTarefa = document.getElementById("titulo-tarefa");
var botaoAdicionar = document.getElementById("adicionar");

botaoAdicionar.addEventListener("click", function () {
  var novaTarefa = campoTarefa.value;
  lista.innerHTML += "<li>" + novaTarefa + "</li>";
  campoTarefa.value = "";
  campoTarefa.focus();
});

// ...
