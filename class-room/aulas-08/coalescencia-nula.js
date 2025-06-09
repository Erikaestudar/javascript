/* 
    OPERADOR DE COALESCÊNCIA NULA (??) 
    Operador lógico que retorna o seu operando do lado direito quando o seu operador do lado esquerdo é null ou undefined. Caso contrário, ele retorna o seu operando do lado esquerdo.
*/

let content01 = null
console.log(content01 ?? "Conteúdo padrão")

let content02 = undefined
console.log(content02 ?? "Conteúdo padrão exemplo 02")

let content03 = "Hi"
console.log(content03 ?? "Conteúdo padrão 02")

// Cuidado! ele acha que false and true, ou objeto vazio são conteúdos
let content04 = false
console.log(content04 ?? "Conteúdo padrão 02")

let content05 = {}
console.log(content05 ?? "Conteúdo padrão 02")


const user = {
    name: "Erika",
    avatar: undefined
}

console.log(user.avatar ?? "default.png")