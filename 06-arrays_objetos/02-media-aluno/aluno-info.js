const aluno = {
  nome: "Dennys Fernandes",
  notas: [5, 6, 3, 8]
}
const output = document.getElementById("output")
output.innerHTML = `<h2>Aludo: ${aluno.nome}</h2>`
output.innerHTML += `<p>Notas: </p>`
output.innerHTML += `<ul>`
let soma = 0
for (let i = 0; i < aluno.notas.length; i++) {
  soma += aluno.notas[i]
  output.innerHTML += `<li> ${aluno.notas[i]} </li>`
}
let media = soma / aluno.notas.length
output.innerHTML += `</ul>`
output.innerHTML += `<p>Média: ${media}</p> `
// let aprovado = (media >= 5) ? ""Parabéns! voçê foi APROVADO"" : "Infelizmente voçê foi REPROVADO"
let aprovado = null
if (media >= 5) {
  aprovado = "Parabéns! voçê foi APROVADO"
} else {
  aprovado = "Infelizmente voçê foi REPROVADO"
}
output.innerHTML += `<p>${aprovado}</p>`