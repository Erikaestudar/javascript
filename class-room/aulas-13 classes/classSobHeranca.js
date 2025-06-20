class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    makeNoise() {
        console.log("Algum som genérico do animal.")
    }
}

// Subescrevendo a classe, você deve reescrever a função.
class Dog extends Animal {
    makeNoise() {
        console.log("Woof! Woof!")
    }
}

const dog = new Dog("Totó", "4")
console.log(dog.name,"tem", dog.age, "anos.")
dog.makeNoise()


class Cat extends Animal {
    makeNoise() {
        console.log("Miau...Miau...")
    }

    // Criar método pertencente a apenas uma determinada classe específica.
    run() {
        console.log("Correndo...")
    }
}

const cat = new Cat("Mel", "2")
console.log(cat.name, "tem", cat.age, "anos.")
cat.makeNoise()
cat.run()