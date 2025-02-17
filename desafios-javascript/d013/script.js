let button = document.querySelector('input#button')
let res = document.querySelector('div#res')

button.addEventListener('click', verificar)

function verificar() {

    res.innerHTML = ""

    let name = prompt('Qual é o nome do aluno?')

    if (name.trim() === "") {
        alert('[ERRO] Preencha o nome.')
    
    } else {

        let note1 = prompt(`Primeira nota de ${name}:`).trim()

        if (note1 === "" || isNaN(Number(note1)) || Number(note1) < 0 || Number(note1) >10) {
            alert('[ERRO] Primeira nota inválida. Digite um número entre 0 e 10!')
        
        } else {

            let note2 = prompt(`Segunda nota de ${name}:`).trim()

            if (note2 === "" || isNaN(Number(note2)) || Number(note2) < 0 || Number(note2) > 10) {
                alert('[ERRO] Segunda nota inválida. Digite um número entre 0 e 10!')
            
            } else {

                let n1 = Number(note1)
                let n2 = Number(note2)
                let media = (n1 + n2) / 2

                res.innerHTML = `
                <div id="left">
                    <h1>Analisando a situação de ${name}</h1>
                    <p>Com as notas ${n1.toLocaleString('pt-br')} e ${n2.toLocaleString('pt-br')}, a <strong>média é ${media.toLocaleString('pt-br')}</strong>.</p>
                </div>
                `
                if (media < 3.0) {
                    res.innerHTML += `
                    <div id="left">
                        <p>Com média abaixo de 3,0. O aluno está <mark id="reprovado">REPROVADO</mark></p>
                    </div>`

                } else if (media >= 3.0 && media < 6.0) {
                    res.innerHTML += `
                    <div id="left">
                        <p>Com média entre 3,0 e 6,0. O aluno está em <mark id="recuperacao">RECUPERAÇÃO</mark></p>
                    </div>`

                } else {
                    res.innerHTML += `
                    <div id="left">
                        <p>Com média acima de 6,0. O aluno está <mark id="aprovado">APROVADO</mark></p>
                    </div>`
                }
            }
        }
    }
}

button.focus()