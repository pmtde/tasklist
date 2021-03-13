const addTaskSection = document.querySelector('#task-form');
const taskForm = addTaskSection.querySelector('.form-control')
const addTaskBtn = document.querySelector('#add-task-btn');
const filterTasks = document.querySelector('#filter-form');
const clearTasks = document.querySelector('#clear-tasks-btn');
const taskLists = document.querySelector('.list-group');

function loadEventListeners() {
  addTaskSection.addEventListener('submit', addTask);
  taskLists.addEventListener('click', removeTask);
  clearTasks.addEventListener('click', clearAllTasks);
  filterTasks.addEventListener('keyup', filterAllTasks);
}

loadEventListeners()

function addTask(e) {
  if (taskForm.value === '') {
    alert('Add a task!');
  } else {
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';
    li.appendChild(document.createTextNode(taskForm.value));

    const link = document.createElement('a');
    link.className = 'delete-item';
    link.innerHTML = '<i class="far fa-times-circle"></i>';
    li.appendChild(link);

    taskLists.appendChild(li);
  }
  
  taskForm.value = '';
  e.preventDefault(e);
}

function removeTask(e) {
  if (e.target.parentElement.className === 'delete-item') {
    e.target.parentElement.parentElement.remove();
  }
}

function clearAllTasks() {
  taskLists.innerHTML = '';
}

function filterAllTasks(e) {
  const text = e.target.value

  if () {
    
  }
}

// CONTINUE FILTER