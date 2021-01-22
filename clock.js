const clockContainer =document.querySelector(".clock");
const clockTitle = clockContainer.querySelector(".js_clock")
const hello = clockContainer.querySelector(".js_hello");

function getTime(){
    const date = new Date();
    const min = date.getMinutes();
    const hours = date.getHours();
    const scons = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}`: hours}:${min < 10 ? `0${min}`: min}:${scons < 10 ? `0${scons}`: scons}`;

    if(hours >= 1 && hours <= 8){
        hello.innerText = `좋은 아침입니다.`;
    }else if(hours >= 9 && hours <= 16){
        hello.innerText = `좋은 점심입니다.`;
    }else {
        hello.innerText = `좋은 저녁입니다.`;
    }
}

function init(){
    getTime();
    setInterval(getTime,1000);
    

}
init();