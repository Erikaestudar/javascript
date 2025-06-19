let date  = new Date("2025-06-20T21:15:30")

// Exibe a data e hora no formato local.
console.log(date.toLocaleDateString())
console.log(date.toLocaleTimeString())

// Exibe a data e hora no formato escolhido.
console.log(date.toLocaleDateString("en"))
console.log(date.toLocaleTimeString("en"))

console.log(date.toLocaleDateString("ja-JP", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}))

console.log(date.toLocaleDateString("ja-JP"))