let myVar = 10
switch (typeof myVar) {
  case "number":
    alert("valor desconhecido: numérico")
    break
  case "1":
    alert("valor desconhecido :número")
  case "string":
    alert("Valor desconhecido: string");
    break
  case "null":
    alert("Valor desconhecido: null");
    break
  default:
    alert("Nehnum valor reconhecido")
}