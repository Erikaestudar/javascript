let button = document.querySelector('input#button')
let res = document.querySelector('div#res')

button.addEventListener('click', clicar)

function clicar() {
    let year = prompt('Qual é o ano que você quer verificar?')

    if (year.trim() == "") {
        alert('[ERRO] Preencha o ano.')
    } else {
        if (Number(year) == 0 || isNaN(Number(year))) {
            alert('[ERRO] Digite um valor válido!')
        } else {
            if (Number(year) % 400 == 0 || Number(year) % 4 == 0 && Number(year) % 100 != 0) {
                res.innerHTML = `
                <h1 > Analisando o ano de ${year}...</h1>
                <p>O ano de ${year} <mark id="green">É BISSEXTO</mark><img src="icons/check.png" alt="check"></p>`
            } else {
                res.innerHTML = `

                <h1> Analisando o ano de ${year}...</h1>
                <p>O ano de ${year} <mark id="red">NÃO É BISSEXTO</mark><img src="icons/close.png" alt="close"></p>`
            }
        }
    }
} 
