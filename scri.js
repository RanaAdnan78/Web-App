// ===== CONDITIONS =====
let priority = "high"

if (priority === "high") {
    console.log("Urgent Task")
} else if (priority === "medium") {
    console.log("Wait A Little")
} else {
    console.log("Low Response")
}

// ===== ARRAY OF OBJECTS =====
let tasks = [
    { id: 1, title: "React seekho", priority: "high", done: false },
    { id: 2, title: "Node banao", priority: "medium", done: true },
    { id: 3, title: "MongoDB setup", priority: "low", done: false },
    { id: 4, title: "VS Code", priority: "medium", done: true }
]

// ===== FOR LOOP =====
for (let i = 0; i < 5; i++) {
    console.log(`Task number ${i + 1}`)
}

// ===== TERNARY =====
let done = true
let status = done ? "Done" : "Not Done"
console.log(status)

// ===== FOREACH + SWITCH =====
tasks.forEach(task => {
    // Ternary — status
    let stat = task.done ? "✅ Done" : "⏳ Pending"

    // Switch — priority badge
    let bag
    switch (task.priority) {
        case "high":
            bag = "🔴 Abi Kro Isse Yr"
            break
        case "medium":
            bag = "🟡 Koe Faida Nahi"
            break
        case "low":
            bag = "🟢 Bad Mai Kre Ge"
            break
        default:
            bag = "❓ Pata Nahi"
    }

    console.log(`${bag} — ${task.title} — ${stat}`)
})

// ===== FOR LOOP ON ARRAY =====
for (let i = 0; i < tasks.length; i++) {
    let st = tasks[i].done ? "Done" : "Pending"
    if (st =="Pending")
    {
    console.log(`Task: ${tasks[i].title} Is ${st}`)
}
}