// Métodos para trabalhar com Date.

let date = new Date("2025-06-18T20:35:22")
console.log(date)

/*
    Dia da semana de 0 à 6
    0 - Domingo
    1 - Segunda
    2 - Terça
    3 - Quarta
    4 - Quinta
    5 - Sexta
    6 - Sábado
*/
console.log(date.getDay())

// Data do mês (0 à 30)
console.log(date.getDate())

// Mês (0 à 11)
console.log(date.getMonth() + 1)

// Ano
console.log(date.getFullYear())

// Horas 
console.log(date.getHours())

// Minutos 
console.log(date.getMinutes())

// Segundos
console.log(date.getSeconds())
