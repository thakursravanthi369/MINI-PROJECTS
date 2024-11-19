// script.js
document.addEventListener("DOMContentLoaded", () => {
    const taskForm = document.getElementById("taskForm");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    // Add a new task
    taskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskText = taskInput.value.trim();
      if (taskText) {
        addTask(taskText);
        taskInput.value = "";
      }
    });
  
    // Add task to the list
    function addTask(taskText) {
      const taskItem = document.createElement("li");
      taskItem.className = "task";
  
      taskItem.innerHTML = `
        <span>${taskText}</span>
        <div>
          <button class="complete-btn">Complete</button>
          <button class="delete-btn">Delete</button>
        </div>
      `;
  
      taskList.appendChild(taskItem);
  
      // Complete task
      taskItem.querySelector(".complete-btn").addEventListener("click", () => {
        taskItem.classList.toggle("completed");
      });
  
      // Delete task
      taskItem.querySelector(".delete-btn").addEventListener("click", () => {
        taskList.removeChild(taskItem);
      });
    }
  });
  