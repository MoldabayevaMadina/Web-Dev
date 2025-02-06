document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    let newTask = document.getElementById("task-input").value;
    // console.log(newTask);
    if (newTask !== "") {
        const li = document.createElement('li');

        const listItem = document.createElement('div');
        listItem.classList.add('toDo-list__item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add('toDo-list__checkbox');
        checkbox.addEventListener('change', markAsDone);

        const text = document.createElement('p');
        text.textContent = newTask;

        listItem.appendChild(checkbox);
        listItem.appendChild(text);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'x';
        deleteBtn.classList.add('toDo-list__delete-btn');
        deleteBtn.addEventListener('click', deleteTask);

        li.appendChild(listItem);
        li.appendChild(deleteBtn);
        document.getElementById('list').appendChild(li);

        document.getElementById("task-input").value = "";
    }
}

function markAsDone(e) {
    const checkbox = e.target;
    const taskText = checkbox.nextElementSibling; 
    console.log(taskText);
    taskText.classList.toggle('done', checkbox.checked); 
}

function deleteTask(e) {
    const li = e.target.closest('li'); 
    li.remove(); 
}
