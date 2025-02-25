const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.getElementById("add-btn").addEventListener("click", addTask);

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        let span = document.createElement("span");
        span.innerHTML = "<i class='fa-solid fa-trash'></i>";
        li.appendChild(span);
        listContainer.appendChild(li);
        inputBox.value = "";
        saveData();
    }
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName.toUpperCase() === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName.toUpperCase() === "I") {
        e.target.parentElement.parentElement.remove(); // Remove <li> element
        saveData();
    }
});

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Load saved tasks when the page is loaded
window.onload = showTask;



