let button = document.querySelector('#button')
let res = document.querySelector('#res')

button.addEventListener('click', info)

function info() {
    let now = new Date()

    // Arrays para dias e meses
    const days = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    let dayName = days[now.getDay()]
    let monthName = months[now.getMonth()]
    let year = now.getFullYear()
    let day = now.getDate()

    // Formatando horas, minutos e segundos com dois dígitos
    let hour = String(now.getHours()).padStart(2, '0')
    let minute = String(now.getMinutes()).padStart(2, '0')
    let seconds = String(now.getSeconds()).padStart(2, '0')

    // Calculando GMT
    let gmtOffset = -now.getTimezoneOffset() / 60
    let gmt = `GMT${gmtOffset >= 0 ? '+' : ''}${gmtOffset}`

    // Exibindo o resultado
    res.innerHTML = `
        <p>O que eu recebi do sistema foi:</p>
        <p id="style">
        ${dayName}, ${day} de ${monthName} de ${year} <br>
        São ${hour}:${minute}:${seconds} ${gmt} (Horário Padrão de Brasília)</p>
    `
}


/*
function info() {

    let now = new Date()
    
    let week = now.getDay()
    let year = now.getFullYear()
    let month = now.getMonth()
    let day = now.getDate()

    let hour = now.getHours()
    let minute = now.getMinutes()
    let seconds = now.getSeconds()
    let gmt = now.getUTCHours()

    let dayName = ''
    let monthName = ''

    switch(week) {
        case 0:
            dayName += 'Domingo'
            break
        
        case 1:
            dayName += 'Segunda-Feira'
            break
    
        case 2:
            dayName += 'Terça-Feira'
            break
    
        case 3:
            dayName += 'Quarta-Feira'
            break
    
        case 4:
            dayName += 'Quinta-Feira'
            break
    
        case 5:
            dayName += 'Sexta-Feira'
            break
    
        case 6:
            dayName += 'Sábado'
            break
    }

    switch(month) {
        case 0:
            monthName += 'Janeiro'
            break
        
        case 1:
            monthName += 'Fevereiro'
            break
    
        case 2:
            monthName += 'Março'
            break
    
        case 3:
            monthName += 'Abril'
            break
    
        case 4:
            monthName += 'Maio'
            break
    
        case 5:
            monthName += 'Junho'
            break
    
        case 6:
            monthName += 'Julho'
            break

        case 7:
            monthName += 'Agosto'
            break

        case 8:
            monthName += 'Setembro'
            break

        case 9:
            monthName += 'Outubro'
            break

        case 10:
            monthName += 'Novembro'
            break

        case 11:
            monthName += 'Dezembro'
            break
    }
        res.innerHTML = `
        <p>O que eu recebi do sistema foi: <br>
            ${dayName}, ${year} ${monthName} ${day} <br>
            são ${hour}:${minute}:${seconds} ${gmt} </p>
        `
}

*/

