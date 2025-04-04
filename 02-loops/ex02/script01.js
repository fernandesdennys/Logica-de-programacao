let dado01 = parseFloat(Math.random() * 6 + 1);
let dado02 = parseFloat(Math.random() * 6 + 1);
let contador = 0

while (dado01 !== dado02) {
  console.log(dado01, dado02)
  contador++
  dado01 = parseFloat(Math.random() * 6 + 1);
  dado02 = parseFloat(Math.random() * 6 + 1);
}
console.log(`Os dados foram jogados ${contador} vezes. E o número igual foi ${dado01}`);