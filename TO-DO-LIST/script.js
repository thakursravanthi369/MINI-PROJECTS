// DOM Elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

// Event listener to add a task
addTaskButton.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';  // Clear input field after adding
    }
});

// Function to add a task
function addTask(taskText) {
    const li = document.createElement('li');
    
    // Create task text element
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = taskText;
    
    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    
    // Delete task event
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(li);
    });
    
    // Append elements to the list item
    li.appendChild(taskTextElement);
    li.appendChild(deleteButton);
    
    // Append list item to the task list
    taskList.appendChild(li);
}
