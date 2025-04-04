let n = parseFloat(prompt("Enter a number:"));
if (isNaN(n)) {
  alert("DIGITE UM NÚMERO VÁLIDO")
} else if (n < 0 || n > 100) {
  alert("Digite um número entre 0 à 100")
} else {
  for (let contador = 1; contador <= 100; contador++) {
    document.write(`${n} x ${contador} = ${n * contador}<br>`);
    if (contador % 10 === 0) {
      document.write("--------------<br>");

    }
  }
}


