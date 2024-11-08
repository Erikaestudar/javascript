function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`

    //var hora = 24
    if (hora >= 5 && hora <= 12) {
        // Bom Dia!
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#dbae72'
    } else if (hora >= 12 && hora <= 17) {
        //Boa Tarde!
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#b9846f'
    } else if (hora >= 18 && hora <= 24){
        //Boa Noite!
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#515154'
    } else {
        img.src = 'imagens/fotomadrugada.png'
        document.body.style.background = '#041010'
    }
}


