let addBtn = document.querySelector('input#addBtn')
let finBtn = document.querySelector('input#finBtn')
let limBtn = document.querySelector('input#limBtn')

addBtn.addEventListener('click', adicionar)
finBtn.addEventListener('click', finalizar)
limBtn.addEventListener('click', limpar)

let num = document.querySelector('input#fnum'); // Seleciona o campo de input com id 'num'

let lista = document.querySelector('select#flista'); // Seleciona o campo de lista com os resultados dos números
let res = document.querySelector('div#res'); // Seleciona o campo dos resultados
let valores = [] //Cria de forma global um vetor

//Para fazer a adição dos elementos é preciso fazer 2 funções
function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <=100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

// Função para validar o campo de número
function adicionar() {
    // Só vai adicionar se ele for um número e se não tiver na lista.
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        window.alert('ok')
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    /*
    if (num.value.length === 0) {
        window.alert('Comando inválido! Digite um número.'); // Alerta se o campo estiver vazio

    } else {

        let n = Number(num.value) // Converte o valor para número

        let item = document.createElement('option')
        item.text = `Valor ${n} adicionado.`
        item.value = `num${n}`
        selRes.appendChild(item)
    }  


    num.value = ''; // Limpa o campo de número
    num.focus(); // Foca no campo para nova entrada   
    //  */
}


// Função para limpar a lista
function limpar() {
    lista.innerHTML = ''; // Remove todas as opções da lista
    window.alert('Lista limpa com sucesso! 😊');
}


