let date = new Date("2025-06-05T21:50:10")

console.log(date.toLocaleString())

console.log(date.toLocaleString("en"))

// Exibe a data e hora em styles diferentes.
console.log(date.toLocaleString("pt-BR", {
    dateStyle: "short",
}))

console.log(date.toLocaleString("pt-BR", {
    dateStyle: "long",
}))

console.log(date.toLocaleString("en", {
    dateStyle: "medium",
}))

console.log(date.toLocaleString("en", {
    dateStyle: "full",
}))

console.log(date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: 'long',
    year: 'numeric',
    hour: "2-digit",
    minute: "2-digit"
}))

let amount = 12.5
console.log(amount.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
}))