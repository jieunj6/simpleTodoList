const weather = document.querySelector('.js-location');

const API_KEY = '944214f93df634d26ed7921d3b2ce5cf';
const CURLOCAL = 'curlocal';


function paintLocalCoords() {

}

// promise
/*function getWeather(lat, lon) {
     fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
     ).then(function(res) {
         console.log(res); // 네트워크 정보
         //console.log(res.json()); // 응답 받은 상태 값
         return res.json();
     }).then(function(j) {
         console.log(j) // 응답 받은 실제 정보
         console.log(j.main.temp, j.name); // 날씨 온도, 지역명
         const temperature = j.main.temp;
         const place = j.name;
         weather.innerText = `${temperature} @ ${place}`;
    });
}*/

// async, await
async function getWeather(lat, lon) {
    const postResponse = await fetch (
        `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );
    console.log(postResponse); // 네트워크 정보
    //console.log(postResponse.json()); // 응답 받은 상태 값
    const post = await postResponse.json();
    console.log(post); // 응답 받은 실제 정보
    console.log(post.main.temp, post.name); // 날씨 온도, 지역명
    const temperature = post.main.temp;
    const place = post.name;
    weather.innerText = `${temperature} @ ${place}`;
}

function setLocalCoords(position) {
    localStorage.setItem(CURLOCAL, JSON.stringify(position))
}

function handleGeoSucces(position) {
    console.log(position);
    console.log(position.coords.latitude, position.coords.longitude)
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };

    setLocalCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoError() {
    console.log('not location');
}

function askLoadCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
    const _curLocal = localStorage.getItem(CURLOCAL);
    if(_curLocal === null) {
        askLoadCoords();
    } else {
        // paintLocalCoords(_curlocal);
        console.log(_curLocal, JSON.parse(_curLocal))
        const parsedCurLocal = JSON.parse(_curLocal);
        getWeather(parsedCurLocal.latitude, parsedCurLocal.longitude);
    }
}

function init() {
    loadCoords();
}

init();