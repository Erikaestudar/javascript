let monthBtn = document.querySelector('#start')
let msg = document.querySelector('#msg')
let photo = document.querySelector('#foto')

monthBtn.addEventListener('click', verificar)


function verificar() {
    let month = prompt(`Digite o mês em extenso (ex: Janeiro)`).trim().toUpperCase()

    if (month === "" || !isNaN(Number(month))) {
        alert('[ERRO] Digite um mês válido!')
        return
    }

    let estacao
    let imgSrc = ''

    photo.innerHTML = ''

    switch (month) {
        // Podemos testar múltiplos casos em uma mesma linha, desse jeito
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':
            estacao = 'INVERNO'
            imgSrc = 'imagens/winter.png'
            document.body.style.background = '#102543'
            break

        case 'ABRIL': case 'MAIO': case 'JUNHO':
            estacao = 'PRIMAVERA'
            imgSrc = 'imagens/spring.png'
            document.body.style.background = '#DE5565'
            break

        case 'JULHO': case 'AGOSTO': case 'SETEMBRO':
            estacao = 'VERÃO'
            imgSrc = 'imagens/summer.png'
            document.body.style.background = '#BE9F6A'
            break

        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO':
            estacao = 'OUTONO'
            imgSrc = 'imagens/autumn.png'
            document.body.style.background = '#720306'
            break

        default:
            estacao = 'INDEFINIDA'
            break
    }
    msg.innerHTML = `<p>No mês de ${month}, estamos na estação <strong>${estacao}</strong>.</p>`

    if (imgSrc) {
        let img = document.createElement('img')
        img.src = imgSrc
        img.alt = `Imagem representando a estação ${estacao}`
        photo.appendChild(img)
    }
}
