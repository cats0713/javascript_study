const form = document.querySelector(".js-greetingfrom"), //
    input = form.querySelector("input"), //form안에있는 input
    h4 = document.querySelector("h4"),
    div = document.querySelector("remeberMe");
    
const greeting = document.querySelector(".js-greetings")
    

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


function paintGreeting(text){
   
    const delBtn = document.createElement("button");
    delBtn.className = "editBtn";

    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `반갑습니다 ${text}님`;
    
    delBtn.innerText = "수정"
    h4.appendChild(delBtn); 
    delBtn.addEventListener("click",clickedBtn);

}

function clickedBtn(){
    askName();
    
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