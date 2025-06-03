/* for (let i = 0; i >= 2025; i++) {
  console.log(i)
  if (i % 4 === 0) {
    console.log("Ano bissexto", i)

  }
} */

for (ano_B = 1004; ano_B <= 2025; ano_B += 4) {
  let anoBissexto = ano_B % 100 !== 0 || ano_B % 400 === 0
  if (anoBissexto) {
    console.log(`É ano bissexto : ${ano_B}`)
  } else {
    console.log(`Não é ano Bissexto : ${ano_B}`)
  }
}
