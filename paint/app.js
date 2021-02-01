const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const saveBtn = document.getElementById("jsSave");
const modeBtn = document.getElementById("jsMode");
const clearBtn = document.getElementById("jsClear");
const sizeBar = document.getElementById("jsRange");
const nowC = document.querySelector(".jsColor")
const canvasSize = 400;

canvas.width = canvasSize;
canvas.height = canvasSize;

ctx.strokeStyle = "#2c2c2c";
colors[0].style.border = 'solid #2c2c2c'; 
ctx.lineWidth = 2.5;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvasSize, canvasSize);

let painting = false;
let filling = true;
let paintNum = 0;

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if( !painting ){
        ctx.beginPath();
        ctx.moveTo(x,y);
    }
    else{
        ctx.lineTo(x,y);
        ctx.stroke();
        
    }
}

function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function handleColor(event){
    const color = event.target.style.backgroundColor;
    const nowColor = color;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    for(var i=0; i<9; i++){
        colors[i].style.border = 'solid white';

    }
    event.target.style.border = `solid ${color}`;
    
    
}
function canvasClick(event){
    if(filling === false){
        ctx.fillRect(0, 0, canvasSize, canvasSize);
        ctx.fill();
    }
    
}
function clikcCM(event){
    event.preventDefault(); //우클릭 방지*
}
if (canvas){
    canvas.addEventListener("mousemove",onMouseMove)
    canvas.addEventListener("mousedown",startPainting)
    canvas.addEventListener("mouseup",stopPainting)
    canvas.addEventListener("mouseleave",stopPainting)
    canvas.addEventListener("click",canvasClick);
    canvas.addEventListener("contextmenu",clikcCM);
}
// border: solid gray;
if (clearBtn){
    clearBtn.addEventListener("click",canverClear);
}
if (sizeBar){
    sizeBar.addEventListener("click",brshSizeBar);
}
if(modeBtn){
    modeBtn.addEventListener("click",modeChange);
}
if(saveBtn){
    saveBtn.addEventListener("click",saveImag);
}
function saveImag(event){
    const image = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    paintNum += 1;

    link.href = image; //이미지 URL
    link.download = `그림${paintNum}`; //다운로드 이름
    link.click();
}
function canverClear(event){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
function brshSizeBar(event){
    ctx.lineWidth = sizeBar.value ;
}
function modeChange(event){
    if (filling === true){
        filling = false;
        modeBtn.innerText = "채우기"
    }else{
        filling = true;
        modeBtn.innerText = "선"
    }
   
}

Array.from(colors).forEach(color => 
    color.addEventListener("click",handleColor),console.log(colors)
);


