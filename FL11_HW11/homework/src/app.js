let rootNode = document.getElementById('root');
let ten = 10;
const addAction = document.querySelector('.buttonAddAction');
const tasksField = document.querySelector('.tasksField');
function addNewTask (){
    if (document.querySelectorAll('.taskBox').length < ten) {
        if (document.querySelector('.inputAction').value !== '') {
            const addToTaskDiv = document.createElement('div');
            addToTaskDiv.className = 'taskBox'
            tasksField.insertBefore(addToTaskDiv, tasksField.firstChild);
            const addTaskChanges = document.createElement('div');
            addTaskChanges.className = 'taskChanges';
            document.querySelector('.taskBox').insertBefore(addTaskChanges, 
                document.querySelector('.taskBox').firstChild);
            const addEditsTask = document.createElement('div');
            addEditsTask.className = 'edit_task';
            document.querySelector('.taskChanges').insertBefore(addEditsTask, 
                document.querySelector('.taskChanges').firstChild)
            const addInputCheck = document.createElement('input');
            addInputCheck.className = 'input_check_task';
            addInputCheck.type = 'checkbox';
            document.querySelector('.edit_task').insertBefore(addInputCheck, 
                document.querySelector('.edit_task').firstChild);
            const addTaskValue = document.createElement('p');
            addTaskValue.className = 'task_value';
            addTaskValue.innerHTML = document.querySelector('.inputAction').value;
            document.querySelector('.edit_task').appendChild(addTaskValue);
            const addEditButton = document.createElement('button');
            addEditButton.className = 'edit_task_btn';
            document.querySelector('.edit_task').appendChild(addEditButton);
            const addMaterialIcons = document.createElement('i');
            addMaterialIcons.className = 'material-icons';
            addMaterialIcons.innerHTML = 'create';
            document.querySelector('.edit_task_btn').insertBefore(addMaterialIcons, 
                document.querySelector('.edit_task_btn').firstChild);
            const addDelButton = document.createElement('button');
            addDelButton.className = 'del_task';
            document.querySelector('.taskChanges').appendChild(addDelButton);
            const addDelMaterialIcons = document.createElement('i');
            addDelMaterialIcons.className = 'material-icons';
            addDelMaterialIcons.innerHTML = 'delete';
            document.querySelector('.del_task').appendChild(addDelMaterialIcons);
            document.querySelector('.inputAction').value = '';
            document.querySelector('.inputAction').focus()
        }
    } else {
        const addToMuchTasks = document.createElement('h2');
        addToMuchTasks.className = 'overfullList';
        addToMuchTasks.innerHTML = 'Sorry,but the list is full';
        document.querySelector('header').insertBefore(addToMuchTasks, document.querySelector('header').firstChild )
    }   
}
addAction.addEventListener('click', addNewTask)
function editFunc(event) {
    if ( event.target.parentNode.className === 'edit_task_btn' && 
    event.target.closest('.taskBox').querySelectorAll('.edit_input').length < 1) {
        const addEditedDiv = document.createElement('div')
        addEditedDiv.className = 'task_edited_save_div';
        this.firstChild.appendChild(addEditedDiv)
        const editInput = document.createElement('input')
        editInput.className = 'edit_input';
        editInput.type = 'text';
        editInput.value = event.target.closest('.edit_task').querySelector('.task_value').innerHTML
        const editedDiv = event.target.closest('.taskBox').querySelector('.task_edited_save_div')
        editedDiv.appendChild(editInput, editedDiv.firstChild)
        editInput.focus()
        const editSaveButton = document.createElement('button')
        editSaveButton.className = 'edit_save_btn';
        editSaveButton.type = 'submit'
        editedDiv.appendChild(editSaveButton)
        const editMaterialIcons = document.createElement('i')
        editMaterialIcons.className = 'material-icons'
        editMaterialIcons.innerHTML = 'save'
        editedDiv.querySelector('.edit_save_btn').appendChild(editMaterialIcons)
    }
}
tasksField.addEventListener('click', editFunc)
function saveEditTask (event) {
    if (event.target.parentNode.className === 'edit_save_btn') {
        const TaskDiv = event.target.closest('.taskBox');
        TaskDiv.querySelector('.task_value').innerHTML = TaskDiv.querySelector('.edit_input').value;
        TaskDiv.querySelector('.task_edited_save_div').remove()
    }
}
tasksField.addEventListener('click', saveEditTask)
function delTask (event) {
    if (event.target.parentNode.className === 'del_task') {
        event.target.closest('.taskBox').remove()
    }
}
tasksField.addEventListener('click', delTask)
function disabledChbox (event) {
    const inputCheck = document.querySelector('.input_check_task');
    if (event.target === inputCheck) {
        if (event.target.checked) {
            event.target.setAttribute('disabled', 'disabled')
        }
    }
}
tasksField.addEventListener('click', disabledChbox)

