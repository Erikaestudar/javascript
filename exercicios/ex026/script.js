let num1 = document.querySelector('#num1')
let num2 = document.querySelector('#num2')
let button = document.querySelector('#button')
let res = document.querySelector('#res')

num1.focus()

button.addEventListener('click', contar)

function contar() {

    if (num1.value.trim() === "" || isNaN(Number(num1.value))) {
        alert('[ERRO] Digite um número válido no valor 1!')
        num1.focus()
        return
    }

    if (num2.value.trim() === "" || isNaN(Number(num2.value))) {
        alert('[ERRO] Digite um número válido no valor 2!')
        num2.focus()
        return
    }

    let n1 = Number(num1.value)
    let n2 = Number(num2.value)

    if (n1 === 0 && n2 === 0) {
        res.innerHTML = `<p>Impossível Contar</p>`
        limparCampos()
        return
    }

    res.innerHTML += `<p>Contando de ${n1} até ${n2}</p>`

    if (n1 < n2) {

        for (let c = n1; c <= n2; c++) {
            res.innerHTML += `${c} &#x1F449`
        }
        
    } else {
        for (let c = n1; c >= n2; c--) {
            res.innerHTML += `${c} &#x1F449`
        }
    }
    res.innerHTML += `&#x1F3C1;` // Emoji de bandeira final

    limparCampos()
}

function limparCampos() {
    num1.value = ""
    num2.value = ""
    num1.focus()
}