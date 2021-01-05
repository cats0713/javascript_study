const form = document.querySelector(".js-greetingfrom"), //
    input = form.querySelector("input"), //form안에있는 input
    greeting = document.querySelector(".js-greetings"),
    h4 = document.querySelector("h4");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text)
}
function handleSubmit(event){
    // event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
    

}
function del(){
    const delBtn = document.createElement("button");
    delBtn.value = "x";
    h4.createElement(delBtn);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `hi ${text}`;
    del();
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS); 
    if(currentUser === null){
        askName();
    }else{
        paintGreeting(currentUser);
        
    }
}


function init(){
    loadName();
}
init();