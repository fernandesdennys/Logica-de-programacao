const numeros = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 41, 44, 47, 50]
let encontrou = false
for (let i = 0; i < numeros.length; i++) {
  let n = numeros[i]
  if (n[i] === null || n[i] === undefined || n[i] === isNaN(n)) {
    encontrou = true
    break
  }
}
aler(`Encontrou null, undefined ou NaN? ${encontrou}`)