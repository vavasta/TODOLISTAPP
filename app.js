loadEvents();
function loadEvents(){
document.querySelector('form').addEventListener('submit', submit);
}

function submit(e){
  e.preventDefault();
  let input = document.querySelector('input');
  if(input.value != ''){
    AddItem(input.value);
  }else{
    input = '';
  }
}

function AddItem(task){
let ul = document.querySelector('ul');
let li = document.createElement('li');
li.innerHTML = `<span class="delete">×</span><input type="checkbox"><label>${task}</label>`;
ul.appendChild(li);
document.querySelector('.tasksBoard').style.display = 'block';
}
document.getElementById('clear').addEventListener('click', clear);

function clear(e){
 let ul =  document.querySelector('ul').innerHTML = '';
}

document.querySelector('ul').addEventListener('click', CheckOrDelete);

function CheckOrDelete(e){
if(e.target.className == 'delete'){
  deleteTask(e)
}else{
  checkTask(e)
}
}

function deleteTask(e){
  let remove = e.target.parentNode;
  let parentNode = remove.parentNode;
  parentNode.removeChild(remove)
}


function checkTask(e){
  const task = e.target.nextSibling;
  if(e.target.checked){
    task.style.TextDecoration = "line-through";
    task.style.color = "#ff0000";
  }else{
    task.style.textDecoration = "none";
    task.style.color = "#2f4f4f";
  }
}