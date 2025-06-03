let num1 = parseInt(prompt("Digite o um número divisível por 2:"));
if (isNaN(num1) || num1 % 2 || num1 <= 0) {
  alert("Número inválido, tente novamente.");
} else {

  /*   while (i <= num1) {
  let i = 2;
  let numeros = []

    numeros.push(i);
    i += 2;
    let resultado = `Os números pares de 2 até ${num1} são:\n` + numeros.join(", ");
    alert(resultado);
    } */
}

let i = 2;
let numeros = []
do {
  numeros.push(i);
  i += 2;
} while (i <= num1) {

  let resultado = `Os números pares de 2 até ${num1} são:\n` + numeros.join(", ");
  alert(resultado);
}

