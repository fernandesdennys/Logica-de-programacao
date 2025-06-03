const endereco = {
  logradouro: "Av. Pedro perisoto",
  numero: 2611,
  bl: 3,
  apto: 202,
}

const pessoa = {
  nome: "Dennys",
  sobrenome: "Fernandes",
  endereco: endereco,
}
console.log(`${pessoa.nome} mora na ${pessoa.endereco.logradouro}, ${pessoa.endereco.numero}, ${pessoa.endereco.compl} há 2anos`)
//loop for in serve para interagir com um objeto
for (let prop in pessoa) {
  console.log(pessoa[prop]);
  /*
  1 - "nome" pessoa[prop] - pessoa.nome
  2 - "sobrenome" pessoa[sobrenome] pessoa.sobrenome
  3 - "endereco" pessoa[endereco] pessoa.endereco
  */
}