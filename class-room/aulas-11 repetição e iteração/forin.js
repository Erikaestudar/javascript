// for...in executa iterações a partir de um objeto e percorre as propriedades.

let person = {
    name: "Erika ",
    surname: "Sugawara",
    email: "erika@email.com"
}

let steps = 1

for (let property in person) {
    console.log(steps)
    // Exibe o nome da propriedade.
    console.log(property)

    // Exibe o conteúdo da propriedade.
    console.log(person[property])

    steps++
}

let students = ["Erika", "Edson", "Elena"]

for (let index in students) {
    console.log(students[index])
}