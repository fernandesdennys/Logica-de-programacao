function classificarNumero(numero) {
  if (numero > 0) {
    return numero % 2 === 0 ? "positivo e par" : "positivo e impar";
  } else if (numero < 0) {
    return "negativo";
  } else {
    return "neutro";
  }
}

// Exemplos de uso
console.log(classificarNumero(4));  // "positivo e par"
console.log(classificarNumero(7));  // "positivo e impar"
console.log(classificarNumero(-3)); // "negativo"
console.log(classificarNumero(0));  // "neutro"
