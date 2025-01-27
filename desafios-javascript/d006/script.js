let button = document.getElementById('button')
let res = document.querySelector('div#res')

button.addEventListener('click', clicar)

// alt + 0176

function clicar() {
    let num = Number(prompt(`Digite uma temperatura em °C (Celsius)`))

    if (!isNaN(num) && num > 0) {
        res.innerHTML = `<h1>A temperatura de ${num}°C, corresponde a...</h1>`

        res.innerHTML += `<p>${num + 273.15}°K (<abbr title=" °C + 273,15 = °F">Kevin</abbr>)</p>`
        res.innerHTML += `<p>${(num * 9/5) + 32}°F (<abbr title="( °C * 9 / 5 ) + 32 = °F">Fahrenheit)</p>`

                // Altera a cor de fundo conforme a temperatura
        alterarCor(num)
    } else {
        alert('[ERRO] Valor inválido.')
    }
}    

function alterarCor() {
    if (num < 0 && num >=9) {
        document.body.style.background = '#010c1b5d'
    } else if (num >= 10 && num <= 25) {
        document.body.style.background = '#92e9d65d'
    } else if (num <= 32) {
        document.body.style.background = '#fded05e1'
    } else {
        document.body.style.background = '#fd0505e5'
    }
}


/*
let button = document.getElementById('button'); // Seleciona o botão pelo ID
let res = document.querySelector('div#res'); // Seleciona o elemento de saída pelo ID

button.addEventListener('click', clicar); // Adiciona o evento de clique ao botão

// Função principal para converter temperaturas
function clicar() {
    let num = Number(prompt(`Digite uma temperatura em °C (Celsius)`)); // Solicita a temperatura em Celsius

    if (!isNaN(num)) { // Verifica se o valor digitado é um número
        res.innerHTML = `<h1>A temperatura de ${num}°C corresponde a:</h1>`;
        
        // Converte e exibe as temperaturas em Kelvin e Fahrenheit
        res.innerHTML += `<p>${(num + 273.15).toFixed(2)}°K (<abbr title="°C + 273.15 = °K">Kelvin</abbr>)</p>`;
        res.innerHTML += `<p>${((num * 9/5) + 32).toFixed(2)}°F (<abbr title="(°C * 9 / 5) + 32 = °F">Fahrenheit</abbr>)</p>`;
        
        // Altera a cor de fundo conforme a temperatura
        alterarCor(num);
    } else {
        alert('[ERRO] Valor inválido. Digite um número válido.'); // Exibe mensagem de erro
    }
}

// Função para alterar o fundo com base na temperatura
function alterarCor(temp) {
    if (temp < 0) {
        document.body.style.background = '#010c1b5d'; // Frio extremo
    } else if (temp >= 10 && temp <= 25) {
        document.body.style.background = '#92e9d65d'; // Clima agradável
    } else if (temp <= 32) {
        document.body.style.background = '#fded05e1'; // Calor moderado
    } else {
        document.body.style.background = '#fd0505e5'; // Calor extremo
    }
}

*/