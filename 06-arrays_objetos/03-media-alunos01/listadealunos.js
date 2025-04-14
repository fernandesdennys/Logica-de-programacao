const alunos = [
  { nome: "Dennys", notas: [5, 7, 5, 9] },
  { nome: "Ricardo", notas: [5, 4, 2, 5] },
  { nome: "Fernandes", notas: [10, 7, 8, 9] },
]
const listaAlunos = document.getElementById("listaAlunos")
let alunosHTML = ""

for (let i = 0; i < alunos.length; i++) {
  alunosHTML += `<li> ${alunos[i].nome}`
  alunosHTML += `<ul>`
  for (let j = 0; j < alunos[i].notas.length; j++) {
    alunosHTML += `<li> ${alunos[i].notas[j]}`
  }
  alunosHTML += `</ul> `
  alunosHTML += `</li>`

}

listaAlunos.innerHTML = alunosHTML