let btn = document.querySelector('button.btn')
btn.addEventListener('click', clicar)

function clicar() {
    let nome = prompt('Qual é o seu nome?')

    // Verifica s o prompt não está vazio
    if (nome.trim() !== "") {
        let idade = Number(prompt(`Olá, ${nome.toUpperCase()}! Quantos anos você tem?`))
        
        if (nome.trim() !== '' && Number(idade) == 0) {
            alert (`Acabei de conhecer ${nome.toUpperCase()} , cuja a idade é desconhecida. \u{1F609}`)
        } else if (nome.trim() !== '' && Number(idade) == idade) {
            alert (`Acabei de conhecer ${nome.toUpperCase()} , que tem ${idade} anos de idade. \u{1F60A}`)
        } else {
            alert (`[ERRO] Você digitou letras no campo da idade.`)
        }
    
    } else {
        let idade = Number(prompt(`Olá, Estranho! Quantos anos você tem?`))    
        
        if (nome.trim() == '' && Number(idade) == 0) {
            alert (`Acabei de conhecer um Estranho, cuja a idade é desconhecida.`)
        } else if (nome.trim() == '' && Number(idade) == idade) {
            alert (`Acabei de conhecer um Estranho, que tem ${idade} anos de idade. `)
        } else {
            alert (`[ERRO] Você digitou letras no campo da idade.`)
        }
    }
}
 