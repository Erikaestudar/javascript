let taBtn = document.getElementById('tabtn')

taBtn.addEventListener('click', clicar) 

function clicar(){
    let num = document.getElementById('txtn')
    let btn = document.getElementById('btn')
    let tab = document.getElementById('txttab')

    if (num.value.length == 0) {
        window.alert('Comando inválido! Digite um número.')
    } else {
        let n = Number(num.value)
    }
}
