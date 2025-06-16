// for...of itera sobre valores de um objeto iterável (objeto que pode ser percorrido).
// No for..in ele percorre a propriedades.
// for...of ele  percorre e itera em cima dos valores.

let students = ["Erika", "Edson", "Elena"]

for (let student of students) {
    console.log(student)
}

let user = [
    {
        name: "Erika",
        email: "erika@email.com"
    }
]

for ( let value of user) {
    console.log(value)
}