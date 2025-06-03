let = DadosJogados = 0
let = soma_Dado = 0

/* while (true) {
  let d1 = parseInt(Math.random() * 6 + 1)
  let d2 = parseInt(Math.random() * 6 + 1)
  console.log(d1, d2, DadosJogados, soma_Dado)
    DadosJogados++
    if ((d1+d2) % 2 === 0){
    soma_Dado++
    }
    if(soma_Dado >= 10) {
      break
    }

}
console.log(`Os dados foram jogados ${DadosJogados} vezes.`) */

let = dados_Jogados = 0
let = soma_Dado = 0
let soma = ""

while (true) {
  let d1 = parseInt(Math.random() * 6 + 1)
  let d2 = parseInt(Math.random() * 6 + 1)
  if (d1 === d2) {
    continue
  }
  console.log(d1, d2, dados_Jogados, soma_Dado)
  dados_Jogados++

  if ((d1 + d2) % 2 === 0) {
    soma_Dado++

  } if (soma_Dado >= 10) {
    break
  }

}
console.log(`Os dados foram jogados ${dados_Jogados} vezes.`)