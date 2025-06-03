let num = 10/* parseFloat(prompt("Digite um número")) */

if (!isNaN(num))

  for (let i = 0; i <= 1000; i++) {
    console.log(`${num}x${i}: = ${num * i}`);
  } else {
  console.log("Digite um número válido");
}