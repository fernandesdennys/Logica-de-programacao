document.getElementById('header_titulo').textContent = "Texto ALTERADO pelo JavaScript"
let p = document.getElementById('body_paragrafo')
p.innerHTML = 'Paragrafo alterado pelo <i>JavaScript</i>'
const lista = document.getElementById('body_listaTarefas')
let novaTarefa = "Alicar à vagas de emprego"
lista.innerHTML += "<li>Test</li>"
