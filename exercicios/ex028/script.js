let num = document.querySelector('#num')
let button = document.querySelector('#button')
let res = document.querySelector('#res')

num.focus()
button.addEventListener('click', calcular)

function calcular() {
    if (num.value.trim() === "" || isNaN(Number(num.value))) {
        alert('[ERRO] Digite um número válido!')
        limpar()
        return
    }

    let n = Number(num.value)

    if (n <= 0 || n >= 22) {
        alert('[ERRO] Digite um número entre 1 e 21!')
        limpar()
        return
    }

    // Chamar a função
    let {resultado, calculo} = fatorial(n)

    res.innerHTML = `
    <strong>Calculando ${n}!</strong>
    <p>${calculo}</p> = <p><strong>${resultado.toLocaleString('pt-BR')}</strong></p>`

    limpar()
}

function limpar() {
    num.value = ""
    num.focus()
}

function fatorial(n) {
    let fat = 1
    let calculo = ""

    for (let c = n; c > 1; c--) {
        fat *= c
        calculo += `${c} x ` // Constrói a string do cálculo passo a passo
    }
    calculo += "1" // Adiciona o último número (1)

    return { resultado: fat, calculo: calculo } // Retorna um objeto com o resultado e o cálculo
}
