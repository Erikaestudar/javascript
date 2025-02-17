let button = document.getElementById('button')
let res = document.querySelector('div#res')

button.addEventListener('click', clicar)

function clicar() {

    let prevPrice = prompt('Qual era o preço anterior do produto?').trim()

    if (prevPrice === "" || isNaN(prevPrice) || Number(prevPrice) <=0) {
        return alert('[ERRO] Digite um valor válido para o preço anterior!')
    }

    let newPrice = prompt('Qual é o preço atual do produto?').trim()

    if (newPrice === "" || isNaN(newPrice) || Number(newPrice) <=0) {
        return alert('[ERRO] Digite um valor válido para o preço atual!')
    }

    // convertendo para números
    prevPrice = Number(prevPrice)
    newPrice = Number(newPrice)

    res.innerHTML = `
    <div id="left"><h1>Analisando os valores informados</h1>
    <p>O produto custava ${prevPrice.toLocaleString('pt-Br', {style:'currency', currency:'BRL'})} e agora custa ${newPrice.toLocaleString('pt-Br', {style:'currency', currency:'BRL'})}.</p>
    </div>`

    if (newPrice > prevPrice) {
        let expensive = newPrice - prevPrice
        let expensivePercent = (expensive * 100) / prevPrice

        res.innerHTML += `
        <div id="left"><p>Hoje o produto está mais caro.</p>
        <p>O preço subiu ${expensive.toLocaleString('pt-br',{style:'currency', currency:'BRL'})} em relação ao preço anterior.</p>
        <p>Uma variação de ${expensivePercent.toFixed(2)}% pra cima.
        </div>`

    } else if (newPrice < prevPrice) {
        let discount = prevPrice - newPrice
        let discountPercent = (discount * 100) / newPrice

        res.innerHTML += `
        <div id="left"><p>Hoje o produto está mais barato.</p>
        <p>O preço caiu ${discount.toLocaleString('pt-br',{style:'currency', currency:'BRL'})} em relação ao preço anterior.</p>
        <p>Uma variação de ${discountPercent.toFixed(2)}% pra baixo.</p>
        </div>`

    } else {
        res.innerHTML += `
        <div id="left">
        <p>Não houve nenhuma mudança, o preço continua igual.</p>
        </div>`      
    } 
}
    // Deixar o botão em foco
    button.focus()
