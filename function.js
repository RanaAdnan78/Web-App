let tasks = [
    { id: 1, title: "React seekho", priority: "high", done: false },
    { id: 2, title: "Node banao", priority: "medium", done: true },
    { id: 3, title: "MongoDB setup", priority: "low", done: false }
]

let Addtask = (title) => {
    console.log(`Task Added Successfully ${title}`)
}

let Sum = (a, b) => a + b
let Mul = (a, b) => a * b

let Greet = (name = "Harry") => {
    console.log(`Hi I Am ${name}`)
}

let AddTASK = (id, title, priority) => {
    let NewTask = {        
        id: id,
        title: title,
        priority: priority,
        done: false
    }
    tasks.push(NewTask)
    console.log(`Naya Task Aya Hai Bhao ${title}`)
}

let DelTask = (id) => {
    tasks = tasks.filter(task => task.id !== id)
    console.log(`🗑️ Task delete hua: ${id}`)
}

let comTask = (id) => {
    tasks.forEach(task => {
        if (task.id === id) {
            task.done = !task.done   
            console.log(`🔄 Task toggled: ${task.title} → ${task.done}`)
        }
    })
}

let showAll = () => {
    tasks.forEach(task => {
        let status = task.done ? "Complete" : "Pending"
        console.log(`Task ${task.title} is ${status} id ${task.id}`)
    })
}
let PendingTask = ()=>
{
    tasks.forEach(tas =>{
        let s = tas.done ? "Completed" :"Pending"
        if (s == "Pending")
        {
            console.log(`Task ${tas.title} Is ${s}`)
        }
})
}

Addtask("Django Nahi Sekh NI")
console.log(Sum(9, 5))
console.log(Mul(8, 67))
AddTASK(4, "CSS Grid", "low")
showAll()
comTask(1)
DelTask(2)
showAll()
PendingTask();