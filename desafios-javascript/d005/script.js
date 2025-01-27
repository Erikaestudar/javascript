let button = document.querySelector('input#button')
let res = document.getElementById('res')

button.addEventListener('click', clicar)

function clicar() {
    let num = Number(prompt('Digite uma distância em metros (m).'))

    if (!isNaN(num) && num > 0) {
        res.innerHTML = `<h1>A distância de ${num} metros (m), corresponde a...</h1>`
        res.innerHTML += `<p>${(num / 1000).toLocaleString('pt-BR')} quilômetros (<abbr title="Divida o valor de comprimento por 1000">Km</abbr>)</p>` //Divida o valor de comprimento por 1000
        res.innerHTML += `<p>${(num / 100).toLocaleString('pt-BR')} hectômetros (<abbr title="Divida o valor de comprimento por 100">Hm</abbr>)</p>` //Divida o valor de comprimento por 100
        res.innerHTML += `<p>${(num / 10).toLocaleString('pt-BR')} decâmetros (<abbr title="Divida o valor de comprimento por 10">Dam</abbr>)</p>` //Divida o valor de comprimento por 10

        res.innerHTML += `<p>${(num * 10).toLocaleString('pt-BR')} decímetros (<abbr title="Multiplique o valor de comprimento por 10">dm</abbr>)</p>` //Multiplique o valor de comprimento por 10
        res.innerHTML += `<p>${(num * 100).toLocaleString('pt-BR')} centímetros (<abbr title="Multiplique o valor de comprimento por 100">cm</abbr>)</p>` //Multiplique o valor de comprimento por 100
        res.innerHTML += `<p>${(num * 1000).toLocaleString('pt-BR')} milímetros (<abbr title="Multiplique o valor de comprimento por 1000">mm</abbr>)</p>` //Multiplique o valor de comprimento por 1000
    } else {
        alert('[ERRO] Digite um número válido. ')
    }
}