let dado01 = parseInt(Math.random() * 6 + 1);
let dado02 = parseInt(Math.random() * 6 + 1);
let contador = 1

while (dado01 !== dado02) {
  console.log(dado01, dado02)
  contador++
  dado01 = parseInt(Math.random() * 6 + 1);
  dado02 = parseInt(Math.random() * 6 + 1);
}
console.log(`Os dados foram jogados ${contador} vezes. E o número igual foi ${dado01}`);++
console.log("FIM DO PROGRAMA")

console.log("-------------------------------------")

dado01 = parseInt(Math.random() * 6 + 1);
dado02 = parseInt(Math.random() * 6 + 1);
contador = 1

do {
  console.log(dado01, dado02)
  contador++
  dado01 = parseInt(Math.random() * 6 + 1);
  dado02 = parseInt(Math.random() * 6 + 1);

} while (dado01 !== dado02)
console.log(`Os dados foram jogados ${contador} vezes. E o número igual foi ${dado01}`);
console.log("FIM DO PROGRAMA")
