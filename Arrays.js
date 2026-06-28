let tasks = [
    { id: 1, title: "React seekho", priority: "high", done: false },
    { id: 2, title: "Node banao", priority: "medium", done: true },
    { id: 3, title: "MongoDB setup", priority: "low", done: false },
    { id: 4, title: "CSS Grid", priority: "high", done: true },
    { id: 5, title: "Express API", priority: "medium", done: false }
]

let titles = tasks.map(t  => t.title)
console.log("Title is", titles)

let found = tasks.find(t => t.id === 3)
console.log("Found:", found.title)

let urgent = tasks.filter(t => t.priority === "high")
console.log("Urgent:", urgent)
let pending = tasks.filter(t => !t.done)
console.log(pending.length)

let stats= tasks.reduce((acc,task)=>
{
  if(task.done)
    acc.complete++
else
    acc.pending++
 return acc
},{complete:0,pending: 0})
console.log(`Stats — Completed: ${stats.complete}, Pending: ${stats.pending}`)