const produtos = [
  { nome: "Caneta", Preco: 3, Estoque: 3 },
  { nome: "Lápis", Preco: 2.10, Estoque: 16 },
  { nome: "Borracha", Preco: 2.50, Estoque: 30 },
  { nome: "Canerno", Preco: 10.0, Estoque: 2 },
  { nome: "Apontador", Preco: 0.80, Estoque: 100 },
]

const tabelaProdutos = document.getElementById("tbody_produtos")
for (let i = 0; i < produtos.length; i++) {
  tabelaProdutos.innerHTML += `<tr>
          <td>${produtos[i].nome}</td>
          <td>R$ ${produtos[i].Preco.toFixed(2)}</td>
          <td>${produtos[i].Estoque.toFixed(2)}</td>
        </tr>`
}