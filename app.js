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
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    nowColor(event);
    // console.log(event.path.);
    // colors.setAttribute("style", "border: solid blue;");
    
}
function canvasClick(event){
    if(filling === false){
        ctx.fillRect(0, 0, canvasSize, canvasSize);
        ctx.fill();
    }else{

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
    color.addEventListener("click",handleColor)
);


// 페인트 선택을 표시하기
function nowColor(event){
    const nowPaintColor = event.target.style.backgroundColor;
    const NOWCOLOR = "nowcolor";
    console.log(nowPaintColor);
    console.log(nowC.classList);
    
    if (nowPaintColor === "rgb(44, 44, 44)"){ //검정
        nowC.classList.add(NOWCOLOR);
    }else if(nowPaintColor === "white"){ //하양
        nowC.classList.add(NOWCOLOR);
       
    }else if(nowPaintColor === "rgb(255, 59, 48)"){ //빨강
        nowC.classList.add(NOWCOLOR);
        nowC.classList.remove(NOWCOLOR);
    }else if(nowPaintColor === "rgb(255, 149, 0)"){ //주황
        nowC.classList.add(NOWCOLOR);
    }else if(nowPaintColor === "rgb(255, 204, 0)"){ //노랑
        nowC.classList.add(NOWCOLOR);
    }else if(nowPaintColor === "rgb(76, 217, 54)"){ // 초록
        nowC.classList.add(NOWCOLOR);
    }else if(nowPaintColor === "rgb(90, 200, 250)"){ //하늘
        nowC.classList.add(NOWCOLOR);
    }else if(nowPaintColor === "rgb(5, 121, 255)"){ //파랑
        nowC.classList.add(NOWCOLOR);
    }else if(nowPaintColor === "rgb(88, 86, 214)"){  //보라
        nowC.classList.add(NOWCOLOR);
    }
    
    
}
