let taBtn = document.getElementById('tabtn')

taBtn.addEventListener('click', clicar) 

function clicar(){
    let num = document.getElementById('txtn')
    let btn = document.getElementById('btn')
    let tab = document.getElementById('txttab')
    let text = document.getElementById('text')
    let c = 1

    if (num.value.length == 0) {
        window.alert('Comando inválido! Digite um número.')
    } else {
        let n = Number(num.value)
        text.innerHTML = `Tabuada do <strong>${n}</strong>: </br></br>`
    
        for (let c = 0; c <= 10; c++) {
            let res = n * c
            text.innerHTML += `${n} x ${c} = <strong>${res}</strong></br>`
        }  
    }
    num.value = '' 
}
