const form = document.querySelector('#new-task-form');
const input = document.querySelector('#new-task-input');
const tasks = document.querySelector('.tasks');

form.addEventListener('submit', (e) => {

    e.preventDefault();
    let userData = input.value;

    if(!userData){
        alert("Kuch toh likh de bhai!!");
        return;
    }
    // console.log(input.value);

    // creating parent of task to add content as well as buttons
    const task = document.createElement('div');
    task.classList.add('task');
    task.classList.add('mb-2');

    const content = document.createElement('div');
    content.classList.add('content');

    const task_input  = document.createElement('input');
    task_input.classList.add('text');
    task_input.classList.add('form-control');
    task_input.classList.add('mb-2');
    task_input.value = userData;
    task_input.type = 'text';
    task_input.setAttribute('readonly', 'readonly');

    content.appendChild(task_input);
    task.appendChild(content);
    tasks.appendChild(task);

    //Now creating buttons
    const action = document.createElement('div');
    action.classList.add('actions');

    const editButton = document.createElement('button');
    editButton.classList.add('edit');
    editButton.classList.add('btn');
    editButton.classList.add('btn-warning');
    editButton.innerHTML = 'Edit';

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-danger');
    deleteButton.classList.add('mx-2');
    deleteButton.innerHTML = 'Delete';

    action.appendChild(editButton);
    action.appendChild(deleteButton);
    task.appendChild(action);

    //after adding task we have to make input blank
    input.value = '';

    // code for edit functionality

    editButton.addEventListener('click', () => {

        if(editButton.innerHTML == 'Edit'){
            task_input.removeAttribute('readonly');
            editButton.innerHTML = 'Save';
            task_input.focus();
        }else{
            editButton.innerHTML = 'Edit';
            task_input.setAttribute('readonly', 'readonly');

        }

    });


    // code for delete functionality

    deleteButton.addEventListener('click', () => {

        tasks.removeChild(task);

    });

})