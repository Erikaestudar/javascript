let button = document.querySelector('input#buttonBlock')
let res = document.querySelector('div#res')

let aS = document.getElementById('aSide')
let bS = document.getElementById('bSide')
let cS = document.getElementById('cSide')

// Função para validar os inputs
function validarInputs() {
        // Verifica se os campos estão vazios como string, para validar como número 
        if (aS.value === "" || bS.value === "" || cS.value === "") {
            button.style.border = '3px solid red'
            button.disabled = true
            button.setAttribute('id', 'buttonBlock')
            aS.focus()
        } else {
            button.style.border = ""
            button.disabled = false
            button.setAttribute('id', 'button')
            button.focus()
        }
}

// Adiciona event listeners para validar os inputs ao digitar
aS.addEventListener('input', validarInputs)
bS.addEventListener('input', validarInputs)
cS.addEventListener('input', validarInputs)

// Adiciona event listener para o clique no botão
button.addEventListener('click', clicar)

function clicar() {
    // Convertendo para número depois de validar
    a = Number(aS.value) 
    b = Number(bS.value)
    c = Number(cS.value)

    if (isNaN(a) || a == 0) {
        alert('[Erro] Digite um valor válido no campo a!')
        aS.value = ""
        aS.focus()
    } else if (isNaN(b)) {
        alert('[Erro] Digite um valor válido no campo b!')
        bS.value = ""
        bS.focus()
    } else if (isNaN(c)) {
        alert('[Erro] Digite um valor válido no campo c!')
        cS.value = ""
        cS.focus()
    } else {
        res.innerHTML = `
        <h1> Resolvendo Bhaskara</h1>
        <p>A equação atual é ${a}x\u{00B2} + ${b}x + ${c} = 0</p>
        <p><img id="triS" src="imagens/triangleS.png" alt="triangle"> = b\u{00B2} - 4 * a * c</p>
        <p>O cálculo realizado será <img id="triS" src="imagens/triangleS.png" alt="triangle"> = ${b}\u{00B2} - 4 * ${a} * ${c}</p>
        <p>O valor calculado foi <img id="triS" src="imagens/triangleS.png" alt="triangle"> = <strong>${((b * b) - 4 * a * c).toLocaleString('pt-Br')}</strong></p>
        `
        limpar()
        validarInputs()
    }
}

// Validação inicial
validarInputs()

function limpar() {
    aS.value = ""
    bS.value = ""
    cS.value = ""
    aS.focus()
}