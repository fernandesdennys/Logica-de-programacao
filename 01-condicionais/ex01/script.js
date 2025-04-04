let n1 = parseInt(prompt("Digite um número:"));
let n2 = parseInt(prompt("Digite outro número:"));
let media = (n1 + n2) / 2;

if (isNaN(n1) || isNaN(n2)) {
  alert("DIGITE UM NÚMERO VÁLIDO");
} else if (media >= 5) {
  alert("APROVADO");
} else if (media < 5 || n1 > 0 || n2 > 0) {
  alert("REPROVADO");
}