let addBtn = document.querySelector('input#addBtn')
let finBtn = document.querySelector('input#finBtn')
let limBtn = document.querySelector('input#limBtn')

addBtn.addEventListener('click', adicionar)
finBtn.addEventListener('click', finalizar)
limBtn.addEventListener('click', limpar)

let num = document.querySelector('input#fnum'); // Seleciona o campo de input com id 'num'
num.focus() // Deixa focado o input logo que a página é carregada

let lista = document.querySelector('select#flista'); // Seleciona o campo de lista com os resultados dos números
let res = document.querySelector('div#res'); // Seleciona o campo dos resultados
let valores = [] //Cria de forma global um vetor




// Função para validar o campo de número
function adicionar() {
    // Só vai adicionar se ele for um número e se não tiver na lista.
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))

        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        item.value = `num${num}`
        lista.appendChild(item)
        res.innerHTML = '' // Quando adicionar um valor, ele limpa o res(div)
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''; // Limpa o campo de número
    num.focus(); // Foca no campo para nova entrada      
}


// Função para limpar a lista
function limpar() {
    lista.innerHTML = '' // Remove todas as opções da lista
    valores = [] // Limpa (zera) os valores do vetor
    res.innerHTML = ''
    num.focus()
}


// Para fazer a adição dos elementos é preciso fazer 2 funções para verifição, E DEVE ESTAR ABAIXO DA FUNÇÃO ADICIONAR!!
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

function finalizar() {
    if(valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let max = valores[0]
        let min = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > max)
                max = valores[pos]
            if (valores[pos] < min)
                min = valores[pos]
        }
        media = soma / tot
        num.focus()

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos <strong>${tot}</strong> números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${max}</strong>.</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${min}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores digitados é <strong>${media}</strong>.</p>`
    }
}