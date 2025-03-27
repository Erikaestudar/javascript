let button = document.querySelector('#button')
let res = document.querySelector('#res')
let num = document.querySelector('#num')
num.focus()

button.addEventListener('click', contar)

function contar() {
    if (num.value.length === "" || Number(num.value) < 0) {
        alert('[ERRO] Digite um número positivo qualquer!')
        num.value = ""
        num.focus()
        return
    }

    let n = num.value
    res.innerHTML += `<h2>Contando de 0 até ${n}</h2>`

    for (let c = 0; c <= n; c++) {
        res.innerHTML += `${c} &#x1F449`
    }
    res.innerHTML += `&#x1F3C1;`
    num.value = ""
    num.focus()
}