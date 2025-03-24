let playBtn = document.querySelector('#play')
let startBtn = document.querySelector('#start')
let res = document.querySelector('#res')

let modeLevel = document.querySelector('#mode-level')
let hintBtn = document.querySelector('#hint')
let tentativasRestantes = document.querySelector('#tentativasRestantes')
let mostrador = document.querySelector('#mostrador')
let body = document.querySelector('body')

// Variável global para guardar o número sorteado
let numberSecret = 0
let tentativas = 0
const maxTentativas = 5
let hardMode = false

startBtn.addEventListener('click', start)
playBtn.addEventListener('click', player)
modeLevel.addEventListener('click', mode)
hintBtn.addEventListener('click', pedirDica)

gerarNumero()

window.onload = () => {
    hintBtn.disabled = !hardMode  // Só ativa no hard mode
}

function gerarNumero() {
    numberSecret = Math.floor(Math.random() * 100) + 1
}

function start() {
    gerarNumero()  // Gera um novo número toda vez que o jogo começar
    res.innerHTML = '' // Limpa o resultado anterior
    tentativas = 0  // Zera tentativas
    tentativasRestantes.textContent = maxTentativas  // Reseta o contador
    alert('Jogo iniciado! Tente adivinhar o número entre 1 e 100.')
    playBtn.disabled = false 
    hintBtn.disabled = !hardMode  // Só ativa dica no modo difícil
}

function player(){

    let playNumber = prompt(`Qual é seu palpite?`).trim()

    if (playNumber === "" || isNaN(Number(playNumber))) {
        alert('[ERRO] Digite um número válido!')
        return
    } 
    
    let playedNum = Number(playNumber)
    tentativas++

    if (hardMode) {
        tentativasRestantes.textContent = maxTentativas - tentativas
    }

        // Compara o palpite com o número secreto
        if (playedNum < numberSecret) {
            res.innerHTML += `<p>Você falou ${playedNum}. Meu número é <strong>MAIOR</strong></p>`
        
        } else if (playedNum > numberSecret) {
            res.innerHTML += `<p>Você falou ${playedNum}. Meu número é <strong>MENOR</strong></p>`
        
        } else {
            res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o número ${numberSecret}!</p>`
            playBtn.disabled = true
            hintBtn.disabled = !hardMode
            return
        }

        // Checa se acabou as tentativas no modo difícil
        if (hardMode && tentativas >= maxTentativas) {
            res.innerHTML += `<p>Você perdeu! O número secreto era <strong>${numberSecret}</strong>.</p>`
            playBtn.disabled = true
            hintBtn.disabled = true
        }
}

function mode() {
    body.className = 'hard'

    // Pega a div que envolve os botões e aplica a classe 'hard'
    let container = document.querySelector('div.easy')
    container.classList.add('hard')

    hintBtn.disabled = false  // Ativa a dica quando entra no modo hard
    hardMode = true
    mostrador.hidden = false  // Mostra o contador
    alert('Modo Difícil ativado! Você tem apenas 5 tentativas. 💀')
}

function pedirDica() {
    if (numberSecret <= 50) {
        alert('Dica: O número está entre 1 e 50.')
    } else {
        alert('Dica: O número está entre 51 e 100.')
    }
    hintBtn.disabled = true  // Só pode pedir dica uma vez!
}