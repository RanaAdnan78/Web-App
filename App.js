let tasks = [
    { id: 1, title: "React Sekho", priority: "low", done: true },
    { id: 2, title: "Chup Kro Sekho", priority: "low", done: true },
    { id: 3, title: "Html Sekho", priority: "high", done: false }
]

let tasklist = document.querySelector(".task-list")
let taskInput = document.querySelector("#text-input")
let btnAdd = document.querySelector("#btn-add")
let stat = document.querySelector(".stat")

let renderTask = () => {
    tasklist.innerHTML = ""
    tasks.forEach(task => {
        let card = document.createElement("article")
        card.classList.add("task-card")
        if (task.done) card.classList.add("completed")

        card.innerHTML = `
            <div class="card-left">
                <h3>${task.title}</h3>
            </div>
            <div class="card-right">
                <span class="${task.priority}">${task.priority}</span>
                <button class="btn-done" onclick="toggleTask(${task.id})">
                    ${task.done ? "Undo" : "Done"}
                </button>
                <button class="btn-delete" onclick="deleteTask(${task.id})">
                    Delete
                </button>
            </div>`

        tasklist.appendChild(card)
    })
    updateStats()
}

let updateStats = () => {
    let total = tasks.length
    let completed = tasks.filter(t => t.done).length
    let pending = total - completed
    stat.textContent = `Total: ${total} | Completed: ${completed} | Pending: ${pending}`
}

let addTask = () => {
    let title = taskInput.value.trim()
    if (title === "") return
    let newTask = {
        id: Date.now(),
        title: title,
        priority: "medium",
        done: false
    }
    tasks.push(newTask)
    taskInput.value = ""
    renderTask()
}

let deleteTask = (id) => {
    tasks = tasks.filter(t => t.id !== id)
    renderTask()
}

let toggleTask = (id) => {
    tasks = tasks.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
    )
    renderTask()
}

btnAdd.onclick = addTask
renderTask()