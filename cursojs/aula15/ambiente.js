let num = [5, 8, 2, 9, 3]

num.sort() //organiza em ordem crescente, ele é um método interno de todo elemento que é um vetor.

num.push(1) //vai adicionar um elemento de valor 1 no final.

console.log(`Nosso vetor é o ${num}`)

// length no JavaScript é um atributo que conta quantos elementos tem nos vetores
console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)//vai procurar no vetor onde está o valor 8.
if (pos == -1) {
    console.log(`O valor não foi encontrado!`)
} else {
    console.log(`O valor está na posição ${pos}`)
}