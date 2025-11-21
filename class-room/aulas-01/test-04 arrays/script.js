let form = document.querySelector("form")
let newTask = document.querySelector("input#task")
newTask.focus()

let list = document.querySelector("ul.list")
let joinBtn = document.querySelector("#joinButton")

function capitalize(title) {
    return title.charAt(0).toUpperCase()+title.slice(1).toLowerCase()
}

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (newTask.value.trim()) {
        // Separar input em um array.
        let separate = (newTask.value).split(",")

        // criando vários <li> do array do input
        for (let tasks of separate) {
            
            let newItem = document.createElement("li")
            newItem.classList.add("show-tasks")

            let taskName = document.createElement("p")
            taskName.classList.add("task-name")

            taskName.textContent = `${capitalize(tasks)}`

            let del = document.createElement("span")
            del.classList.add("delete")

            newItem.appendChild(taskName)
            newItem.appendChild(del)

            list.appendChild(newItem)
            list.classList.add("show-tasks")

            del.addEventListener("click", (event) => {
                event.stopPropagation()
                list.removeChild(newItem)
                newTask.focus()
            })

            newItem.addEventListener("click", (event) => {
                event.stopPropagation()
                newItem.classList.toggle("checked")
            })
        }

        joinBtn.addEventListener("click", (event) => {
            event.stopPropagation()
            // Juntar um array.
            let join = separate.join(" - ")

            let newItem = document.createElement("li")
            newItem.classList.add("show-tasks")

            let taskName = document.createElement("p")
            taskName.classList.add("task-name")

            let del = document.createElement("span")
            del.classList.add("delete")

            taskName.textContent = join

            newItem.append(taskName, del)
 
            list.appendChild(newItem)
            list.classList.add("show-tasks")

        })
        newTask.value = ""
    }   
})
