let button = document.getElementById('button')
let res = document.querySelector('div#res')

button.addEventListener('click', clicar)

// alt + 0176 °

// Função principal para converter temperaturas
function clicar() {
    let num = Number(prompt(`Digite uma temperatura em °C (Celsius)`))

    if (!isNaN(num)) {
        res.innerHTML = `<h1>A temperatura de ${num}°C corresponde a:</h1>`

        // Converte e exibe as temperaturas em Kelvin e Fahrenheit
        res.innerHTML += `<p>${(num + 273.15).toFixed(2)}°K (<abbr title=" °C + 273.15 = °K">Kelvin</abbr>)</p>`
        res.innerHTML += `<p>${((num * 9/5) + 32).toFixed(2)}°F (<abbr title="( °C * 9 / 5 ) + 32 = °F">Fahrenheit)</p>`

        // Altera a cor de fundo conforme a temperatura
        alterarCor(num)
    } else {
        alert('[ERRO] Valor inválido.')
    }
}    

function alterarCor(temp) {
    if (temp <= 0) {
        document.body.style.background = '#052147'  // Frio extremo
    } else if (temp > 0 && temp <= 22) {
        document.body.style.background = '#84e0f9d8' // Clima agradável
    } else if (temp >= 23 && temp <= 32) {
        document.body.style.background = '#f0f070e1' // Calor moderado
    } else {
        document.body.style.background = '#e11414bd' // Calor extremo
    }
}
