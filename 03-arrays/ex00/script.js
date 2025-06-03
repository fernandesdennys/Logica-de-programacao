// let nomes = ["Dennys", "Ricardo", "Fernandes", "Fernandes1", "Fernandes2"] sintaxe literal
/* let nomes = new Array("Dennys", "Ricardo", "Fernandes",) //sintaxe função construtora
console.log(nomes)

for (let i = 0; i < nomes.length; i++) {
document.write(`Nome: ${nomes[i]} <br>`)
} */

let frutas = ["Laranja", "Pêra", "Banana", "Maçã", "Uva", "Melância", "Pitaia", "Morango", "Maracuja", "Melão", "Goiaba"]
let nome = prompt("Adicione mais uma fruta a lista")
frutas[frutas.length] = nome

for (i = 0; i < frutas.length; i++) {
  document.write(`Nome de Frutas: ${frutas[i]} <br>`)
}
document.write(`A lista possui: ${frutas.length} elementos`)