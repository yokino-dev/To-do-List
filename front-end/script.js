const input = document.querySelector('#taskInput');
const btnAdd = document.querySelector('#addTaskBtn');
const list = document.querySelector('#taskList');

// Carregar tarefas ao iniciar
let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

function renderTasks() {
    list.innerHTML = '';
    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        if (task.completed) li.classList.add('completed');

        li.innerHTML = `
            <span>${task.text}</span>
            <div class="actions">
                <button class="btn-action check-btn" onclick="toggleTask(${index})">
                    <i class="fas fa-check"></i>
                </button>
                <button class="btn-action delete-btn" onclick="removeTask(${index})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;
        list.appendChild(li);
    });
    localStorage.setItem('myTasks', JSON.stringify(tasks));
}

function addTask() {
    const text = input.value.trim();
    if (text !== '') {
        tasks.push({ text, completed: false });
        input.value = '';
        renderTasks();
    }
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Eventos
btnAdd.addEventListener('click', addTask);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

// Primeira renderização
renderTasks();