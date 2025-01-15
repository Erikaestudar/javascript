let taBtn = document.getElementById('tabtn')

taBtn.addEventListener('click', clicar) 

function clicar(){
    let num = document.getElementById('txtn')
  
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Comando inválido! Digite um número.')
    } else {
        let n = Number(num.value)

        tab.innerHTML = ''
    
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement('option')
            item.text += `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }  
    }
    num.value = '' 
}
