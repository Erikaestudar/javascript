// Pegando os elementos do HTML
let startBtn = document.querySelector('#start')
let cleanBtn = document.querySelector('#clean')
let res = document.querySelector('#res')

// Adicionando eventos de clique
startBtn.addEventListener('click', calcular)
cleanBtn.addEventListener('click', limpar)

// Array de operações (cada índice é uma operação diferente)
const operacoes = [
    (a, b) => `${a} + ${b} = <strong>${a + b}</strong>`,  // Índice 0 - Somar
    (a, b) => `${a} - ${b} = <strong>${a - b}</strong>`,  // Índice 1 - Subtrair
    (a, b) => `${a} * ${b} = <strong>${a * b}</strong>`,  // Índice 2 - Multiplicar
    (a, b) => b !== 0 ? `${a} / ${b} = <strong>${a / b}</strong>` : 'Não é possível dividir por zero 🚫' // Índice 3 - Dividir
]

// Função para calcular
function calcular() {
    let num1 = prompt(`Primeiro valor:`).trim()

    // Verificação do primeiro número
    if (num1 === "" || isNaN(Number(num1))) {
        alert(`[ERRO] Digite um valor válido!`)
        return
    }

    let num2 = prompt(`Segundo valor:`).trim()

    // Verificação do segundo número
    if (num2 === "" || isNaN(Number(num2))) {
        alert(`[ERRO] Segundo valor inválido! Tente novamente`)
        return
    }

    // Solicita a operação
    let operacao = prompt(
        `Valores informados: ${num1} e ${num2}.\nO que vamos fazer?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`
    ).trim()

    if (operacao === "" || isNaN(Number(operacao))) {
        res.innerHTML = `<p>OPÇÃO INVÁLIDA! Você digitou ${num1} e ${num2}, mas não sei o que fazer com eles.</p>`
        return
    }

    // Convertendo inputs para número
    let n1 = Number(num1)
    let n2 = Number(num2)
    let op = Number(operacao) - 1 // Como o array começa no 0, ajustamos a entrada

    res.innerHTML = `<p id="style">Calculando...</p>`

    // Verifica se a operação é válida dentro do array
    if (op >= 0 && op < operacoes.length) {
        let resultado = operacoes[op](n1, n2) // Chama a operação pelo índice do array
        res.innerHTML += `<p>Resultado: <strong>${resultado}</strong></p>`
    } else {
        res.innerHTML = `<p>OPÇÃO INVÁLIDA! Você digitou ${num1} e ${num2}, mas não sei o que fazer com eles.</p>`
    }
}

// Função para limpar o resultado
function limpar() {
    res.innerHTML = ""
}
