// Importação seletiva.
import {sum, multiply} from "./calc.js"

console.log("4 + 6 =", sum(4, 6))
console.log("4 * 6 =", multiply(4, 6))


// Impotando todas as funções.
import * as math from "./allImport.js"

console.log("24 / 6 =", math.division(24, 6))
console.log("24 - 6 =", math.subtraction (24, 6))