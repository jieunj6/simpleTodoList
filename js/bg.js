const center = document.querySelector('.center');

const IMG_NUMBER = 3;

function paintImg(num) {
    // const img = document.createElement('img');
    const img = new Image();
    img.src = `images/bg_${num}.jpg`;
    img.classList.add('bg');
    center.prepend(img);
}

// 랜덤한 숫자
function getRandom() {
    const num = Math.ceil(Math.random() * IMG_NUMBER);
    return num;
}

function init() {

    const randomNum = getRandom();
    paintImg(randomNum);
    console.log('ddddddd')


    // 나는 하나로 다 때려밖는데, 이걸 나눈다.
   /* const num = Math.ceil(Math.random() * IMG_NUMBER);
    const img = document.createElement('img');
    img.src = `images/bg_${num}.jpg`;
    img.classList.add('bg');
    center.prepend(img);*/
}

init();