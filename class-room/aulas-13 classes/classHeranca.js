// Herança com classes
class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    makeNoise() {
        console.log("Algum som genérico do animal.")
    }
}

// extends vai herdar todas as características, métodos e propriedades de uma classe.
class Dog extends Animal{
    // Vazio
}

const dog = new Dog("Totó", "4")
console.log(dog.name,"tem", dog.age, "anos.")
dog.makeNoise()


class Cat extends Animal{
}

const cat = new Cat("Lito", "2")
console.log("tem", cat.age, "anos.")
cat.makeNoise()