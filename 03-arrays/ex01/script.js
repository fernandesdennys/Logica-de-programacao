let numeros = [4, 8, 1, 0, 4, 23, 98, 9, 100, 7]
let numeros2 = []

for(let i = 0; i < numeros.length; i++) {
  let numero =(numeros[i] * 2)
  //numeros2[numeros2.length] = numero
  numeros2.push(numero) //Metodo push "empurra" um novo valor no final do array
}
console.log(numeros2)