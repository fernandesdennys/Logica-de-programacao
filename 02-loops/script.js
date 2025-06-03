let num =  10/* parseFloat(prompt("Digite um número")) */
if (!isNaN(num)) {
  let contador = 0;

  while (contador <= 1000) {
    console.log(`${num}x${contador}: = ${num * contador}`);
    contador++;
  }
} else {
  console.log("Digite um número válido");
}