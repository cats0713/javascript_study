const form = document.querySelector(".js_form"),
    input = form.querySelector("input");

const USER_LS = "currentUser"
function localName(){
    const currentUser = localStorage.getItem(USER_LS);
    
}


function init(){
    localName();
}

init();