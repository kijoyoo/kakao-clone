const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    ul = document.querySelector(".js-ul");

    const CHAT_LS = "chat";
    let CHAT_LIST = [];


function deleting(event){    
    const btn = event.target;
    const delBtn = btn.parentNode;
    ul.removeChild(delBtn);
    const clearMessage = CHAT_LIST.filter(function(todo){
        return todo.id !== parseInt(delBtn.id);
    })
    CHAT_LIST = clearMessage;
    saveMessage();
}

function saveMessage(){
    localStorage.setItem(CHAT_LS, JSON.stringify(CHAT_LIST));
}

function display(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    btn.addEventListener("click", deleting);
    const newId = CHAT_LIST.length + 1;
    li.id = newId;
    span.innerText = text;
    btn.innerText = "x";
    li.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);
    const chatObj = {
        text: text,
        id: newId
    }
    CHAT_LIST.push(chatObj);
    saveMessage();
}

function handleBtn(event){
    event.preventDefault();
    const currentValue = input.value;
    display(currentValue);
    input.value = "";
    console.log(currentValue);
    

}

function loadToDo(){
    const loadToDo = localStorage.getItem(CHAT_LS);
    if(loadToDo !==null){
        const parseMessage = JSON.parse(loadToDo);
        parseMessage.forEach(function(todo){
            display(todo.text);
        })
    }
}

function init(){
    loadToDo();
    form.addEventListener("submit", handleBtn);
}
init();

//todo 채팅  form 변경 사이즈 늘리기