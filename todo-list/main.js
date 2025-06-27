// Create the main document structure
document.documentElement.lang = 'en';
document.head.innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="google-site-verification" content="UROF0Z8yrrSKkTKKwGcVyDWvsAHFQkVjAmjb-pQZImk">
    <!-- Page Title -->
<title>Hasco's To-Do List App | Organize Your Tasks</title>

<!-- Basic SEO Meta Tags -->
<meta name="description" content="Stay productive with Hasco's To-Do List App. Add, complete, and manage tasks easily with a clean and responsive interface built using JavaScript.">
<meta name="keywords" content="wiz7asco, hasan babiker, To-Do App, Task Manager, Productivity Tool, JavaScript App, Hasco, Web Developer, Portfolio, Frontend, Backend, Full-stack Developer, React Developer, Node.js, HTML, CSS">
<meta name="author" content="Hasco">

<!-- Open Graph Meta Tags (for Facebook, LinkedIn, etc.) -->
<meta property="og:title" content="Hasco's To-Do List App | Organize Your Tasks">
<meta property="og:description" content="Simple and clean To-Do List web app to keep track of your daily tasks.">
<meta property="og:image" content="https://wiz7asco-todo-list.vercel.app/preview.png">
<meta property="og:url" content="https://wiz7asco-todo-list.vercel.app">
<meta property="og:type" content="website">

<!-- Twitter Card Meta Tags -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Hasco's To-Do List App | Organize Your Tasks">
<meta name="twitter:description" content="A minimal To-Do app to manage tasks and boost your productivity.">
<meta name="twitter:image" content="https://wiz7asco-todo-list.vercel.app/preview.png">

<!-- Favicon (optional) -->
<link rel="icon" href="/favicon.ico" type="image/x-icon">
`;

// Create style element with all CSS
const style = document.createElement('style');
style.textContent = `
    :root {
        --primary: #4a6bff;
        --secondary: #f8f9fa;
        --text: #333;
        --light: #fff;
        --gray: #e9ecef;
        --dark-gray: #6c757d;
        --danger: #ff5a5f
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
    }
    
    body {
        background-color: var(--secondary);
        color: var(--text);
        line-height: 1.6;
        padding: 20px
    }
        header{
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: space-between
    }
    header ul li{
        display: inline-block;
        margin: 0 4px
    }
    header ul li a{
        text-decoration: none;
        color: var(--primary);
        padding: 4px;
        border-radius: 4px;
        transition: 1s
    }
    header ul li a:hover{
        background-color: var(--primary);
        color: white
    }
    .container {
        max-width: 600px;
        margin: 30px auto;
        background: var(--light);
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        padding: 30px
    }
    
    h1 {
        text-align: center;
        margin-bottom: 20px;
        color: var(--primary)
    }
    
    .input-container {
        display: flex;
        margin-bottom: 20px
    }
    
    #taskInput {
        flex: 1;
        padding: 12px 15px;
        border: 2px solid var(--gray);
        border-radius: 5px;
        font-size: 16px;
        outline: none;
        transition: border-color 0.3s
    }
    
    #taskInput:focus {
        border-color: var(--primary)
    }
    
    #addTaskBtn {
        background-color: var(--primary);
        color: white;
        border: none;
        padding: 12px 20px;
        margin-left: 10px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
        transition: background-color 0.3s
    }
    
    #addTaskBtn:hover {
        background-color: #3a5bef
    }
    
    .filters {
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        gap: 10px
    }
    
    .filter-btn {
        background: transparent;
        border: 1px solid var(--gray);
        padding: 8px 16px;
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s
    }
    
    .filter-btn.active {
        background-color: var(--primary);
        color: white;
        border-color: var(--primary)
    }
    
    .filter-btn:hover {
        border-color: var(--primary)
    }
    
    #taskList {
        list-style: none
    }
    
    .task-item {
        display: flex;
        align-items: center;
        padding: 15px;
        margin-bottom: 10px;
        background-color: var(--gray);
        border-radius: 5px;
        transition: transform 0.2s, box-shadow 0.2s
    }
    
    .task-item:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1)
    }
    
    .task-item.completed {
        background-color: #e8f5e9
    }
    
    .task-item.completed .task-text {
        text-decoration: line-through;
        color: var(--dark-gray)
    }
    
    .task-checkbox {
        margin-right: 15px;
        width: 20px;
        height: 20px;
        cursor: pointer
    }
    
    .task-text {
        flex: 1;
        font-size: 16px
    }
    
    .delete-btn {
        background-color: var(--danger);
        color: white;
        border: none;
        padding: 8px 12px;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s
    }
    
    .delete-btn:hover {
        background-color: #e53935
    }
    
    .stats {
        margin-top: 20px;
        text-align: center;
        color: var(--dark-gray);
        font-size: 14px
    }
    
    .empty-state {
        text-align: center;
        color: var(--dark-gray);
        padding: 20px
    }
    
    @media (max-width: 500px) {
        .container {
            padding: 20px
        }
        
        .input-container {
            flex-direction: column
        }
        
        #addTaskBtn {
            margin-left: 0;
            margin-top: 10px
        }
        
        .filters {
            flex-wrap: wrap
        }
    }
`;
document.head.appendChild(style);


let header = document.createElement('header')
let title = document.createElement("h1")
title.innerHTML = 'Hasco'
header.appendChild(title)

let links = [
    {href: 'https://www.facebook.com/wiz7hasco', target: '_blank', text: 'Facebook'},
    {href: 'https://www.x.com/wiz7asco', target: '_blank', text: 'Twitter(X)'},
    {href: 'https://www.instagram.com/wiz7asco', target: '_blank', text: 'Instagram'},
    {href: 'https://www.github.com/wiz7asco', target: '_blank', text: 'Github'}
]
function nav(links){
    let nav = document.createElement('ul')
    header.appendChild(nav)
    links.forEach((link) => {
       const li = document.createElement('li')
        const a = document.createElement('a')

        a.href = link.href
        a.target = link.target
        a.textContent = link.text

        li.appendChild(a)
        nav.appendChild(li)
    })
}
nav(links)

document.body.appendChild(header)

// Create the main container
const body = document.body;
const container = document.createElement('div');
container.className = 'container';
body.appendChild(container);

// Create the header
const head = document.createElement('h1');
head.textContent = 'Todo List';
container.appendChild(head);

// Create input container
const inputContainer = document.createElement('div');
inputContainer.className = 'input-container';
container.appendChild(inputContainer);

// Create task input
const taskInput = document.createElement('input');
taskInput.type = 'text';
taskInput.id = 'taskInput';
taskInput.placeholder = 'Add a new task...';
inputContainer.appendChild(taskInput);

// Create add task button
const addTaskBtn = document.createElement('button');
addTaskBtn.id = 'addTaskBtn';
addTaskBtn.textContent = 'Add Task';
inputContainer.appendChild(addTaskBtn);

// Create filters container
const filters = document.createElement('div');
filters.className = 'filters';
container.appendChild(filters);

// Create filter buttons
const allFilterBtn = document.createElement('button');
allFilterBtn.className = 'filter-btn active';
allFilterBtn.dataset.filter = 'all';
allFilterBtn.textContent = 'All';
filters.appendChild(allFilterBtn);

const activeFilterBtn = document.createElement('button');
activeFilterBtn.className = 'filter-btn';
activeFilterBtn.dataset.filter = 'active';
activeFilterBtn.textContent = 'Active';
filters.appendChild(activeFilterBtn);

const completedFilterBtn = document.createElement('button');
completedFilterBtn.className = 'filter-btn';
completedFilterBtn.dataset.filter = 'completed';
completedFilterBtn.textContent = 'Completed';
filters.appendChild(completedFilterBtn);

// Create task list
const taskList = document.createElement('ul');
taskList.id = 'taskList';
container.appendChild(taskList);

// Create stats
const stats = document.createElement('div');
stats.className = 'stats';
const taskCount = document.createElement('span');
taskCount.id = 'taskCount';
taskCount.textContent = '0';
stats.appendChild(taskCount);
stats.appendChild(document.createTextNode(' tasks left'));
container.appendChild(stats);

// Todo App Logic
let currentFilter = 'all';
let tasks = [];

// Load tasks from localStorage
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    renderTasks();
}

// Save tasks to localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Render tasks based on current filter
function renderTasks() {
    taskList.innerHTML = '';
    
    const filteredTasks = tasks.filter(task => {
        if (currentFilter === 'all') return true;
        if (currentFilter === 'active') return !task.completed;
        if (currentFilter === 'completed') return task.completed;
    });
    
    if (filteredTasks.length === 0) {
        const emptyState = document.createElement('li');
        emptyState.className = 'empty-state';
        emptyState.textContent = 'No tasks found';
        taskList.appendChild(emptyState);
    } else {
        filteredTasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.className = `task-item ${task.completed ? 'completed' : ''}`;
            taskItem.dataset.id = task.id;
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'task-checkbox';
            checkbox.checked = task.completed;
            taskItem.appendChild(checkbox);
            
            const taskText = document.createElement('span');
            taskText.className = 'task-text';
            taskText.textContent = task.text;
            taskItem.appendChild(taskText);
            
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'delete-btn';
            deleteBtn.textContent = 'Delete';
            taskItem.appendChild(deleteBtn);
            
            taskList.appendChild(taskItem);
            
            // Add event listeners
            checkbox.addEventListener('change', () => toggleTaskComplete(task.id));
            deleteBtn.addEventListener('click', () => deleteTask(task.id));
        });
    }
    
    updateTaskCount();
}

// Update the task counter
function updateTaskCount() {
    const activeTasksCount = tasks.filter(task => !task.completed).length;
    taskCount.textContent = activeTasksCount;
}

// Add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task');
        return;
    }
    
    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    };
    
    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskInput.value = '';
    taskInput.focus();
}

// Toggle task completion status
function toggleTaskComplete(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    
    saveTasks();
    renderTasks();
}

// Delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    saveTasks();
    renderTasks();
}

// Event Listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});

// Filter button event listeners
const filterButtons = [allFilterBtn, activeFilterBtn, completedFilterBtn];
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentFilter = button.dataset.filter;
        renderTasks();
    });
});

// Initialize the app
loadTasks();
