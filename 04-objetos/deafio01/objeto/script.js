const endereco = {
  logradouro: "Av. Pedro perisoto",
  numero: 2611,
  compl: "bl 03 apto 02",
}

const pessoa = {
  nome: "Dennys",
  sobrenome: "Fernandes",
  endereco: endereco,
}
console.log(`${pessoa.nome} mora na ${pessoa.endereco.logradouro}, ${pessoa.endereco.numero}, ${pessoa.endereco.compl} há 2anos`)