/*
    CLASSES são uma forma de criar objetos e definir seu comportamento por meio de construtores e métodos. Foram introduzidas no ECMAScript 2015 para fornecer uma sintaxe mais amigável para a criação de objetos e herança de protótipos (syntax sugar).

    CONSTRUTOR é um método especial chamado quando um objeto é instanciado a partir da classe. Além do construtor, você pode adicionat métodos a uma classe.

    MÉTODOS são funções associadas a objetos e descrevem o comportamento desses objetos.
*/

// Pascal Case MyClass
class Person {
    constructor() {
        console.log("Classe instanciada...")
    }
}

const person = new Person()


class Message{
    constructor(name) {
        console.log("Hello, name")
    }
}

const message = new Message("Erika")