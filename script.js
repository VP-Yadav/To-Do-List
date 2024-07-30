const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.className = "close";       // Add a class for styling
    li.appendChild(span);

    listContainer.appendChild(li);
    inputBox.value = '';          // Clear the input box
    saveData();                  // Save the updated task list
  }
}

listContainer.addEventListener("click", function(e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");                // Toggle the 'checked' class
    }
    else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();                    // Remove the task item
      saveData();                          // Update localStorage
    }
}, false);

function saveData() {
  // Save the current state of the list to localStorage
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  // Load the saved list from localStorage and display it
  const savedData = localStorage.getItem("data");
  if (savedData) {
    listContainer.innerHTML = savedData;
  }
}

// Initialize the list when the page loads
showTask();
