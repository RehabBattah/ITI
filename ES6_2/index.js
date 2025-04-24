async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
            throw new Error("Your api not correct");
        }
        const users = await response.json()
        displayUsers(users)
    } catch (error) {
        console.error(`failed`)
    }
}

// const div = document.querySelector("div");

function displayUsers(arr) {
    arr.forEach(user => {
        const btn = document.createElement("button")
        div.appendChild(btn);
        btn.innerHTML = user.name
        document.body.appendChild(btn);
        btn.onclick = function () {
            fetchToDo(user.id)
            displayToDo(user.id)
        }
    });
}

async function fetchToDo(id) {
    try {
        const responseToDo = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`)
        if (!responseToDo.ok) {
            throw new Error("Failed");
        }
        const toDo = await responseToDo.json()
        console.log(toDo);
        displayToDo(toDo)
    } catch (error) {
        console.error(`failed`)
    }
}
const ul = document.createElement("ul")

function displayToDo(arr) {
    ul.innerHTML=""
    document.body.appendChild(ul)

    arr.forEach(e => {
        const li = document.createElement("li")
        ul.appendChild(li)
        ul.innerHTML = e.title
    });
    
}


window.onload = fetchData;
