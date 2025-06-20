// Métodos são funções que você pode acessar dentro da classe.
class User {
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    sendEmail() {
        console.log("E-mail enviado para", this.name, "no endereço eletrônico", this.email)
    }
}

const user = new User("Erika", "erika@email.com")
user.sendEmail()