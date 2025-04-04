let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let media = (n1 + n2) / 2;


if (n1 < 0 || n2 < 0 || n1 > 10 || n2 > 10) {
  alert('Digite apenas entre 0 a 10')
} else if (media >= 5) {
  alert("Você está AROVADO")
} else {
  alert("Infelizmente você foi REPROVADO")
}
