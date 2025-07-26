// Com a exportação padrão não é necessário o uso de chaves.
import sum, {multiply as mult} from "./calc.js" 


// Importação nomeada.
//import {multiply} from "./calc.js"

console.log("4 + 6 =", sum(4, 6))

// Renomeando na Importação, coloca a função e adiciona "as" e o novo nome.
console.log("5 * 5 =", mult(5, 5))


// Importando todas as funções.
import * as math from "./allImport.js"

console.log("24 / 6 =", math.division(24, 6))

// Importando pela renomeação.
console.log("24 - 6 =", math.subtractionTwoNumbers(24, 6))



// Importando classe.
import {Calc} from "./class.js"

// Instanciar.
const calc = new Calc()

console.log(calc.name)
console.log("10 + 20 =", calc.sum(10, 20))
console.log("10 * 20 =", calc.multiply(10, 20))
console.log("10 / 10 =", calc.division(10, 10))