function calcularAreaRetangulo(larg, alt) {
  if (typeof larg !== "number" || typeof alt !== "number") {
    throw Error("calcularAreaRetangulo aceita dois parâmetros do tipo number")
  }
  return larg * alt
}

function calcularAreaTriangulo(bas, alt) {
  if (typeof bas !== "number" || typeof alt !== "number") {
    throw Error("calcularAreaTriangulo aceita dois parâmetros do tipo number")
  }
  return (bas * alt) / 2
}
function calcularRaioCirculo(raio) {
  if (typeof raio !== "number") {
    throw Error("calcularRaioCirculo precisa ser um number")
  }
  return Math.PI * (raio ** 2)
}