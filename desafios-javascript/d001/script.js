const botoes = document.querySelectorAll('#menu .btn')
const res = document.querySelector('div#res')

// Verifica se encontrou os elementos antes de continuar
if (botoes.length > 0 && res) {
    botoes.forEach((botao) => {        
        botao.addEventListener('click', () =>{
            // Remove a borda de todos os botões antes de adicionar no clicado
            botoes.forEach(b => b.style.border = 'none')

            // Exibe mensagem e adiciona a borda ao botão clicado
            res.innerHTML = `<p>Você clicou no <strong>${botao.textContent}</strong></p>`
            botao.style.border = '2px solid red'
        
            setTimeout(() =>{
                res.textContent = ''
                botao.style.border = 'none'
            },5000)
        })
    })
} else {
    console.error('Elementos não encontrados. Verifique o HTML.')
}