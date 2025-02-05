let button = document.querySelector('input#button')
let res = document.querySelector('div#res')

let dolar = Number(prompt('Antes de mais nada. Quanto está a cotação do dólar agora?'))

// Verifica se a cotação digitada é um número válido
if (isNaN(dolar) || dolar <= 0) {
    alert('[ERRO] Valor inválido! Digite um valor válido!')
    marcarErro()
} else {
    button.addEventListener('click', clicar)
}

// Função que será chamada ao clicar no botão
function clicar() {
    let real = Number(prompt('Quantos R$ você deseja converter?'))

    if (isNaN(real) || real <= 0) {
        alert('[ERRO] Valor inválido! ')
        marcarErro()
    } else {
        res.innerHTML = `<p>
        <img src="images/flag-brazil.png"> 
        <img src="images/trending_flat_black.png"> 
        <img src="images/flag-united-states.png">
        </p>`
        
        res.innerHTML += `<p>Valor ${(real).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})} / cotação ${(dolar).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})}</p>`
        res.innerHTML += `<p> Deu ${(real / dolar).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})}</p>`

        // Remove o erro caso o valor seja válido
        limparErro()
    }
}

// Função para mudar a cor do botão quando houver erro
function marcarErro() {
    button.style.backgroundColor = 'red'
    button.style.color = 'white'
    button.style.border = '2px solid darkred'
}

// Função para restaurar a cor normal do botão
function limparErro() {
    button.style.backgroundColor = ''
    button.style.color = ''
    button.style.border = ''
}