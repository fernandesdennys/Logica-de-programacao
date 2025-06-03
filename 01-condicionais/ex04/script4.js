let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));
let media = (n1 + n2) / 2;


if (isNaN(n1) || isNaN(n2)) {
  alert("Digite apenas números")
} else if (n1 < 0 || n2 < 0 || n1 > 10 || n2 > 10) {
  alert('Digite apenas números entre 0 e 10')
} else if (media >= 5) {
  alert("Você está AROVADO")
} else {
  alert("Infelizmente você está REPROVADO")
}
