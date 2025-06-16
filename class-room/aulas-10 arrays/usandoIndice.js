let fruits = [
    "Apple",
    "Watermelon",
    "Lemon",
    "Strawberry"  
]

// Usa o método indeOf() para passar o elemento(Lemon), ele irá encontrar e retornar o índice (posição) do elemento no Array.
let position = fruits.indexOf("Lemon")
console.log(position)


/* 
    O splice usa dois parâmentros. 
    - O primeiro parâmetro é o início, o start a partir de qual ponto ele tem que começar a remover.
    - O segundo parâmetro e quantos itens vai ser removidos.
*/
//fruits.splice(1,2)
console.log(fruits)

// Remove um item pela posição do índice (e o 1 é o número de itens para remover).
fruits.splice(position, 1)
console.log(fruits)

