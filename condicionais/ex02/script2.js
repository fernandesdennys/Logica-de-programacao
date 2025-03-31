let n1 = parseFloat(prompt("Digite a primeira nota:"));
let n2 = parseFloat(prompt("Digite a segunda nota:"));

// Verifica se os valores inseridos são números válidos
if (isNaN(n1) || isNaN(n2)) {
  alert("DIGITE NÚMEROS VÁLIDOS"); // Caso um dos valores não seja um número, exibe o alerta
} 
// Verifica se os números estão dentro do intervalo permitido (0 a 10)
else if (n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10) {
  alert("Digite entre 0 e 10"); // Se estiver fora do intervalo, exibe o alerta
} 
else {
  // Calcula a média das duas notas
  let media = (n1 + n2) / 2;

  // Verifica se a média é suficiente para aprovação
  if (media >= 5) {
    alert("APROVADO"); // Se a média for maior ou igual a 5, o aluno é aprovado
  } else {
    alert("REPROVADO"); // Caso contrário, o aluno é reprovado
  }
}
