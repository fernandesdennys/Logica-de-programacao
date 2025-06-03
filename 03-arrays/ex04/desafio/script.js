const numeros = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 41, 44, 47, 50]
let soma = 0
for (let i = 0; i < numeros.length; i++) {
  let n = numeros[i]
  if (n % 2 !== 0) {
    //if (!(n% 2 === 0))    
    soma += n
  }
}
console.log(soma)