// default export (Exportação Padrão) - é a função padrão fornecida pelo módulo.
export default function sum(a, b) {
    return a + b
}


// named export - cada método é importado pelo seu próprio nome de exportação.
export function multiply(a, b) {
    return a * b
}

// Ou pode fazer a exportação no final
//export {multiply}