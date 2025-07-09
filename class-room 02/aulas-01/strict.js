// O strict mode (modo estrito): ativando esse modo, os erros que eram silenciosos passa a gerar exceções no Javascript. Para ativar usa um scopo global ou dentro de em scopo de função.

/*
    // Desse modo esta utilizando o hosting.

    function showMessage() {
        personName = "Erika"
        console.log("Hello,", personName)
    }

    showMessage()
*/

    "use strict"

    function showMessage() {
        // "use strict"

        let personName = "Erika"
        console.log("Hello,", personName)
    }

    showMessage()
    

    class Student {
        // Função get é para obter um retorno.
        get point() {
            return 7
        }
    }

    let student = new Student()
    // Tenta mudar uma propriedade somente leitura.
    //student.point = 10
    console.log(student.point)


    // Tentar deletar uma propriedade de um objeto que não posso deletar.
    //delete window.document


    // Quando passamos parâmetros duplicados.
    /*
    function sum(a, a, c) {
        return a + a + c
    }

    const result = sum(1, 3, 2) // Sem o uso estrito ele sobrepõe, resultando em 3 + 3 + 2 = 8
    console.log("RESULTADO:", result)
    */