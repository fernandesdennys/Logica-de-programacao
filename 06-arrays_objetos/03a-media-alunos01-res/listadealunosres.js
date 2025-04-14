const alunos = [
  { nome: "Dennys", notas: [5, 7, 5, 9] },
  { nome: "Ricardo", notas: [5, 4, 2, 0] },
  { nome: "Fernandes", notas: [10, 7, 8, 9] },
]
const listaAlunos = document.getElementById("listaAlunos")
let alunosHTML = ""
for (let i = 0; i < alunos.length; i++) {
  alunosHTML += `<li>${alunos[i].nome} Média: `
  let soma = 0
  for (let j = 0; j < alunos[i].notas.length; j++) {
    console.log("i:", i, "j:", j)
    soma += alunos[i].notas[j]
  }
  let media = soma / alunos[i].notas.length
  alunosHTML += `${media} </li>`
}

listaAlunos.innerHTML = alunosHTML 