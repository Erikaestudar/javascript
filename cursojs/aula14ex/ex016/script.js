let contarBtn = document.getElementById('contar')

contarBtn.addEventListener('click', clicar)

function clicar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    // Verificar se está vazio
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível Contar! Faltam dados!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML =  `Contando `
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        //Verifica se ambos os campos são 0.
        if (i <= 0 && f <= 0){
            res.innerHTML = 'Impossível Contar!'
        } else {
            if (p <= 0) {
                window.alert('Passo inválido! Considerando PASSO 1')
                p = 1
            }
            if (i < f) {
            //Contagem crescente
            res.innerHTML += `de <strong>${ini.value}</strong> a <strong>${fim.value}</strong> com o passo de <strong>${p}</strong>: </br>`
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }

            } else {
            //Contagem regressiva
            res.innerHTML += `de <strong>${ini.value}</strong> a <strong>${fim.value}</strong> com o passo de <strong>${p}</strong>: </br>`
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
            }
        res.innerHTML += `\u{1F3C1}`

        //Vai apagar os campos
        ini.value = ''
        fim.value = ''
        passo.value = ''
    }
}
}
