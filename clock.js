const clockContainer =document.querySelector(".clock");
const clockTitle = clockContainer.querySelector(".js_clock")

function getTime(){
    const date = new Date();
    const min = date.getMinutes();
    const hours = date.getHours();
    const scons = date.getSeconds();
    clockTitle.innerText = `${hours}:${min}:${scons < 10 ? `0${scons}`: scons}`;

}

function init(){
    getTime();
    setInterval(getTime,1000);


}
init();