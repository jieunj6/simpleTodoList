const nameArea = document.querySelector('.js-name');
const nameForm = nameArea.querySelector('.js-form-name');
const userNameInput = nameArea.querySelector('.js-name-input');
const userName = nameArea.querySelector('.js-user-name');

const USER_NAME = 'name';
const SHOWING_CN = 'show';


function saveName(text) {
    localStorage.setItem(USER_NAME, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const nameFormValue = userNameInput.value;
    //console.log(nameFormValue)
    paintGreeting(nameFormValue); // 화면에 이름 표기
    saveName(nameFormValue); // 로컬스토리지 저장

}

function askForName() {
    userName.classList.remove(SHOWING_CN);
    nameForm.classList.add(SHOWING_CN);
    nameForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    nameForm.classList.remove(SHOWING_CN);
    userName.classList.add(SHOWING_CN);
    userName.innerText = text;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_NAME);
    if(currentUser === null) {
        // 이름이 없으면 입력창 보이기
        askForName();
    } else {
        // 이름이 있으면 가지고 오기
        paintGreeting(currentUser);
    }
}

function init() {
    loadName();
}

init();