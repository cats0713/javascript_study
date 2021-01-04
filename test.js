const title = document.querySelector(".title");
const CLICKED_CLASS = "clicked";

function hand(){
    title.classList.toggle(CLICKED_CLASS)
    console.log(title.className);

}

function init(){
    title.addEventListener("click",hand);
}
init();