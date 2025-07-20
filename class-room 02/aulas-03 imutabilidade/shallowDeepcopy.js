// Shallow Copy (cópia surperficial): não pega os itens aninhados.

const htmlCourse = {
    course: "HTML",
    students: [{name: "Erika", email: "erika@email.com"}],
}

/*
const jsCourse = {
    ...htmlCourse,
    course: "Javascript",
}
*/

// Vai modificar o htmlCourse também, porque students é uma referência e não uma cópia.
//jsCourse.students.push({ name: "Edson", email: "edson@email.com"})


// Deep Copy (cópia profunda)
/*
const jsCourse = {
    ...htmlCourse,
    course: "Javascript",
    students: [...htmlCourse.students, {name: "Edson", email: "edson@email.com"}]
}

// Ou fazer assim para adicionar novos dados.
jsCourse.students.push({ name: "Ana", email: "ana@email.com"})
*/

const jsCourse = {
    ...htmlCourse,
    course: "Javascript",
}

jsCourse.students = [
    ...htmlCourse.students,
    { name: "Elena", email: "elena@email.com"}
]

console.log(htmlCourse, jsCourse)