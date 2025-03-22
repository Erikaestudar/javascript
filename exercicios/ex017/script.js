let randomBtn = document.querySelector('#gerar')
let cleanBtn = document.querySelector('#limpar')
let res = document.querySelector('#res')

randomBtn.addEventListener('click', gerar)
cleanBtn.addEventListener('click', limpar)

function gerar(e){
    e.preventDefault(); // Prevent form submission if the button is inside a form

    let number = Math.floor(Math.random() * 100) + 1

    res.innerHTML += `<p>Acabei de pensar no número <mark>${number}</mark>.</p>`
    
}

function limpar() {
    res.innerHTML = ""
}