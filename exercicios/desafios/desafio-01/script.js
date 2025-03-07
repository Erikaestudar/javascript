let nam = document.querySelector('#fname')
let end = document.querySelector('#fend')
let enviarBtn = document.querySelector('#enviarBtn')
let limparBtn = document.querySelector('#limparBtn')
let res = document.querySelector('#res')

nam.focus()

enviarBtn.addEventListener('click', enviar)
limparBtn.addEventListener('click', limpar)

function enviar() {

    let n = nam.value.trim()
    let e = end.value.trim()
    
    if (n == "" || e == "") {
        alert('[ERRO] Preencha todos os campos!')
        return
    } 

    if (/\d/.test(n)) {
        alert('Nome não pode conter números!')
        return
    }

    let words = n.split(" ") // Precisa do espaço para dividir o nome em palavras, não em letras.
    let preposition = ['da','de','di','do','das','dos','e',"d'"]

    let nameFormated = words.map(function(word) {
        if (preposition.includes(word.toLowerCase())) {
            return word.toLowerCase() // Mantém preposições minúsculas
        } else {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        }
    }).join(" ") // Precisa do espaço para deixar espaços entre as palavras.

    res.innerHTML += `<p>Nome: ${nameFormated}</p>`
    res.innerHTML += `<p>Endereço: ${e}</p>`

    nam.value = ""
    end.value = ""
    nam.focus()
}

function limpar() {
    res.innerHTML = ""
    nam.focus()
}