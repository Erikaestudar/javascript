let button = document.querySelector('#button')
let res = document.querySelector('#res')

button.addEventListener('click', calcular)

const capitalize = (name) => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase()

function calcular() {
    let name = prompt('Qual é o nome do aluno?').trim()
    name = capitalize(name)

    if (name === "" || !isNaN(Number(name))) {
        alert('[ERRO] Valor inválido. Digite o nome do aluno!')

    } else {

        let nota1 = prompt(`Qual foi a primeira nota de ${name}?`)

        if (nota1 === "" || isNaN(Number(nota1))) {
            alert('[ERRO] Valor inválido. Digite um número válido!')
        
        } else {

        let nota2 = prompt(`Além de ${nota1}, qual foi a outra de ${name}?`)

            if (nota2 === "" || isNaN(Number(nota2))) {
            alert('[ERRO] Valor inválido. Digite um número válido!')
        
            } else {

            let n1 = Number(nota1)
            let n2 = Number(nota2)
            let med = (n1 + n2) / 2
            
            let msg // cria uma variável e deixa ela vazia
            if (med >= 6) {
                msg = `<strong style="color: green;">Meus parabéns!</strong>`
            } else {
                msg = `<strong style="color: red;">Estude um pouco mais!</strong>`
            }

            res.innerHTML = `
            <p>Calculando a média final de ${name}.</p>
            <p>As notas obtidas foram ${n1} e ${n2}.</p>
            <p>A média final será <strong>${med}</strong>.</p>
            <p>A mensagem que temos é: ${msg}</p>`
            }
        } 
    }
}