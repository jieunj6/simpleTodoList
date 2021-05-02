'use strict';

const clockContainer = document.querySelector('.js-clock');
const clock = clockContainer.querySelector('.clock__text');

// 시간 표기
function counter() {
    const data = new Date();
    const hours = data.getHours();
    const minutes = data.getMinutes();
    const seconds = data.getSeconds();
    clock.innerText = `${hours < 10 ? `0${hours}` : `${hours}`} : ${
        minutes < 10 ? `0${minutes}` : `${minutes}`} : ${
        seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

function init() {
    counter();

    // 실시간 표기
    let backTimer = undefined;
    const secondsTimer = 1000;
    if(backTimer) clearTimeout(backTimer);
    backTimer = setInterval(function () {
        counter();
    }, secondsTimer);
}

init();