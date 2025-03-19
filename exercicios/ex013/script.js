let button = document.querySelector('#button')
let res = document.querySelector('#res')

button.addEventListener('click', verificar)

function verificar() {
    let num1 = prompt(`Digite um número:`).trim()

    if (num1 === "" || isNaN(Number(num1))) {
        alert('[ERRO] Digite um número válido!')
    } else {
        let num2 = prompt(`Digite outro número:`).trim()

        if (num2 === "" || isNaN(Number(num2))) {
            alert('[ERRO] Digite o segundo número válido!')
        } else {
            n1 = Number(num1)
            n2 = Number(num2)
            let resultado = maior(n1, n2)

            res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>${resultado}</p>`
        }
    }
}

function maior(n1, n2) {
    if (n1 < n2) {
        return `, o maior valor é <strong>${n2}</strong>`
    } else if (n1 > n2) {
        return `, o maior valor é <strong>${n1}</strong>`
    } else {
        return `, ambos são <strong>IGUAIS</strong>`
    }
}