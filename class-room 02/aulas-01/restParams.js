// Rest params (...) permite representar um número indefinido de argumentos como um array.

// O nome do operador é rest, mas pode usar o args.
function values (a, ...rest) {
    console.log("Valor de a é", a)

    // Mostra a quantidade de parâmetros.
    console.log(rest.length) 

    // Mostra os números espalhados Spread Operator
    console.log(...rest) 
    
    // Exibe o conteúdo do rest que é um array.
    console.log(args)

}

values(2, 1, 3, 4)

// args é muito comum encontrar em algumas aplicações.
function values (a, ...args) {
    console.log("Valor de a é", a)
    console.log(...args) // Mostra os números espalhados Spread Operator
    console.log(args.length) // Mostra como um array.
}

values(20, 11, 33, 44)

