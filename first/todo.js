const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}


function paintToDos(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;

    delBtn.innerText = "x";
    delBtn.className = "delBtn";
    span.innerHTML = text
    li.appendChild(span);
    li.appendChild(delBtn); 
    li.id = newId;
    toDoList.appendChild(li);
    delBtn.addEventListener("click",deleteToDo)

    const toDoObj = {
        text: text,
        id: newId

    };
    toDos.push(toDoObj);
    saveToDos();
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo) {
            paintToDos(toDo.text);
        });
    }
}


function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);

    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function hendleSubmit(){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDos(currentValue);
    toDoInput.value = "";
}



function init(){
    loadToDos();
    toDoForm.addEventListener("submit", hendleSubmit);
}
init();