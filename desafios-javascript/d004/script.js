let button = document.querySelector('input#button')

button.addEventListener('click', clicar)

function clicar() {
    let item = prompt('Que produto você está comprando?')

    // Verifica se o produto foi informado
    if (item && item.trim() !== "") {
        // Solicita o preço do produto
        let price = Number(prompt(`Quanto custa ${item.trim().toUpperCase()} que você está comprando?`))

        // Verifica se o preço é válido
        if (!isNaN(price) && price > 0) {
            // Solicita o valor pago
            let pay = Number(prompt(`Qual foi o valor que você deu para pagar ${item.trim().toUpperCase()}?`))

            // Verifica se o valor pago é válido
            if (!isNaN(pay) && pay >= price) {
                let change = pay - price

                // Exibe o resumo da compra
                alert(`Você comprou ${item.trim().toUpperCase()} que custou ${price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}. \nVocê pagou ${pay.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} e vai receber ${change.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} de troco. \nVolte sempre!`)
            } else if (!isNaN(pay) && pay < price) {
                // Caso o valor seja insuficiente
                alert('Sinto muito, não foi possível efetuar a compra. Valor insuficiente!')
            } else {
                // Caso o valor pago seja inválido
                alert('[ERRO] Valor inválido para o pagamento.')
            }

        } else {
            alert('[ERRO] Valor inválido para o preço do produto.')
        }

    } else {
        alert('[ERRO] Comando inválido. Favor preencher os dados.')
    }
}