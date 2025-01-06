let addBtn = document.querySelector('input#addBtn')
let finBtn = document.querySelector('input#finBtn')
let limBtn = document.querySelector('input#limBtn')

addBtn.addEventListener('click', adicionar)
finBtn.addEventListener('click', finalizar)
limBtn.addEventListener('click', limpar)


// Seleciona o campo de número e a lista de resultados
let selRes = document.querySelector('select#res');

// Função para validar o campo de número
function adicionar() {
    let num = document.querySelector('input#num'); // Seleciona o campo de input com id 'num'

    let selRes = document.querySelector('select#res');

    if (num.value.length === 0) {
        window.alert('Comando inválido! Digite um número.'); // Alerta se o campo estiver vazio
    } else {
        let n = Number(num.value) // Converte o valor para número

        let item = document.createElement('option')
        item.text = `Adicionou o número ${n}`
        item.value = `num${n}`
        selRes.appendChild(item)
    }  

    num.value = ''; // Limpa o campo de número
    num.focus(); // Foca no campo para nova entrada
}


// Função para limpar a lista
function limpar() {
    selRes.innerHTML = ''; // Remove todas as opções da lista
    window.alert('Lista limpa com sucesso! 😊');
}


