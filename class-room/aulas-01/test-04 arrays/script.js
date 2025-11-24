const form = document.querySelector("form")
const taskInput = document.querySelector("#task")
taskInput.focus()
const list = document.querySelector("ul.list")
const joinBtn = document.querySelector('button[type="button"]')

function capitalize(title) {
    return title.charAt(0).toUpperCase()+title.slice(1).toLowerCase()
}

function taskList(input) {
    const text = input.trim()
    if (!text) return

    const newItem = document.createElement("li")
    newItem.classList.add("show-tasks")

    const taskName = document.createElement("p")
    taskName.classList.add("task-name")
    taskName.textContent = capitalize(text)

    const del = document.createElement("span")
    del.classList.add("delete")

    newItem.append(taskName, del)
    list.append(newItem)
    list.classList.add("show-tasks")

    del.addEventListener("click", (event) => {
        event.stopPropagation()
        list.removeChild(newItem)
        taskInput.focus()
    })

    newItem.addEventListener("click", (event) => {
        event.stopPropagation()
        newItem.classList.toggle("checked")
    })
}


joinBtn.addEventListener("click", () => {
     const items = [...document.querySelectorAll(".task-name")].map(p => p.textContent)
    
    if (items.length === 0) {
        const value = taskInput.value.trim()

        if (!value) {
            alert("Nada para juntar.")
            taskInput.focus()
            return
        }

        alert("Não há lista de tarefas para juntar!")
    } else {
        const joined = items.join(" - ")
        list.innerHTML = ""
        taskList(joined)
    }
    taskInput.focus()
})

form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (!taskInput.value.trim()) {
        alert("Erro ao criar a lista de tarefas, favor digite corretamente.")
        taskInput.focus()
        return
    }

    if (taskInput.value.trim()) {
        let separate = (taskInput.value).split(",")

        for (let item of separate) {
             taskList(item.trim())
             taskInput.focus()
        }
    }
    taskInput.value = ""
})
