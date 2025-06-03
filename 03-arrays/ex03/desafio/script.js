const numeros = [1, undefined, 6, "9", 12, "texto", 18, false, 24, [], 30, 33, null]
let soma = 0
for (let i = 0; i < numeros.length; i++) {
  let n = numeros[i]
  if (typeof n === "number") {
    soma += n
  }

}
alert(`A soma de todos os numeros é ${soma}`)



