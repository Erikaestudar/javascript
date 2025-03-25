let monthBtn = document.querySelector('#start')
let msg = document.querySelector('#msg')
let photo = document.querySelector('#foto')

monthBtn.addEventListener('click', verificar)

const estacoes = [
    [['JANEIRO', 'FEVEREIRO', 'MARÇO'], 'INVERNO'],
    [['ABRIL', 'MAIO', 'JUNHO'], 'PRIMAVERA'],
    [['JULHO', 'AGOSTO', 'SETEMBRO'], 'VERÃO'], 
    [['OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'], 'VERÃO']
]

function verificar() {
    let month = prompt(`Digite o mês em extenso (ex: Janeiro)`).trim().toUpperCase()

    if (month === "" || !isNaN(Number(month))) {
        alert('[ERRO] Digite um mês válido!')
        return
    }

    let estacaoEncontrada = 'INDEFINIDA'

    for (let i = 0; i < estacoes.length; i++) {
        if (estacoes[i][0].includes(month)) {
            estacaoEncontrada = estacoes[i][1]
            break
        }
    }
    msg.innerHTML = `<p>No mês de ${month} estamos na estação <strong>${estacaoEncontrada}</strong>.</p>`
}
