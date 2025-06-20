class User {
    static showMessage() {
        console.log("Digite seu nome.")
    }
}

/*
const user = new User()
user.showMessage()
*/
// static - Acessa o método sem precisar instanciar a classe, mas ele só funciona se não tiver um construtor.
User.showMessage()

class Message {
    static showMessage(message) {
        console.log(message)
    }
}

Message.showMessage("Essa é uma mensagem")