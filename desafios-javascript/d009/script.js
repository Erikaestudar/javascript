let button = document.querySelector('input#button')
let res = document.querySelector('div#res')

button.addEventListener('click', clicar)

function clicar() {
    let name = prompt('Qual é o nome do funcionário?')

    // Verifica se o prompt do nome está vazio
    if (name.trim() === '') {
        alert('[ERRO] Comando inválido. Favor digitar o nome!')
    } else {
        let sal = Number(prompt(`Qual é o salário de ${name}?`))

        // Verifica se o valor é válido.
        if (isNaN(sal) || sal <= 0) {
            alert('[ERRO] Comando inválido. Digite um valor válido.')
        } else {
            let por = Number(prompt(`O salário de ${name} vai ser reajustado em qual porcentagem(%)?`))

            let aju = (sal * por) / 100
            let finSal = sal + aju

            if (isNaN(por) || por <= 0 || por > 100) {
                alert(`[ERRO] Digite uma porcentagem entre 1% à 100%`)
            } else {
                res.innerHTML = ""
                res.innerHTML += `
                <div id="ans">
                <h1>${name} recebeu um aumento salarial!</h1>
                <p>O salário atual era ${(sal).toLocaleString('pt-Br', {style:'currency', currency:'BRL'})}.</p>
                <p>Com um aumento de ${por}%, o salário vai aumentar ${(aju).toLocaleString('pt-Br', {style:'currency', currency:'BRL'})} no próximo mês.</p>
                <p>E a partir daí, ${name} vai passar a ganhar <strong>${(finSal).toLocaleString('pt-Br', {style:'currency', currency:'BRL'})}</strong>.</p>
                </div>
                `
            }
        }
    }
}