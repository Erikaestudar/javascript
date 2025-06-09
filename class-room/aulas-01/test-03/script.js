let form = document.querySelector("form")
let newTask = document.querySelector("input#task")
newTask.focus()

let listWrapper = document.querySelector(".list-wrapper")

let list = document.querySelector("ul.list")


function capitalize(title) {
    return title.charAt(0).toUpperCase()+title.slice(1).toLowerCase() 
}



form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (newTask.value.trim()) {
        let capTask = capitalize(newTask.value)

        
        // Elementos do título.
        let titleContainer = document.createElement("div")
        titleContainer.classList.add("show-tasks")

        let titleTask = document.createElement("h1")
        titleTask.classList.add("title-task")
        
        titleTask.textContent =` ${capTask}`

        let plusTask = document.createElement("span")
        plusTask.classList.add("plus-task")       
        

        // Criando os elementos da lista <li>.
        
        let newItem = document.createElement("li")
        newItem.classList.add("show-tasks")

        let checkbox = document.createElement("span")
        checkbox.classList.add("checkbox")

        let taskName = document.createElement("p")
        taskName.classList.add("task-name")

        let editTask = document.createElement("span")
        editTask.classList.add("edit-task")

        let del = document.createElement("span")
        del.classList.add("delete")

        // Juntando tudo na <li>.
        newItem.appendChild(checkbox)
        newItem.appendChild(taskName)
        newItem.appendChild(editTask)
        newItem.appendChild(del)

        list.appendChild(newItem)
        list.classList.add("show-tasks")

        for (let i = 1; i <= 5; i++) {
            
        }

        titleContainer.appendChild(titleTask)
        titleContainer.appendChild(plusTask)
        titleContainer.appendChild(list)

        listWrapper.appendChild(titleContainer)
        listWrapper.classList.add("show.tasks")

        
        del.addEventListener("click", (event) => {
            event.stopPropagation()
            list.removeChild(newItem)
        })


       newItem.addEventListener("click", (event) => {
            event.stopPropagation()
            newItem.classList.toggle("checked")
        })
        /*

        */
        newTask.value = ""

    } else {
        alert(`[ERRO] Por favor, escreva uma nova tarefa!`)
    }  
})





