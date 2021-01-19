const canvas = document.getElementById("jsCanvas");

let painting = false;

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    console.log(x,y);
}
function mouseDown(){
    painting = true;
}

function stopPainting(){
    painting = false;
}



if (canvas){
    canvas.addEventListener("mousemove",onMouseMove)
    canvas.addEventListener('mousedown',onMouseDown)
    canvas.addEventListener('mouseup',stopPainting)
    canvas.addEventListener('mouseleave',stopPainting)
}
