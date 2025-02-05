let por = document.querySelector('input#ifdes')
let button = document.getElementById('button')
let res = document.getElementById('res')

let pro = prompt('Qual é o produto que você está comprando?')


// Verifica se o nome do produto está vazio
if (!pro || pro.trim() === "") {
    alert('[ERRO] Digite o nome do produto corretamente.')
    marcarErro()
} else {
    pro = pro.trim().toUpperCase()
    let price = Number(prompt(`Qual é o preço de ${pro}?`))

    // Verifica se o preço é válido
    if (isNaN(price) || price <=0) {
        alert('[ERRO] Digite um preço válido para o produto.')
        marcarErro()
    } else {
        // Adiciona o evento ao botão (fora da condição para evitar bugs)
        button.addEventListener('click', calcular)

        // Define o foco no campo de desconto
        por.focus()

        function calcular() {
            let des = Number(por.value)

            if (por.value.length === 0 || isNaN(des)) {
                alert('[ERRO] Digite um valor válido para o desconto!')
                blockInput() // Bloqueia o input se der erro
            } else {
                if (des >= 1 && des <= 100) {
                    let valorDes = (price * des) / 100
                    let finPrice = price - valorDes

                res.innerHTML = `
                    <h1>Calculando desconto de ${des}% para ${pro}.</h1>
                    <p>O preço original era <strong> R$ ${price.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong>.</p>
                    <p>Você acaba de ganhar <strong>R$ ${valorDes.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> de desconto (-${des}%).</p>
                    <p>Você vai pagar <strong>R$ ${finPrice.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> no produto ${pro}.</p>`

                    disBlockInput() // Libera o input se o cálculo for bem-sucedido

                    por.value = ""
                    por.focus()

                    let resBtn = document.createElement('input')
                    resBtn.setAttribute('type', 'button')
                    resBtn.setAttribute('value','Limpar')
                    resBtn.setAttribute('id', 'button')
                    resBtn.setAttribute('onClick', 'limpar()')
                    res.appendChild(resBtn)
                } else if (des === 0) {
                    res.innerHTML = `
                    <p>Sinto Muito. Esse produto não está na promoção!</p>
                    <p>Você vai pagar o preço integral de <strong>R$ ${price.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}</strong> pelo ${pro}.</p>
                    `
                    por.value = ""
                    por.focus()
                    
                    let resBtn = document.createElement('input')
                    resBtn.setAttribute('type', 'button')
                    resBtn.setAttribute('value','Limpar')
                    resBtn.setAttribute('id', 'button')
                    resBtn.setAttribute('onClick', 'limpar()')
                    res.appendChild(resBtn)
                } else {
                    alert('[ERRO] O valor do desconto deve estar entre 1% e 100%.')
                    por.value = ""
                    por.focus()
                }
            }
        }
            // Reseta o campo de desconto depois de cada cálculo
            por.value = ""  
    }
}

function limpar() {
    location.reload()
}

// Função para indicar erro visualmente e bloquear o input
function marcarErro() {
    button.style.backgroundColor = 'red'
    button.style.border = '3px solid red'
    blockInput() 

    // Reseta o erro após 2 sec.
    setTimeout(() => {
        button.style.backgroundColor = ''
        button.style.border = ''
    }, 2000)

    setTimeout(() => {
        location.reload();
    }, 3000); // Recarrega após 3 segundos
}

// Função para bloquear o input ifnum
function blockInput() {
    por.disabled = true
}

// Função para desbloquear o input ifnum
function disBlockInput() {
    por.disabled = false
}

    