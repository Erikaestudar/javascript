let button = document.querySelector('input#button')
let res = document.querySelector('div#res')

let aS = document.getElementById('aSide') 
let bS = document.getElementById('bSide')
let cS = document.getElementById('cSide')

button.addEventListener('click', clicar)

function clicar() {        
    // Precisa estar como string para verificar se está vazia.
    if (aS.value === "" || bS.value === "" || cS.value === "") {
       alert('[Erro] Preencha todos os campos!') 

    } else {
        // Convertendo para número depois de validar
        a = Number(aS.value)
        b = Number(bS.value)
        c = Number(cS.value)

        if (isNaN(a) || a == 0) {
            alert('[Erro] Digite um valor válido no campo a!')
            aS.value = ""
            aS.focus()
        } else if (isNaN(b)){
            alert('[Erro] Digite um valor válido no campo b!')
            bS.value = ""
            bS.focus()
        } else if (isNaN(c)){
            alert('[Erro] Digite um valor válido no campo c!')
            cS.value = ""
            cS.focus()
        } else {
            disBlockBtn()
            alert('ok')
        }
    }
}

function marcarErro() {
    button.style.backgroundColor = 'red'
    button.style.border = '3px solid red'
    blockBtn()
}

function blockBtn() {
    button.disable = 'true'
}

function disBlockBtn() {
    button.style.backgroundColor = ''
    button.style.border = ''
    button.disable = 'false'
}