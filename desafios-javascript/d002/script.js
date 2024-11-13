const btn = document.querySelector('button.btn')
btn.addEventListener('click', clicar)

function clicar() {
    const nome = prompt('Qual é o seu nome?')
    const idade = Number(prompt(`Olá, ${nome.toUpperCase()}! Quantos anos você tem?`))
    
    if (nome == '' || Number(idade) == 0) {
        alert (`Acabei de conhecer ${nome.toUpperCase()}, cuja a idade deixaremos no anonimato.`)
    } else if (Number(idade) == idade) {
        alert (`Acabei de conhecer ${nome.toUpperCase()}, que tem ${idade} anos de idade.`)
    } else {
        alert (`[ERRO] Você digitou letras no campo da idade.`)
    }
}
