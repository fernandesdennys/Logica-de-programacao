const alunos = [
  { nome: "Dennys", notas: [5, 7, 5, 9] },
  { nome: "Ricardo", notas: [5, 4, 2, 0] },
  { nome: "Fernandes", notas: [10, 7, 8, 9] },
]
const listaAlunos = document.getElementById("listaAlunos")
let alunosHTML = ""

for (let i = 0; i < alunos.length; i++) {
  alunosHTML += `<li> ${alunos[i].nome}`
  alunosHTML += `<ul>`  
  let soma = 0
  for (let j = 0; j < alunos[i].notas.length; j++) {
    alunosHTML += `<li> ${alunos[i].notas[j]}`
    soma += alunos[i].notas[j]    
  }
  let media = soma / alunos[i].notas.length
  alunosHTML += `<p>Resultado: ${media}`
  alunosHTML += `</ul> `
  alunosHTML += `</li>`
}

listaAlunos.innerHTML = alunosHTML