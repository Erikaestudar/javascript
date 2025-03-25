let startBtn = document.querySelector('#start')
let cleanBtn = document.querySelector('#clean')
let res = document.querySelector('#res')

startBtn.addEventListener('click', calcular)
cleanBtn.addEventListener('click', limpar)

/* 
[1] Somar
[2] Subtrair
[3] Multiplicar
[4] Dividir
*/

function calcular() {
    let num1 = prompt(`Primeiro valor:`).trim()

    if(num1 === "" || isNaN(Number(num1))) {
        alert(`[ERRO] Digite um valor válido!`) 
        return
    } 

    let num2 = prompt(`Segundo valor:`).trim()

    if(num2 === "" || isNaN(Number(num2))) {
        alert(`[ERRO] Segundo valor inválido! Tente novamente`)
        return
    } 
    
    let operacao = prompt(`Valores informados: ${num1} e ${num2}.\nO que vamos fazer?\n[1] Somar\n[2] Subtrair\n[3] Multiplicar\n[4] Dividir`).trim()

    if (operacao === "" || isNaN(Number(operacao))) {
        res.innerHTML = `<p>OPÇÃO INVÁLIDA! Você digitou ${num1} e ${num2}, mas não sei o que fazer com eles.</p>`
        return
    }

    let n1 = Number(num1)
    let n2 = Number(num2)
    let op = Number(operacao)
    
    res.innerHTML = `<p id="style">Calculando..</p>`

    switch (op) {
        case 1:
            res.innerHTML += `<p>${n1} + ${n2} = <strong>${(n1 + n2).toLocaleString('pt-BR')}</strong></p>`
            break

        case 2:
            res.innerHTML += `<p>${n1} - ${n2} = <strong>${(n1 - n2).toLocaleString('pt-BR')}</strong></p>`
            break

        case 3:
            res.innerHTML += `<p>${n1} * ${n2} = <strong>${(n1 * n2).toLocaleString('pt-BR')}</strong></p>`
            break

        case 4:
            if (n2 === 0) {
                res.innerHTML += `<p>Não é possível dividir por zero! 🚫</p>`

            } else {

                res.innerHTML += `<p>${n1} / ${n2} = <strong>${(n1 / n2).toLocaleString('pt-BR')}</strong></p>`
            }
            break

        default:
            res.innerHTML = `
            <p>OPÇÃO INVÁLIDA! Você digitou ${num1} e ${num2}, mas não sei o que fazer com eles.</p>
            `
            break
    }   
}

function limpar() {
    res.innerHTML = ""
}