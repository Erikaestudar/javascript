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
            alert('[Erro] Digite um valor válido nos campos!')
            aS.value = ""
            aS.focus()
        } else if (isNaN(b) || b == 0){
            alert('[Erro] Digite um valor válido nos campos!')
            bS.value = ""
            bS.focus()
        } else if (isNaN(c) || c == 0){
            alert('[Erro] Digite um valor válido nos campos!')
            cS.value = ""
            cS.focus()
        } else {
            alert('ok')
        }
    }
}