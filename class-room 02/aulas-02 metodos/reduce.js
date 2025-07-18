/* 
    O método reduce é utilizado para reduzir um array a um único valor.

    Parâmetros:
    - Array original (values)
    - Acumulador (accumulator)
    - Valor da iteração (currentValue)
    - Valor Inicial (0)
    - Index (index da iteração atual - opcional)
*/

const values = [1, 2, 3, 4, 5]

const sum = values.reduce((accumulator, currentValue, index) => {
    console.log("ACUMULADOR", accumulator)
    console.log("CURRENT VALUE", currentValue)
    console.log("INDEX", index)

    console.log("SOMA", accumulator + currentValue)
    console.log(" ")

    return accumulator + currentValue
}, 0) // Valor inicial 

console.log("RESULTADO DA SOMA FINAL:", sum)