let user = {
    id: 1,
    name: "Rana Adnan",
    university: {
        name: "UET Lahore",
        campus: "FSD",
        semester: 2
    },
    skills: ["HTML", "CSS", "JS"],
    getInfo() {
        return `${this.name} — ${this.university.campus} Campus`
    }
}

   let { name,university: {semester,campus}} = user
   console.log(name)
   console.log(campus)
   let copy = {...user}
   user.name = "M.Ali"
   user.university.campus= "Main Campus"

   Object.entries(user).forEach(([Key,value]) =>
   {
           console.log(`Key ${Key} Values ${value}`)
   })

   let taskManager = {
    tasks: [
        { id: 1, title: "React seekho", priority: "high", done: false },
        { id: 2, title: "Node banao", priority: "medium", done: true },
        { id: 3, title: "MongoDB", priority: "low", done: false }
    ],
    addTask(id,title,priority){
        let add = {id ,title,priority,done:false}
        this.tasks.push(add)
        console.log(`✅ Added: ${title}`)
    },
    DelTask(id){
        this.tasks =this.tasks.filter(t => t.id !== id)
        console.log(`🗑️ Deleted: ${id}`)
    },
   showAll() {
        this.tasks.forEach(({ title, done, priority }) => {
            let status = done ? "✅" : "⏳"
            console.log(`${status} ${title} [${priority}]`)
        })
},
    stats()
    {
        let {length:total} = this.tasks
        let comp = this.tasks.forEach(t => t.done).length
        let pending = total - comp 
        return {total,comp,pending}
    }
}
taskManager.showAll()
taskManager.addTask(4, "CSS Grid", "low")
taskManager.DelTask(2)
taskManager.showAll()
console.log(taskManager.stats())
