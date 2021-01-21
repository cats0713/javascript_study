const COORDS = 'coords';

function saveCoords(coodrsObj){
    localStorage.setItem(COORDS,JSON.stringify(coodrsObj))
}

function handleGeoSucces(position){
    const latitude = position.coodrs.latitude;
    const longitude = position.coodrs.longitude;
    
    const coodrsObj = {
        latitude,
        longitude
    };
    saveCoords(coodrsObj);
}
function handleGeoError(){
    console.log('cant access');
}

function askForCoords(){
    
    navigator.geolocation.getCurrentPosition(handleGeoSucces,handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    }
    else{
        
    }
}

function init(){
    loadCoords();
}

init();