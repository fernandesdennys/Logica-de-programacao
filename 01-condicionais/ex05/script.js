let num = prompt("Digite um numero de 0 à 6")

switch (num) {
  case "0":
    alert("Domingo");
    break;
  case "1":
    alert("Segunda-Feira");
    break;
  case "2":
    alert("Terça-Feira");
    break;
  case "3":
    alert("Quarta-Feira");
    break;
  case "4":
    alert("Quinta-Feira");
    break;
  case "5":
    alert("Sexta-Feira");
    break;
  case "6":
    alert("Sábado");
    break;
  default:
    alert("DIGITE UM NÚMERO VÁLIDO");
}

/*
if (num === "0") {
  alert("Domingo")
} else if (num === "1") {
  alert("Segunda-Ferira")
} else if (num === 2) {
  alert("Terça-Feira")
} else if (num === 3) {
  alert("Quarta-Feira")
} else if (num === 4) {
  alert("Quinta-Feira")
} else if (num === 5) {
  alert("Sexta-Feira")
} else if (num === 6) {
  alert("Sábado")
} else {
  alert("DIGITE UM NÚMERO VÁLIDO")
}
*/