const botoes = document.querySelectorAll('#menu .btn')
const res = document.querySelector('div#res')

botoes.forEach((botao) => {
    botao.addEventListener('click', () =>{
        res.innerHTML = `<p>Você clicou no <strong>${botao.textContent}</strong></p>`
    
    setTimeout(() =>{
        res.textContent = ''
    },3000)
    return
    })
})