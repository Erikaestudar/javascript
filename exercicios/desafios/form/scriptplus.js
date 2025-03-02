let nam = document.querySelector('#fname')
let end = document.querySelector('#fend')
let enviarBtn = document.querySelector('#enviarBtn')
let limparBtn = document.querySelector('#limparBtn')
let res = document.querySelector('#res')
let main = document.querySelector('main')

nam.focus()

enviarBtn.addEventListener('click', enviar)
limparBtn.addEventListener('click', limpar)

function enviar() {

    let n = nam.value.trim()
    let e = end.value.trim()
    
    if (n.toLowerCase() === "cpf na nota") {
        modoHacker(n) // Chama o Hacker Mode
        return
    }

    if (n == "" || e == "") {
        alert('[ERRO] Preencha todos os campos!')
        return
    } 

    if (/\d/.test(n)) {
        alert('Nome não pode conter números!')
        return
    }

    // /[a-zA-Z]/.test(e) Verifica se tem pelo menos uma letra
    // 	/\d/.test(e) Verifica se tem pelo menos um número

    if (!/[a-zA-Z]/.test(e) || !/\d/.test(e)) {
        alert('[ERRO] O endereço deve conter letras e números!')
        end.focus()
        return
    }

    let preposition = ['da','de','di','do','das','dos','e',"d'"]
    let nameFormated = capitalizeWords(n, preposition)
    let endFormated = capitalizeWords(e, preposition)
    let texto = `<p>Nome: ${nameFormated}</p><p>Endereço: ${endFormated}</p>`
   
    res.innerHTML = ""
    hackerAnonymous(texto, false) // false = NÃO MOSTRAR O CORINGA

    main.classList.add('hacker-mode') // Ativa o modo Hacker depois do Enviar

    nam.value = ""
    end.value = ""
    nam.focus()
}

function modoHacker(nome) {
    let texto = `
        <p>Bem-vindo(a), \u{1F0CF}</p>
        <p>CPF enviado para Receita Federal!</p>
        <p>Seu nome está na lista da Deep Web!</p>
    `
    res.innerHTML = ""
    hackerAnonymous(texto, true) // true = MOSTRAR O CORINGA
    main.classList.add('hacker-mode')
}


function capitalizeWords(text, preposition) {
    let words = text.split(" ")
    return words.map(function (word) {
        if (preposition.includes(word.toLowerCase())) {
            return word.toLowerCase()
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }
    }).join(" ")
}

function limpar() {
    res.innerHTML = ""
    nam.value = ""
    end.value = ""
    nam.focus()
    main.classList.remove('hacker-mode')
    limparBtn.style.border = "none"
    document.querySelector('body').style.backgroundColor = 'hsl(212, 66%, 64%)'

    let img = document.querySelector('#joker')
    if (img) {
        img.remove()
    }
}

function hackerAnonymous(texto, hackerMode) {
    let i = 0
    let speed = 50 // Velocidade de digitação (quanto menor, mais rápido)
    let resultado = ""

    function write() {
        resultado += texto.charAt(i)
        res.innerHTML = resultado
        i++   

        if (i < texto.length) {
            setTimeout(write, speed)

        } else if (hackerMode) {
            setTimeout(() => {
                let img = document.createElement('img')
                img.setAttribute('id', 'joker')
                img.setAttribute('src', 'jokerp.png')
                img.style.width = "100%"
                res.appendChild(img)
                document.querySelector('body').style.backgroundColor = 'black'
            },1000 )

            setTimeout(() => { 
                nam.value = "HAHAAHAAHAHAAHAAHAHAAHAAHAHAAHAAHAHAAHA"
                end.value = "HAHAAHAHAAHAHAAHAAHAHAAHAHAHAAHAHAHAHAHA"  
                limparBtn.focus()
                limparBtn.style.border = "2px solid red"
            },1000 )
        }
    }
    write()
}
