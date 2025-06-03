let num = parseFloat(prompt("Digite um número"))
if (isNaN(num)) {
  alert("DIGITE UM NÚMERO VÁLIDO")
} else if (num < 0 || num > 100) {
  alert("Digite um número entre 0 à 100")
} else {

  let contador = 0
  let resultado = ""

  while (contador <= 100) {
    resultado += `${num} x ${contador} = ${num * contador}\n`;
    contador++;
  }
  alert(resultado);
}



/* let num = parseFloat(prompt("Digite um número"))
if (isNaN(num) || num < 0 || num > 10) {
  alert("DIGITE UM NÚMERO VÁLIDO entre 0 à 10")
} else {
  let count = 1;
  let resultado = ""++
  while (count <= 10) {
    resultado += `${num} x ${count} = ${num * count}\n`;
    count++; // Incrementa o contador para evitar loop infinito
  }

  alert(resultado);
} */