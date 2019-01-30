const chat_main = document.querySelector(".chat");

const NUMBER_RANDOM = 8;

function painting(imgNumber){
    const image = new Image();
    image.src = `images/main-img/${imgNumber + 1}.jpg`;
    image.classList.add("bgImage");
    chat_main.appendChild(image);
}

function getNumber(){
    const selectNumber = Math.floor(Math.random()*NUMBER_RANDOM);
    return selectNumber;
}

function init(){
    const randomNumber = getNumber();
    painting(randomNumber);
}
init();