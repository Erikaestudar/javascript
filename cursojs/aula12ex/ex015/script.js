function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')

    if (fano.value.length === 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var gênero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 3) {
                //bebê
                img.setAttribute('src', 'imagens/1hbebe.png')
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/2hcrianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/3hjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/4hadulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/5hidoso.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'

            if (idade >= 0 && idade < 3) {
                //bebê
                img.setAttribute('src', 'imagens/1mbebe.png')
            } else if (idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/2mcrianca.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/3mjovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/4madulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/5midosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.</br>`
        res.appendChild(img)
    }
}