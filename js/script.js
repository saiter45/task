const task = document.getElementById('task__enter')
const btnTask = document.getElementById('btn__task')
const desk = document.querySelector('.desk')
let i = 1

let addTask = (event) => {
    event.preventDefault()
    let nameTask = task.value
    if (nameTask == "")  {
        nameTask = "Новый список "+i;
        i++  
    }
    const taskNew = document.createElement('div')
    taskNew.innerHTML = nameTask + "<img class='edit-task' src='img/pencil.svg' alt=''><span class='remove-task'>x</span>"
    taskNew.classList.add('task_new')
    desk.append(taskNew)
    task.value = "";
}

btnTask.addEventListener('click', addTask)

desk.addEventListener("click", function(event){
    let obj = event.target; 
    if (obj.classList.contains("remove-task")){ 
        obj.parentNode.remove(); 
    }
    else if (obj.classList.contains("edit-task")){
        obj.parentNode.setAttribute("contenteditable","true");
        
    }
});
    clear.addEventListener("click", function (event){
    event.preventDefault();
    list.remove()
    });

