const carro = {
  marca: "Fiat",
  modelo: "Uno",
  ano: 2023,
  km: 10000,
  combustivel: "gasolina",
  litrosConsumidos: 625,
};
//carro.marca = "Fiat"
document.write(`O carro ${carro.marca} ${carro.modelo} ano ${carro.ano} fez em média ${carro.km / carro.litrosConsumidos} Km/L de ${carro.combustivel}`)