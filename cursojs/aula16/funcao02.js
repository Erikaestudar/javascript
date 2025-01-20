//Se um dos valores for indefinido, o resultado será NaN.
function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(2))


// Usando Parâmetros pré-definido irá resolver esse problema
function sub(n3=0, n4=0) {
    return n3 - n4
}
console.log(sub(10, 7))