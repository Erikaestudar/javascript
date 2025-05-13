// escopo global
var name = "Erika"

{   
    // escopo de bloco
    console.log(name)
}

// HOISTING - IÇAR
{
    var age = 18
}
console.log(age)


// Com o let não é possível içar
let address = "Rua X"
{
    address = "Rua Y"
    console.log(address)
}