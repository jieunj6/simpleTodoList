const todoForm = document.querySelector('.js-to-do');
const todoInput = document.querySelector('.js-add-to-do');
const todoList = document.querySelector('.js-list');

const TODO = 'todoList';
let toDos = [];

/*function setList(list) {
    const _todoList = JSON.parse(list);
    const _item = _todoList.map((item) => item.value);
    todoList.innerHTML = `<li><button type="button" class="btn_x">X</button>${_item}</li>`
}*/

function saveToDos(item) {
    localStorage.setItem(TODO, JSON.stringify(item));
}

function deleteToDo(event) {
   // event.preventDefault();
    //console.log(event.target);
    //console.dir(event.target);
    console.log(event.target.parentNode);
    const btn = event.target;
    const btnParent = btn.parentNode;
    todoList.removeChild(btnParent);
    //console.log(btnParent, btnParent.id)
    const cleanToDos = toDos.filter(item => item.id !== parseInt(btnParent.id));
    console.log(toDos, cleanToDos);

    toDos = cleanToDos;
    saveToDos(toDos);


}

function paintToDo(text) {
    // console.log(text);
    const li = document.createElement('li');
    const delBtn = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delBtn.type = 'button';
    delBtn.innerText = 'X';
    delBtn.addEventListener('click', deleteToDo)
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    todoList.appendChild(li);

    //
    const toDoObj = {
        id : newId,
        value : text
    };
    toDos.push(toDoObj); // 배열에 담고

    saveToDos(toDos); // localStorage 저장
}

//const a = [];
function evtList(event) {
    event.preventDefault();
    const _value = todoInput.value;

  /*  let test = a.push({id:a.length + 1, value:_value});
    let setTodoItemList = localStorage.setItem(TODO, JSON.stringify(a));
    setList(localStorage.getItem(TODO));*/

    paintToDo(_value);
    todoInput.value = '';

}

function loadList() {
    const currentTodoItem = localStorage.getItem(TODO);

    if(currentTodoItem !== null) {
       // setList(currentTodoItem);
        const parsedToDos = JSON.parse(currentTodoItem);
        console.log(parsedToDos);

        // 이게 중요하네. 새로고침 한 다음에 배열도 초기화, 리스트도 초기화, 그래서 로컬스토리지 값도 첨부터 저장되는데,
        // 저장을 다시 한번 해주면 이어서 저장되고, 값도 다시 만든다.
        parsedToDos.forEach((item) => paintToDo(item.value)); // 중요!!!
    }

    todoForm.addEventListener('submit', evtList);
}


function init() {
    loadList();

}

init();