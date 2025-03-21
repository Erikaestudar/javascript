let button = document.getElementById('button')
let res = document.getElementById('res')

button.addEventListener('click', analisar)

function analisar() {
    let now = new Date()

    const days = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado']
    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

    let day = now.getDate()
    let month = months[now.getMonth()]
    let year = now.getFullYear()
    let dayWeek = days[now.getDay()]
    
    let hour = String(now.getHours()).padStart(2, '0')
    let minutes = String(now.getMinutes()).padStart(2, '0')
    let seconds = String(now.getSeconds()).padStart(2, '0')


    res.innerHTML = `
    <p id="left-style">Dia: <mark>${day}</mark> <br>
    Mês: <mark>${month}</mark> <br>
    Ano: <mark>${year}</mark> <br>
    Dia da semana: <mark>${dayWeek}</mark> <br>
    Hora: <mark>${hour}</mark> <br>
    Minutos: <mark>${minutes}</mark> <br>
    Segundos: <mark>${seconds}</mark></p>`
}