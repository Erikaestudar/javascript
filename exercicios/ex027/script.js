let num = document.querySelector('#num')
let button = document.querySelector('#button')
let res = document.querySelector('#res')

button.addEventListener('click', tabuada)
num.focus()

function tabuada() {

    if (num.value.trim() === "" || isNaN(Number(num.value))) {
        alert('[ERRO] Digite um número válido!')
        num.focus()
        return
    }

    let n = Number(num.value)

    res.innerHTML = `<h2>Tubuada de ${n}</h2>`

    for (let c = 1; c <= 10; c++ ) {
        res.innerHTML += `<p>${n} x ${c} = ${n * c}</p>`
    }
    num.value = ""
    num.focus()
}