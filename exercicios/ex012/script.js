let button = document.querySelector('#button')
let res = document.querySelector('#res')

button.addEventListener('click', verificar)

function verificar() {
    let num = prompt(`Digite um número:`).trim()

    res.innerHTML = ""

    if (num == "" || isNaN(Number(num)) || Number(num) === 0) {
        alert('[ERRO] Digite um número válido!')
    } else {
        // Converte a entrada para número
        n = Number(num)

        // Chama a função parimp e armazena o resultado
        let resultado = parimp(n)

        res.innerHTML = `O número <strong>${num}</strong> que foi digitado é <strong>${resultado}</strong>`
    }
}

function parimp(n) {
    if (n % 2 === 0) {
        return 'PAR!'
    } else {
        return 'ÍMPAR!'
    }
}