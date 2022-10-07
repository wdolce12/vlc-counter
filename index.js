// document.getElementById("count-el").innerText = 5

let countEl = document.getElementById("count-el")
let previousEntries = document.getElementById("previous-entries")

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    previousEntries.textContent += count + " - "
    count = 0
    countEl.textContent = 0
}

