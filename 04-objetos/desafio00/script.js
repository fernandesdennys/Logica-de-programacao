const carro = {
  modelo: "Uno",
  ano: 2023,
  km: 10000,
  combustivel: "gasolina",
  litrosConsumidos: 625,
};
document.write(`O carro ${carro.modelo} ano ${carro.ano} fez em média ${carro.km / carro.litrosConsumidos} Km/L de ${carro.combustivel}`)